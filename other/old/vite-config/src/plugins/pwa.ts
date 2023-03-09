import { deepMerge } from '@vft/utils';
import { VitePWA, type VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Pwa',
    short_name: 'pwa',
    theme_color: '#fff',
    start_url: 'https://wflynn.cn/',
    display: 'standalone',
    background_color: '#FFF',
    orientation: 'portrait',
    icons: [
      {
        src: 'pwa-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  /** auto update after code change  */
  registerType: 'autoUpdate',
  workbox: {
    cacheId: 'pwa-cache',
    globPatterns: ['**/*.{js,css,html,ico,png,svg}']
  }
};

export default function pwa(pwaCfg?: Partial<VitePWAOptions>, base?: string) {
  deepMerge(pwaOptions, { base: base, ...pwaCfg });

  return VitePWA(pwaOptions);
}
