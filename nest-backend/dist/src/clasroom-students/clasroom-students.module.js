"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasroomStudentsModule = void 0;
const common_1 = require("@nestjs/common");
const clasroom_students_service_1 = require("./clasroom-students.service");
const clasroom_students_resolver_1 = require("./clasroom-students.resolver");
let ClasroomStudentsModule = class ClasroomStudentsModule {
};
ClasroomStudentsModule = __decorate([
    (0, common_1.Module)({
        providers: [clasroom_students_resolver_1.ClasroomStudentsResolver, clasroom_students_service_1.ClasroomStudentsService]
    })
], ClasroomStudentsModule);
exports.ClasroomStudentsModule = ClasroomStudentsModule;
//# sourceMappingURL=clasroom-students.module.js.map