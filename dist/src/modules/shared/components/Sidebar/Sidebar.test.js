"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var Sidebar_1 = require("./Sidebar");
describe('Sidebar component', function () {
    var wrapper = enzyme_1.shallow(react_1.default.createElement(Sidebar_1.Sidebar, null));
    it('make snapshot', function () {
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=Sidebar.test.js.map

//# sourceMappingURL={"version":3,"file":"Sidebar.test.js","sourceRoot":"","sources":["Sidebar.test.tsx"],"names":[],"mappings":";;;;;AAAA,gDAA0B;AAC1B,iCAA+B;AAC/B,qCAAkC;AAElC,QAAQ,CAAC,mBAAmB,EAAE;IAC1B,IAAM,OAAO,GAAG,gBAAO,CAAC,8BAAC,iBAAO,OAAE,CAAC,CAAC;IAEpC,EAAE,CAAC,eAAe,EAAE;QAChB,MAAM,CAAC,OAAO,CAAC,CAAC,eAAe,EAAE,CAAC;IACtC,CAAC,CAAC,CAAC;AAEP,CAAC,CAAC,CAAC"}