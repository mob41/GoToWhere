(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{21:function(t,r,e){"use strict";e.r(r),function(t){e.d(r,"onload",(function(){return c}));var n=e(16),a=e(9),o=e(7),s=e(5);function c(){return n.register("db.kmbeta.ml",!0),n.register("rt.data.gov.hk",!0),new Promise((r,e)=>{a.a("gtwp-hktransit").then((function(r){return new Promise((e,n)=>{r?e(r.companies):t.ajax({url:"https://db.kmbeta.ml/hktransit_companies.json",cache:!1,dataType:"json",success:function(t){a.f("gtwp-hktransit",t).then((function(){e(t.companies)})).catch(n)},error:function(){n()}})})})).then((function(t){for(var e of t){var n;switch(e.id){case"FERRY":n="ferry";break;case"GMB":n="minibus";break;case"PTRAM":case"TRAM":n="tram";break;default:n="bus"}o.registerProvider(n,e.id,e.name,new i),s.registerProvider(n,e.id,e.name,new u)}r(!0)})).catch(e)})}var i=function(){var r=this;this.fetchDatabase=function(e,n){t.ajax({url:"https://db.kmbeta.ml/hktransit_"+r.id+"-routes.json",cache:!1,dataType:"json",success:function(t){e(t)},error:function(){console.error("Error: Could not fetch "+r.id+" routes database!"),e(!1)}})},this.isDatabaseUpdateNeeded=function(e,n,a){t.ajax({url:"https://db.kmbeta.ml/hktransit_"+r.id+"-version.json",cache:!1,dataType:"json",success:function(t){var n,o;try{n=parseInt(t.version),o=parseInt(a)}catch(t){console.error("Error: Could not parse hktransit_"+r.id+" routes last updated time or cached version! Forcing to be no update"),e(!1)}e(n>o)},error:function(t){console.error("Error: Could not check hktransit_"+r.id+" routes update!"),e(!1)}}),e(!0)}},u=function(){var r=this;this.fetchDatabase=function(e,n){t.ajax({url:"https://db.kmbeta.ml/hktransit_"+r.id+".json",cache:!1,dataType:"json",success:function(t){e(t)},error:function(){console.error("Error: Could not fetch "+r.id+" stops database!"),e(!1)}})},this.isDatabaseUpdateNeeded=function(e,n,a){t.ajax({url:"https://db.kmbeta.ml/hktransit_"+r.id+"-version.json",cache:!1,dataType:"json",success:function(t){var n,o;try{n=parseInt(t.version),o=parseInt(a)}catch(t){console.error("Error: Could not parse hktransit_"+r.id+" stops last updated time or cached version! Forcing to be no update"),e(!1)}e(n>o)},error:function(t){console.error("Error: Could not check hktransit_"+r.id+" stops update!"),e(!1)}}),e(!0)}}}.call(this,e(0))}}]);
//# sourceMappingURL=1.7369e83f3696b5f60190.js.map