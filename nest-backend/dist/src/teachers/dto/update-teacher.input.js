"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeacherInput = void 0;
const create_teacher_input_1 = require("./create-teacher.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateTeacherInput extends (0, mapped_types_1.PartialType)(create_teacher_input_1.CreateTeacherInput) {
}
exports.UpdateTeacherInput = UpdateTeacherInput;
//# sourceMappingURL=update-teacher.input.js.map