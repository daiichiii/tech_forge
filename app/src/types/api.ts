// 共通API型定義

export interface HealthResponse {
  status: string;
  timestamp: string;
  environment: string;
  version: string;
}

// オセロゲーム関連の型
export interface OthelloGame {
  id: number;
  board: (string | null)[][];
  current_player: 'black' | 'white';
  status: 'playing' | 'finished' | 'draw';
  winner?: 'black' | 'white' | null;
}

// 勉強セッション関連の型
export interface StudySession {
  id: number;
  subject: string;
  status: 'active' | 'completed' | 'paused';
  progress: number;
  created_at: string;
  updated_at?: string;
}

// 壁当てゲームスコア関連の型
export interface WallBounceScore {
  id: number;
  value: number;
  player_name: string;
  rank: number;
  created_at: string;
}