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
exports.ClasroomsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const clasrooms_service_1 = require("./clasrooms.service");
const create_clasroom_input_1 = require("./dto/create-clasroom.input");
const update_clasroom_input_1 = require("./dto/update-clasroom.input");
let ClasroomsResolver = class ClasroomsResolver {
    constructor(clasroomsService) {
        this.clasroomsService = clasroomsService;
    }
    create(createClasroomInput) {
        return this.clasroomsService.create(createClasroomInput);
    }
    findAll() {
        return this.clasroomsService.findAll();
    }
    findOne(id) {
        return this.clasroomsService.findOne(id);
    }
    update(updateClasroomInput) {
        return this.clasroomsService.update(updateClasroomInput.id, updateClasroomInput);
    }
    remove(id) {
        return this.clasroomsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createClasroom'),
    __param(0, (0, graphql_1.Args)('createClasroomInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clasroom_input_1.CreateClasroomInput]),
    __metadata("design:returntype", void 0)
], ClasroomsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('clasrooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClasroomsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('clasroom'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasroomsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateClasroom'),
    __param(0, (0, graphql_1.Args)('updateClasroomInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_clasroom_input_1.UpdateClasroomInput]),
    __metadata("design:returntype", void 0)
], ClasroomsResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeClasroom'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasroomsResolver.prototype, "remove", null);
ClasroomsResolver = __decorate([
    (0, graphql_1.Resolver)('Clasroom'),
    __metadata("design:paramtypes", [clasrooms_service_1.ClasroomsService])
], ClasroomsResolver);
exports.ClasroomsResolver = ClasroomsResolver;
//# sourceMappingURL=clasrooms.resolver.js.map