/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/common/TaskMini.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/common/TaskMini.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".TaskMini_task-mini-card__mZ09T {\\n  min-width: 204px;\\n  width: 204px;\\n  min-height: 250px;\\n  height: 250px;\\n  display: flex;\\n  align-items: center;\\n  margin: 0 10px;\\n  border-radius: 1rem;\\n  text-align: center;\\n}\\n\\n.TaskMini_mini-hover__xAbJA {\\n  position: relative;\\n  background-color: #DAAEEF;\\n  width: 100%;\\n  height: 100%;\\n  text-align: center;\\n  transition: transform 0.8s;\\n  transform-style: preserve-3d;\\n}\\n.TaskMini_mini-hover__xAbJA .TaskMini_mini-title__K5QD7 {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 1rem;\\n  color: #584848;\\n  font-size: 24px;\\n  line-height: 38px;\\n}\\n.TaskMini_mini-hover__xAbJA .TaskMini_mini-title__K5QD7, .TaskMini_mini-hover__xAbJA .TaskMini_mini-description__8ou9t {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-backface-visibility: hidden;\\n  /* Safari */\\n  backface-visibility: hidden;\\n}\\n.TaskMini_mini-hover__xAbJA .TaskMini_mini-description__8ou9t {\\n  transform: rotateY(180deg);\\n}\\n\\n.TaskMini_task-mini-card__mZ09T:hover .TaskMini_mini-hover__xAbJA {\\n  transform: rotateY(180deg);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/common/TaskMini.module.scss\",\"webpack://styles/_variables.scss\",\"webpack://styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,yBCfe;EDgBf,WAAA;EACA,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,4BAAA;AAFF;AAGE;EEtBA,aAAA;EACA,uBAAA;EACA,mBAAA;EFsBE,aAAA;EACA,cClBY;EDmBZ,eAAA;EACA,iBAAA;AACJ;AACE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EAAqC,WAAA;EACrC,2BAAA;AAEJ;AAAE;EACE,0BAAA;AAEJ;;AAEA;EACE,0BAAA;AACF\",\"sourcesContent\":[\"@import '../variables';\\n@import '../mixins';\\n\\n.task-mini-card {\\n  min-width: 204px;\\n  width: 204px;\\n  min-height: 250px;\\n  height: 250px;\\n  display: flex;\\n  align-items: center;\\n  margin: 0 10px;\\n  border-radius: 1rem;\\n  text-align: center;\\n}\\n\\n.mini-hover {\\n  position: relative;\\n  background-color: $primary-violet;\\n  width: 100%;\\n  height: 100%;\\n  text-align: center;\\n  transition: transform 0.8s;\\n  transform-style: preserve-3d;\\n  .mini-title {\\n    @include flex-center;\\n    padding: 1rem;\\n    color: $primary-color;\\n    font-size: 24px;\\n    line-height: 38px;\\n  }\\n  .mini-title, .mini-description {\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    -webkit-backface-visibility: hidden; /* Safari */\\n    backface-visibility: hidden;\\n  }\\n  .mini-description {\\n    transform: rotateY(180deg);\\n  }\\n}\\n\\n.task-mini-card:hover .mini-hover {\\n  transform: rotateY(180deg);\\n}\\n\",\"// Background colors \\n$primary-blue: #14244E;\\n$primary-violet: #DAAEEF;\\n$primary-orange: #F2E3C4;\\n$prmary-black: #000000;\\n$secondary-white: #EDD7F7;\\n\\n// Text colors\\n$primary-color: #584848;\\n$secondary-color: #F3EDD7;\\n\\n\\n// screen sizes\\n$xs: 480px;\\n$sm: 576px;\\n$md: 768px;\\n$lg: 992px;\\n$xl: 1200px;\\n$xxl: 1400px;\\n\",\"@mixin flex-center {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"task-mini-card\": \"TaskMini_task-mini-card__mZ09T\",\n\t\"mini-hover\": \"TaskMini_mini-hover__xAbJA\",\n\t\"mini-title\": \"TaskMini_mini-title__K5QD7\",\n\t\"mini-description\": \"TaskMini_mini-description__8ou9t\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9jb21tb24vVGFza01pbmkubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLDJFQUEyRSxxQkFBcUIsaUJBQWlCLHNCQUFzQixrQkFBa0Isa0JBQWtCLHdCQUF3QixtQkFBbUIsd0JBQXdCLHVCQUF1QixHQUFHLGlDQUFpQyx1QkFBdUIsOEJBQThCLGdCQUFnQixpQkFBaUIsdUJBQXVCLCtCQUErQixpQ0FBaUMsR0FBRywyREFBMkQsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLG1CQUFtQixvQkFBb0Isc0JBQXNCLEdBQUcsMEhBQTBILHVCQUF1QixnQkFBZ0IsaUJBQWlCLHdDQUF3QyxnREFBZ0QsR0FBRyxpRUFBaUUsK0JBQStCLEdBQUcsdUVBQXVFLCtCQUErQixHQUFHLE9BQU8sc0tBQXNLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxnREFBZ0Qsc0JBQXNCLHFCQUFxQixxQkFBcUIsaUJBQWlCLHNCQUFzQixrQkFBa0Isa0JBQWtCLHdCQUF3QixtQkFBbUIsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQix1QkFBdUIsc0NBQXNDLGdCQUFnQixpQkFBaUIsdUJBQXVCLCtCQUErQixpQ0FBaUMsaUJBQWlCLDJCQUEyQixvQkFBb0IsNEJBQTRCLHNCQUFzQix3QkFBd0IsS0FBSyxvQ0FBb0MseUJBQXlCLGtCQUFrQixtQkFBbUIsMkNBQTJDLDhDQUE4QyxLQUFLLHVCQUF1QixpQ0FBaUMsS0FBSyxHQUFHLHVDQUF1QywrQkFBK0IsR0FBRyxtREFBbUQsMkJBQTJCLDJCQUEyQix5QkFBeUIsNEJBQTRCLDRDQUE0Qyw0QkFBNEIsa0NBQWtDLGFBQWEsYUFBYSxhQUFhLGNBQWMsZUFBZSx5QkFBeUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUI7QUFDNWlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbW1vbi9UYXNrTWluaS5tb2R1bGUuc2Nzcz9kMmEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVGFza01pbmlfdGFzay1taW5pLWNhcmRfX21aMDlUIHtcXG4gIG1pbi13aWR0aDogMjA0cHg7XFxuICB3aWR0aDogMjA0cHg7XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLlRhc2tNaW5pX21pbmktaG92ZXJfX3hBYkpBIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUFFRUY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuLlRhc2tNaW5pX21pbmktaG92ZXJfX3hBYkpBIC5UYXNrTWluaV9taW5pLXRpdGxlX19LNVFENyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiAjNTg0ODQ4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxufVxcbi5UYXNrTWluaV9taW5pLWhvdmVyX194QWJKQSAuVGFza01pbmlfbWluaS10aXRsZV9fSzVRRDcsIC5UYXNrTWluaV9taW5pLWhvdmVyX194QWJKQSAuVGFza01pbmlfbWluaS1kZXNjcmlwdGlvbl9fOG91OXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC8qIFNhZmFyaSAqL1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uVGFza01pbmlfbWluaS1ob3Zlcl9feEFiSkEgLlRhc2tNaW5pX21pbmktZGVzY3JpcHRpb25fXzhvdTl0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uVGFza01pbmlfdGFzay1taW5pLWNhcmRfX21aMDlUOmhvdmVyIC5UYXNrTWluaV9taW5pLWhvdmVyX194QWJKQSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9jb21tb24vVGFza01pbmkubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHlCQ2ZlO0VEZ0JmLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBRkY7QUFHRTtFRXRCQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRnNCRSxhQUFBO0VBQ0EsY0NsQlk7RURtQlosZUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUFxQyxXQUFBO0VBQ3JDLDJCQUFBO0FBRUo7QUFBRTtFQUNFLDBCQUFBO0FBRUo7O0FBRUE7RUFDRSwwQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnLi4vbWl4aW5zJztcXG5cXG4udGFzay1taW5pLWNhcmQge1xcbiAgbWluLXdpZHRoOiAyMDRweDtcXG4gIHdpZHRoOiAyMDRweDtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWluaS1ob3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12aW9sZXQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC5taW5pLXRpdGxlIHtcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzhweDtcXG4gIH1cXG4gIC5taW5pLXRpdGxlLCAubWluaS1kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICAubWluaS1kZXNjcmlwdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG4udGFzay1taW5pLWNhcmQ6aG92ZXIgLm1pbmktaG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblwiLFwiLy8gQmFja2dyb3VuZCBjb2xvcnMgXFxuJHByaW1hcnktYmx1ZTogIzE0MjQ0RTtcXG4kcHJpbWFyeS12aW9sZXQ6ICNEQUFFRUY7XFxuJHByaW1hcnktb3JhbmdlOiAjRjJFM0M0O1xcbiRwcm1hcnktYmxhY2s6ICMwMDAwMDA7XFxuJHNlY29uZGFyeS13aGl0ZTogI0VERDdGNztcXG5cXG4vLyBUZXh0IGNvbG9yc1xcbiRwcmltYXJ5LWNvbG9yOiAjNTg0ODQ4O1xcbiRzZWNvbmRhcnktY29sb3I6ICNGM0VERDc7XFxuXFxuXFxuLy8gc2NyZWVuIHNpemVzXFxuJHhzOiA0ODBweDtcXG4kc206IDU3NnB4O1xcbiRtZDogNzY4cHg7XFxuJGxnOiA5OTJweDtcXG4keGw6IDEyMDBweDtcXG4keHhsOiAxNDAwcHg7XFxuXCIsXCJAbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGFzay1taW5pLWNhcmRcIjogXCJUYXNrTWluaV90YXNrLW1pbmktY2FyZF9fbVowOVRcIixcblx0XCJtaW5pLWhvdmVyXCI6IFwiVGFza01pbmlfbWluaS1ob3Zlcl9feEFiSkFcIixcblx0XCJtaW5pLXRpdGxlXCI6IFwiVGFza01pbmlfbWluaS10aXRsZV9fSzVRRDdcIixcblx0XCJtaW5pLWRlc2NyaXB0aW9uXCI6IFwiVGFza01pbmlfbWluaS1kZXNjcmlwdGlvbl9fOG91OXRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/common/TaskMini.module.scss\n");

/***/ })

});