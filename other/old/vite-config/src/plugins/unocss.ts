import Unocss from 'unocss/vite';
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
// import presetIcons from '@unocss/preset-icons';
import { unocssToUniProcess } from 'vite-plugin-unocss-to-uni';

export function unocss() {
  return Unocss({
    // shortcuts: {
    //
    // },
    // mode: 'global',
    presets: [
      presetUno()
      // presetIcons({
      //   warn: true,
      //   // 其他选项
      //   prefix: 'i-',
      //   extraProperties: {
      //     display: 'inline-block'
      //   }
      // })
    ],
    // 禁用某些快捷类
    blocklist: ['container'],
    // transformers: [transformerDirectives(), transformerVariantGroup()],
    postprocess: (t) => {
      // t.selector = unocssToUniProcess(t.selector);
      // return t;
    },
    rules: [
      [
        'p-safe',
        {
          padding:
            'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
        }
      ],
      ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
      ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
      ['flex-center', { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }],
      ['align-start', { 'align-items': 'flex-start' }],
      ['align-end', { 'align-items': 'flex-end' }],
      ['align-center', { 'align-items': 'center' }],
      ['align-baseline', { 'align-items': 'baseline' }],
      ['fl', { 'float': 'left' }],
      ['fr', { 'float': 'right' }]
    ]
  });
}
