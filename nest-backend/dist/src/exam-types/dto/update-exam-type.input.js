"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExamTypeInput = void 0;
const create_exam_type_input_1 = require("./create-exam-type.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateExamTypeInput extends (0, mapped_types_1.PartialType)(create_exam_type_input_1.CreateExamTypeInput) {
}
exports.UpdateExamTypeInput = UpdateExamTypeInput;
//# sourceMappingURL=update-exam-type.input.js.map