import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import path from 'path';
import { CoursesService } from './courses.service';

@Controller('/courses')
export class CoursesController {

    // @Autowired do Spring
    constructor(private readonly courseService: CoursesService) {}

    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(+id);
    }

    @Post()
    create(@Body() body) {
        return this.courseService.create(body);
    }


    @Put('/:id')
    update(@Param('id') id: string, @Body() body) {
        return this.courseService.update(+id, body)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.courseService.remove(+id);
    }

}
