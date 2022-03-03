"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExamInput = void 0;
const create_exam_input_1 = require("./create-exam.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateExamInput extends (0, mapped_types_1.PartialType)(create_exam_input_1.CreateExamInput) {
}
exports.UpdateExamInput = UpdateExamInput;
//# sourceMappingURL=update-exam.input.js.map