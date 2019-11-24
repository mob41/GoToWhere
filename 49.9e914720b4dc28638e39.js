(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{206:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"onload",(function(){return i}));var o=r(33),a=r(22),n=r(7),s=r(32);r(43);function i(){return a.register("db.kmbeta.ml",!0),a.register("etav3.kmb.hk",!1),o.registerProvider("gtwp-kmblwb","kmblwb",["KMB","LWB"],new p),!0}var p=function(){this.checkDatabaseUpdate=function(e,r,o){t.ajax({url:"https://db.kmbeta.ml/kmbeta_db-version.json",cache:!1,dataType:"json",success:function(t){var r,a;try{r=parseInt(t.version),a=parseInt(o)}catch(t){console.error("Error: Could not parse kmbeta_db last updated time or cached version! Forcing to be no update"),e(!1)}e(r>a)},error:function(t){console.error("Error: Could not check kmbeta_db update!"),e(!1)}})},this.fetchEta=function(e,r,o){console.log(o);var a=o.agency.agency_id,i=!1;if(a.includes("+")){i=!0;var p=a.split("+");for(var c of p)if("KMB"===c||"LWB"===c){a=c;break}}if("KMB"!==a&&"LWB"!==a)return console.error("Error: Cannot request ETA from companies that are not KMB and LWB! Requested: "+a),void r();n.f("gtwp-hktransit","hktransit",a).then(a=>{var n=s.localizedKey(a,"agency_short_name"),p=o.trip.trip_id.split("-"),c=parseInt(p[1]),d=o.route.route_short_name,u=!1;for(var l of this.db.routes)if(l.routeId===d){u=l;break}if(!u)return console.error("Error: Could not find KMBLWB reference route using "+d),void r();if(u.paths[c-1].length!==o.stopTimes.length)return console.error("Error: KMBLWB reference route path mismatch with stop times."),void r();var h,f=-1;for(h=0;h<o.stopTimes.length;h++)if(o.stopTimes[h].stop_id===o.stop.stop_id){f=h;break}if(-1===f)return console.error("Error: Could not find KMBLWB stop index in stop times!"),void r();var m,b=u.paths[c-1][f],g=s.getLocale(),v="http://etav3.kmb.hk/?action=geteta&lang="+(m="zh"===g?"tc":"en")+"&route="+d+"&bound="+c+"&stop="+b+"&stop_seq="+(f+1);t.ajax({url:v,method:"GET",dataType:"json",cache:!1,success:function(t){var r,a,s=[],p=[],c=[],d={tripId:o.trip.trip_id,startTime:"00:00:00",startDate:"20190101"},u=new Date(t.generated),l=t.response;if(l&&l.length>0)for(k=0;k<l.length;k++){r=!1;var h=(a=l[k]).t.toLowerCase();if(h.length>=5){var f=parseInt(h.substring(0,2)),b=parseInt(h.substring(3,5));isNaN(f)||isNaN(b)||((r=new Date(t.updated)).setHours(f),r.setMinutes(b))}if(r)p.push({stopId:o.stop.stop_id,arrival:{time:r.getTime()}});else if(h.length>0){var g;g="tc"===m?"zh-HK":"en";var v="";i&&(v+=n+": ");var _=[{text:v+=a.t,language:g}];c.push({informedEntity:[{trip:d,stop_id:o.stop.stop_id}],headerText:{translation:_},descriptionText:{translation:_}})}}var k,w=Date.now();if(p.length>0){var B={label:n},y={id:o.agency.agency_id+"-"+o.stop.stop_id+"-"+o.route.route_short_name+"-trip-update-"+w,tripUpdate:{trip:d,timestamp:u,stopTimeUpdate:p}};i&&(y.vehicle={vehicle:B}),s.push(y)}if(c.length>0)for(k=0;k<c.length;k++){y={id:o.agency.agency_id+"-"+o.stop.stop_id+"-"+o.route.route_short_name+"-alert-"+k+"-"+w,alert:c[k]};s.push(y)}e({header:{gtfsRealtimeVersion:"2.0",incrementality:"FULL_DATASET",timestamp:w},entity:s})},error:function(t,e,o){r()}})})},this.fetchDatabase=function(e,r){t.ajax({url:"https://db.kmbeta.ml/kmbeta_db.json",cache:!1,dataType:"json",success:function(t){t.routes&&t.stops&&t.version?(t.package="gtwp-kmblwb",t.provider="kmblwb",e(t)):console.error("Error: KMBLWB downloaded database is in wrong structure! Report to GitHub for this problem!")},error:function(t,e,o){r()}})}}}.call(this,r(0))}}]);
//# sourceMappingURL=49.9e914720b4dc28638e39.js.map