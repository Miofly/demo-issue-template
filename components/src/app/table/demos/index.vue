<!--eslint-disable-->
<script setup lang="tsx">
import { addUnit } from '@vft/utils';
import { ConfigProvider, PresudoInsert as VriPresudoInsert, Table as VriTable } from '../..';
import { Empty } from '../../empty/types';
import { ColumnsProps } from '../types';

interface Props {
  /** 年份数据 */
  yearsData?: number[];
}

const { yearsData = [2021, 2020, 2019, 2018, 2017, 2016, 2015] } = defineProps<Props>();

const tableData: any[] = $ref([
  {
    name: '碳排放量碳排放量碳碳排放量碳排放量碳',
    unit: ' ',
    level: 2
  },
  {
    name: '碳排放总量(范围一、二)',
    unit: '吨CO2e',
    values: [
      {
        year: 2021,
        value: '159,540,000.00'
      },
      {
        year: 2020,
        value: '167,440,000.00'
      },
      {
        year: 2019
      }
    ]
  },
  {
    name: '碳排放量(范围一)',
    unit: '碳排放总量(范围一、二)碳排放总量(范围一、二)碳排放总量(范围一、二)',
    values: [
      {
        year: 2021,
        value: '121,390,000.00'
      },
      {
        year: 2020,
        value: '127,570,000.00'
      },
      {
        year: 2019,
        value: '132,170,000.00'
      }
    ]
  },
  {
    name: '碳排放强度',
    unit: ' ',
    level: 2
  },
  {
    name: '单位营收碳排放量(范围一、二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '610.25'
      },
      {
        year: 2020,
        value: '865.84'
      },
      {
        year: 2019,
        value: '691.67'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范围一)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '464.32'
      },
      {
        year: 2020,
        value: '659.67'
      },
      {
        year: 2019,
        value: '525.15'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范77围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(66范围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范55围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范44围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范33围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范22围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范11围二)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范围二11)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  },
  {
    name: '单位营收碳排放量(范围二331111111)',
    unit: '千克CO2e/万元',
    values: [
      {
        year: 2021,
        value: '145.93'
      },
      {
        year: 2020,
        value: '206.17'
      },
      {
        year: 2019,
        value: '166.52'
      }
    ]
  }
]);

let columns = $ref<ColumnsProps[]>([
  {
    title: '指标指标指标指标指标指标指标指标指标指标指标',
    fixed: true,
    width: 120,
    sorter: true,
    // sortDirection: 'asc',
    align: 'left',
    dataIndex: 'name',
    render: (text, record, index) => {
      // 第一层大标题
      if (record.level === 1) {
        return (
          <>
            <div class={{ placeholder: !!index }}></div>
            <div class={['h-21px', 'mt-12px']}>
              <VriPresudoInsert
                class={['title', 'absolute ml-[-13px]']}
                text={text}
                prseudoCfg={{
                  color: '#15b4f1',
                  width: 4,
                  distance: 9
                }}
              />
            </div>
          </>
        );
      }
      // 小标题
      else if (record.level === 2) {
        return <div class="sub-title">{text}</div>;
      }
      return text;
    }
  },
  {
    title: '单位单位单位单位单位单位单位单位单位单位单位单位',
    align: 'left',
    sorter: true,
    dataIndex: 'unit',
    cellClassName: 'unit-cell'
  },
  {
    title: '单位单位单位单位单位单位',
    align: 'left',
    dataIndex: 'unit',
    cellClassName: 'unit-cell'
  }
]);

yearsData.forEach((item) => {
  columns.push({
    title: item + '年' + item + '年' + item + '年' + item + '年',
    align: 'right',
    render: (_, record) => {
      if ([1, 2].includes(record?.level)) {
        return '';
      }
      const data = record?.values?.filter((subItem) => {
        return subItem.year === item;
      });
      return data?.[0]?.value || '-';
    }
  });
});

const tableInitStyle = {
  // tableHeight: addUnit(800, true),

  theadThHeight: '32px',
  theadBackground: '#f9f9f9',
  theadPadding: '7.5px 10px',
  theadFontSize: '13px',
  theadColor: '#111',

  tbodyTrHeight: addUnit(100, true) as string,
  tbodyBackground: '#fff',
  tbodyPadding: '7.5px 10px',
  tbodyFontSize: '14px',
  tbodyColor: '#111',
  tbodyLineClamp: 4
};

function onSortChange(data) {
  console.log(data, '======-');
}

let test = $ref();
</script>

<template>
  <!--<div id="test" ref="test" class="w-90vw ml-5vw border border-red-700 h-500px overflow-auto">-->
  <button @click="tableData = []">测试</button>
  <config-provider :themeVars="tableInitStyle" class="h-full">
    <vft-table
      headerSticky
      :autoSize="false"
      emptyPlaceholder="--"
      @sortChange="onSortChange"
      :tableData="tableData"
      :columns="columns"
      :emptyCfg="{
        img: Empty.NO_SEARCH
      }"
    >
      <template v-if="yearsData?.length > 2" #thead-right>
        <span class="showAngle" />
      </template>
    </vft-table>
  </config-provider>
  <!--</div>-->
</template>

<style scoped lang="less">
#test {
  &::-webkit-scrollbar {
    display: none;
  }
}

:deep(.vft-table) {
  .title {
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    color: #000;
  }

  .vft-table__tbody__left {
    .vft-table__tbody__td {
      padding: 7.5px 0 7.5px 13px !important;
    }
  }

  .sub-title {
    width: 130px;
    white-space: nowrap;
    color: #ee5a00;
    font-weight: 400;
    font-size: 15px;
  }

  .placeholder {
    min-width: 100% !important;
    width: 100vw;
    //position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 8px;
      display: block;
      background: #fafafa;
      left: 0;
    }
  }

  .unit-cell {
    font-size: 12px !important;
  }

  .showAngle {
    content: '';
    background: url('./rightAngle.png');
    position: absolute;
    right: 0.04rem;
    width: 0.12rem;
    height: 0.16rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
