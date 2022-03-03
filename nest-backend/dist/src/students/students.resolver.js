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
exports.StudentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const students_service_1 = require("./students.service");
const create_student_input_1 = require("./dto/create-student.input");
const update_student_input_1 = require("./dto/update-student.input");
let StudentsResolver = class StudentsResolver {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    create(createStudentInput) {
        return this.studentsService.create(createStudentInput);
    }
    findAll() {
        return this.studentsService.findAll();
    }
    findOne(id) {
        return this.studentsService.findOne(id);
    }
    update(updateStudentInput) {
        return this.studentsService.update(updateStudentInput.id, updateStudentInput);
    }
    remove(id) {
        return this.studentsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createStudent'),
    __param(0, (0, graphql_1.Args)('createStudentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_input_1.CreateStudentInput]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('students'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('student'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateStudent'),
    __param(0, (0, graphql_1.Args)('updateStudentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_student_input_1.UpdateStudentInput]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeStudent'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "remove", null);
StudentsResolver = __decorate([
    (0, graphql_1.Resolver)('Student'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsResolver);
exports.StudentsResolver = StudentsResolver;
//# sourceMappingURL=students.resolver.js.map