import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { validationOptions } from '../src/config/options.config';
import { JwtAuthGuard } from '../src/modules/auth/jwt-auth.guard';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe(validationOptions));
    app.enableShutdownHooks();

    await app.init();
  });

  it('Base /GET', async () => {
    return await request(app.getHttpServer()).get('/').set('flag', 'paris').expect(HttpStatus.NOT_FOUND);
  });

  it('Health Check /GET', async () => {
    return await request(app.getHttpServer()).get('/health/check').expect(HttpStatus.OK);
  });

  it('Banners /GET', async () => {
    return await request(app.getHttpServer())
      .get('/banners')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Faqs /GET', async () => {
    return await request(app.getHttpServer())
      .get('/faqs')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Footers /GET', async () => {
    return await request(app.getHttpServer())
      .get('/footers')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Info Messages /GET', async () => {
    return await request(app.getHttpServer())
      .get('/info-messages')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Help Category /GET', async () => {
    return await request(app.getHttpServer())
      .get('/help-category/legacy')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Most Populars /GET', async () => {
    return await request(app.getHttpServer())
      .get('/most-populars')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Pre Footers /GET', async () => {
    return await request(app.getHttpServer())
      .get('/pre-footer')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Services /GET', async () => {
    return await request(app.getHttpServer())
      .get('/services')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Delivery Cost Locations /GET', async () => {
    return await request(app.getHttpServer())
      .get('/delivery-cost/locations')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  it('Delivery Cost Types /GET', async () => {
    return await request(app.getHttpServer())
      .get('/delivery-cost/types?location=334')
      .set('flag', 'paris')
      .set('country', 'cl')
      .expect(HttpStatus.OK);
  });

  afterAll(async () => {
    await app.close();
  });
});
