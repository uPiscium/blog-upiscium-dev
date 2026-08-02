// Prototype content. Replace after design approval.
export type WorkType = 'Software' | 'Research' | 'System';

export interface Work {
  slug: string;
  title: string;
  type: WorkType;
  status: string;
  visibility: string;
  summary: string;
  role: string;
  domains: string[];
  highlights: string[];
}

export const works: Work[] = [
  {
    slug: 'frontier-protocol', title: 'Frontier Protocol', type: 'Software', status: 'Preparing for Release', visibility: 'Public release planned',
    summary: '複数のMinecraft MODを統合し、感染封じ込めのゲームループを構築するNeoForge MOD。感染世界に対して、CreateとTFMGの生産設備を用いた持続可能な拠点構築を可能にする。',
    role: 'ゲームデザイン、要件定義、実装、テスト、リリース設計', domains: ['NeoForge', 'Minecraft', 'Java', 'Game Design'],
    highlights: ['感染抑制を中心としたゲームループ', '複数MOD間の統合設計', '開発工程を一貫して担当'],
  },
  {
    slug: 'project-kagya', title: 'PROJECT-KAGYA', type: 'System', status: 'デプロイ準備中', visibility: 'Prototype',
    summary: '人格形成と自意識の創発を研究・検証するためのローカルAIシステム。仮説と構成を段階的に検証するプロトタイプ。',
    role: 'システム設計、ローカル推論基盤、運用設計', domains: ['AI', 'Python', 'NixOS', 'Infrastructure'],
    highlights: ['ローカル環境を前提とした構成', '再現可能なデプロイ経路', '観測可能性を重視した設計'],
  },
  {
    slug: 'villager-agent', title: 'VillagerAgent', type: 'Research', status: 'Research in progress', visibility: 'General purpose only',
    summary: 'マルチエージェントシステムを用いた社会的相互作用に関する研究プロジェクト。一般的な研究目的のみ公開する。',
    role: '研究設計、実験環境の検討', domains: ['Multi-Agent Systems', 'Research', 'Python'],
    highlights: ['公開前研究を保護した情報設計', '社会的相互作用を研究対象に設定', '詳細は論文公開後に追加予定'],
  },
];

export const getWork = (slug: string) => works.find((work) => work.slug === slug);
