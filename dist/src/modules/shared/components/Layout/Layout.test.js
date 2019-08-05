"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var Layout_1 = __importDefault(require("./Layout"));
describe('Layout component', function () {
    var wrapper = enzyme_1.shallow(react_1.default.createElement(Layout_1.default, null));
    it('make snapshot', function () {
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=Layout.test.js.map

//# sourceMappingURL={"version":3,"file":"Layout.test.js","sourceRoot":"","sources":["Layout.test.tsx"],"names":[],"mappings":";;;;;AAAA,gDAA0B;AAC1B,iCAA+B;AAC/B,oDAA8B;AAE9B,QAAQ,CAAC,kBAAkB,EAAE;IACzB,IAAM,OAAO,GAAG,gBAAO,CAAC,8BAAC,gBAAM,OAAE,CAAC,CAAC;IAEnC,EAAE,CAAC,eAAe,EAAE;QAChB,MAAM,CAAC,OAAO,CAAC,CAAC,eAAe,EAAE,CAAC;IACtC,CAAC,CAAC,CAAC;AAEP,CAAC,CAAC,CAAC"}