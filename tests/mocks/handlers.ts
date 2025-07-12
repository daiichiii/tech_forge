import { http, HttpResponse } from 'msw';
import type { HealthResponse } from '@/types/api';

export const handlers = [
  // ヘルスチェック API
  http.get('/health', () => {
    const healthResponse: HealthResponse = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: 'test',
      version: '1.0.0',
    };
    return HttpResponse.json(healthResponse);
  }),

  // オセロゲーム API
  http.get('/api/v1/othello_games', () => {
    return HttpResponse.json({ games: [] });
  }),

  http.post('/api/v1/othello_games', () => {
    return HttpResponse.json({
      game: {
        id: 1,
        board: Array(8).fill(null).map(() => Array(8).fill(null)),
        current_player: 'black',
        status: 'playing',
      },
    });
  }),

  // 勉強セッション API
  http.get('/api/v1/study_sessions', () => {
    return HttpResponse.json({ sessions: [] });
  }),

  http.post('/api/v1/study_sessions', () => {
    return HttpResponse.json({
      session: {
        id: 1,
        subject: 'Test Subject',
        status: 'active',
        progress: 0,
        created_at: new Date().toISOString(),
      },
    });
  }),

  // 壁当てゲームスコア API
  http.get('/api/v1/wall_bounce_scores', () => {
    return HttpResponse.json({ scores: [] });
  }),

  http.post('/api/v1/wall_bounce_scores', () => {
    return HttpResponse.json({
      score: {
        id: 1,
        value: 1000,
        player_name: 'Test Player',
        rank: 1,
        created_at: new Date().toISOString(),
      },
    });
  }),
];