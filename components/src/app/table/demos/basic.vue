<script setup lang="tsx">
import VriTable from '../index.vue';
import { ColumnsProps } from '../types';

let tableData = $ref<any>([
  {
    age: 32,
    address: '西湖区湖底公园1号',
    one: '西湖区湖底公园one号',
    two: '西湖区湖底公园two号',
    three: '西湖区湖底公园three号'
  },
  {
    name: '胡彦祖胡彦祖胡彦祖胡彦祖胡彦祖胡',
    age: 42,
    address: '西湖区湖底公园1号',
    one: '西湖区园one号',
    two: '西湖区园two号',
    three: '西底公园three号'
  }
]);
let columns = $ref<ColumnsProps[]>([
  {
    title: '姓名姓名姓名姓名姓名姓名姓名',
    dataIndex: 'name',
    align: 'left',
    cellAlign: 'right',
    width: 100,
    fixed: true,
    cellClassName: 'customClass'
  },
  {
    title: '年龄',
    headerClassName: 'customHeadClass',
    cellAlign: 'left',
    dataIndex: 'age',
    fixed: true
  },
  {
    title: '住址',
    dataIndex: 'address',
    width: 100,
    render: (text, record, subIndex) => {
      return (
        <div>
          {record.name}+{record.age}+{text}+{subIndex} <span class="text-red-500">*</span>
        </div>
      );
    }
  },
  {
    title: '住址1',
    dataIndex: 'one'
  },
  {
    title: '住址2',
    dataIndex: 'two'
  },
  {
    title: '住址3',
    dataIndex: 'three'
  },
  {
    title: '住址43',
    dataIndex: 'three'
  }
]);

function change() {
  tableData = [
    {
      name: '胡彦祖胡彦祖胡彦祖胡彦祖胡彦祖胡胡',
      age: 32,
      three: '西湖区湖底公园three号'
    },
    {
      three: '西底公园three号'
    }
  ];
  columns = [
    {
      title: '姓名姓名姓名姓名姓名姓名姓名',
      dataIndex: 'name',
      align: 'left',
      cellAlign: 'right',
      fixed: true,
      cellClassName: 'customClass'
    },
    {
      title: '年龄',
      headerClassName: 'customHeadClass',
      cellAlign: 'left',
      dataIndex: 'age'
    }
  ];
}
</script>

<template>
  <button @click="change">test</button>
  <vft-table :tableData="tableData" :columns="columns" />
</template>

<style scoped lang="less">
:deep(.vft-table) {
  .customClass {
    background: rgba(255, 0, 0, 0.3);
    font-size: 20px !important;
  }

  .customHeadClass {
    background: lightblue;
    color: white;
    font-size: 12px !important;
  }
}
</style>
