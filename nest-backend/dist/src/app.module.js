"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const apollo_server_core_1 = require("apollo-server-core");
const users_module_1 = require("./users/users.module");
const graphql_iso_date_1 = require("graphql-iso-date");
const teachers_module_1 = require("./teachers/teachers.module");
const students_module_1 = require("./students/students.module");
const clasroom_students_module_1 = require("./clasroom-students/clasroom-students.module");
const clasrooms_module_1 = require("./clasrooms/clasrooms.module");
const grades_module_1 = require("./grades/grades.module");
const courses_module_1 = require("./courses/courses.module");
const exam_results_module_1 = require("./exam-results/exam-results.module");
const exams_module_1 = require("./exams/exams.module");
const exam_types_module_1 = require("./exam-types/exam-types.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [graphql_1.GraphQLModule.forRoot({
                playground: false,
                plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
                typePaths: ['./**/*.graphql'],
                resolvers: { DateTime: graphql_iso_date_1.GraphQLDateTime },
                driver: apollo_1.ApolloDriver,
            }),
            users_module_1.UsersModule,
            teachers_module_1.TeachersModule,
            students_module_1.StudentsModule,
            clasroom_students_module_1.ClasroomStudentsModule,
            clasrooms_module_1.ClasroomsModule,
            grades_module_1.GradesModule,
            courses_module_1.CoursesModule,
            exam_results_module_1.ExamResultsModule,
            exams_module_1.ExamsModule,
            exam_types_module_1.ExamTypesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map