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
exports.ExamTypesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const exam_types_service_1 = require("./exam-types.service");
const create_exam_type_input_1 = require("./dto/create-exam-type.input");
const update_exam_type_input_1 = require("./dto/update-exam-type.input");
let ExamTypesResolver = class ExamTypesResolver {
    constructor(examTypesService) {
        this.examTypesService = examTypesService;
    }
    create(createExamTypeInput) {
        return this.examTypesService.create(createExamTypeInput);
    }
    findAll() {
        return this.examTypesService.findAll();
    }
    findOne(id) {
        return this.examTypesService.findOne(id);
    }
    update(updateExamTypeInput) {
        return this.examTypesService.update(updateExamTypeInput.id, updateExamTypeInput);
    }
    remove(id) {
        return this.examTypesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createExamType'),
    __param(0, (0, graphql_1.Args)('createExamTypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exam_type_input_1.CreateExamTypeInput]),
    __metadata("design:returntype", void 0)
], ExamTypesResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('examTypes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamTypesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('examType'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExamTypesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateExamType'),
    __param(0, (0, graphql_1.Args)('updateExamTypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_exam_type_input_1.UpdateExamTypeInput]),
    __metadata("design:returntype", void 0)
], ExamTypesResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeExamType'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExamTypesResolver.prototype, "remove", null);
ExamTypesResolver = __decorate([
    (0, graphql_1.Resolver)('ExamType'),
    __metadata("design:paramtypes", [exam_types_service_1.ExamTypesService])
], ExamTypesResolver);
exports.ExamTypesResolver = ExamTypesResolver;
//# sourceMappingURL=exam-types.resolver.js.map