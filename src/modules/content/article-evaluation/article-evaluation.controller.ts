import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { ArticleEvaluationService } from './article-evaluation.service';
import { CreateArticleEvaluationDto } from './dtos/create-article-evaluation.dto';

@Controller('article-evaluation')
@ApiTags('Article - Evaluation')
@ApiBearerAuth(swaggerBearerName)
export class ArticleEvaluationController {
  constructor(private readonly articleEvaluationService: ArticleEvaluationService) {}

  @Post()
  @ApiOperation({ summary: 'Save the response of the article evaluation' })
  @ApiHeader({ name: 'flag', description: 'Requested flag name', example: 'paris', required: true })
  @ApiBody({ type: [CreateArticleEvaluationDto], required: true })
  @ApiQuery({ name: 'traceId', required: false })
  async create(
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
    @Body() createArticleEvaluation: CreateArticleEvaluationDto,
    @Headers() headers: HelpCenterHeaders,
  ) {
    return this.articleEvaluationService.createArticleEvaluation(traceId, headers, createArticleEvaluation);
  }

  @Get()
  @ApiHeader({ name: 'flag', description: 'Requested flag name', example: 'paris', required: true })
  @ApiQuery({ name: 'traceId', required: false })
  async getArticleEvaluationOptions(
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
    @Headers() headers: HelpCenterHeaders,
  ) {
    return this.articleEvaluationService.getArticleEvaluationOptions(traceId, headers);
  }
}
