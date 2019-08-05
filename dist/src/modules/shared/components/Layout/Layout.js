"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Sidebar_1 = require("../Sidebar/Sidebar");
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "layout" },
            react_1.default.createElement(Sidebar_1.Sidebar, null),
            react_1.default.createElement("main", { className: "content-container" },
                react_1.default.createElement("div", { className: "main-content" }, this.props.children))));
    };
    return Layout;
}(react_1.Component));
exports.default = Layout;
//# sourceMappingURL=Layout.js.map

//# sourceMappingURL={"version":3,"file":"Layout.js","sourceRoot":"","sources":["Layout.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAAA,6CAAuC;AACvC,8CAA2C;AAE3C;IAAqB,0BAAS;IAA9B;;IAaA,CAAC;IAZG,uBAAM,GAAN;QACI,OAAO,CACH,uCAAK,SAAS,EAAC,QAAQ;YACnB,8BAAC,iBAAO,OAAE;YACV,wCAAM,SAAS,EAAC,mBAAmB;gBAC/B,uCAAK,SAAS,EAAC,cAAc,IACxB,IAAI,CAAC,KAAK,CAAC,QAAQ,CAClB,CACH,CACL,CACT,CAAC;IACN,CAAC;IACL,aAAC;AAAD,CAAC,AAbD,CAAqB,iBAAS,GAa7B;AAED,kBAAe,MAAM,CAAC"}