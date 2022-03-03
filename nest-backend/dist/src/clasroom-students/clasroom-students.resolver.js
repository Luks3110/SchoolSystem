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
exports.ClasroomStudentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const clasroom_students_service_1 = require("./clasroom-students.service");
const create_clasroom_student_input_1 = require("./dto/create-clasroom-student.input");
const update_clasroom_student_input_1 = require("./dto/update-clasroom-student.input");
let ClasroomStudentsResolver = class ClasroomStudentsResolver {
    constructor(clasroomStudentsService) {
        this.clasroomStudentsService = clasroomStudentsService;
    }
    create(createClasroomStudentInput) {
        return this.clasroomStudentsService.create(createClasroomStudentInput);
    }
    findAll() {
        return this.clasroomStudentsService.findAll();
    }
    findOne(id) {
        return this.clasroomStudentsService.findOne(id);
    }
    update(updateClasroomStudentInput) {
        return this.clasroomStudentsService.update(updateClasroomStudentInput.id, updateClasroomStudentInput);
    }
    remove(id) {
        return this.clasroomStudentsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createClasroomStudent'),
    __param(0, (0, graphql_1.Args)('createClasroomStudentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clasroom_student_input_1.CreateClasroomStudentInput]),
    __metadata("design:returntype", void 0)
], ClasroomStudentsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('clasroomStudents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClasroomStudentsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('clasroomStudent'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasroomStudentsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateClasroomStudent'),
    __param(0, (0, graphql_1.Args)('updateClasroomStudentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_clasroom_student_input_1.UpdateClasroomStudentInput]),
    __metadata("design:returntype", void 0)
], ClasroomStudentsResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeClasroomStudent'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasroomStudentsResolver.prototype, "remove", null);
ClasroomStudentsResolver = __decorate([
    (0, graphql_1.Resolver)('ClasroomStudent'),
    __metadata("design:paramtypes", [clasroom_students_service_1.ClasroomStudentsService])
], ClasroomStudentsResolver);
exports.ClasroomStudentsResolver = ClasroomStudentsResolver;
//# sourceMappingURL=clasroom-students.resolver.js.map