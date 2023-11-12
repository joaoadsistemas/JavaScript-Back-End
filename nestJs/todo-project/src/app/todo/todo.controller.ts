import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('api/v1/todos')
export class TodoController {

    constructor(
        private readonly todoService: TodoService
    ) {}

    @Get(':id')
    async findById(@Param('id', new ParseUUIDPipe()) id: string ) {
        return await this.todoService.findOneById(id);
    };
    
    @Get()
    async findAll() {
        return await this.todoService.findAll();
    };

    @Post()
    async create(@Body() body: CreateTodoDto) {
        return await this.todoService.create(body);
    };

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateTodoDto) {
        return await this.todoService.update(id, body);
    };
    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', new ParseUUIDPipe()) id: string) {
        await this.todoService.delete(id);
    };

}
