import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll() {
    return this.categoryService.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: string) {
    return this.categoryService.getById(id);
  }

  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.categoryService.getBySlug(slug);
  }

  @Post()
  @HttpCode(200)
  async create() {
    return this.categoryService.create();
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() dto: CategoryDto) {
    return this.categoryService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
