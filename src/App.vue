<script setup lang="ts">
import { ref } from 'vue';
import { processPSD2Page } from './index';

function loadJS() {
  const link_element = document.createElement('script');
  link_element.setAttribute('src', '/psd.js');
  document.head.appendChild(link_element);
}
loadJS();

const result = ref([]);
const handleChange = async e => {
  console.log(e, e.target.files);
  const data = await processPSD2Page(e.target.files[0]);

  setTimeout(async () => {
    const types: any = {
      text: {
        name: '文本',
        type: 'w-text',
        uuid: -1,
        editable: false,
        left: 0,
        top: 0,
        transform: '',
        lineHeight: 1.5,
        letterSpacing: 0,
        fontSize: 24,
        zoom: 1,
        fontClass: {
          alias: '站酷快乐体',
          id: 543,
          value: 'zcool-kuaile-regular',
          url: 'https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2',
        },
        fontFamily: 'SourceHanSansSC-Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        writingMode: 'horizontal-tb',
        textDecoration: 'none',
        color: '#000000ff',
        textAlign: 'left',
        text: '',
        opacity: 1,
        backgroundColor: '',
        parent: '-1',
        record: {
          width: 0,
          height: 0,
          minWidth: 0,
          minHeight: 0,
          dir: 'horizontal',
        },
      },
      image: {
        name: '图片',
        type: 'w-image',
        uuid: -1,
        width: 300,
        height: 300,
        left: 0,
        top: 0,
        zoom: 1,
        transform: '',
        radius: 0,
        opacity: 1,
        parent: '-1',
        imgUrl: '',
        mask: '',
        setting: [],
        record: {
          width: 0,
          height: 0,
          minWidth: 10,
          minHeight: 10,
          dir: 'all',
        },
      },
    };
    for (let i = 0; i < data.clouds.length; i++) {
      const x: any = data.clouds[i];
      const rawData = JSON.parse(JSON.stringify(types[x.type])) || {};
      rawData.record = {
        ... rawData.record,
        width:x.width,
        height: x.height,
      }
      delete x.type;
      x.src && (x.imgUrl = x.src) && delete x.src;
      result.value.push(Object.assign(rawData, x));
    }

    const { width, height, background: bg } = data;

    let pageData = {
      name: '背景页面',
      type: 'page',
      uuid: '-1',
      left: 0,
      top: 0,
      width: 1920, // 画布宽度
      height: 1080, // 画布高度
      backgroundColor: '#ffffff', // 画布背景颜色
      backgroundImage: '', // 画布背景图片
      backgroundTransform: {},
      opacity: 1, // 透明度
      tag: 0, // 强制刷新用
      setting: [
        {
          label: '背景颜色',
          parentKey: 'backgroundColor',
          value: false,
        },
      ],
      record: {},
    };

    Object.assign(pageData, {
      width,
      height,
      backgroundColor: bg.color,
      backgroundImage: bg.image,
    });

    console.log(pageData, 'page的数据');
    console.log(result.value, 'addWidget的数据');
  }, 10);
};
</script>

<template>
  <input @change="handleChange" type="file" />
</template>

<style scoped></style>
