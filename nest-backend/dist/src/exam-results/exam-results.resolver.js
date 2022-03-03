"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamResultsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const exam_results_service_1 = require("./exam-results.service");
const create_exam_result_input_1 = require("./dto/create-exam-result.input");
const update_exam_result_input_1 = require("./dto/update-exam-result.input");
let ExamResultsResolver = class ExamResultsResolver {
    constructor(examResultsService) {
        this.examResultsService = examResultsService;
    }
    create(createExamResultInput) {
        return this.examResultsService.create(createExamResultInput);
    }
    findAll() {
        return this.examResultsService.findAll();
    }
    findOne(id) {
        return this.examResultsService.findOne(id);
    }
    update(updateExamResultInput) {
        return this.examResultsService.update(updateExamResultInput.id, updateExamResultInput);
    }
    remove(id) {
        return this.examResultsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createExamResult'),
    __param(0, (0, graphql_1.Args)('createExamResultInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exam_result_input_1.CreateExamResultInput]),
    __metadata("design:returntype", void 0)
], ExamResultsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('examResults'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamResultsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('examResult'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExamResultsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateExamResult'),
    __param(0, (0, graphql_1.Args)('updateExamResultInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_exam_result_input_1.UpdateExamResultInput]),
    __metadata("design:returntype", void 0)
], ExamResultsResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeExamResult'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExamResultsResolver.prototype, "remove", null);
ExamResultsResolver = __decorate([
    (0, graphql_1.Resolver)('ExamResult'),
    __metadata("design:paramtypes", [exam_results_service_1.ExamResultsService])
], ExamResultsResolver);
exports.ExamResultsResolver = ExamResultsResolver;
//# sourceMappingURL=exam-results.resolver.js.map