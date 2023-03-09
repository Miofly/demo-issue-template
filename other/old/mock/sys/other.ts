/* eslint-disable */
import type { MockMethod } from '../../plugin/vite-mock';
import { resultSuccess, addPrefix } from '../_util';

const prefixUrl = '/ep-query';

const Api = {
  /** 热门搜索 */
  hotCompany: '/hotCompany',
  search: '/search',
  /** 企业动态 */
  enterpriseDynamics: '/event/v2/companyEvent',
  /** 环境监督 */
  environmentalSupervision: '/v2/hbSubject/getHbSubjectF9',
  companyEsg: '/companyEsg',
  /** esg争议事件 */
  getEsgEventF9: '/getEsgEventF9',
  /** esg争议事件code */
  esgEventCodes: '/v2/esgEvent/statistics',
  /** 环保处罚 */
  getPunishData: '/getPenaltyF9'
};

addPrefix(Api, prefixUrl);

const hotData = [
  {
    id: 'wZzgfeLYkWjBZc2NQ67nJw==',
    name: '中国石油天然气股份有限公司',
    shortName: '中国石油'
  },
  {
    id: 'VEBfHcPZP2FLfVqPsQ49SQ==',
    name: '安徽海螺水泥股份有限公司',
    shortName: '海螺水泥'
  },
  {
    id: '11W+SUnQOHp4qwRW7bCfkw==',
    name: '比亚迪股份有限公司',
    shortName: '比亚迪'
  },
  {
    id: '8+006c4Vj2HYMA7dSsF4lw==',
    name: '华能国际电力股份有限公司',
    shortName: '华能国际'
  },
  {
    id: 'XK1gv5aDgLCfd2+CidpCJw==',
    name: '马鞍山钢铁股份有限公司',
    shortName: '马钢股份'
  },
  {
    id: 'oMNVpeq+d75Ff39V5Np9+w==',
    name: '紫金矿业集团股份有限公司',
    shortName: '紫金矿业'
  },
  {
    id: 'r7wEDXAOZkMKrW0a0k9wTQ==',
    name: '中国农业银行股份有限公司',
    shortName: '农业银行'
  },
  {
    id: 'keYsw2oDc4zViVcEY4T6Mg==',
    name: '新疆天山水泥股份有限公司',
    shortName: '天山股份'
  },
  {
    id: 'w3HTiZdj/rgqEGxGO5XaLA==',
    name: '中国铝业股份有限公司',
    shortName: '中国铝业'
  },
  {
    id: 'yQKraI2SWzidWujv7M3+Lg==',
    name: '福莱特玻璃集团股份有限公司',
    shortName: '福莱特'
  }
];
const searchData = {
  total: 1099,
  limit: 20,
  offset: 0,
  items: [
    {
      id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>集团控股有限公司',
      shortName: '阿里巴巴',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        },
        {
          id: null,
          name: '港股',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        },
        {
          id: null,
          name: '中概股',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        }
      ],
      securities: [
        {
          id: 'BABA',
          type: 'Stock',
          name: '阿里巴巴'
        },
        {
          id: '09988',
          type: 'Stock',
          name: '阿里巴巴-SW'
        }
      ],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '股票名称',
          value: '<em>阿里巴巴</em>'
        }
      ]
    },
    {
      id: '76UBua8gRZA096teUYAgHg==',
      name: '浙江<em>阿</em><em>里</em><em>巴</em><em>巴</em>小额贷款股份有限公司',
      shortName: '阿里巴巴小贷',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        },
        {
          id: null,
          name: '发债企业',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>小贷'
        }
      ]
    },
    {
      id: 'AFk0QYn5bo59a0oPZYALfg==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>影业集团有限公司',
      shortName: '阿里影业',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        },
        {
          id: null,
          name: '港股',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        }
      ],
      securities: [
        {
          id: '01060',
          type: 'Stock',
          name: '阿里影业'
        }
      ],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '股票名称',
          value: '<em>阿</em><em>里</em>影业'
        }
      ]
    },
    {
      id: 'y7gqUqgCVwg52+2XCF6OqQ==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>网络有限公司',
      shortName: '阿里网络',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [
        {
          id: '01688',
          type: 'Stock',
          name: '阿里巴巴'
        }
      ],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '股票名称',
          value: '<em>阿里巴巴</em>'
        }
      ]
    },
    {
      id: 'KYXxs+s4+Yq8ANbHzn/Btw==',
      name: '重庆市蚂蚁商诚小额贷款有限公司',
      shortName: '重庆蚂蚁商诚',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        },
        {
          id: null,
          name: '发债企业',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '曾用名',
          value: '重庆市<em>阿</em><em>里</em><em>巴</em><em>巴</em>小额贷款有限公司'
        }
      ]
    },
    {
      id: '+gaSwNzoPRG3iU7MPRqn2g==',
      name: '杭州<em>阿</em><em>里</em><em>巴</em><em>巴</em>网络科技有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'kOx+Nl6Qj84DcuMvnUPJog==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>(中国)网络技术有限公司',
      shortName: '阿里巴巴网络',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>网络'
        }
      ]
    },
    {
      id: 'GYgvvZNuY3RYQHof6uv9KA==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>信息港(乌兰察布)有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'oQXVwrZZLLzoqckPYqCSmw==',
      name: '乌市<em>阿</em><em>里</em><em>巴</em><em>巴</em>商行生猛海鲜活鱼经销部',
      shortName: null,
      labels: [
        {
          id: null,
          name: '吊销',
          description: null,
          color: '#EE5133',
          bgColor: '#FBEEEC'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'p5X90uSaPtCcCz4SezO9lw==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>江苏信息科技有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'MnnbUjsYqjrspka3OH9qww==',
      name: '北京<em>阿</em><em>里</em><em>巴</em><em>巴</em>信息技术有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '注销',
          description: null,
          color: '#EE5133',
          bgColor: '#FBEEEC'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'G5K2bNEj4wuX6vjSU5zAUA==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>(张家口)信息科技有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '曾用名',
          value: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>京西信息科技有限公司'
        }
      ]
    },
    {
      id: 'rYkgK/RBJ3X7N7GJn/Wlhg==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>文化娱乐有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'c5oafXPGgu9629wCdVwIPw==',
      name: '北京<em>阿</em><em>里</em><em>巴</em><em>巴</em>影业文化有限公司',
      shortName: '',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'amt29tdDdY6MzCMpOvqwTQ==',
      name: '海南<em>阿</em><em>里</em><em>巴</em><em>巴</em>影业文化产业基金合伙企业(有限合伙)',
      shortName: '阿里巴巴影业基金',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>影业基金'
        }
      ]
    },
    {
      id: 'iBu2u/ajwXQSCWfVJYdJAw==',
      name: '深圳<em>阿</em><em>里</em><em>巴</em><em>巴</em>科技有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'Mj3FitWUdErXMHy4VpRbBA==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>(上海)物联网技术有限公司',
      shortName: '阿里巴巴(上海)物联网',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        },
        {
          id: null,
          name: '国有企业',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>(上海)物联网'
        }
      ]
    },
    {
      id: 'J30ZAB9l7vUIf4VHTHk+1A==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>文化传媒有限公司',
      shortName: '阿里巴巴文化传媒',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>文化传媒'
        }
      ]
    },
    {
      id: '+Z96m3VUiPkDe7K2wcGf4A==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>迅犀(宿州)数字科技有限公司',
      shortName: '宿州阿里巴巴迅犀',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '宿州<em>阿</em><em>里</em><em>巴</em><em>巴</em>迅犀'
        }
      ]
    },
    {
      id: 'BJFUd8gCU9lQWQXOPFmg8A==',
      name: '<em>阿</em><em>里</em><em>巴</em><em>巴</em>信息港(江苏)有限公司',
      shortName: '江苏阿里巴巴信息港',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '江苏<em>阿</em><em>里</em><em>巴</em><em>巴</em>信息港'
        }
      ]
    },
    {
      id: 'SrG9V7udkKwLOmiZq+BBSw==',
      name: '<em>株式会社D</em>MM.com证券',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'vdohpviwjLNk1PvBcSRO9A==',
      name: '<em>溋德</em>商业保理股份有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'NedInSOQiAre8DU+K6ZI0g==',
      name: '<em>德国投资与开发有限公司(D</em>EG)',
      shortName: '德国投资开发',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'Tn3RnJZTSDHt/ottny5fnQ==',
      name: '<em>ＳＴＸ(大</em>连)投资有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'BFRA/WjGebcvZMaJfL3kBw==',
      name: '<em>《党</em>的生活》杂志社工会委员会',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'HbH8+EpyB+Kp4W7qMjMltg==',
      name: '<em>ＳＴＸ(大</em>连)造船有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'qx72xWHC1CgSkfibb1/zxA==',
      name: '<em>ＳＴＸ(大</em>连)发动机有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'N9TBjsVACgcBnl2K0wIzew==',
      name: '<em>ＳＴＸ(大</em>连)重工有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'FLx+UxLD2B7gTp/byn6Gpg==',
      name: '<em>重庆罗森便利店有限公司东原D</em>7店',
      shortName: null,
      labels: [
        {
          id: null,
          name: '注销',
          description: null,
          color: '#EE5133',
          bgColor: '#FBEEEC'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'e66vudAgfRkYtrz91+OaMw==',
      name: '<em>ＳＴＸ(大</em>连)海洋重工有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'g1GSJFUlktzhVirW90iACQ==',
      name: '<em>大连双D高科产业发展有限公司</em>',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        },
        {
          id: null,
          name: '国有企业',
          description: null,
          color: '#15B4F1',
          bgColor: '#EDFAFF'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'Sx8Z7SYknfiuqnXsAZihiw==',
      name: '<em>株式会社D</em>EGE CONSULTING',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'XQGJYl8hQa8OqBABv99BuA==',
      name: '<em>ＳＴＸ(大</em>连)金属有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'QS7kZ35AIUqpgjU0VGXVUw==',
      name: '<em>ＳＴＸ(大</em>连)商务有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'GMGGrZJp3ZJCEt/9VFLqPg==',
      name: '<em>《当</em>代陕西》杂志社',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'vT+Xhkn14eemsM/qRHbxBw==',
      name: '<em>韶关发电D厂有限公司</em>',
      shortName: '韶关D厂',
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: [
        {
          label: '公司简称',
          value: '<em>韶关D厂</em>'
        }
      ]
    },
    {
      id: '8h0hr9wI6hk6HMPBZbHiFQ==',
      name: '<em>《锻</em>造与冲压》杂志社有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'P4U5L5FshnED8o9woRTT1A==',
      name: '<em>ＳＴＸ(大</em>连)重型装备有限公司',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'yZpwdtzPB4KP3WlzGe9d2w==',
      name: '<em>《党</em>的生活》杂志社',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    },
    {
      id: 'odAYY5HJH0wEszjZZC8a8w==',
      name: '<em>山西省畜牧遗传育种中心(山西省奶牛生产性能(D</em>HI)测定管理站)',
      shortName: null,
      labels: [
        {
          id: null,
          name: '在营',
          description: null,
          color: '#2FAF83',
          bgColor: '#F4FBF1'
        }
      ],
      securities: [],
      follow: false,
      groupIds: null,
      matches: []
    }
  ]
};
const qydtData = {
  total: 87,
  limit: 0,
  offset: 0,
  items: [
    {
      id: '5_9uaR8omWto5W6GboOApvyw==',
      title: '国家电投集团“三网融合”引入阿里等战略合作伙伴',
      date: 1665971820000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#乡村振兴',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        },
        {
          id: '75UEbTqAHdleTdN2A57lYw==',
          name: '京东集团股份有限公司',
          shortName: '京东集团',
          followInfo: {
            followed: false,
            group: null
          }
        },
        {
          id: 'rpDj/5At7L+PiqxwcDBX9A==',
          name: '国家电力投资集团有限公司',
          shortName: '国家电投集团',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '科创板日报',
      newsUrl: 'https://www.chinastarmarket.cn/detail/1156501',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/10/17/3c19ce667175bcfb1b4063d1895ffbe4.zlib',
      fileType: 'zip'
    },
    {
      id: '5_qNjuXDzK2+jzsQJ69CfENg==',
      title: '阿里“村播计划”助力乡村振兴 11万农民主播带动农产品销售超50亿',
      date: 1665705000000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#乡村振兴',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '长江商报',
      newsUrl: 'http://www.changjiangtimes.com/2022/10/626570.html',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/10/14/5d6800ead7d4f25ba348b1ed7084bc69.zlib',
      fileType: 'zip'
    },
    {
      id: '5_Rs+RXNTsP3vWhHtsD+fRaw==',
      title: '阿里巴巴新家采用光伏系统！',
      date: 1665395880000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#绿色电力',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '光伏产业网官微',
      newsUrl:
        'https://mp.weixin.qq.com/s?__biz=MzI5MTQzMTY0OQ==&mid=2247552302&idx=3&sn=3d7f877f2460c280354623ae6eae3266&chksm=ec12f8a0db6571b6e6fb0bac19c93d0d5fe799c9966003f7dbc69c9803a248d86354fe1764cf#rd',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/10/10/af614eb8df6a338be04cc3ed492c19b6.zlib',
      fileType: 'zip'
    },
    {
      id: '5_O/JA2jF+GTp0hKOSAcZ//Q==',
      title: '“热土丰收节”阿里公益直播盛典收官 万名村播庆丰收',
      date: 1664179860000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#慈善公益',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '金融界',
      newsUrl: 'http://finance.jrj.com.cn/tech/2022/09/26161137021620.shtml',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/26/2525c330f64446fa659864e10f08820b.zlib',
      fileType: 'zip'
    },
    {
      id: '5_N6BIsEZA5kWvyI3pHoYQ7w==',
      title: '数字化如何从餐桌走向土地？专家热议阿里巴巴助农',
      date: 1664178420000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#乡村振兴',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '南方都市报',
      newsUrl: 'https://www.toutiao.com/article/7147591921735729671/',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/26/cfab31b6848d0225d705fa3210d7c68d.zlib',
      fileType: 'zip'
    },
    {
      id: '5_tAp83f+cGhJse8hiRVJwKw==',
      title: 'ESG风潮来袭 红星美凯龙“内外兼修”打造绿色家居业态',
      date: 1663913700000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#绿色产品',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        },
        {
          id: 'vSAXzW9TUrMZwnM6P9m5lA==',
          name: '红星美凯龙家居集团股份有限公司',
          shortName: '美凯龙',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '中新经纬',
      newsUrl: 'https://www.toutiao.com/article/7146455062578594311/',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/23/088d22476e43d7662f8764ef8ce23a76.zlib',
      fileType: 'zip'
    },
    {
      id: '5_tjipNEVDfVOkQZN7yzGHEA==',
      title: '彭博新能源发布2022中国企业绿电采购排行榜！太原钢铁、阿里巴巴上榜采购排行！',
      date: 1663320840000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#新能源',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        },
        {
          id: null,
          name: '#绿色电力',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        },
        {
          id: 'UwAWpcPorg1oePSDssIH/w==',
          name: '鞍山钢铁集团有限公司',
          shortName: '鞍山钢铁集团',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '北极星电力网',
      newsUrl: 'https://news.bjx.com.cn/html/20220916/1255529.shtml',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/16/0f0bfaa2736e41fa336b22fda413ff2d.zlib',
      fileType: 'zip'
    },
    {
      id: '5_HtrlmEba/N0rmvh6p+nDFg==',
      title: '2022中国企业绿电采购排行榜发布 阿里蝉联科技行业第一',
      date: 1663306020000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#绿色电力',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '格隆汇',
      newsUrl: 'https://www.gelonghui.com/live/',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/16/186e4cd27344f79ace56b66365e9f7ef.zlib',
      fileType: 'zip'
    },
    {
      id: '5_BewzCzdyUCzel78MONlyTg==',
      title: '阿里95公益周百余活动共推人人公益 超2亿颗爱的种子激发更多公益果实',
      date: 1663284180000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#慈善公益',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '长江商报',
      newsUrl: 'http://www.changjiangtimes.com/2022/09/626070.html',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/16/5388e2a90310a0eee95780524222dea1.zlib',
      fileType: 'zip'
    },
    {
      id: '5_fdnT3NtNUwmMf/Tn7A+Ikg==',
      title: '阿里和腾讯，做公益“卷”起来，挺好',
      date: 1663236180000,
      bizType: '1',
      labels: [
        {
          id: null,
          name: '#慈善公益',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      related: [
        {
          id: 'Gm+DBxF1BUzK2E3WNwj0OA==',
          name: '阿里巴巴集团控股有限公司',
          shortName: '阿里巴巴',
          followInfo: {
            followed: false,
            group: null
          }
        },
        {
          id: 'vfbZe0f+gxqfZteow2Stng==',
          name: '腾讯控股有限公司',
          shortName: '腾讯控股',
          followInfo: {
            followed: false,
            group: null
          }
        }
      ],
      follow: false,
      source: '和讯网',
      newsUrl: 'http://news.hexun.com/2022-09-15/206769439.html',
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/NEWS/2022/9/16/8ff868553e2eb319264f362a7be09eda.zlib',
      fileType: 'zip'
    }
  ]
};
const esgData = {
  total: 38,
  values: [
    {
      id: '1_iB7wX5FnNv7iOnDkDnIpDA==',
      bizType: '1',
      eventTitle: '阿里3个月裁掉1万人',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1659888000000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '首席财经观察',
      eventProcess: [
        {
          newsId: '5_53530',
          noticeDate: '2022-08-08',
          url: 'https://mp.weixin.qq.com/s?__biz=MzIwMDQzNjI4Mg==&mid=2654463120&idx=2&sn=36801a754120d514d876236647edac0f&chksm=8d3e7bc5ba49f2d3c9af9a3466f46e709441a99f6eaac2752fe450563002885f7a8612356c2a#rd',
          fileType: null,
          title: '3个月裁掉1万人，阿里怎么了'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_QsnlL/gNP1NA+ITrvFZQyA==',
      bizType: '1',
      eventTitle: '阿里巴巴国际站召回多款问题商品',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1659456000000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#产品质量',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '亿邦动力网',
      eventProcess: [
        {
          newsId: '5_52854',
          noticeDate: '2022-08-03',
          url: 'https://www.ebrun.com/ebrungo/zb/494565.shtml',
          fileType: null,
          title: '阿里巴巴国际站召回多款问题商品 涉及救生衣玩具'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_xSs61S4ipZdQIq+SJBDxww==',
      bizType: '1',
      eventTitle: '阿里巴巴战略投资部门裁员三分之一',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1657728000000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '手机凤凰网',
      eventProcess: [
        {
          newsId: '5_54186',
          noticeDate: '2022-08-11',
          url: 'https://baijiahao.baidu.com/s?id=1740838776650375208&wfr=spider&for=pc',
          fileType: null,
          title: '阿里战投传出裁员的计划，裁员针对中国内地，涉及了40多名员工'
        },
        {
          newsId: '5_49722',
          noticeDate: '2022-07-14',
          url: 'https://finance.ifeng.com/c/8HeEkKgKb9G',
          fileType: null,
          title: '交易撮合放缓，消息称阿里巴巴战略投资部门裁员三分之一'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_3YGAFdM7T5cHhtgcjXbE9w==',
      bizType: '1',
      eventTitle: '阿里被指泄露游戏后台代码',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1657468800000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#隐私保护',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '凤凰网',
      eventProcess: [
        {
          newsId: '5_50093',
          noticeDate: '2022-07-11',
          url: 'https://tech.ifeng.com/c/8HZBjj6fnHB',
          fileType: null,
          title: '阿里被指泄露游戏后台代码'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_U27oDVqEi5/GxxvPDwe5cA==',
      bizType: '1',
      eventTitle: '阿里巴巴旗下网站被店主投诉',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1654876800000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#投诉维权',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '潇湘晨报',
      eventProcess: [
        {
          newsId: '5_42391',
          noticeDate: '2022-06-11',
          url: 'https://baijiahao.baidu.com/s?id=1735267831745305598&wfr=spider&for=pc',
          fileType: null,
          title: '网店被封，竟是网站“埋雷”？阿里巴巴旗下网站被店主投诉「新闻三剑客」'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_ioIgTnLbYyFoO/q7rpRRSg==',
      bizType: '1',
      eventTitle: '阿里被曝裁员多在P7左右',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1652803200000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '科技每日推送',
      eventProcess: [
        {
          newsId: '5_43448',
          noticeDate: '2022-05-28',
          url: 'https://mp.weixin.qq.com/s?__biz=MzA5ODY2MjQxNA==&mid=2651810158&idx=3&sn=7bfac95a0f8fee24c3f4182408410ec2&chksm=8b75e80fbc02611988246db7582583b5f40a694e9ba1b8d9cf5b02778fe0f95ccce68df5c076#rd',
          fileType: null,
          title: '阿里巴巴财报证实裁员4375人  纽约时报： 中国卖家从亚马逊“撤退”？'
        },
        {
          newsId: '5_36361',
          noticeDate: '2022-05-27',
          url: 'https://www.time-weekly.com/post/292297',
          fileType: null,
          title: '裁员风波笼罩，阿里一季度员工减少4000人，戴珊、蒋凡首份成绩单逊色'
        },
        {
          newsId: '5_34598',
          noticeDate: '2022-05-20',
          url: 'http://www.thepaper.cn/newsDetail_forward_18187628',
          fileType: null,
          title: '持续性业务调整？阿里被曝多个板块裁员，春招规模大幅缩水'
        },
        {
          newsId: '5_33458',
          noticeDate: '2022-05-18',
          url: 'https://mp.weixin.qq.com/s?__biz=MjM5NzAwNzMyMA==&mid=2660041183&idx=1&sn=1ac267053971d04b5a9c9d67c56e3a9c&chksm=bd993b688aeeb27e3c0b1563f6a82d12d00216966b34c1b06b5028bbaf6e128aae4c2ffc44f5#rd',
          fileType: null,
          title: '阿里被曝大裁员，一代新人胜旧人'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_0JeV89V0bTVvnGJbPKIyrg==',
      bizType: '1',
      eventTitle: '阿里巴巴对俄罗斯速卖通业务裁员40%',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1652457600000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '凤凰网',
      eventProcess: [
        {
          newsId: '5_44935',
          noticeDate: '2022-05-14',
          url: 'https://tech.ifeng.com/c/8G05sDQUBFo',
          fileType: null,
          title: '阿里巴巴对俄罗斯速卖通业务裁员40%'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_zCI0gZnv6COH3gRhURkzxw==',
      bizType: '1',
      eventTitle: '阿里达摩院计划裁员30%',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1650470400000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '芯榜',
      eventProcess: [
        {
          newsId: '5_35002',
          noticeDate: '2022-05-24',
          url: 'https://view.inews.qq.com/a/20220520A0DOQC00',
          fileType: null,
          title: '副院长离职揭开阿里达摩院真实情况：3年1000亿的谎言破灭了'
        },
        {
          newsId: '5_29489',
          noticeDate: '2022-04-21',
          url: 'https://baijiahao.baidu.com/s?id=1730699797009757886&wfr=spider&for=pc',
          fileType: null,
          title: '阿里达摩院裁员30%！贾扬清咋看？'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_+S1Az/OUlLb3HZj0uHnJ4g==',
      bizType: '1',
      eventTitle: '阿里MMC事业部计划裁员20%',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1646755200000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '壹览商业',
      eventProcess: [
        {
          newsId: '5_23671',
          noticeDate: '2022-03-13',
          url: 'https://www.toutiao.com/i7074610948857709068/',
          fileType: null,
          title: '终于！这次是真的了！阿里大裁员'
        },
        {
          newsId: '5_24591',
          noticeDate: '2022-03-09',
          url: 'https://baijiahao.baidu.com/s?id=1726817137881539588&wfr=spider&for=pc',
          fileType: null,
          title: '阿里MMC事业部计划裁员20%'
        }
      ],
      relatedCompany: []
    },
    {
      id: '1_ayUq4KDv1FjKCLywAz5Ekg==',
      bizType: '1',
      eventTitle: '阿里裁员两万上热搜',
      riskLabel: {
        id: null,
        name: '一般',
        description: null,
        color: '#5C84D2',
        bgColor: '#EDF2FA'
      },
      eventDate: 1637769600000,
      eventUrl: null,
      fileUrl: null,
      fileType: null,
      eventTypeLabels: [
        {
          id: null,
          name: '#降薪裁员',
          description: null,
          color: '#8B8C8C',
          bgColor: '#f8f8f8'
        }
      ],
      source: '大龙评谈',
      eventProcess: [
        {
          newsId: '5_11964',
          noticeDate: '2021-11-25',
          url: 'https://baijiahao.baidu.com/s?id=1717305070752598974&wfr=spider&for=pc',
          fileType: null,
          title: '阿里裁员两万上热搜，传统电商拐点来临吗？'
        }
      ],
      relatedCompany: []
    }
  ]
};
const esgEventData = [
  {
    code: '20',
    name: '社会责任',
    level: null,
    count: 28,
    values: [
      {
        code: '2003',
        name: '降薪裁员',
        level: 2,
        count: 8,
        values: []
      },
      {
        code: '2006',
        name: '危害弱势群体',
        level: 2,
        count: 2,
        values: []
      },
      {
        code: '2009',
        name: '产品质量',
        level: 2,
        count: 2,
        values: []
      },
      {
        code: '2012',
        name: '数据安全',
        level: 2,
        count: 4,
        values: []
      },
      {
        code: '2013',
        name: '隐私保护',
        level: 2,
        count: 3,
        values: []
      },
      {
        code: '2014',
        name: '不正当竞争',
        level: 2,
        count: 4,
        values: []
      },
      {
        code: '2005',
        name: '卫生健康',
        level: 2,
        count: 2,
        values: []
      },
      {
        code: '2010',
        name: '投诉维权',
        level: 2,
        count: 2,
        values: []
      },
      {
        code: '2011',
        name: '知识产权',
        level: 2,
        count: 1,
        values: []
      }
    ]
  },
  {
    code: '30',
    name: '公司治理',
    level: null,
    count: 10,
    values: [
      {
        code: '3005',
        name: '贪污腐败',
        level: 2,
        count: 4,
        values: []
      },
      {
        code: '3004',
        name: '高管负面',
        level: 2,
        count: 3,
        values: []
      },
      {
        code: '3001',
        name: '监管措施',
        level: 2,
        count: 1,
        values: []
      },
      {
        code: '3002',
        name: '违规违纪',
        level: 2,
        count: 1,
        values: []
      },
      {
        code: '3009',
        name: '违规经营',
        level: 2,
        count: 1,
        values: []
      }
    ]
  }
];
const hjjd = [
  {
    total: 3,
    values: [
      {
        id: 'FedlN9vlN0po+JAZTPEt9Q==',
        companyId: 'e4mHdwRMXv9hHrz+GNy7PQ==',
        companyName: '浙江鑫旺食品有限公司',
        parentCompanyId: null,
        tags: [],
        hbTags: ['清洁生产审核企业'],
        province: '浙江',
        city: '舟山',
        country: '普陀区',
        industryCategory: '水产品加工',
        businessTermStartDate: '2005-06-14',
        registeredCapital: '3000.00',
        registeredCapitalUnit: '万人民币元',
        highlight: {},
        noticeDate: '2022-10-12',
        fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/10/20/9cea3a21543cb48c513f1c1e4801d794.zlib',
        fileType: 'zip',
        tagName: '舟山市普陀区2022年水环境重点排污单位',
        evaluationType: '水环境',
        keyMonitorCompanyType: null,
        evaluationResult: null,
        completeState: null,
        tagYear: 2022,
        dataSource: '舟山市普陀区人民政府',
        postLevel: '区县级',
        postAgency: '舟山市普陀区生态环境分局',
        isRemoved: false
      },
      {
        id: 'gsAXa54JxpS1nfzRKkS1dw==',
        companyId: 'e4mHdwRMXv9hHrz+GNy7PQ==',
        companyName: '浙江鑫旺食品有限公司',
        parentCompanyId: null,
        tags: [],
        hbTags: ['清洁生产审核企业'],
        province: '浙江',
        city: '舟山',
        country: '普陀区',
        industryCategory: '水产品加工',
        businessTermStartDate: '2005-06-14',
        registeredCapital: '3000.00',
        registeredCapitalUnit: '万人民币元',
        highlight: {},
        noticeDate: '2022-05-10',
        fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/5/16/656ecca3392ea63f120e82a5b4369870.xlsx',
        fileType: 'excel',
        tagName: '浙江省2022年水环境重点排污单位',
        evaluationType: '水环境',
        keyMonitorCompanyType: null,
        evaluationResult: null,
        completeState: null,
        tagYear: 2022,
        dataSource: '浙江省生态环境厅',
        postLevel: '省级',
        postAgency: '浙江省生态环境厅',
        isRemoved: false
      },
      {
        id: 'Aa7U/qmD9NWzwnkfLWOPmQ==',
        companyId: 'e4mHdwRMXv9hHrz+GNy7PQ==',
        companyName: '浙江鑫旺食品有限公司',
        parentCompanyId: null,
        tags: [],
        hbTags: ['清洁生产审核企业'],
        province: '浙江',
        city: '舟山',
        country: '普陀区',
        industryCategory: '水产品加工',
        businessTermStartDate: '2005-06-14',
        registeredCapital: '3000.00',
        registeredCapitalUnit: '万人民币元',
        highlight: {},
        noticeDate: '2022-03-23',
        fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/9/26/f4fd84c60f59f79b4c7f76448d50226b.zlib',
        fileType: 'zip',
        tagName: '舟山市2022年水环境重点排污单位',
        evaluationType: '水环境',
        keyMonitorCompanyType: null,
        evaluationResult: null,
        completeState: null,
        tagYear: 2022,
        dataSource: '舟山市人民政府',
        postLevel: '市级',
        postAgency: '舟山市生态环境局',
        isRemoved: false
      }
    ],
    removeNum: null
  },
  {
    total: 1,
    values: [
      {
        id: 'zC8kH8gjFBpd+NTUqzafbQ==',
        companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
        companyName: '中国石油天然气股份有限公司',
        parentCompanyId: null,
        tags: ['上市'],
        hbTags: ['重点排污单位'],
        province: '北京',
        city: null,
        country: '东城区',
        industryCategory: '石油开采',
        businessTermStartDate: '1999-11-05',
        registeredCapital: '18302097.78',
        registeredCapitalUnit: '万人民币元',
        highlight: {},
        noticeDate: '2020-11-24',
        fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/baa248891013e61afe06289f30e161ec.zlib',
        fileType: 'zip',
        evaluationResult: '绿色',
        tagYear: 2020,
        postAgency: '山东省环境保护厅',
        tagNegative: 2,
        rateChangeTrend: 2,
        tagName: '山东省2020年环境信用评价绿色企业'
      }
    ],
    removeNum: null
  }
];
const publishData = {
  total: 14,
  values: [
    {
      id: 'vpjl/YWY/0P6B8zl8GmARg==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2020-12-09',
      penaltyDate: '2020-12-07',
      title: '中国石油天然气股份有限公司山东济南销售分公司308国道与鸿兴路交叉口东北角加油站',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '2.00',
      currency: 'CNY',
      reasonForViolation: '其他类环境违法行为，大气污染防治类',
      documentNumber: '济环罚字〔2020〕TQ第Q-4008号',
      competentDepartment: '济南市生态环境保护综合行政执法支队天桥大队',
      relevantLaw: '《中华人民共和国大气污染防治法》',
      relevantLaws: [
        {
          lawTitle: '中华人民共和国大气污染防治法',
          lawName: '《中华人民共和国大气污染防治法》',
          hierarchicalCode: null,
          lawUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/TEST/laws/content/ep_laws_b8c37e33defde51cf91e1e03e51657da_1.zlib',
          catalogueUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/TEST/laws/catalogue/ep_laws_b8c37e33defde51cf91e1e03e51657da_2.zlib'
        }
      ],
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/97f3ce6cde7f932f68c1ff09a60b95ee.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '处罚类别:罚款；处罚内容:处罚款贰万元整',
      violationReasonSummary: null,
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: 'IVaUFZ2IArwhydEUcCkHyg==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2019-12-24',
      penaltyDate: null,
      title: '德惠市环境保护局行政处罚决定书（中国石油天然气股份有限公司吉林长春销售分公司德惠经营处）德环罚字【2019】0013号',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '54.00',
      currency: 'CNY',
      reasonForViolation: '其他类环境违法行为，水污染防治类',
      documentNumber: '德环罚字【2019】0013号',
      competentDepartment: '德惠市环保局',
      relevantLaw: '《中华人民共和国水污染防治法》',
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/11850f7f45c42b9791185c77ac23546a.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '我局决定对你（单位）处以如下行政处罚，罚款（大写），人民币伍拾肆万元整',
      violationReasonSummary: null,
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: '8IB9AYc5CKpUbMu4CkA9Aw==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2019-12-11',
      penaltyDate: '2019-12-05',
      title: '穗番环罚〔2019〕156号中国石油天然气股份有限公司',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '8.00',
      currency: 'CNY',
      reasonForViolation: '其他类环境违法行为，水污染防治类',
      documentNumber: '穗番环罚〔2019〕156号',
      competentDepartment: '广州市生态环境局',
      relevantLaw: '《中华人民共和国水污染防治法》',
      relevantLaws: [
        {
          lawTitle: '中华人民共和国水污染防治法(2008修订)',
          lawName: '《中华人民共和国水污染防治法(2008修订)》',
          hierarchicalCode: null,
          lawUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/TEST/laws/content/ep_laws_f7e6c85504ce6e82442c770f7c8606f0_1.zlib',
          catalogueUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/TEST/laws/catalogue/ep_laws_f7e6c85504ce6e82442c770f7c8606f0_2.zlib'
        }
      ],
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/9cbed98208c76818bf5ebc02ed268c9b.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '罚款:8.0（万元）,其他行政处罚:责令该单位限期一个月内完成地下油罐改造工作',
      violationReasonSummary: null,
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: '3FuQXMPsDWeVhjfsbomWVA==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2019-11-11',
      penaltyDate: null,
      title: '行政处罚决定书中国石油天然气股份有限公司河南郑州第71加油站',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '3.00',
      currency: 'CNY',
      reasonForViolation: '其他类环境违法行为，大气污染防治类',
      documentNumber: '惠环罚决字〔2019〕第045号',
      competentDepartment: '惠济区环保局',
      relevantLaw: '《中华人民共和国大气污染防治法》',
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/12/bdfdf396ba9072f40660f7a2d03c7913.pdf',
      fileType: 'pdf',
      bizType: null,
      approvalSummary: '决定对你单位作出如下行政处罚：罚款人民币叁万元整（￥30000）',
      violationReasonSummary: null,
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: '0iqFVcYjRXo0q3waNXucSA==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2019-10-14',
      penaltyDate: '2019-09-24',
      title: '穗番环罚〔2019〕67号中国石油天然气股份有限公司',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '8.00',
      currency: 'CNY',
      reasonForViolation: '其他类环境违法行为，水污染防治类',
      documentNumber: '穗番环罚〔2019〕67号',
      competentDepartment: '广州市生态环境局',
      relevantLaw: '《中华人民共和国水污染防治法》',
      relevantLaws: [
        {
          lawTitle: '中华人民共和国水污染防治法(2008修订)',
          lawName: '《中华人民共和国水污染防治法(2008修订)》',
          hierarchicalCode: null,
          lawUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/TEST/laws/content/ep_laws_f7e6c85504ce6e82442c770f7c8606f0_1.zlib',
          catalogueUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/TEST/laws/catalogue/ep_laws_f7e6c85504ce6e82442c770f7c8606f0_2.zlib'
        }
      ],
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/6f331d9be0d86a5a528164e0e1d27a68.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '其他行政处罚:责令该单位下属广州销售分公司的金龙山加油南站限期一个月内完成地下油罐改造工作,罚款:8.0（万元',
      violationReasonSummary: null,
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: 'fM9wPoZAkcWhj9OlwCuEBw==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2019-03-12',
      penaltyDate: null,
      title: '中国石油天然气股份有限公司河南济源济邵路官桥较优质济环责改〔2019〕47号',
      penaltyResult: [
        {
          id: null,
          name: '责令改正',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: null,
      currency: null,
      reasonForViolation: '其他类环境违法行为，其他类环境污染防治类别',
      documentNumber: '济环责改〔2019〕47号',
      competentDepartment: '济源市环保局',
      relevantLaw: '《中华人民共和国水污染防治法》',
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/4813b53794f04cbb201c9f55cb201b8f.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '责令你单位收到本决定书3个月完成改造治理',
      violationReasonSummary: '2019年2月28日，检查发现你单位地下油罐未使用戏层诺或者采取建造防渗池等其他有效措施，也未进行防渗漏监测。',
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: '65LUIuSpZson9sO3QGEzoA==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2018-11-05',
      penaltyDate: null,
      title: '行政处罚公示',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '2.00',
      currency: 'CNY',
      reasonForViolation: '建设项目管理类，违反建设项目“三同时”制度类，违反建设项目环境影响评价制度',
      documentNumber: '三环罚〔2017〕131号',
      competentDepartment: '三河市环保局',
      relevantLaw: '《建设项目环境保护管理条例》、《廊坊市环境保护局行政处罚自由裁量权细化标准》、《中华人民共和国行政处罚法》',
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/377bc930375e560803aca9ce42fa42ec.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '我局决定对你单位处以如下行政处罚：1、立即停止运营；2、罚款贰万元',
      violationReasonSummary: '我局于2017年9月8日对你单位进行了调查，发现你单位实施了以下环境违法行为：你单位的主体工程于2014年5月建成投产，但未经环保部门验收的情况下擅自投产使用。',
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: 'yITGrg3NbAGw2dd+dgvcAQ==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2018-11-05',
      penaltyDate: null,
      title: '行政处罚公示',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        },
        {
          id: null,
          name: '责令改正',
          description: null,
          color: '#ffffff',
          bgColor: '#72CCAD'
        }
      ],
      penaltyAmount: '5.00',
      currency: 'CNY',
      reasonForViolation: '建设项目管理类，违反建设项目“三同时”制度类',
      documentNumber: '三环罚〔2017〕140号',
      competentDepartment: '三河市环保局',
      relevantLaw: '《建设项目环境保护管理条例》、《廊坊市环境保护局行政处罚自由裁量权细化标准》、《中华人民共和国行政处罚法》',
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/11/3/0947fb24aed82bba5b9ee6cd19a4369e.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '我局决定对你单位处以如下行政处罚：1、立即停止运营；2、罚款伍万元',
      violationReasonSummary: '我局于2017年9月9日对你单位进行了调查，发现你单位实施了以下环境违法行为：你单位的主体工程于2015年2月建成投产，环保设施未建成。',
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: 'Rle7Ajd1bX0+2WYwqlN9sg==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2018-10-31',
      penaltyDate: null,
      title: '行政处罚公示',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        }
      ],
      penaltyAmount: '5.00',
      currency: 'CNY',
      reasonForViolation: '违反建设项目“三同时”制度类，建设项目管理类',
      documentNumber: '三环罚〔2017〕147号',
      competentDepartment: '环保局',
      relevantLaw: '《建设项目环境保护管理条例》、《廊坊市环境保护局行政处罚自由裁量权细化标准》、《中华人民共和国行政处罚法》',
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2021/12/6/f7865876c91f0ec5cc8173b9a908485d.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '行政处罚:决定书；2、罚款:伍万元',
      violationReasonSummary:
        '我局于2017年9月12日对你单位进行了调查，发现你单位实施了以下环境违法行为：中国石油天然气股份有限公司河北廊坊销售分公司第九十一加油站于2015年2月建成并投入正常运营，环保设施至今未全部建成。',
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    },
    {
      id: 'Slibe/II1eVVzBI5wNE5+Q==',
      companyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      companyName: '中国石油天然气股份有限公司',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: null,
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      noticeDate: '2018-09-17',
      penaltyDate: null,
      title: '子洲县环保局关于中国石油天然气股份有限公司长庆油田分公司第二采气厂的行政处罚决定书',
      penaltyResult: [
        {
          id: null,
          name: '罚款',
          description: null,
          color: '#ffffff',
          bgColor: '#64AAEE'
        },
        {
          id: null,
          name: '责令改正',
          description: null,
          color: '#ffffff',
          bgColor: '#72CCAD'
        }
      ],
      penaltyAmount: '3.00',
      currency: 'CNY',
      reasonForViolation: '其他类环境污染防治类别，其他类环境违法行为',
      documentNumber: null,
      competentDepartment: '子洲县环保局',
      relevantLaw: null,
      relevantLaws: null,
      punishmentStateCode: 2,
      punishmentState: null,
      fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/2022/01/1/2738863a9d03ea1a430fd0303ee2832d.zlib',
      fileType: 'zip',
      bizType: null,
      approvalSummary: '限期整改，罚款3万元',
      violationReasonSummary: '环境污染',
      relevantLawsIllegalActivity: null,
      relevantLawsIllegalActivities: null
    }
  ]
};

/** 排污许可限值 */
const getPermitF9 = {
  total: 4,
  values: [
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司大庆石化分公司（化肥）',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '氮肥制造',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber: '91230600716671629P001P',
      managementCategoryType: '重点管理',
      permitStatuses: [],
      permitChanges: [
        {
          dischargePermitNumber: '91230600716671629P001P',
          changeType: '申领',
          version: 1,
          completionDate: '2017-12-22',
          periodOfValidityStartDate: '2017-12-22',
          periodOfValidityExpirationDate: '2020-12-21'
        },
        {
          dischargePermitNumber: '91230600716671629P001P',
          changeType: '重新申请',
          version: 2,
          completionDate: '2021-07-21',
          periodOfValidityStartDate: '2021-07-21',
          periodOfValidityExpirationDate: '2026-07-20'
        }
      ],
      productionSite: '黑龙江省大庆市龙凤区卧里屯',
      periodOfValidityStartDate: '2021-07-21',
      periodOfValidityExpirationDate: '2026-07-20',
      issuingDate: '2021-07-21',
      issuingDepartment: '大庆市生态环境局',
      dischargePermitDuplicates: {
        whetherWasteGasPollution: 1,
        managementCategoryCode: 1,
        whetherWasteWaterPollution: 1,
        majorAirPollutant: '氨（氨气）,颗粒物,烟尘,氮氧化物,林格曼黑度,二氧化硫,甲醛,非甲烷总烃,臭气浓度',
        airPollutantDischargeRules: '有组织,无组织',
        airPollutantDischargeStandards: '锅炉大气污染物排放标准GB13271-2014,大气污染物综合排放标准GB16297-1996,恶臭污染物排放标准GB14554-93,大气污染物综合排放标准GB16297-1996',
        majorWastewaterPollutants: 'pH值,悬浮物,化学需氧量,氨氮（NH3-N）,总氮（以N计）,总磷（以P计）,氰化物,挥发酚,硫化物,石油类,流量',
        wastewaterPollutantDischargeRules: '连续排放，流量稳定',
        wastewaterPollutantDischargeStandards: '石油化学工业污染物排放标准GB31571-2015',
        emissionRightsUseAndTrading: '/',
        technicalDirector: '李崧延',
        industryClassification: '氮肥制造，锅炉',
        phoneNo: '0459-6755701',
        fileCode: '43406c8c2b14c90e2b1ac894b166c24c',
        fileUrl: 'HJBH/2021/11/07/43406c8c2b14c90e2b1ac894b166c24c.zlib',
        fileType: 'zlib'
      },
      attachments: [
        {
          name: '许可证正本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2021/11/12/347f49d99bd3f82baab3471ec8178d56.pdf',
          fileType: 'pdf',
          bizType: null
        },
        {
          name: '许可证副本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2021/11/07/43406c8c2b14c90e2b1ac894b166c24c.zlib',
          fileType: 'zip',
          bizType: null
        }
      ],
      wasteGasPermitLimits: [
        {
          pollutantType: 'VOCs',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: '颗粒物',
          allowableEmissionLimitFirstYear: '269.3200',
          allowableEmissionLimitSecondYear: '269.3200',
          allowableEmissionLimitThirdYear: '269.3200',
          allowableEmissionLimitFourthYear: '269.3200',
          allowableEmissionLimitFifthYear: '269.3200'
        },
        {
          pollutantType: 'NOx',
          allowableEmissionLimitFirstYear: '278.4060',
          allowableEmissionLimitSecondYear: '278.4060',
          allowableEmissionLimitThirdYear: '278.4060',
          allowableEmissionLimitFourthYear: '278.4060',
          allowableEmissionLimitFifthYear: '278.4060'
        },
        {
          pollutantType: 'SO2',
          allowableEmissionLimitFirstYear: '176.2140',
          allowableEmissionLimitSecondYear: '176.2140',
          allowableEmissionLimitThirdYear: '176.2140',
          allowableEmissionLimitFourthYear: '176.2140',
          allowableEmissionLimitFifthYear: '176.2140'
        },
        {
          pollutantType: '氨（氨气）',
          allowableEmissionLimitFirstYear: '400.0000',
          allowableEmissionLimitSecondYear: '400.0000',
          allowableEmissionLimitThirdYear: '400.0000',
          allowableEmissionLimitFourthYear: '400.0000',
          allowableEmissionLimitFifthYear: '400.0000'
        }
      ],
      wasteWaterPermitLimits: [
        {
          pollutantType: '氨氮',
          allowableEmissionLimitFirstYear: '24.7500',
          allowableEmissionLimitSecondYear: '24.7500',
          allowableEmissionLimitThirdYear: '24.7500',
          allowableEmissionLimitFourthYear: '24.7500',
          allowableEmissionLimitFifthYear: '24.7500'
        },
        {
          pollutantType: 'CODcr',
          allowableEmissionLimitFirstYear: '198.0000',
          allowableEmissionLimitSecondYear: '198.0000',
          allowableEmissionLimitThirdYear: '198.0000',
          allowableEmissionLimitFourthYear: '198.0000',
          allowableEmissionLimitFifthYear: '198.0000'
        }
      ],
      isWasteGasPollution: true,
      isWasteWaterPollution: true
    },
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司贵州仓储分公司(久长油库)',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '油气仓储',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber: '91520198MAAMOWECXQ001V',
      managementCategoryType: '重点管理',
      permitStatuses: [],
      permitChanges: [
        {
          dischargePermitNumber: '91520000722105429Q003V',
          changeType: '申领',
          version: 1,
          completionDate: '2020-07-30',
          periodOfValidityStartDate: '2020-07-30',
          periodOfValidityExpirationDate: '2023-07-29'
        },
        {
          dischargePermitNumber: '91520198MAAMOWECXQ001V',
          changeType: '变更',
          version: 2,
          completionDate: '2021-12-30',
          periodOfValidityStartDate: '2020-07-30',
          periodOfValidityExpirationDate: '2023-07-29'
        }
      ],
      productionSite: '贵阳市修文县久长镇东屏村新民八组',
      periodOfValidityStartDate: '2020-07-30',
      periodOfValidityExpirationDate: '2023-07-29',
      issuingDate: '2020-07-30',
      issuingDepartment: '贵阳市生态环境局',
      dischargePermitDuplicates: {
        whetherWasteGasPollution: 1,
        managementCategoryCode: 1,
        whetherWasteWaterPollution: 1,
        majorAirPollutant: '挥发性有机物,油气体积分数,汽油泄漏量',
        airPollutantDischargeRules: '有组织,无组织',
        airPollutantDischargeStandards: '储油库大气污染物排放标准GB20950-2007,挥发性有机物无组织排放控制标准GB37822-2019,大气污染物综合排放标准GB16297-1996',
        majorWastewaterPollutants: '化学需氧量,悬浮物,pH值,氨氮（NH3-N）,总有机碳,石油类',
        wastewaterPollutantDischargeRules: '间断排放，排放期间流量不稳定且无规律，但不属于冲击型排放',
        wastewaterPollutantDischargeStandards: '污水综合排放标准GB8978-1996',
        emissionRightsUseAndTrading: '/',
        technicalDirector: '张龙晓',
        industryClassification: '油气仓储',
        phoneNo: '0851-82376279',
        fileCode: '7ebb2638e47902f56f02439bf2dc7d26',
        fileUrl: 'content/HJBH/3016326520993327/2022/02/17/7ebb2638e47902f56f02439bf2dc7d26.zlib',
        fileType: 'zlib'
      },
      attachments: [
        {
          name: '许可证正本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/files/HJBH/2022/02/22/674bcd9de6275345f3ef99d1d585db5a.pdf',
          fileType: 'pdf',
          bizType: null
        },
        {
          name: '许可证副本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/content/HJBH/3016326520993327/2022/02/17/7ebb2638e47902f56f02439bf2dc7d26.zlib',
          fileType: 'zip',
          bizType: null
        }
      ],
      wasteGasPermitLimits: [
        {
          pollutantType: 'VOCs',
          allowableEmissionLimitFirstYear: '89.4100',
          allowableEmissionLimitSecondYear: '89.4100',
          allowableEmissionLimitThirdYear: '89.4100',
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'SO2',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: '颗粒物',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'NOx',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        }
      ],
      wasteWaterPermitLimits: [
        {
          pollutantType: 'CODcr',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: '氨氮',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        }
      ],
      isWasteGasPollution: true,
      isWasteWaterPollution: true
    },
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司内蒙古赤峰克什克旗经营部新城加油站',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '机动车燃油零售',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber: '91150425MAOMX52N1X001U',
      managementCategoryType: '简化管理',
      permitStatuses: [],
      permitChanges: [
        {
          dischargePermitNumber: '91150425MAOMX52N1X001U',
          changeType: '申领',
          version: 1,
          completionDate: '2020-07-20',
          periodOfValidityStartDate: '2020-07-20',
          periodOfValidityExpirationDate: '2023-07-19'
        },
        {
          dischargePermitNumber: '91150425MAOMX52N1X001U',
          changeType: '变更',
          version: 2,
          completionDate: '2022-03-15',
          periodOfValidityStartDate: '2020-07-20',
          periodOfValidityExpirationDate: '2025-07-19'
        },
        {
          dischargePermitNumber: '91150425MAOMX52N1X001U',
          changeType: '变更',
          version: 3,
          completionDate: '2022-05-10',
          periodOfValidityStartDate: '2020-07-20',
          periodOfValidityExpirationDate: '2025-07-19'
        }
      ],
      productionSite: '内蒙古自治区赤峰市克什克腾旗经棚镇解放路经十一街路北',
      periodOfValidityStartDate: '2020-07-20',
      periodOfValidityExpirationDate: '2025-07-19',
      issuingDate: '2020-07-20',
      issuingDepartment: '赤峰市生态环境局',
      dischargePermitDuplicates: {
        whetherWasteGasPollution: 1,
        managementCategoryCode: 2,
        whetherWasteWaterPollution: 1,
        majorAirPollutant: '挥发性有机物,液阻,气液比,密闭性,非甲烷总烃',
        airPollutantDischargeRules: '无组织',
        airPollutantDischargeStandards: '/,加油站大气污染物排放标准GB20952-2020',
        majorWastewaterPollutants: '化学需氧量,氨氮（NH3-N）,pH值,悬浮物',
        wastewaterPollutantDischargeRules: null,
        wastewaterPollutantDischargeStandards: null,
        emissionRightsUseAndTrading: '/',
        technicalDirector: '高瑞清',
        industryClassification: '机动车燃油零售',
        phoneNo: '13604765015',
        fileCode: '9fd18df9228a28c4d7fde2dbe27b3271',
        fileUrl: 'content/HJBH/3016326520993327/2022/05/11/9fd18df9228a28c4d7fde2dbe27b3271.zlib',
        fileType: 'zlib'
      },
      attachments: [
        {
          name: '许可证正本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/files/HJBH/2022/05/11/8549ef332315fc6bb87f819b11632bd4.pdf',
          fileType: 'pdf',
          bizType: null
        },
        {
          name: '许可证副本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/content/HJBH/3016326520993327/2022/05/11/9fd18df9228a28c4d7fde2dbe27b3271.zlib',
          fileType: 'zip',
          bizType: null
        }
      ],
      wasteGasPermitLimits: [
        {
          pollutantType: 'VOCs',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'SO2',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: '颗粒物',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'NOx',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        }
      ],
      wasteWaterPermitLimits: [
        {
          pollutantType: '氨氮',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'CODcr',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        }
      ],
      isWasteGasPollution: true,
      isWasteWaterPollution: true
    },
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司西宁销售分公司大通桥头加油站',
      parentCompanyId: null,
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '机动车燃油零售',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber: '91630121926783280K001U',
      managementCategoryType: '简化管理',
      permitStatuses: [],
      permitChanges: [
        {
          dischargePermitNumber: '91630121926783280K001U',
          changeType: '申领',
          version: 1,
          completionDate: '2020-07-01',
          periodOfValidityStartDate: '2020-07-01',
          periodOfValidityExpirationDate: '2023-06-30'
        },
        {
          dischargePermitNumber: '91630121926783280K001U',
          changeType: '变更',
          version: 2,
          completionDate: '2022-03-04',
          periodOfValidityStartDate: '2020-07-01',
          periodOfValidityExpirationDate: '2023-06-30'
        }
      ],
      productionSite: '桥头镇解放南路195号',
      periodOfValidityStartDate: '2020-07-01',
      periodOfValidityExpirationDate: '2023-06-30',
      issuingDate: '2020-07-01',
      issuingDepartment: '西宁市生态环境局',
      dischargePermitDuplicates: {
        whetherWasteGasPollution: 1,
        managementCategoryCode: 2,
        whetherWasteWaterPollution: 1,
        majorAirPollutant: '挥发性有机物,密闭性,液阻,气液比',
        airPollutantDischargeRules: '无组织',
        airPollutantDischargeStandards: '/,加油站大气污染排放标准（GB20952-2020）,',
        majorWastewaterPollutants: '化学需氧量,氨氮（NH3-N）,pH值,悬浮物,五日生化需氧量',
        wastewaterPollutantDischargeRules: '/',
        wastewaterPollutantDischargeStandards: null,
        emissionRightsUseAndTrading: '/',
        technicalDirector: '刘萍',
        industryClassification: '机动车燃油零售，锅炉',
        phoneNo: '15110933765',
        fileCode: 'b87189f1fd7ad3f5425bf18faa169d93',
        fileUrl: 'content/HJBH/3016326520993327/2022/03/06/b87189f1fd7ad3f5425bf18faa169d93.zlib',
        fileType: 'zlib'
      },
      attachments: [
        {
          name: '许可证正本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/files/HJBH/2022/03/06/a03b947862f27d64bad57826f8fb5aff.pdf',
          fileType: 'pdf',
          bizType: null
        },
        {
          name: '许可证副本',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/content/HJBH/3016326520993327/2022/03/06/b87189f1fd7ad3f5425bf18faa169d93.zlib',
          fileType: 'zip',
          bizType: null
        }
      ],
      wasteGasPermitLimits: [
        {
          pollutantType: 'NOx',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: '颗粒物',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'VOCs',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'SO2',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        }
      ],
      wasteWaterPermitLimits: [
        {
          pollutantType: '氨氮',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        },
        {
          pollutantType: 'CODcr',
          allowableEmissionLimitFirstYear: null,
          allowableEmissionLimitSecondYear: null,
          allowableEmissionLimitThirdYear: null,
          allowableEmissionLimitFourthYear: null,
          allowableEmissionLimitFifthYear: null
        }
      ],
      isWasteGasPollution: true,
      isWasteWaterPollution: true
    }
  ]
};
/** 执行报告 */
const getPermitImplementationReportF9 = {
  total: 92,
  values: [
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司大庆石化分公司（化肥）',
      parentCompanyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '氮肥制造',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber:
        '<span class="encrypt-span">&#xf601;&#xed62;&#xe0ad;&#xe017;&#xee1a;&#xe179;&#xee1a;&#xee1a;&#xe641;&#xed62;&#xe179;&#xe179;&#xe641;&#xed62;&#xe179;&#xe0ad;&#xf601;P&#xee1a;&#xee1a;&#xed62;P</span>',
      productionSite: '黑龙江省大庆市龙凤区卧里屯',
      latelyReport: {
        reportType: '月报',
        reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe641;</span>',
        reportTitle: '2022年07月月报表',
        noticeDate: '2022-08-15',
        fileUrl: null,
        fileType: null,
        bizType: null
      },
      reports: [
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe641;</span>',
          reportTitle: '2022年07月月报表',
          noticeDate: '2022-08-15',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe179;</span>',
          reportTitle: '2022年第02季度季报表',
          noticeDate: '2022-07-13',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe179;</span>',
          reportTitle: '2022年06月月报表',
          noticeDate: '2022-07-13',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xf1d1;</span>',
          reportTitle: '2022年05月月报表',
          noticeDate: '2022-07-13',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe017;</span>',
          reportTitle: '2022年03月月报表',
          noticeDate: '2022-04-14',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe0ad;</span>',
          reportTitle: '2022年02月月报表',
          noticeDate: '2022-04-14',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年年报表',
          noticeDate: '2022-01-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e76df050c6fc2d0bb850d580fe13a1bb.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年第04季度季报表',
          noticeDate: '2022-01-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/17f609aa51d56f5098409894df17aec8.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年12月月报表',
          noticeDate: '2022-01-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e00ea2e30cdd84007ae0703f30fdebfb.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xed62;</span>',
          reportTitle: '2021年11月月报表',
          noticeDate: '2022-01-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e9d3eb0bcee0a658687b5038bf929866.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xee1a;</span>',
          reportTitle: '2021年10月月报表',
          noticeDate: '2022-01-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/10966e500c3a3a6dfd6c0f9fa21dcb6b.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf601;</span>',
          reportTitle: '2021年第03季度季报表',
          noticeDate: '2021-10-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/ec0da8884586810f70d7bf55ca97a556.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf601;</span>',
          reportTitle: '2021年09月月报表',
          noticeDate: '2021-10-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/2304fc0952f96a90f81ce7edfad4e011.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf658;</span>',
          reportTitle: '2021年08月月报表',
          noticeDate: '2021-10-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/c986b787e42699496ab128dbb1ac6e73.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe641;</span>',
          reportTitle: '2021年07月月报表',
          noticeDate: '2021-10-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/2f717d3c38e8b561eb0a52a448a9cf10.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe179;</span>',
          reportTitle: '2021年第02季度季报表',
          noticeDate: '2021-07-16',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/8c823a0988b3b081f49c9fc010fbacd3.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe179;</span>',
          reportTitle: '2021年06月月报表',
          noticeDate: '2021-07-16',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/6676c6d425ba491aa2d7310244b32767.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf1d1;</span>',
          reportTitle: '2021年05月月报表',
          noticeDate: '2021-07-16',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/8ae615fdd3e2fac7fc3001e95004b7fa.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf705;</span>',
          reportTitle: '2021年04月月报表',
          noticeDate: '2021-07-16',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/98e20e1ca0089aa7eb142178fd33ca81.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe017;</span>',
          reportTitle: '2021年第01季度季报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/c6ff24eb1cc2544070b8c031ef458d31.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe017;</span>',
          reportTitle: '2021年03月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/8c28ba11d08c88be841e8bfc2dc71e67.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe0ad;</span>',
          reportTitle: '2021年02月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/3bfcb35b9b12125f568e40c2a9e82e09.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xed62;</span>',
          reportTitle: '2021年01月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/4f112b3bf9824a6fc525b3f36eb4a2b7.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xe0ad;</span>',
          reportTitle: '2020年年报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/c627f767568c34751003f362fecb4ff0.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xe0ad;</span>',
          reportTitle: '2020年第04季度季报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/6eded058b66d9bd4032a7b5fbbd43556.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xe0ad;</span>',
          reportTitle: '2020年12月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/290a1d9b0fff934e8e8d710ac26eaacb.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xed62;</span>',
          reportTitle: '2020年11月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/dcd357b4816632f09821eeb0be0b10c9.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xee1a;</span>',
          reportTitle: '2020年10月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/5fa661b1e95470f004259d547dc17587.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xf601;</span>',
          reportTitle: '2020年第03季度季报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/0c6c83031a5a963b9a1f49978c4e7633.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xf601;</span>',
          reportTitle: '2020年09月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/423dd2fd80f3ba68daaebacf7c8e3f05.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xf658;</span>',
          reportTitle: '2020年08月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/27ebd04805962241f8fd57f4a1ef35cc.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xe641;</span>',
          reportTitle: '2020年07月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/1e795df64d8f685365f6e06c43f10315.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xe179;</span>',
          reportTitle: '2020年第02季度季报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/220b0bb265f29f73a6f55289ace0f504.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xe179;</span>',
          reportTitle: '2020年06月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/8b4c69f9a8add2fd591d5ee7b0995045.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xf1d1;</span>',
          reportTitle: '2020年05月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/55d5cb36813f36d3060b3e40c0000b87.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xf705;</span>',
          reportTitle: '2020年04月月报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/3d1db522f314c8bd08871b35cfe536f8.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xe017;</span>',
          reportTitle: '2020年第01季度季报表',
          noticeDate: '2020-06-30',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/503f8e96806b41b5c854553f3bd1905c.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xe017;</span>',
          reportTitle: '2020年03月月报表',
          noticeDate: '2020-06-30',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/6bd8afec98f766549273bddc1a2811f5.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xe0ad;</span>',
          reportTitle: '2020年02月月报表',
          noticeDate: '2020-06-30',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e9722a7e262709af94039ec452f19ba8.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xee1a;&#xed62;</span>',
          reportTitle: '2020年01月月报表',
          noticeDate: '2020-06-30',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/d1e5477942621c5dbecc454128d9fe5d.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xed62;&#xe0ad;</span>',
          reportTitle: '2019年年报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/5876d3f3c4daa855436a491b8176f5e8.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xed62;&#xe0ad;</span>',
          reportTitle: '2019年第04季度季报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/d428df26a655df2c2f0a8f0e2b6bf313.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xed62;&#xe0ad;</span>',
          reportTitle: '2019年12月月报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/911ffc005a784aa8f59fbda85978f193.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xed62;&#xed62;</span>',
          reportTitle: '2019年11月月报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/63f2390067464df453557b82a04c11ba.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xed62;&#xee1a;</span>',
          reportTitle: '2019年10月月报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/0bd7b8e01ba92ad486af7231947f6f56.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xf601;</span>',
          reportTitle: '2019年第03季度季报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/263f6e9bbcdb594cd45369fce198a8d1.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xf601;</span>',
          reportTitle: '2019年09月月报表',
          noticeDate: '2021-05-25',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/0f94997c16d54c7d385a5145b4c6240b.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xf658;</span>',
          reportTitle: '2019年08月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/06d02b9f5c155d81328d1c91a36b7d02.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xe641;</span>',
          reportTitle: '2019年07月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e4687487b199ff0a4c3a556fed41a3d6.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xe179;</span>',
          reportTitle: '2019年第02季度季报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/ca01cccab24d49210490172705e17bb3.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xe179;</span>',
          reportTitle: '2019年06月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/15609426b945bf2f7481a22d01e63e33.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xf1d1;</span>',
          reportTitle: '2019年05月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/472488fe801e467aea67cbeaf3cf5c90.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xf705;</span>',
          reportTitle: '2019年04月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/55cc857acc8bb2c2f27e2a7e8033f7cf.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xe017;</span>',
          reportTitle: '2019年第01季度季报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/dbea1e72797dd78e0a8d4fac755b6298.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xe017;</span>',
          reportTitle: '2019年03月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/ca24e107071e184ece4e7f216ad3c3ff.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xe0ad;</span>',
          reportTitle: '2019年02月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/31395822e09e18925491e91878645d95.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xee1a;&#xed62;</span>',
          reportTitle: '2019年01月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e1d9fc190f8135548125dc43890199e4.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xed62;&#xe0ad;</span>',
          reportTitle: '2018年第04季度季报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/1064b0f2ef32c3ab82649dee8efc0560.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xed62;&#xe0ad;</span>',
          reportTitle: '2018年12月月报表',
          noticeDate: '2019-09-27',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/ad6040ce4c81b440072d646d5a6242f3.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xed62;&#xed62;</span>',
          reportTitle: '2018年11月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/843887e492d2c514771a0451dcf9207f.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xed62;&#xee1a;</span>',
          reportTitle: '2018年10月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/8cd3645b8d5698bc60b88c45a44a6a7b.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xf601;</span>',
          reportTitle: '2018年第03季度季报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/bae668c7d0a5089a13e25b3109d8937c.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xf601;</span>',
          reportTitle: '2018年09月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/565104dddf701c082072bd5e69f36137.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xf658;</span>',
          reportTitle: '2018年08月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/ca293f694bc00a79b1185e0ce336a01a.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xe641;</span>',
          reportTitle: '2018年07月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/6799e83cef33885302192c8601bf3f46.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xe179;</span>',
          reportTitle: '2018年第02季度季报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/90ec12f1cbfe609451094dc8f51fe3fb.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xe179;</span>',
          reportTitle: '2018年06月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e35086b849c97d153cdbc7645ae63633.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xf1d1;</span>',
          reportTitle: '2018年05月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/f549a6696eab12b3d29a602d95d6a0f9.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xf705;</span>',
          reportTitle: '2018年04月月报表',
          noticeDate: '2018-12-21',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/bf859ad62a93c594f69248676a77d03e.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xe017;</span>',
          reportTitle: '2018年第01季度季报表',
          noticeDate: '2018-10-08',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/c51012a700483a10fd201a8b8ddbd9d1.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xe017;</span>',
          reportTitle: '2018年03月月报表',
          noticeDate: '2018-10-08',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/839b7aae107e3cf9ed553b5af34a7436.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xe0ad;</span>',
          reportTitle: '2018年02月月报表',
          noticeDate: '2018-09-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/128efedcb4231f3f2510cefedc5b447b.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xed62;&#xf658;&#xee1a;&#xed62;</span>',
          reportTitle: '2018年01月月报表',
          noticeDate: '2018-09-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/1af39efcc60a3d5aa7a75fdb2419af4f.html',
          fileType: 'html',
          bizType: null
        }
      ]
    },
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司西宁销售分公司大通桥头加油站',
      parentCompanyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '机动车燃油零售',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber:
        '<span class="encrypt-span">&#xf601;&#xed62;&#xe179;&#xe017;&#xee1a;&#xed62;&#xe0ad;&#xed62;&#xf601;&#xe0ad;&#xe179;&#xe641;&#xf658;&#xe017;&#xe0ad;&#xf658;&#xee1a;K&#xee1a;&#xee1a;&#xed62;U</span>',
      productionSite: '桥头镇解放南路195号',
      latelyReport: {
        reportType: '季报',
        reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe017;</span>',
        reportTitle: '2022年第01季度季报表',
        noticeDate: '2022-04-04',
        fileUrl: null,
        fileType: null,
        bizType: null
      },
      reports: [
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xe0ad;&#xee1a;&#xe017;</span>',
          reportTitle: '2022年第01季度季报表',
          noticeDate: '2022-04-04',
          fileUrl: null,
          fileType: null,
          bizType: null
        },
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年年报表',
          noticeDate: '2022-01-05',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/bb5f14d46662c9035a1edd5b432bf519.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年第04季度季报表',
          noticeDate: '2022-01-05',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/de2ec278005f74a121d3e4bc786e3323.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf601;</span>',
          reportTitle: '2021年第03季度季报表',
          noticeDate: '2022-01-05',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/bd4a4664a5b7ef0d950f1514de1fb570.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe179;</span>',
          reportTitle: '2021年第02季度季报表',
          noticeDate: '2022-01-04',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/95814ebcdad96b3642f4205427966962.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe017;</span>',
          reportTitle: '2021年第01季度季报表',
          noticeDate: '2022-01-04',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/6fc7ec3da14b33cddc28f9c5d6829879.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xe0ad;</span>',
          reportTitle: '2020年年报表',
          noticeDate: '2021-03-22',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2021/11/24/3898a3d0cc6feb324090e609a51ee044.html',
          fileType: 'html',
          bizType: null
        }
      ]
    },
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司内蒙古赤峰克什克旗经营部新城加油站',
      parentCompanyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '机动车燃油零售',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber: '<span class="encrypt-span">&#xf601;&#xed62;&#xed62;&#xf1d1;&#xee1a;&#xf705;&#xe0ad;&#xf1d1;MAOMX&#xf1d1;&#xe0ad;N&#xed62;X&#xee1a;&#xee1a;&#xed62;U</span>',
      productionSite: '内蒙古自治区赤峰市克什克腾旗经棚镇解放路经十一街路北',
      latelyReport: {
        reportType: '年报',
        reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xe0ad;</span>',
        reportTitle: '2020年年报表',
        noticeDate: '2021-08-05',
        fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2021/11/22/036dba8e352ad5cfc0dcb6d2cfe85a36.html',
        fileType: 'html',
        bizType: null
      },
      reports: [
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年年报表',
          noticeDate: '2021-05-24',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2021/12/5/cd5360b53be0c9dd187710e69eaf9645.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xee1a;&#xed62;&#xe0ad;</span>',
          reportTitle: '2020年年报表',
          noticeDate: '2021-08-05',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2021/11/22/036dba8e352ad5cfc0dcb6d2cfe85a36.html',
          fileType: 'html',
          bizType: null
        }
      ]
    },
    {
      id: null,
      companyId: null,
      companyName: '中国石油天然气股份有限公司贵州仓储分公司(久长油库)',
      parentCompanyId: 'wZzgfeLYkWjBZc2NQ67nJw==',
      tags: [],
      hbTags: [],
      province: null,
      city: null,
      country: null,
      industryCategory: '油气仓储',
      businessTermStartDate: null,
      registeredCapital: null,
      registeredCapitalUnit: null,
      highlight: {},
      dischargePermitNumber: '<span class="encrypt-span">&#xf601;&#xed62;&#xf1d1;&#xe0ad;&#xee1a;&#xed62;&#xf601;&#xf658;MAAMOWECXQ&#xee1a;&#xee1a;&#xed62;V</span>',
      productionSite: '贵阳市修文县久长镇东屏村新民八组',
      latelyReport: {
        reportType: '年报',
        reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
        reportTitle: '2021年年报表',
        noticeDate: '2022-01-09',
        fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/932db32b06a05f3ef42fba039317f4e5.html',
        fileType: 'html',
        bizType: null
      },
      reports: [
        {
          reportType: '年报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年年报表',
          noticeDate: '2022-01-09',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/932db32b06a05f3ef42fba039317f4e5.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年第04季度季报表',
          noticeDate: '2022-01-09',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/503dbf39cb2ae08adbef5532231b403f.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xe0ad;</span>',
          reportTitle: '2021年12月月报表',
          noticeDate: '2022-01-09',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/73fb4608f2d0571780b94bba81ff0365.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xed62;</span>',
          reportTitle: '2021年11月月报表',
          noticeDate: '2021-12-22',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/73f8d2f5a4f097c7d9c6990d0178ee13.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xed62;&#xee1a;</span>',
          reportTitle: '2021年10月月报表',
          noticeDate: '2021-12-22',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/80f1d514a502d34d632e2b3ad8380cb4.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf601;</span>',
          reportTitle: '2021年09月月报表',
          noticeDate: '2021-10-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/33961c68963476efe15e6160c656af75.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf658;</span>',
          reportTitle: '2021年08月月报表',
          noticeDate: '2021-10-14',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/e4d94ba43959a6fbfc6af9a882bce673.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe179;</span>',
          reportTitle: '2021年第02季度季报表',
          noticeDate: '2021-07-15',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/04a15bee1ad7d0cce40eecbbfd4d6231.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '月报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xf705;</span>',
          reportTitle: '2021年04月月报表',
          noticeDate: '2021-06-16',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/fd30b315c674f592ec3d93c5ea79438b.html',
          fileType: 'html',
          bizType: null
        },
        {
          reportType: '季报',
          reportPeriod: '<span class="encrypt-span">&#xe0ad;&#xee1a;&#xe0ad;&#xed62;&#xee1a;&#xe017;</span>',
          reportTitle: '2021年第01季度季报表',
          noticeDate: '2021-06-15',
          fileUrl: 'https://huanbaonew.obs.cn-north-1.myhuaweicloud.com/HJBH/2022/6/9/d2ed73e196797ff1eb53c129b2d59add.html',
          fileType: 'html',
          bizType: null
        }
      ]
    }
  ]
};

export default [
  {
    url: Api.hotCompany,
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(hotData);
    }
  },
  {
    url: Api.search,
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(searchData);
    }
  },
  {
    url: Api.enterpriseDynamics,
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(qydtData);
    }
  },
  {
    url: Api.getEsgEventF9,
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(esgData);
    }
  },
  {
    url: Api.esgEventCodes,
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(esgEventData);
    }
  },
  {
    url: Api.environmentalSupervision,
    timeout: 200,
    method: 'get',
    response: (request) => {
      const {
        query: { hbSubjectType }
      } = request;
      if (hbSubjectType === 'keySewage') {
        return resultSuccess(hjjd[0]);
      }
      if (hbSubjectType === 'carbonEmission') {
        return resultSuccess(hjjd[0]);
      }
      if (hbSubjectType === 'cleanerProduction') {
        return resultSuccess(hjjd[0]);
      }
      if (hbSubjectType === 'energyConsumption') {
        return resultSuccess(hjjd[0]);
      }
      if (['environmentCreditRate', 'blacklist'].includes(hbSubjectType)) {
        return resultSuccess(hjjd[1]);
      }
    }
  },
  {
    url: Api.getPunishData,
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(publishData);
    }
  }
] as MockMethod[];
