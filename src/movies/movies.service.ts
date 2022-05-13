import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  create(movieData): void {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  remove(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }
}
