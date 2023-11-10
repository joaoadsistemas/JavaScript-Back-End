import { CoursesModule } from './courses.module';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
        CoursesModule, ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
