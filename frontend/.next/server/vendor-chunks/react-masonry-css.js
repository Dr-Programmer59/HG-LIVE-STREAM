"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-masonry-css";
exports.ids = ["vendor-chunks/react-masonry-css"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-masonry-css/dist/react-masonry-css.module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-masonry-css/dist/react-masonry-css.module.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nconst defaultProps = {\n  breakpointCols: undefined,\n  // optional, number or object { default: number, [key: number]: number }\n  className: undefined,\n  // required, string\n  columnClassName: undefined,\n  // optional, string\n  // Any React children. Typically an array of JSX items\n  children: undefined,\n  // Custom attributes, however it is advised against\n  // using these to prevent unintended issues and future conflicts\n  // ...any other attribute, will be added to the container\n  columnAttrs: undefined,\n  // object, added to the columns\n  // Deprecated props\n  // The column property is deprecated.\n  // It is an alias of the `columnAttrs` property\n  column: undefined\n};\nconst DEFAULT_COLUMNS = 2;\n\nclass Masonry extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props); // Correct scope for when methods are accessed externally\n\n    this.reCalculateColumnCount = this.reCalculateColumnCount.bind(this);\n    this.reCalculateColumnCountDebounce = this.reCalculateColumnCountDebounce.bind(this); // default state\n\n    let columnCount;\n\n    if (this.props.breakpointCols && this.props.breakpointCols.default) {\n      columnCount = this.props.breakpointCols.default;\n    } else {\n      columnCount = parseInt(this.props.breakpointCols) || DEFAULT_COLUMNS;\n    }\n\n    this.state = {\n      columnCount\n    };\n  }\n\n  componentDidMount() {\n    this.reCalculateColumnCount(); // window may not be available in some environments\n\n    if (window) {\n      window.addEventListener('resize', this.reCalculateColumnCountDebounce);\n    }\n  }\n\n  componentDidUpdate() {\n    this.reCalculateColumnCount();\n  }\n\n  componentWillUnmount() {\n    if (window) {\n      window.removeEventListener('resize', this.reCalculateColumnCountDebounce);\n    }\n  }\n\n  reCalculateColumnCountDebounce() {\n    if (!window || !window.requestAnimationFrame) {\n      // IE10+\n      this.reCalculateColumnCount();\n      return;\n    }\n\n    if (window.cancelAnimationFrame) {\n      // IE10+\n      window.cancelAnimationFrame(this._lastRecalculateAnimationFrame);\n    }\n\n    this._lastRecalculateAnimationFrame = window.requestAnimationFrame(() => {\n      this.reCalculateColumnCount();\n    });\n  }\n\n  reCalculateColumnCount() {\n    const windowWidth = window && window.innerWidth || Infinity;\n    let breakpointColsObject = this.props.breakpointCols; // Allow passing a single number to `breakpointCols` instead of an object\n\n    if (typeof breakpointColsObject !== 'object') {\n      breakpointColsObject = {\n        default: parseInt(breakpointColsObject) || DEFAULT_COLUMNS\n      };\n    }\n\n    let matchedBreakpoint = Infinity;\n    let columns = breakpointColsObject.default || DEFAULT_COLUMNS;\n\n    for (let breakpoint in breakpointColsObject) {\n      const optBreakpoint = parseInt(breakpoint);\n      const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint;\n\n      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {\n        matchedBreakpoint = optBreakpoint;\n        columns = breakpointColsObject[breakpoint];\n      }\n    }\n\n    columns = Math.max(1, parseInt(columns) || 1);\n\n    if (this.state.columnCount !== columns) {\n      this.setState({\n        columnCount: columns\n      });\n    }\n  }\n\n  itemsInColumns() {\n    const currentColumnCount = this.state.columnCount;\n    const itemsInColumns = new Array(currentColumnCount); // Force children to be handled as an array\n\n    const items = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(this.props.children);\n\n    for (let i = 0; i < items.length; i++) {\n      const columnIndex = i % currentColumnCount;\n\n      if (!itemsInColumns[columnIndex]) {\n        itemsInColumns[columnIndex] = [];\n      }\n\n      itemsInColumns[columnIndex].push(items[i]);\n    }\n\n    return itemsInColumns;\n  }\n\n  renderColumns() {\n    const {\n      column,\n      columnAttrs = {},\n      columnClassName\n    } = this.props;\n    const childrenInColumns = this.itemsInColumns();\n    const columnWidth = `${100 / childrenInColumns.length}%`;\n    let className = columnClassName;\n\n    if (className && typeof className !== 'string') {\n      this.logDeprecated('The property \"columnClassName\" requires a string'); // This is a deprecated default and will be removed soon.\n\n      if (typeof className === 'undefined') {\n        className = 'my-masonry-grid_column';\n      }\n    }\n\n    const columnAttributes = _objectSpread(_objectSpread(_objectSpread({}, column), columnAttrs), {}, {\n      style: _objectSpread(_objectSpread({}, columnAttrs.style), {}, {\n        width: columnWidth\n      }),\n      className\n    });\n\n    return childrenInColumns.map((items, i) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({}, columnAttributes, {\n        key: i\n      }), items);\n    });\n  }\n\n  logDeprecated(message) {\n    console.error('[Masonry]', message);\n  }\n\n  render() {\n    const _this$props = this.props,\n          {\n      // ignored\n      children,\n      breakpointCols,\n      columnClassName,\n      columnAttrs,\n      column,\n      // used\n      className\n    } = _this$props,\n          rest = _objectWithoutProperties(_this$props, [\"children\", \"breakpointCols\", \"columnClassName\", \"columnAttrs\", \"column\", \"className\"]);\n\n    let classNameOutput = className;\n\n    if (typeof className !== 'string') {\n      this.logDeprecated('The property \"className\" requires a string'); // This is a deprecated default and will be removed soon.\n\n      if (typeof className === 'undefined') {\n        classNameOutput = 'my-masonry-grid';\n      }\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({}, rest, {\n      className: classNameOutput\n    }), this.renderColumns());\n  }\n\n}\n\nMasonry.defaultProps = defaultProps;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Masonry);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFzb25yeS1jc3MvZGlzdC9yZWFjdC1tYXNvbnJ5LWNzcy5tb2R1bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCOztBQUUxQixzREFBc0QsK0JBQStCLDhEQUE4RCxZQUFZLG9DQUFvQyw2REFBNkQsWUFBWSw2QkFBNkIsT0FBTywyQkFBMkIsMENBQTBDLHdFQUF3RSwrQkFBK0I7O0FBRTVkLDJEQUEyRCwrQkFBK0IsaUJBQWlCLHNDQUFzQyxZQUFZLFlBQVksdUJBQXVCLE9BQU8scUJBQXFCLDBDQUEwQyw2QkFBNkI7O0FBRW5TLHNCQUFzQixnREFBZ0QsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7O0FBRXBSLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsaUVBQWlFLEdBQUcsa0NBQWtDOztBQUV2VSxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCw0Q0FBNEMsS0FBSyw2Q0FBNkMsNkVBQTZFLE9BQU8saURBQWlELG1GQUFtRixPQUFPOztBQUV0Z0IsNENBQTRDLGtCQUFrQixrQ0FBa0Msb0VBQW9FLEtBQUssT0FBTyxvQkFBb0I7QUFDcE07QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix3REFBZTtBQUNyQztBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQSwwRkFBMEY7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFELGtCQUFrQixxREFBYzs7QUFFaEMsb0JBQW9CLGtCQUFrQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLE1BQU07QUFDTjtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7O0FBRUE7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUF5RSwyQkFBMkI7QUFDcEcsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQSwwQkFBMEIsMERBQW1CLG1CQUFtQjtBQUNoRTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQSx3RUFBd0U7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwwREFBbUIsbUJBQW1CO0FBQzlEO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hnLWxpdmUvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFzb25yeS1jc3MvZGlzdC9yZWFjdC1tYXNvbnJ5LWNzcy5tb2R1bGUuanM/YTk2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgYnJlYWtwb2ludENvbHM6IHVuZGVmaW5lZCxcbiAgLy8gb3B0aW9uYWwsIG51bWJlciBvciBvYmplY3QgeyBkZWZhdWx0OiBudW1iZXIsIFtrZXk6IG51bWJlcl06IG51bWJlciB9XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAvLyByZXF1aXJlZCwgc3RyaW5nXG4gIGNvbHVtbkNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAvLyBvcHRpb25hbCwgc3RyaW5nXG4gIC8vIEFueSBSZWFjdCBjaGlsZHJlbi4gVHlwaWNhbGx5IGFuIGFycmF5IG9mIEpTWCBpdGVtc1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICAvLyBDdXN0b20gYXR0cmlidXRlcywgaG93ZXZlciBpdCBpcyBhZHZpc2VkIGFnYWluc3RcbiAgLy8gdXNpbmcgdGhlc2UgdG8gcHJldmVudCB1bmludGVuZGVkIGlzc3VlcyBhbmQgZnV0dXJlIGNvbmZsaWN0c1xuICAvLyAuLi5hbnkgb3RoZXIgYXR0cmlidXRlLCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb250YWluZXJcbiAgY29sdW1uQXR0cnM6IHVuZGVmaW5lZCxcbiAgLy8gb2JqZWN0LCBhZGRlZCB0byB0aGUgY29sdW1uc1xuICAvLyBEZXByZWNhdGVkIHByb3BzXG4gIC8vIFRoZSBjb2x1bW4gcHJvcGVydHkgaXMgZGVwcmVjYXRlZC5cbiAgLy8gSXQgaXMgYW4gYWxpYXMgb2YgdGhlIGBjb2x1bW5BdHRyc2AgcHJvcGVydHlcbiAgY29sdW1uOiB1bmRlZmluZWRcbn07XG5jb25zdCBERUZBVUxUX0NPTFVNTlMgPSAyO1xuXG5jbGFzcyBNYXNvbnJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7IC8vIENvcnJlY3Qgc2NvcGUgZm9yIHdoZW4gbWV0aG9kcyBhcmUgYWNjZXNzZWQgZXh0ZXJuYWxseVxuXG4gICAgdGhpcy5yZUNhbGN1bGF0ZUNvbHVtbkNvdW50ID0gdGhpcy5yZUNhbGN1bGF0ZUNvbHVtbkNvdW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZUNhbGN1bGF0ZUNvbHVtbkNvdW50RGVib3VuY2UgPSB0aGlzLnJlQ2FsY3VsYXRlQ29sdW1uQ291bnREZWJvdW5jZS5iaW5kKHRoaXMpOyAvLyBkZWZhdWx0IHN0YXRlXG5cbiAgICBsZXQgY29sdW1uQ291bnQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5icmVha3BvaW50Q29scyAmJiB0aGlzLnByb3BzLmJyZWFrcG9pbnRDb2xzLmRlZmF1bHQpIHtcbiAgICAgIGNvbHVtbkNvdW50ID0gdGhpcy5wcm9wcy5icmVha3BvaW50Q29scy5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5Db3VudCA9IHBhcnNlSW50KHRoaXMucHJvcHMuYnJlYWtwb2ludENvbHMpIHx8IERFRkFVTFRfQ09MVU1OUztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29sdW1uQ291bnRcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZUNhbGN1bGF0ZUNvbHVtbkNvdW50KCk7IC8vIHdpbmRvdyBtYXkgbm90IGJlIGF2YWlsYWJsZSBpbiBzb21lIGVudmlyb25tZW50c1xuXG4gICAgaWYgKHdpbmRvdykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVDYWxjdWxhdGVDb2x1bW5Db3VudERlYm91bmNlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZUNhbGN1bGF0ZUNvbHVtbkNvdW50KCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAod2luZG93KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZUNhbGN1bGF0ZUNvbHVtbkNvdW50RGVib3VuY2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlQ2FsY3VsYXRlQ29sdW1uQ291bnREZWJvdW5jZSgpIHtcbiAgICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgLy8gSUUxMCtcbiAgICAgIHRoaXMucmVDYWxjdWxhdGVDb2x1bW5Db3VudCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIC8vIElFMTArXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGFzdFJlY2FsY3VsYXRlQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX2xhc3RSZWNhbGN1bGF0ZUFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlQ2FsY3VsYXRlQ29sdW1uQ291bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlQ2FsY3VsYXRlQ29sdW1uQ291bnQoKSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cgJiYgd2luZG93LmlubmVyV2lkdGggfHwgSW5maW5pdHk7XG4gICAgbGV0IGJyZWFrcG9pbnRDb2xzT2JqZWN0ID0gdGhpcy5wcm9wcy5icmVha3BvaW50Q29sczsgLy8gQWxsb3cgcGFzc2luZyBhIHNpbmdsZSBudW1iZXIgdG8gYGJyZWFrcG9pbnRDb2xzYCBpbnN0ZWFkIG9mIGFuIG9iamVjdFxuXG4gICAgaWYgKHR5cGVvZiBicmVha3BvaW50Q29sc09iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGJyZWFrcG9pbnRDb2xzT2JqZWN0ID0ge1xuICAgICAgICBkZWZhdWx0OiBwYXJzZUludChicmVha3BvaW50Q29sc09iamVjdCkgfHwgREVGQVVMVF9DT0xVTU5TXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCBtYXRjaGVkQnJlYWtwb2ludCA9IEluZmluaXR5O1xuICAgIGxldCBjb2x1bW5zID0gYnJlYWtwb2ludENvbHNPYmplY3QuZGVmYXVsdCB8fCBERUZBVUxUX0NPTFVNTlM7XG5cbiAgICBmb3IgKGxldCBicmVha3BvaW50IGluIGJyZWFrcG9pbnRDb2xzT2JqZWN0KSB7XG4gICAgICBjb25zdCBvcHRCcmVha3BvaW50ID0gcGFyc2VJbnQoYnJlYWtwb2ludCk7XG4gICAgICBjb25zdCBpc0N1cnJlbnRCcmVha3BvaW50ID0gb3B0QnJlYWtwb2ludCA+IDAgJiYgd2luZG93V2lkdGggPD0gb3B0QnJlYWtwb2ludDtcblxuICAgICAgaWYgKGlzQ3VycmVudEJyZWFrcG9pbnQgJiYgb3B0QnJlYWtwb2ludCA8IG1hdGNoZWRCcmVha3BvaW50KSB7XG4gICAgICAgIG1hdGNoZWRCcmVha3BvaW50ID0gb3B0QnJlYWtwb2ludDtcbiAgICAgICAgY29sdW1ucyA9IGJyZWFrcG9pbnRDb2xzT2JqZWN0W2JyZWFrcG9pbnRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbHVtbnMgPSBNYXRoLm1heCgxLCBwYXJzZUludChjb2x1bW5zKSB8fCAxKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbkNvdW50ICE9PSBjb2x1bW5zKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sdW1uQ291bnQ6IGNvbHVtbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1zSW5Db2x1bW5zKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDb2x1bW5Db3VudCA9IHRoaXMuc3RhdGUuY29sdW1uQ291bnQ7XG4gICAgY29uc3QgaXRlbXNJbkNvbHVtbnMgPSBuZXcgQXJyYXkoY3VycmVudENvbHVtbkNvdW50KTsgLy8gRm9yY2UgY2hpbGRyZW4gdG8gYmUgaGFuZGxlZCBhcyBhbiBhcnJheVxuXG4gICAgY29uc3QgaXRlbXMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29sdW1uSW5kZXggPSBpICUgY3VycmVudENvbHVtbkNvdW50O1xuXG4gICAgICBpZiAoIWl0ZW1zSW5Db2x1bW5zW2NvbHVtbkluZGV4XSkge1xuICAgICAgICBpdGVtc0luQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaXRlbXNJbkNvbHVtbnNbY29sdW1uSW5kZXhdLnB1c2goaXRlbXNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtc0luQ29sdW1ucztcbiAgfVxuXG4gIHJlbmRlckNvbHVtbnMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1uLFxuICAgICAgY29sdW1uQXR0cnMgPSB7fSxcbiAgICAgIGNvbHVtbkNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNoaWxkcmVuSW5Db2x1bW5zID0gdGhpcy5pdGVtc0luQ29sdW1ucygpO1xuICAgIGNvbnN0IGNvbHVtbldpZHRoID0gYCR7MTAwIC8gY2hpbGRyZW5JbkNvbHVtbnMubGVuZ3RofSVgO1xuICAgIGxldCBjbGFzc05hbWUgPSBjb2x1bW5DbGFzc05hbWU7XG5cbiAgICBpZiAoY2xhc3NOYW1lICYmIHR5cGVvZiBjbGFzc05hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxvZ0RlcHJlY2F0ZWQoJ1RoZSBwcm9wZXJ0eSBcImNvbHVtbkNsYXNzTmFtZVwiIHJlcXVpcmVzIGEgc3RyaW5nJyk7IC8vIFRoaXMgaXMgYSBkZXByZWNhdGVkIGRlZmF1bHQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBzb29uLlxuXG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gJ215LW1hc29ucnktZ3JpZF9jb2x1bW4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbHVtbkF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY29sdW1uKSwgY29sdW1uQXR0cnMpLCB7fSwge1xuICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY29sdW1uQXR0cnMuc3R5bGUpLCB7fSwge1xuICAgICAgICB3aWR0aDogY29sdW1uV2lkdGhcbiAgICAgIH0pLFxuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hpbGRyZW5JbkNvbHVtbnMubWFwKChpdGVtcywgaSkgPT4ge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBjb2x1bW5BdHRyaWJ1dGVzLCB7XG4gICAgICAgIGtleTogaVxuICAgICAgfSksIGl0ZW1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ0RlcHJlY2F0ZWQobWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tNYXNvbnJ5XScsIG1lc3NhZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB7XG4gICAgICAvLyBpZ25vcmVkXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGJyZWFrcG9pbnRDb2xzLFxuICAgICAgY29sdW1uQ2xhc3NOYW1lLFxuICAgICAgY29sdW1uQXR0cnMsXG4gICAgICBjb2x1bW4sXG4gICAgICAvLyB1c2VkXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gX3RoaXMkcHJvcHMsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJicmVha3BvaW50Q29sc1wiLCBcImNvbHVtbkNsYXNzTmFtZVwiLCBcImNvbHVtbkF0dHJzXCIsIFwiY29sdW1uXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICAgIGxldCBjbGFzc05hbWVPdXRwdXQgPSBjbGFzc05hbWU7XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubG9nRGVwcmVjYXRlZCgnVGhlIHByb3BlcnR5IFwiY2xhc3NOYW1lXCIgcmVxdWlyZXMgYSBzdHJpbmcnKTsgLy8gVGhpcyBpcyBhIGRlcHJlY2F0ZWQgZGVmYXVsdCBhbmQgd2lsbCBiZSByZW1vdmVkIHNvb24uXG5cbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjbGFzc05hbWVPdXRwdXQgPSAnbXktbWFzb25yeS1ncmlkJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lT3V0cHV0XG4gICAgfSksIHRoaXMucmVuZGVyQ29sdW1ucygpKTtcbiAgfVxuXG59XG5cbk1hc29ucnkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNvbnJ5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-masonry-css/dist/react-masonry-css.module.js\n");

/***/ })

};
;