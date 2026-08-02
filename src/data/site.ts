export const navItems = [
  { href: '/about/', label: 'About' },
  { href: '/works/', label: 'Works' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export const works = [
  {
    slug: 'frontier-protocol',
    title: 'Frontier Protocol',
    type: 'Software / Game Design',
    status: 'Preparing for Release',
    role: 'Solo development',
    summary:
      '複数のMinecraft MODを統合し、感染封じ込めのゲームループを構築するNeoForge MOD。',
    highlights: [
      'Fungal Infection: Spore・Create・TFMGとの統合設計',
      'ゲームデザインから実装・テスト・配布準備まで一貫して担当',
      '持続可能な拠点構築を支える生産・消費ループ',
    ],
    domains: ['Minecraft', 'Game Design', 'Java'],
  },
  {
    slug: 'project-kagya',
    title: 'PROJECT-KAGYA',
    type: 'Software / AI',
    status: 'Deployment Preparation',
    role: 'System design and implementation',
    summary:
      '人格形成と自意識の創発を研究・検証するためのローカルAIシステム。',
    highlights: [
      '長期状態と記憶を扱うAIアーキテクチャ',
      'ローカル環境を前提としたデプロイ設計',
      '観測可能性と管理境界を重視した実験基盤',
    ],
    domains: ['Artificial Intelligence', 'Python', 'Systems'],
  },
  {
    slug: 'villager-agent',
    title: 'VillagerAgent',
    type: 'Research',
    status: 'Limited Disclosure',
    role: 'Research and experimental implementation',
    summary:
      'マルチエージェントシステムを用いた社会的相互作用に関する研究プロジェクト。',
    highlights: [
      'Minecraft環境上のAIエージェント研究',
      '一般的な研究目的のみ公開',
      '手法・実験内容・結果は論文公開後に追加予定',
    ],
    domains: ['Multi-Agent Systems', 'Research', 'Python'],
  },
];

export const focusAreas = [
  {
    title: 'Systems Software',
    description: '制御可能性と明示性を重視し、挙動を追跡できるソフトウェアを設計する。',
    technologies: ['C++', 'CMake', 'Linux'],
    project: 'Terreate',
  },
  {
    title: 'Computer Graphics',
    description: 'OpenGLとVulkanを用いて、描画基盤と低レイヤAPIを実装する。',
    technologies: ['Vulkan', 'OpenGL', 'Slang'],
    project: 'Terreate / Legacy Terreate',
  },
  {
    title: 'AI & Research',
    description: 'AIエージェントとマルチエージェントシステムの振る舞いを研究する。',
    technologies: ['Python', 'PyTorch', 'MARL'],
    project: 'PROJECT-KAGYA / VillagerAgent',
  },
  {
    title: 'Infrastructure',
    description: '仮想化、ネットワーク、セルフホスト環境を設計し、継続運用する。',
    technologies: ['NixOS', 'Proxmox', 'Docker'],
    project: 'Home Lab',
  },
];
