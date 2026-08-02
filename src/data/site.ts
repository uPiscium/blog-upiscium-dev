// Prototype content. Replace after design approval.
export const site = {
  name: 'upiscium',
  title: 'upiscium — Systems Software Engineer',
  description: 'CG、AI、インフラを横断するSystems Software Engineerのポートフォリオと技術ブログ。',
  role: 'Systems Software Engineer — CG, AI, Infrastructure',
  principle: '抽象化に隠しすぎず、開発者が制御権を持てる、理解可能なシステムを作る。',
  nav: [
    { label: 'About', href: '/about/' },
    { label: 'Works', href: '/works/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
  // Placeholder URLs. Replace after design approval.
  socials: [
    { label: 'GitHub', href: 'https://github.com/uPiscium' },
    { label: 'Qiita', href: '#' },
    { label: 'X', href: '#' },
    { label: 'RSS', href: '#' },
  ],
} as const;

export const focusAreas = [
  { title: 'Systems Software', description: '制御可能性と観測可能性を保つ低レイヤー設計。', technologies: ['C++', 'Linux', 'NixOS'], project: 'Frontier Protocol' },
  { title: 'Computer Graphics', description: '明示的なAPIを通して描画基盤を理解し、構築する。', technologies: ['Vulkan', 'OpenGL', 'GLSL'], project: 'Terreate' },
  { title: 'AI & Research', description: 'エージェントと社会的相互作用を対象にした検証。', technologies: ['Python', 'LLM', 'MAS'], project: 'VillagerAgent' },
  { title: 'Infrastructure', description: '再現可能で運用経路が明確なローカル基盤。', technologies: ['NixOS', 'Docker', 'Proxmox'], project: 'PROJECT-KAGYA' },
] as const;
