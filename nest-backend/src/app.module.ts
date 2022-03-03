import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { UsersModule } from './users/users.module';
import { GraphQLDateTime } from 'graphql-iso-date'
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { ClasroomStudentsModule } from './clasroom-students/clasroom-students.module';
import { ClasroomsModule } from './clasrooms/clasrooms.module';
import { GradesModule } from './grades/grades.module';
import { CoursesModule } from './courses/courses.module';
import { ExamResultsModule } from './exam-results/exam-results.module';
import { ExamsModule } from './exams/exams.module';
import { ExamTypesModule } from './exam-types/exam-types.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    typePaths: ['./**/*.graphql'],
    resolvers: { DateTime: GraphQLDateTime },
    driver: ApolloDriver,
  }),
  UsersModule,
  TeachersModule,
  StudentsModule,
  ClasroomStudentsModule,
  ClasroomsModule,
  GradesModule,
  CoursesModule,
  ExamResultsModule,
  ExamsModule,
  ExamTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
