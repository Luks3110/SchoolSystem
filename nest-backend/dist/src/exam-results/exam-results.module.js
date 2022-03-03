"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamResultsModule = void 0;
const common_1 = require("@nestjs/common");
const exam_results_service_1 = require("./exam-results.service");
const exam_results_resolver_1 = require("./exam-results.resolver");
let ExamResultsModule = class ExamResultsModule {
};
ExamResultsModule = __decorate([
    (0, common_1.Module)({
        providers: [exam_results_resolver_1.ExamResultsResolver, exam_results_service_1.ExamResultsService]
    })
], ExamResultsModule);
exports.ExamResultsModule = ExamResultsModule;
//# sourceMappingURL=exam-results.module.js.map