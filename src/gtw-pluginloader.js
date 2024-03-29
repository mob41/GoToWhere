// GTW Plugin Loader

import * as Misc from './gtw-misc';
import * as gtfs from './gtw-citydata-transit-gtfs';
import repos from './plugins/repository.json';

export var plugins = {};

export var installedPlugins = [];

var deprecatedPlugins = [
    "gtwp-kmb"
];

export function install(pkg, autoSave) {
    if (isInstalled(pkg)) {
        return false;
    }
    installedPlugins.push(pkg);
    if (autoSave !== false){
        save();
    }
    return true;
}

export async function uninstall(pkg, autoSave) {
    await gtfs.clearPackageDatabase(pkg);
    var i;
    for (i = 0; i < installedPlugins.length; i++){
        if (installedPlugins[i] === pkg){
            installedPlugins.splice(i, 1);
            if (autoSave !== false) {
                save();
            }
            return true;
        }
    }
    return false;
}

export function getPlugin(pkg) {
    return plugins[pkg];
}

export function isInstalled(pkg) {
    for (var plugin of installedPlugins){
        if (plugin === pkg){
            return true;
        }
    }
    return false;
}

export function save() {
    var localStorage = window.localStorage;
    localStorage.setItem("gtw-plugins", JSON.stringify(installedPlugins));
    return true;
}

export function load(pc) {
    if (!localStorage){
        console.error("Error: LocalStorage is not supported in this browser.");
        return;
    }
	
    var pluginsStr = localStorage.getItem("gtw-plugins");

    if (pluginsStr) {
        installedPlugins = JSON.parse(pluginsStr);
    }
    
    if (!installedPlugins || typeof installedPlugins.length !== "number"){
        console.warn("Warning: Installed plugins JSON string is invalid. Resetting as empty.");
        save();
    }
    
    var p;
    var proms = [];
    for (var installedPlugin of installedPlugins) {
        if (deprecatedPlugins.includes(installedPlugin)) {
            alert($.i18n("plugin-deprecated-auto-uninstall", installedPlugin));
            uninstall(installedPlugin);
            continue;
        }

        const info = {
            "package": installedPlugin,
            status: 1,
            msg: "Not Enabled"
        };

        if (repos[installedPlugin]){
            proms.push(new Promise((resolve, reject) => {
                import(`./plugins/${installedPlugin}/index.js`).then(function(mod) {
                    var msg;
                    if (!mod) {
                        msg = $.i18n("plugin-error-no-module-returned", installedPlugin);
                        console.error(msg);
                        info.status = -2;
                        info.msg = msg;
                    } else if (!mod.onload || typeof mod.onload !== "function") {
                        msg = $.i18n("plugin-error-no-onload-function", installedPlugin);
                        console.error(msg);
                        info.status = -3;
                        info.msg = msg;
                    } else {
                        var promise = new Promise((resolve, reject) => {
                            var status = mod.onload();
                            if (status instanceof Promise) {
                                status.then(resolve).catch(reject);
                            } else {
                                resolve(status);
                            }
                        });
                        promise.then(function (status) {
                            if (status) {
                                info.status = 0;
                                delete info.msg;
                            } else {
                                var msg = $.i18n("plugin-error-onload-function-error", installedPlugin);
                                console.error(msg);
                                info.status = -4;
                                info.msg = msg;
                            }
                            resolve();
                        }).catch(reject);
                    }
                });
            }));
        } else {
            info.status = -1;
            info.msg = "This plugin is not available in this version of GoToWhere.";
        }
        plugins[installedPlugin] = info;
    }
    return Misc.allProgress(proms, pc);
}