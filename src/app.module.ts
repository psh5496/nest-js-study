import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
