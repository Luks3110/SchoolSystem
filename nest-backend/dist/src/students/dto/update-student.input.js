"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentInput = void 0;
const create_student_input_1 = require("./create-student.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateStudentInput extends (0, mapped_types_1.PartialType)(create_student_input_1.CreateStudentInput) {
}
exports.UpdateStudentInput = UpdateStudentInput;
//# sourceMappingURL=update-student.input.js.map