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
exports.GradesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const grades_service_1 = require("./grades.service");
const create_grade_input_1 = require("./dto/create-grade.input");
const update_grade_input_1 = require("./dto/update-grade.input");
let GradesResolver = class GradesResolver {
    constructor(gradesService) {
        this.gradesService = gradesService;
    }
    create(createGradeInput) {
        return this.gradesService.create(createGradeInput);
    }
    findAll() {
        return this.gradesService.findAll();
    }
    findOne(id) {
        return this.gradesService.findOne(id);
    }
    update(updateGradeInput) {
        return this.gradesService.update(updateGradeInput.id, updateGradeInput);
    }
    remove(id) {
        return this.gradesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createGrade'),
    __param(0, (0, graphql_1.Args)('createGradeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grade_input_1.CreateGradeInput]),
    __metadata("design:returntype", void 0)
], GradesResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('grades'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GradesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('grade'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GradesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateGrade'),
    __param(0, (0, graphql_1.Args)('updateGradeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_grade_input_1.UpdateGradeInput]),
    __metadata("design:returntype", void 0)
], GradesResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeGrade'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GradesResolver.prototype, "remove", null);
GradesResolver = __decorate([
    (0, graphql_1.Resolver)('Grade'),
    __metadata("design:paramtypes", [grades_service_1.GradesService])
], GradesResolver);
exports.GradesResolver = GradesResolver;
//# sourceMappingURL=grades.resolver.js.map