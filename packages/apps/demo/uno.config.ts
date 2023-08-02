import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  rules: [
    ['flex-center', { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }],
    ['align-start', { 'align-items': 'flex-start' }],
    ['align-end', { 'align-items': 'flex-end' }],
    ['align-center', { 'align-items': 'center' }],
    ['align-baseline', { 'align-items': 'baseline' }],
    ['fl', { float: 'left' }],
    ['fr', { float: 'right' }]
  ]
})
