// 서비스 데이터 타입 정의
export interface Service {
  id: string;
  name: string;
  description: string;
  url: string;
  githubUrl?: string; // 옵션
  tags: string[];
  category: 'Game' | 'Service' | 'Tool' | 'Music'; // 카테고리 필드 추가
}

// 실제 서비스 데이터
export const services: Service[] = [
  // Game
  {
    id: '1',
    name: '실린더 테트리스',
    description: '원통형 표면에서 즐기는 3D 테트리스 게임입니다. 기존의 평면적인 게임 방식을 벗어나 새로운 공간감을 제공합니다.',
    url: 'https://cylinder-tetris.vercel.app',
    githubUrl: 'https://github.com/Dr-Min/CylinderTetris',
    tags: ['JavaScript', 'Game', '3D'],
    category: 'Game'
  },
  {
    id: '3',
    name: '포커 서바이벌',
    description: '웹 브라우저에서 즐기는 스릴 넘치는 포커 서바이벌 게임입니다. 최후의 1인이 되어보세요.',
    url: 'https://poker-survival-game.vercel.app/',
    tags: ['Game', 'Web', 'Interactive'],
    category: 'Game'
  },

  // Service
  {
    id: '2',
    name: '경식 타임즈',
    description: '정치, 경제, 사회 등 다양한 분야의 최신 뉴스를 한눈에 모아볼 수 있는 뉴스 큐레이션 서비스입니다.',
    url: 'https://newsex-desktop.vercel.app/',
    tags: ['News', 'React', 'Media'],
    category: 'Service'
  },
  {
    id: '4',
    name: '보카 하우스',
    description: '효율적인 외국어 학습을 위한 나만의 단어장 서비스입니다. 언제 어디서나 단어를 외우고 관리하세요.',
    url: 'https://vocahouse.vercel.app/',
    tags: ['Education', 'Vocabulary', 'Study'],
    category: 'Service'
  },
  {
    id: '5',
    name: 'ToAT Bus',
    description: '부산 영어학원 셔틀버스 배차 및 실시간 노선 정보를 제공하는 프리미엄 교육 서비스 플랫폼입니다.',
    url: 'https://toat-bus.com/',
    tags: ['Service', 'Busan', 'Platform'],
    category: 'Service'
  },

  // Tool
  {
    id: '6',
    name: '스프라이트 분할기',
    description: 'Aseprite JSON 데이터를 활용하여 스프라이트 시트를 개별 이미지 프레임으로 자동 분할해주는 개발 도구입니다.',
    url: 'https://sprite-slicer.vercel.app/',
    tags: ['Tool', 'GameDev', 'Utility'],
    category: 'Tool'
  },

  // Music (AI Generated)
  {
    id: '7',
    name: 'Fruit Core',
    description: 'AI를 활용하여 작곡한 첫 번째 앨범입니다. 신선하고 다채로운 과일의 이미지를 음악으로 표현했습니다.',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_nylUEKJypwPmaiabGxIuHQc9nebRgayVc&si=k8g996w_KPvQMiyH',
    tags: ['AI Music', 'Album', 'Creative'],
    category: 'Music'
  }
];
