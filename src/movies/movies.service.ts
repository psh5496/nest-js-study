import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  getAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async getOne(id: number): Promise<Movie> {
    const movie = await this.moviesRepository.findOneBy({ id });
    if (!movie) {
      throw new NotFoundException(`The movie doesn't exist.`);
    }
    return movie;
  }

  async create(movieData: CreateMovieDto): Promise<void> {
    await this.moviesRepository.save(movieData);
  }

  async delete(id: number) {
    await this.getOne(id);
    await this.moviesRepository.delete(id);
  }

  async update(id: number, updateData: UpdateMovieDto) {
    await this.getOne(id);
    await this.moviesRepository.update(id, updateData);
  }
}
