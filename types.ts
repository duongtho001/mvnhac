
export interface AudioPrompt {
  id: number;
  startTime: number;
  endTime: number;
  duration: number;
}

// Cấu trúc dữ liệu mà AI sẽ trả về cho các đoạn có lời
export interface LyricPromptData {
  prompt_idx: number;
  lang: string;
  mode: string;
  text: string;
  duration_sec: number;
  music_meta: {
    style: string;
    mood: string;
  };
  actor: string;
  choreography: string;
  timing: string;
  vocal_style?: 'main' | 'backing' | 'ad-lib' | 'harmony'; // Trường mới
}


export interface MusicPrompt {
  segment: number;
  type: 'lyrics' | 'instrumental';
  prompt: string; // Chuỗi thô từ AI
  parsedData?: LyricPromptData; // Dữ liệu JSON đã được phân tích cú pháp nếu type là 'lyrics'
}

export interface HistoryEntry {
  id: string;
  timestamp: number;
  fileName: string;
  prompts: AudioPrompt[];
  musicPrompts: MusicPrompt[];
  musicStyle?: string;
  actorDescriptions?: string[];
  mood?: string;
  includeDanceScenes?: boolean;
}
