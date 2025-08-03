import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getAll() {
    return ['hola', 'jojo'];
  }

  createCategory() {
    return ['sdfsdf'];
  }
}
