import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { swaggerBearerName } from 'config/swagger.config';
import { RelatedTopics } from './entities/related-topics.entity';
import { RelatedTopicsService } from './related-topics.service';

@Controller('related-topics')
@ApiTags('Content - Related Topics')
@ApiBearerAuth(swaggerBearerName)
export class RelatedTopicsController {
  constructor(private readonly relatedTopicsService: RelatedTopicsService) {}

  @Get(':topicId/:subtopicId')
  @ApiOperation({ summary: 'Find related topics by topicId and subtopicId' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllBySubtopic(
    @Param('topicId') topicId: number,
    @Param('subtopicId') subtopicId: number,
  ): Promise<RelatedTopics[]> {
    return this.relatedTopicsService.findBySubtopic(topicId, subtopicId);
  }
}
