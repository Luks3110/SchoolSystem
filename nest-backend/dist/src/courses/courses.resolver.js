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
exports.CoursesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const courses_service_1 = require("./courses.service");
const create_course_input_1 = require("./dto/create-course.input");
const update_course_input_1 = require("./dto/update-course.input");
let CoursesResolver = class CoursesResolver {
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    create(createCourseInput) {
        return this.coursesService.create(createCourseInput);
    }
    findAll() {
        return this.coursesService.findAll();
    }
    findOne(id) {
        return this.coursesService.findOne(id);
    }
    update(updateCourseInput) {
        return this.coursesService.update(updateCourseInput.id, updateCourseInput);
    }
    remove(id) {
        return this.coursesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createCourse'),
    __param(0, (0, graphql_1.Args)('createCourseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_input_1.CreateCourseInput]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('course'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateCourse'),
    __param(0, (0, graphql_1.Args)('updateCourseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_course_input_1.UpdateCourseInput]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeCourse'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "remove", null);
CoursesResolver = __decorate([
    (0, graphql_1.Resolver)('Course'),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesResolver);
exports.CoursesResolver = CoursesResolver;
//# sourceMappingURL=courses.resolver.js.map