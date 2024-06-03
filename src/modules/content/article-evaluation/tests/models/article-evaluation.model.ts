import { EntityManager } from '@mikro-orm/core';
import { CreateArticleEvaluationDto } from '../../dtos/create-article-evaluation.dto';

export const mockCreateArticleEvaluationDto: CreateArticleEvaluationDto = {
  isUseful: true,
  contentRef: 'example_content_ref',
  response: '',
};

export const mockEntityManager: Partial<EntityManager> = {
  getConnection: jest.fn().mockImplementation(() => ({
    execute: jest.fn().mockResolvedValue(true),
  })),
};

export const mockEntityManagerNull: Partial<EntityManager> = {
  getConnection: jest.fn().mockImplementation(() => ({
    execute: jest.fn().mockResolvedValue(new Error('Error')),
  })),
};
