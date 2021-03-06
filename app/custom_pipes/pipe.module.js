"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var numberformat_pipe_1 = require("./numberformat.pipe");
var checkValue_1 = require("./checkValue");
var PipeModule = PipeModule_1 = (function () {
    function PipeModule() {
    }
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    return PipeModule;
}());
PipeModule = PipeModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [numberformat_pipe_1.NumberFormat, checkValue_1.checkValue],
        exports: [numberformat_pipe_1.NumberFormat, checkValue_1.checkValue],
    })
], PipeModule);
exports.PipeModule = PipeModule;
var PipeModule_1;
//# sourceMappingURL=pipe.module.js.map