function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,f,a,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(S,t),l?y(e):f}function x(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function S(){var e=p();if(x(e))return T(e);a=setTimeout(S,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function T(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function h(){var e=p(),n=x(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(d)return a=setTimeout(S,t),y(u)}return void 0===a&&(a=setTimeout(S,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},h.flush=function(){return void 0===a?f:T(p())},h}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),x=document.querySelector(".feedback-form textarea"),S={};y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),x.textContent="",localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),1e3)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(t){const{email:e,message:n}=t;x.textContent=n,j.value=e}}();
//# sourceMappingURL=03-feedback.902d78c6.js.map
