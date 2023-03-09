<!--eslint-disable-->
<script setup lang="tsx">
import { ConfigProvider, PresudoInsert as VriPresudoInsert, Table as VriTable } from '../..';

import { ColumnsProps } from '../types';

interface Props {
  /** 接口数据 */
  value?: any[];
  /** 年份数据 */
  yearsData?: number[];
}

const {
  // 接口的真实数据 不用关注 折叠即可
  value = [
    {
      classificationLevel: 3,
      classificationLevel2: '温室气体',
      secondClassificationDetails: [
        {
          classificationLevel3: '碳排放量',
          thirdClassificationDetails: [
            {
              name: '碳排放总量(范围一、二)',
              code: null,
              unit: '吨CO2e',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '159,540,000.00',
                  yoy: '-4.72%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放总量(范围一、二)',
                  indicatorPublish: '温室气体排放总量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '159.54',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '167,440,000.00',
                  yoy: '-3.81%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放总量(范围一、二)',
                  indicatorPublish: '温室气体排放总量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '167.44',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '174,080,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放总量(范围一、二)',
                  indicatorPublish: '温室气体排放总量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '174.08',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '碳排放量(范围一)',
              code: null,
              unit: '吨CO2e',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '121,390,000.00',
                  yoy: '-4.84%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放量(范围一)',
                  indicatorPublish: '直接温室气体排放量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '121.39',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '127,570,000.00',
                  yoy: '-3.48%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放量(范围一)',
                  indicatorPublish: '直接温室气体排放量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '127.57',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '132,170,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放量(范围一)',
                  indicatorPublish: '直接温室气体排放量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '132.17',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '碳排放量(范围二)',
              code: null,
              unit: '吨CO2e',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '38,150,000.00',
                  yoy: '-4.31%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放量(范围二)',
                  indicatorPublish: '间接温室气体排放量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '38.15',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '39,870,000.00',
                  yoy: '-4.87%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放量(范围二)',
                  indicatorPublish: '间接温室气体排放量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '39.87',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '41,910,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '碳排放量(范围二)',
                  indicatorPublish: '间接温室气体排放量',
                  indicatorDisplayUnit: '吨CO2e',
                  indicatorUnitPublish: '百万吨二氧化碳当量',
                  indicatorValuePublish: '41.91',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '碳排放强度',
          thirdClassificationDetails: [
            {
              name: '单位营收碳排放量(范围一、二)',
              code: null,
              unit: '千克CO2e/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '610.25',
                  yoy: '-29.52%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围一、二)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '865.84',
                  yoy: '25.18%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围一、二)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '691.67',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围一、二)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '单位营收碳排放量(范围一)',
              code: null,
              unit: '千克CO2e/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '464.32',
                  yoy: '-29.61%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围一)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '659.67',
                  yoy: '25.62%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围一)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '525.15',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围一)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '单位营收碳排放量(范围二)',
              code: null,
              unit: '千克CO2e/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '145.93',
                  yoy: '-29.22%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围二)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '206.17',
                  yoy: '23.81%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围二)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '166.52',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收碳排放量(范围二)',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克CO2e/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      classificationLevel: 3,
      classificationLevel2: '能源',
      secondClassificationDetails: [
        {
          classificationLevel3: '能源消耗量',
          thirdClassificationDetails: [
            {
              name: '综合能耗',
              code: null,
              unit: '吨标准煤',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '62,730,000.00',
                  yoy: '-2.08%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '综合能耗',
                  indicatorPublish: '能源消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '6,273.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '64,060,000.00',
                  yoy: '-1.63%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '综合能耗',
                  indicatorPublish: '能源消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '6,406.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '65,120,000.00',
                  yoy: '-22.84%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '综合能耗',
                  indicatorPublish: '能源消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '6,512.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '84,400,000.00',
                  yoy: '4.22%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '综合能耗',
                  indicatorPublish: '综合能源消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '8,440.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '80,980,000.00',
                  yoy: '1.35%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '综合能耗',
                  indicatorPublish: '综合能源消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '8,098.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '79,900,000.00',
                  yoy: '-1.08%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '综合能耗',
                  indicatorPublish: '综合能源消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '7,990.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '80,770,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '综合能耗',
                  indicatorPublish: '综合能源消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '8,077.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '电力',
              code: null,
              unit: '兆瓦时',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '52,500,000.00',
                  yoy: '-5.06%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '电力',
                  indicatorPublish: '电力消耗总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '525.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '55,300,000.00',
                  yoy: '-1.78%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '电力',
                  indicatorPublish: '电力消耗总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '553.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '56,300,000.00',
                  yoy: '3.87%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '电力',
                  indicatorPublish: '电力消耗总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '563.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '54,200,000.00',
                  yoy: '7.75%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '电力',
                  indicatorPublish: '电力消费总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '542.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '50,300,000.00',
                  yoy: '7.94%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '电力',
                  indicatorPublish: '电力消耗总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '503.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '46,600,000.00',
                  yoy: '8.62%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '电力',
                  indicatorPublish: '电力消费总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '466.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '42,900,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '电力',
                  indicatorPublish: '电力消费总量',
                  indicatorDisplayUnit: '兆瓦时',
                  indicatorUnitPublish: '亿千瓦时',
                  indicatorValuePublish: '429.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '天然气',
              code: null,
              unit: '吨标准煤',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '23,275,000.00',
                  yoy: '-6.42%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '天然气',
                  indicatorPublish: '天然气消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '175.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '24,871,000.00',
                  yoy: '1.08%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '天然气',
                  indicatorPublish: '天然气消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '187.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '24,605,000.00',
                  yoy: '2.21%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '天然气',
                  indicatorPublish: '天然气消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '185.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '24,073,000.00',
                  yoy: '9.04%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '天然气',
                  indicatorPublish: '天然气消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '181.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '22,078,000.00',
                  yoy: '2.47%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '天然气',
                  indicatorPublish: '天然气消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '166.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '21,546,000.00',
                  yoy: '-1.82%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '天然气',
                  indicatorPublish: '天然气消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '162.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '21,945,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '天然气',
                  indicatorPublish: '天然气消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '亿立方米',
                  indicatorValuePublish: '165.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '原煤',
              code: null,
              unit: '吨标准煤',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '9,478,761.00',
                  yoy: '2.95%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '原煤',
                  indicatorPublish: '原煤消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,327.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '9,207,327.00',
                  yoy: '1.66%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '原煤',
                  indicatorPublish: '原煤消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,289.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '9,057,324.00',
                  yoy: '0.08%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '原煤',
                  indicatorPublish: '原煤消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,268.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '9,050,181.00',
                  yoy: '3.77%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '原煤',
                  indicatorPublish: '原煤消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,267.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '8,721,603.00',
                  yoy: '3.47%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '原煤',
                  indicatorPublish: '原煤消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,221.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '8,428,740.00',
                  yoy: '-0.25%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '原煤',
                  indicatorPublish: '原煤消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,180.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '8,450,169.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '原煤',
                  indicatorPublish: '原煤消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1,183.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '原油',
              code: null,
              unit: '吨标准煤',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '2,400,048.00',
                  yoy: '-2.33%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '原油',
                  indicatorPublish: '原油消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨）',
                  indicatorValuePublish: '168.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '2,457,192.00',
                  yoy: '-4.44%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '原油',
                  indicatorPublish: '原油消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨）',
                  indicatorValuePublish: '172.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '2,571,480.00',
                  yoy: '-3.23%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '原油',
                  indicatorPublish: '原油消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '180.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '2,657,196.00',
                  yoy: '-0.53%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '原油',
                  indicatorPublish: '原油消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '186.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '2,671,482.00',
                  yoy: '84.24%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '原油',
                  indicatorPublish: '原油消耗总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '187.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '1,450,029.00',
                  yoy: '-65.00%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '原油',
                  indicatorPublish: '原油消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '203.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '4,142,940.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '原油',
                  indicatorPublish: '原油消费总量',
                  indicatorDisplayUnit: '吨标准煤',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '290.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '能源消耗强度',
          thirdClassificationDetails: [
            {
              name: '单位营收综合能耗',
              code: null,
              unit: '千克标准煤/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '239.95',
                  yoy: '-27.57%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '331.26',
                  yoy: '28.03%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '258.74',
                  yoy: '-27.85%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '358.60',
                  yoy: '-10.73%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '401.71',
                  yoy: '-18.71%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '494.15',
                  yoy: '5.56%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '468.12',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收综合能耗',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克标准煤/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      classificationLevel: 3,
      classificationLevel2: '水资源',
      secondClassificationDetails: [
        {
          classificationLevel3: '水资源利用',
          thirdClassificationDetails: [
            {
              name: '用水量',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '75,004.00',
                  yoy: '-2.59%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: null,
                  indicator: '用水量',
                  indicatorPublish: '',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '',
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: '根据新鲜水用量推断出'
                },
                {
                  year: 2020,
                  value: '76,995.00',
                  yoy: '-3.01%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: null,
                  indicator: '用水量',
                  indicatorPublish: '',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '',
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: '根据新鲜水用量推断出'
                },
                {
                  year: 2019,
                  value: '79,383.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: null,
                  indicator: '用水量',
                  indicatorPublish: '',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '',
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: '根据新鲜水用量推断出'
                }
              ]
            },
            {
              name: '新鲜水用量',
              code: null,
              unit: '吨',
              isKeyIndicators: '0',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '750,040,000.00',
                  yoy: '-2.59%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '新鲜水用量',
                  indicatorPublish: '新鲜水用量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '75,004.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '769,950,000.00',
                  yoy: '-3.01%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '新鲜水用量',
                  indicatorPublish: '新鲜水用量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '76,995.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '793,830,000.00',
                  yoy: '-0.78%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '新鲜水用量',
                  indicatorPublish: '新鲜水用量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '79,383.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '800,050,000.00',
                  yoy: '1.12%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '新鲜水用量',
                  indicatorPublish: '新鲜水用量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '80,005.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '791,210,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '新鲜水用量',
                  indicatorPublish: '新鲜水用量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '79,121.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '用水强度',
          thirdClassificationDetails: [
            {
              name: '单位营收耗水量',
              code: null,
              unit: '千克/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '0.29',
                  yoy: '-27.94%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收耗水量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '0.40',
                  yoy: '26.23%',
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收耗水量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '0.32',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收耗水量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      classificationLevel: 3,
      classificationLevel2: '污染物',
      secondClassificationDetails: [
        {
          classificationLevel3: '废气',
          thirdClassificationDetails: [
            {
              name: '氮氧化物(NOx)',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '56,400.00',
                  yoy: '-27.32%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOX）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '5.64',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '77,600.00',
                  yoy: '-12.81%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOX）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '7.76',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '89,000.00',
                  yoy: '-7.87%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOX）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '8.90',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '96,600.00',
                  yoy: '-6.12%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOX）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '9.66',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '102,900.00',
                  yoy: '-8.70%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOX）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '10.29',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '112,700.00',
                  yoy: '-8.15%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOX）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '11.27',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '122,700.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '氮氧化物(NOx)',
                  indicatorPublish: '氮氧化物（NOx）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '12.27',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '二氧化硫(SO2)',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '11,100.00',
                  yoy: '-87.44%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1.11',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '88,400.00',
                  yoy: '-5.76%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '8.84',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '93,800.00',
                  yoy: '-9.81%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '9.38',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '104,000.00',
                  yoy: '-4.67%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '10.40',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '109,100.00',
                  yoy: '-11.44%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '10.91',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '123,200.00',
                  yoy: '-0.08%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '12.32',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '123,300.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '二氧化硫(SO2)',
                  indicatorPublish: '二氧化硫（SO2）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '12.33',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '废水',
          thirdClassificationDetails: [
            {
              name: '氨氮(NH3-N)',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2020,
                  value: '8,300.00',
                  yoy: '-4.60%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '氨氮(NH3-N)',
                  indicatorPublish: '氨氮（NH3-N）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '0.83',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '8,700.00',
                  yoy: '-13.00%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '氨氮(NH3-N)',
                  indicatorPublish: '氨氮（NH3-N）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '0.87',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '10,000.00',
                  yoy: '-7.41%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '氨氮(NH3-N)',
                  indicatorPublish: '氨氮（NH3-N）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '10,800.00',
                  yoy: '-5.26%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '氨氮(NH3-N)',
                  indicatorPublish: '氨氮（NH3-N）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1.08',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '11,400.00',
                  yoy: '-2.56%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '氨氮(NH3-N)',
                  indicatorPublish: '氨氮（NH3-N）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1.14',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '11,700.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '氨氮(NH3-N)',
                  indicatorPublish: '氨氮（NH3-N）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '1.17',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '化学需氧量(COD)',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '5,300.00',
                  yoy: '-77.45%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '0.53',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '23,500.00',
                  yoy: '-3.69%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '2.35',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '24,400.00',
                  yoy: '-5.06%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '2.44',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '25,700.00',
                  yoy: '-8.87%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '2.57',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '28,200.00',
                  yoy: '-0.70%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P79',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '2.82',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '28,400.00',
                  yoy: '-0.35%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '2.84',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '28,500.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '化学需氧量(COD)',
                  indicatorPublish: '化学需氧量（COD）排放量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '2.85',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      classificationLevel: 3,
      classificationLevel2: '废弃物',
      secondClassificationDetails: [
        {
          classificationLevel3: '废弃物',
          thirdClassificationDetails: [
            {
              name: '废弃物总量',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '3,999,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: null,
                  indicator: '废弃物总量',
                  indicatorPublish: '',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '',
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: '根据有害废弃物和无害废弃物加总得到'
                }
              ]
            },
            {
              name: '一般废弃物',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '2,603,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '一般废弃物',
                  indicatorPublish: '一般固体废物量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '260.30',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '有害废弃物',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '1,396,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '有害废弃物',
                  indicatorPublish: '危险废物量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨',
                  indicatorValuePublish: '139.60',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '废弃物排放强度',
          thirdClassificationDetails: [
            {
              name: '单位营收废弃物产生量',
              code: null,
              unit: '千克/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '15.30',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收废弃物产生量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '单位营收一般废弃物产生量',
              code: null,
              unit: '千克/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '9.96',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收一般废弃物产生量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '单位营收有害废弃物产生量',
              code: null,
              unit: '千克/万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '5.34',
                  yoy: null,
                  fileUrl: null,
                  fileType: null,
                  locationInDocument: null,
                  indicator: '单位营收有害废弃物产生量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '千克/万元',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '废弃物处置利用',
          thirdClassificationDetails: [
            {
              name: '危险废弃物安全处置率',
              code: null,
              unit: '%',
              isKeyIndicators: '0',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '100.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '危险废弃物安全处置率',
                  indicatorPublish: '危险废物合规处置率',
                  indicatorDisplayUnit: '%',
                  indicatorUnitPublish: '%',
                  indicatorValuePublish: '100.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '固废处置合规率',
              code: null,
              unit: '%',
              isKeyIndicators: '0',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '100.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P56',
                  indicator: '固废处置合规率',
                  indicatorPublish: '固体废物合法合规处置率达到',
                  indicatorDisplayUnit: '%',
                  indicatorUnitPublish: '%',
                  indicatorValuePublish: '100.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      classificationLevel: 2,
      classificationLevel2: '环保投入',
      secondClassificationDetails: [
        {
          classificationLevel3: '环保投入',
          thirdClassificationDetails: [
            {
              name: '环境保护投入',
              code: null,
              unit: '万元',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '216.00',
                  yoy: '-42.40%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P77',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护投入金额',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元',
                  indicatorValuePublish: '216.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '375.00',
                  yoy: '-91.44%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P91',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元',
                  indicatorValuePublish: '375.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '4,383.00',
                  yoy: '-9.81%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P91',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元',
                  indicatorValuePublish: '4,383.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '4,860.00',
                  yoy: '1346.43%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元',
                  indicatorValuePublish: '4,860.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2017,
                  value: '336.00',
                  yoy: '38.27%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P80',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元人民币',
                  indicatorValuePublish: '336.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2016,
                  value: '243.00',
                  yoy: '-97.39%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/20f9d543d56b1bda21474e9fca693712.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P62',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元人民币',
                  indicatorValuePublish: '243.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2015,
                  value: '9,295.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0db2f6841c61d92edb877950597b59f3.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P40',
                  indicator: '环境保护投入',
                  indicatorPublish: '环境保护',
                  indicatorDisplayUnit: '万元',
                  indicatorUnitPublish: '万元人民币',
                  indicatorValuePublish: '9,295.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      classificationLevel: 3,
      classificationLevel2: '更多环境绩效',
      secondClassificationDetails: [
        {
          classificationLevel3: '节能减排降碳',
          thirdClassificationDetails: [
            {
              name: '节约标准煤',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '700,000.00',
                  yoy: '-7.89%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P54',
                  indicator: '节约标准煤',
                  indicatorPublish: '节能量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '70.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '760,000.00',
                  yoy: '-2.56%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '节约标准煤',
                  indicatorPublish: '节能量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '76.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '780,000.00',
                  yoy: '-3.70%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P88',
                  indicator: '节约标准煤',
                  indicatorPublish: '节能量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '78.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '810,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '节约标准煤',
                  indicatorPublish: '节能量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万吨标准煤',
                  indicatorValuePublish: '81.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            },
            {
              name: '节水量',
              code: null,
              unit: '吨',
              isKeyIndicators: '1',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2021,
                  value: '9,690,000.00',
                  yoy: '2.65%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '节水量',
                  indicatorPublish: '节水量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '969.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2020,
                  value: '9,440,000.00',
                  yoy: '-3.67%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '节水量',
                  indicatorPublish: '节水量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '944.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '9,800,000.00',
                  yoy: '-8.92%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/4/1/50e13b32eaa7b513add4a0b0051e922c.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P89',
                  indicator: '节水量',
                  indicatorPublish: '节水量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '980.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2018,
                  value: '10,760,000.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P75',
                  indicator: '节水量',
                  indicatorPublish: '节水量',
                  indicatorDisplayUnit: '吨',
                  indicatorUnitPublish: '万立方米',
                  indicatorValuePublish: '1,076.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                }
              ]
            }
          ]
        },
        {
          classificationLevel3: '矿山资源',
          thirdClassificationDetails: [
            {
              name: '绿色矿山数量',
              code: null,
              unit: '座',
              isKeyIndicators: '0',
              helpIcon: '0',
              annotation: null,
              historicalTrend: '1',
              isBlankLine: false,
              isTraceSource: '1',
              values: [
                {
                  year: 2020,
                  value: '47.00',
                  yoy: '193.75%',
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/5d3f4ec73b49e07cf1b1db0fc68eaa0b.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P43',
                  indicator: '绿色矿山数量',
                  indicatorPublish: '入选全国绿色矿山名录',
                  indicatorDisplayUnit: '座',
                  indicatorUnitPublish: '家',
                  indicatorValuePublish: '47.00',
                  calcIndicatorRemark: null,
                  contentDescription: null
                },
                {
                  year: 2019,
                  value: '16.00',
                  yoy: null,
                  fileUrl: 'http://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/80a20a3e10bcf282661fb0767af04ded.pdf',
                  fileType: 'pdf',
                  locationInDocument: 'P46',
                  indicator: '绿色矿山数量',
                  indicatorPublish: null,
                  indicatorDisplayUnit: '座',
                  indicatorUnitPublish: null,
                  indicatorValuePublish: null,
                  calcIndicatorRemark: null,
                  contentDescription: '根据4家示范企业和12家油气生产单位通过了国家和地方绿色矿山建设验收推断出'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  yearsData = [2021, 2020, 2019, 2018, 2017, 2016, 2015]
} = defineProps<Props>();

const tableData: any[] = $ref([]);

// 整理为 table 所需数据格式
value.forEach(({ classificationLevel2, secondClassificationDetails, classificationLevel }) => {
  tableData.push({
    name: classificationLevel2,
    unit: ' ',
    level: 1
  });
  secondClassificationDetails.forEach((item) => {
    // 只有一级副标题的不 push 进去
    if (classificationLevel !== 2) {
      tableData.push({
        name: item.classificationLevel3,
        unit: ' ',
        level: 2
      });
    }

    item.thirdClassificationDetails?.forEach((subItem) => {
      tableData.push(subItem);
    });
  });
});

let columns = $ref<ColumnsProps[]>([
  {
    title: '指标',
    fixed: true,
    width: 120,
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
    title: '单位',
    align: 'left',
    dataIndex: 'unit',
    cellClassName: 'unit-cell'
  }
]);

yearsData.forEach((item) => {
  columns.push({
    title: item + '年',
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
  // theadThHeight: '32px',
  theadBackground: '#f9f9f9',
  theadPadding: '7.5px 10px',
  theadFontSize: '13px',
  theadColor: '#111',

  // tbodyTrHeight: '32px',
  tbodyBackground: '#fff',
  tbodyPadding: '7.5px 10px',
  tbodyFontSize: '14px',
  tbodyColor: '#111'
};
</script>

<template>
  <config-provider :themeVars="tableInitStyle">
    <vft-table :tableData="tableData" :columns="columns">
      <template v-if="yearsData?.length > 2" #thead-right>
        <span class="showAngle" />
      </template>
    </vft-table>
  </config-provider>
</template>

<style scoped lang="less">
:deep(.vft-table) {
  .title {
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
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
