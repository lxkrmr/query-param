import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should forbid missing name query param', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(
        400,
        '{"statusCode":400,"message":["name should not be empty","name must be a string"],"error":"Bad Request"}',
      );
  });

  it('this is a test', () => {
    return request(app.getHttpServer())
      .get('/')
      .query({ name: '<name>' })
      .expect(200, 'Hello <name>!');
  });
});
