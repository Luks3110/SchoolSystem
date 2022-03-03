
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateClasroomStudentInput {
    exampleField?: Nullable<number>;
}

export class UpdateClasroomStudentInput {
    id: number;
}

export class CreateClasroomInput {
    exampleField?: Nullable<number>;
}

export class UpdateClasroomInput {
    id: number;
}

export class CreateCourseInput {
    exampleField?: Nullable<number>;
}

export class UpdateCourseInput {
    id: number;
}

export class CreateExamResultInput {
    exampleField?: Nullable<number>;
}

export class UpdateExamResultInput {
    id: number;
}

export class CreateExamTypeInput {
    exampleField?: Nullable<number>;
}

export class UpdateExamTypeInput {
    id: number;
}

export class CreateExamInput {
    exampleField?: Nullable<number>;
}

export class UpdateExamInput {
    id: number;
}

export class CreateGradeInput {
    exampleField?: Nullable<number>;
}

export class UpdateGradeInput {
    id: number;
}

export class CreateStudentInput {
    exampleField?: Nullable<number>;
}

export class UpdateStudentInput {
    id: number;
}

export class CreateTeacherInput {
    exampleField?: Nullable<number>;
}

export class UpdateTeacherInput {
    id: number;
}

export class CreateUserInput {
    name: string;
    email: string;
    cpf: string;
    phone?: Nullable<string>;
    password: string;
}

export class UpdateUserInput {
    id: number;
}

export class ClasroomStudent {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract clasroomStudents(): Nullable<ClasroomStudent>[] | Promise<Nullable<ClasroomStudent>[]>;

    abstract clasroomStudent(id: number): Nullable<ClasroomStudent> | Promise<Nullable<ClasroomStudent>>;

    abstract clasrooms(): Nullable<Clasroom>[] | Promise<Nullable<Clasroom>[]>;

    abstract clasroom(id: number): Nullable<Clasroom> | Promise<Nullable<Clasroom>>;

    abstract courses(): Nullable<Course>[] | Promise<Nullable<Course>[]>;

    abstract course(id: number): Nullable<Course> | Promise<Nullable<Course>>;

    abstract examResults(): Nullable<ExamResult>[] | Promise<Nullable<ExamResult>[]>;

    abstract examResult(id: number): Nullable<ExamResult> | Promise<Nullable<ExamResult>>;

    abstract examTypes(): Nullable<ExamType>[] | Promise<Nullable<ExamType>[]>;

    abstract examType(id: number): Nullable<ExamType> | Promise<Nullable<ExamType>>;

    abstract exams(): Nullable<Exam>[] | Promise<Nullable<Exam>[]>;

    abstract exam(id: number): Nullable<Exam> | Promise<Nullable<Exam>>;

    abstract grades(): Nullable<Grade>[] | Promise<Nullable<Grade>[]>;

    abstract grade(id: number): Nullable<Grade> | Promise<Nullable<Grade>>;

    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract student(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract teachers(): Nullable<Teacher>[] | Promise<Nullable<Teacher>[]>;

    abstract teacher(id: number): Nullable<Teacher> | Promise<Nullable<Teacher>>;

    abstract users(): Nullable<User[]> | Promise<Nullable<User[]>>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createClasroomStudent(createClasroomStudentInput: CreateClasroomStudentInput): ClasroomStudent | Promise<ClasroomStudent>;

    abstract updateClasroomStudent(updateClasroomStudentInput: UpdateClasroomStudentInput): ClasroomStudent | Promise<ClasroomStudent>;

    abstract removeClasroomStudent(id: number): Nullable<ClasroomStudent> | Promise<Nullable<ClasroomStudent>>;

    abstract createClasroom(createClasroomInput: CreateClasroomInput): Clasroom | Promise<Clasroom>;

    abstract updateClasroom(updateClasroomInput: UpdateClasroomInput): Clasroom | Promise<Clasroom>;

    abstract removeClasroom(id: number): Nullable<Clasroom> | Promise<Nullable<Clasroom>>;

    abstract createCourse(createCourseInput: CreateCourseInput): Course | Promise<Course>;

    abstract updateCourse(updateCourseInput: UpdateCourseInput): Course | Promise<Course>;

    abstract removeCourse(id: number): Nullable<Course> | Promise<Nullable<Course>>;

    abstract createExamResult(createExamResultInput: CreateExamResultInput): ExamResult | Promise<ExamResult>;

    abstract updateExamResult(updateExamResultInput: UpdateExamResultInput): ExamResult | Promise<ExamResult>;

    abstract removeExamResult(id: number): Nullable<ExamResult> | Promise<Nullable<ExamResult>>;

    abstract createExamType(createExamTypeInput: CreateExamTypeInput): ExamType | Promise<ExamType>;

    abstract updateExamType(updateExamTypeInput: UpdateExamTypeInput): ExamType | Promise<ExamType>;

    abstract removeExamType(id: number): Nullable<ExamType> | Promise<Nullable<ExamType>>;

    abstract createExam(createExamInput: CreateExamInput): Exam | Promise<Exam>;

    abstract updateExam(updateExamInput: UpdateExamInput): Exam | Promise<Exam>;

    abstract removeExam(id: number): Nullable<Exam> | Promise<Nullable<Exam>>;

    abstract createGrade(createGradeInput: CreateGradeInput): Grade | Promise<Grade>;

    abstract updateGrade(updateGradeInput: UpdateGradeInput): Grade | Promise<Grade>;

    abstract removeGrade(id: number): Nullable<Grade> | Promise<Nullable<Grade>>;

    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;

    abstract updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;

    abstract removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract createTeacher(createTeacherInput: CreateTeacherInput): Teacher | Promise<Teacher>;

    abstract updateTeacher(updateTeacherInput: UpdateTeacherInput): Teacher | Promise<Teacher>;

    abstract removeTeacher(id: number): Nullable<Teacher> | Promise<Nullable<Teacher>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Clasroom {
    exampleField?: Nullable<number>;
}

export class Course {
    exampleField?: Nullable<number>;
}

export class ExamResult {
    exampleField?: Nullable<number>;
}

export class ExamType {
    exampleField?: Nullable<number>;
}

export class Exam {
    exampleField?: Nullable<number>;
}

export class Grade {
    exampleField?: Nullable<number>;
}

export class Student {
    exampleField?: Nullable<number>;
}

export class Teacher {
    exampleField?: Nullable<number>;
}

export class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone?: Nullable<string>;
    password: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
