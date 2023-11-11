import { CoursesModule } from './modules/courses.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
        CoursesModule,
        DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
