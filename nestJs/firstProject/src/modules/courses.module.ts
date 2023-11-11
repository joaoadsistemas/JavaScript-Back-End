import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CoursesController } from '../controllers/courses.controller';
import { CoursesService } from '../services/courses.service';
import { Course } from '../entities/courses.entity';
import { Tag } from 'src/entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
