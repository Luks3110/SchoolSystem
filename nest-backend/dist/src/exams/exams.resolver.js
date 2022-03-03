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
exports.ExamsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const exams_service_1 = require("./exams.service");
const create_exam_input_1 = require("./dto/create-exam.input");
const update_exam_input_1 = require("./dto/update-exam.input");
let ExamsResolver = class ExamsResolver {
    constructor(examsService) {
        this.examsService = examsService;
    }
    create(createExamInput) {
        return this.examsService.create(createExamInput);
    }
    findAll() {
        return this.examsService.findAll();
    }
    findOne(id) {
        return this.examsService.findOne(id);
    }
    update(updateExamInput) {
        return this.examsService.update(updateExamInput.id, updateExamInput);
    }
    remove(id) {
        return this.examsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createExam'),
    __param(0, (0, graphql_1.Args)('createExamInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exam_input_1.CreateExamInput]),
    __metadata("design:returntype", void 0)
], ExamsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('exams'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('exam'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExamsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateExam'),
    __param(0, (0, graphql_1.Args)('updateExamInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_exam_input_1.UpdateExamInput]),
    __metadata("design:returntype", void 0)
], ExamsResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeExam'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExamsResolver.prototype, "remove", null);
ExamsResolver = __decorate([
    (0, graphql_1.Resolver)('Exam'),
    __metadata("design:paramtypes", [exams_service_1.ExamsService])
], ExamsResolver);
exports.ExamsResolver = ExamsResolver;
//# sourceMappingURL=exams.resolver.js.map