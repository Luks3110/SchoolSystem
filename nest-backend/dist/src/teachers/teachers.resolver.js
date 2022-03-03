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
exports.TeachersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const teachers_service_1 = require("./teachers.service");
const create_teacher_input_1 = require("./dto/create-teacher.input");
const update_teacher_input_1 = require("./dto/update-teacher.input");
let TeachersResolver = class TeachersResolver {
    constructor(teachersService) {
        this.teachersService = teachersService;
    }
    create(createTeacherInput) {
        return this.teachersService.create(createTeacherInput);
    }
    findAll() {
        return this.teachersService.findAll();
    }
    findOne(id) {
        return this.teachersService.findOne(id);
    }
    update(updateTeacherInput) {
        return this.teachersService.update(updateTeacherInput.id, updateTeacherInput);
    }
    remove(id) {
        return this.teachersService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createTeacher'),
    __param(0, (0, graphql_1.Args)('createTeacherInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_input_1.CreateTeacherInput]),
    __metadata("design:returntype", void 0)
], TeachersResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('teachers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeachersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('teacher'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeachersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateTeacher'),
    __param(0, (0, graphql_1.Args)('updateTeacherInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_teacher_input_1.UpdateTeacherInput]),
    __metadata("design:returntype", void 0)
], TeachersResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeTeacher'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeachersResolver.prototype, "remove", null);
TeachersResolver = __decorate([
    (0, graphql_1.Resolver)('Teacher'),
    __metadata("design:paramtypes", [teachers_service_1.TeachersService])
], TeachersResolver);
exports.TeachersResolver = TeachersResolver;
//# sourceMappingURL=teachers.resolver.js.map