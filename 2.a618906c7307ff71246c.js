(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{45:function(n,e,t){"use strict";t.r(e),function(n){t.d(e,"map",(function(){return p})),t.d(e,"init",(function(){return w})),t.d(e,"setCenter",(function(){return g})),t.d(e,"setZoom",(function(){return m})),t.d(e,"addMarker",(function(){return h})),t.d(e,"setMarkerPosition",(function(){return k})),t.d(e,"getMarker",(function(){return v})),t.d(e,"lockMarker",(function(){return M})),t.d(e,"unlockMarker",(function(){return y})),t.d(e,"removeMarker",(function(){return P})),t.d(e,"removeAllMarkers",(function(){return b})),t.d(e,"addInfoWindow",(function(){return I})),t.d(e,"addPolyline",(function(){return x})),t.d(e,"lockPolyline",(function(){return O})),t.d(e,"unlockPolyline",(function(){return W})),t.d(e,"removePolyline",(function(){return A})),t.d(e,"removeAllPolylines",(function(){return B})),t.d(e,"fitBounds",(function(){return C}));var o=t(42),i=t(15),r=1,u={},a=[],c=1,l={},d=1,s={},f=[],p=!1;function w(){return new Promise((e,t)=>{n("#gtw-map").html('<div id="gmap" style="width: 100%; height: 100%;"></div>'),window.initMap=function(){p=new google.maps.Map(document.getElementById("gmap"),{center:i.a(),zoom:12,disableDefaultUI:!0}),e(),delete window.initMap};var r=o.a.googleMapApiKey;(!window.location.origin||""===window.location.origin||"https://www.gotowhere.ga"!==window.location.origin||"file://"===window.location.origin||window.location.origin.startsWith("http://localhost")||window.location.origin.startsWith("https://localhost"))&&(r="",console.warn("gtw-map-googlemap: You are running the application in local/no-origin mode. The API key has been removed now."));var u=document.createElement("script");u.src="https://maps.googleapis.com/maps/api/js?callback=initMap&key="+r,document.head.appendChild(u)})}function g(n){return p.setCenter(n)}function m(n){return p.setZoom(n)}function h(n,e,t){var o=new google.maps.Marker({position:n,label:e.label,title:e.title,icon:e.icon,map:p});return u[r]=o,t&&o.addListener("click",(function(){t()})),r++}function k(n,e){if(!n||!u[n])return!1;u[n].setPosition(e)}function v(n){return!(!n||!u[n])&&u[n]}function M(n){return!(!n||!u[n])&&(-1===a.indexOf(n)&&a.push(n),!0)}function y(n){var e=a.indexOf(n);return-1!==e&&(a.splice(e,1),!0)}function P(n){return!(!n||!u[n])&&(!a.includes(n)&&(u[n].setMap(null),delete u[n],!0))}function b(){for(var n in u)a.includes(parseInt(n))||u[n].setMap(null);return u={},!0}function I(n,e,t=!1){var o=egetMarker(n);if(!o)return!1;var i=new google.maps.InfoWindow({content:e});return o.addListener("click",(function(){i.open(p,o)})),t&&i.open(p,o),l[c]=i,c++}function x(n,e,t,o=1,i=!0){var r=new google.maps.Polyline({path:n,geodesic:i,strokeColor:e,strokeOpacity:o,strokeWeight:t});return r.setMap(p),s[d]=r,d++}function O(n){return!(!polyline||!s[n])&&(-1===f.indexOf(n)&&f.push(n),!0)}function W(n){var e=f.indexOf(n);return-1!==e&&(f.splice(e,1),!0)}function A(n){return!(!n||!s[n])&&(!f.includes(n)&&(s[n].setMap(null),delete s[n],!0))}function B(){for(var n in s)f.includes(n)||s[n].setMap(null);return s={},!0}function C(n){var e=new google.maps.LatLngBounds;for(var t of n)e.extend(t);p.fitBounds(e)}}.call(this,t(0))}}]);
//# sourceMappingURL=2.a618906c7307ff71246c.js.map