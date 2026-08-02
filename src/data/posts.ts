// Prototype content. Replace after design approval.
export const searchPosts = [
  { title: 'Vulkanの同期設計を分解する', description: '描画ループの同期対象と責務を整理するサンプル記事。', tags: ['Vulkan', 'C++', 'Graphics'], headings: ['同期対象を列挙する', 'フレーム境界を設計する'], href: '/blog/vulkan-sync-design/' },
  { title: 'NixOSでローカルAI基盤を再現する', description: '宣言的な構成と運用境界を検討するサンプル記事。', tags: ['NixOS', 'AI', 'Infrastructure'], headings: ['構成の境界', 'デプロイ手順'], href: '/blog/nixos-local-ai/' },
  { title: 'NeoForge MODの統合テスト', description: '複数MODを横断するゲームループの確認方法。', tags: ['Minecraft', 'NeoForge', 'Testing'], headings: ['テスト観点', 'リリース前確認'], href: '/blog/neoforge-integration-testing/' },
] as const;

export const categories = ['Development', 'Research', 'Infrastructure', 'Minecraft', 'Notes'] as const;
