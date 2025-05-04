// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication, ValidationPipe } from '@nestjs/common';
// import * as request from 'supertest';
// import {AppModule} from '../src/app.module';
// import { ZodValidationPipe } from '@libs/zod';
//
// describe('ReportsController (e2e)', () => {
//   let app: INestApplication;
//
//   beforeAll(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();
//
//     app = moduleFixture.createNestApplication();
//     app.useGlobalPipes(new ZodValidationPipe()); // если глобально используешь ZodPipe
//     await app.init();
//   });
//
//   afterAll(async () => {
//     await app.close();
//   });
//
//   describe('/reports/events', () => {
//     it('should return 200 with valid query', async () => {
//       return request(app.getHttpServer())
//         .get('/reports/events')
//         .query({
//           source: 'facebook',
//           from: '2024-01-01',
//           to: '2025-01-01',
//         })
//         .expect(200);
//     });
//
//     it('should return 400 for invalid source', async () => {
//       return request(app.getHttpServer())
//         .get('/reports/events')
//         .query({ source: 'invalid' })
//         .expect(400);
//     });
//   });
//
//   describe('/reports/revenue', () => {
//     it('should return 200 with valid query', async () => {
//       return request(app.getHttpServer())
//         .get('/reports/revenue')
//         .query({
//           source: 'tiktok',
//           campaignId: 'abc123',
//           from: '2024-01-01',
//           to: '2025-01-01',
//         })
//         .expect(200);
//     });
//
//     it('should return 400 if source is missing', async () => {
//       return request(app.getHttpServer())
//         .get('/reports/revenue')
//         .query({
//           campaignId: 'abc123',
//         })
//         .expect(400);
//     });
//   });
//
//   describe('/reports/demographics', () => {
//     it('should return 200 with valid query', async () => {
//       return request(app.getHttpServer())
//         .get('/reports/demographics')
//         .query({
//           source: 'tiktok',
//           from: '2023-06-01',
//           to: '2023-12-01',
//         })
//         .expect(200);
//     });
//
//     it('should return 400 with missing source', async () => {
//       return request(app.getHttpServer())
//         .get('/reports/demographics')
//         .query({ from: '2023-01-01' })
//         .expect(400);
//     });
//   });
// });
