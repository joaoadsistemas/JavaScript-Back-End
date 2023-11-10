import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './courses.entity';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';

@Injectable()
export class CoursesService {

    private courses: Array<Course> = [
        {
            id: 1,
            name: "NestJS",
            description: "Course about NestJs",
            tags: ['node.js', 'nestjs', 'javascript','typescript']
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: number) {
        const course = this.courses.find(p => p.id === id);

        if (!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return course;
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO);
    }

    update(id: number, updateCourseDTO: any) {
        const existingCourse = this.findOne(id);

        if (existingCourse as any) {
            const index = this.courses.findIndex(p => p.id === id);
            this.courses[index] = {
                id,
                ...updateCourseDTO,
            }
        }
    }

    remove(id: number) {
        const index = this.courses.findIndex(p => p.id === id);

        if (index >= 0) {
            this.courses.splice(index, 1);
        }
    }

}
