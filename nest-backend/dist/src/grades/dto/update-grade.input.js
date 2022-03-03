"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGradeInput = void 0;
const create_grade_input_1 = require("./create-grade.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateGradeInput extends (0, mapped_types_1.PartialType)(create_grade_input_1.CreateGradeInput) {
}
exports.UpdateGradeInput = UpdateGradeInput;
//# sourceMappingURL=update-grade.input.js.map