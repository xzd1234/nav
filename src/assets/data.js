
const data = {
  footerList: [
    { name: '© 2021 BY ', desc: ' XZD', url: 'https://xiezhendong.cn/nav/' },
    { name: '备案号', desc: ' 浙ICP备2021013242号-1', url: 'https://beian.miit.gov.cn/' },
  ],
  menuList: [
    {
      name: "精品推荐",
      icon: "geek-tuijian",
      list: [
        {
          name: "腾讯云",
          desc: "产业智变 云启未来",
          icon: "https://xiezhendong.cn/static/images/tencent.ico",
          url: "https://cloud.tencent.com/"
        },
        {
          name: "阿里云",
          desc: "上云就上阿里云",
          icon: "https://xiezhendong.cn/static/images/aliyun.ico",
          url: "https://www.aliyun.com/"
        },
        {
          name: "华为云",
          desc: "智能，见未来",
          icon: "https://xiezhendong.cn/static/images/huawei.png",
          url: "https://www.huaweicloud.com/"
        },


      ]
    }, {
      name: "前端框架",
      icon: "geek-mobankuangjia-xianxing",
      list: [
        {
          name: "React",
          desc: "用于构建用户界面的Javscript库",
          icon: "https://xiezhendong.cn/static/images/react.png",
          url: "https://zh-hans.reactjs.org/"
        },
        {
          name: "Vue",
          desc: "构建数据驱动的web渐进式框架",
          icon: "https://xiezhendong.cn/static/images/vue.png",
          url: "https://v3.cn.vuejs.org/"
        },
        {
          name: "jQuery",
          desc: "优秀的JavaScript代码库",
          icon: "https://xiezhendong.cn/static/images/jquery.ico",
          url: "https://www.jquery123.com/"
        },
        {
          name: "Bootstrap",
          desc: "基于HTML/CSS/JS的前端框架",
          icon: "https://xiezhendong.cn/static/images/bootstrap.ico",
          url: "https://www.bootcss.com/"
        },
        {
          name: "React Native",
          desc: "使用React构建原生app的框架",
          icon: "https://xiezhendong.cn/static/images/reactnative.svg",
          url: "https://reactnative.cn/"
        },
        {
          name: "RxJs",
          desc: "提供强大的数据流组合和控制能力的Reactive编程库",
          icon: "https://xiezhendong.cn/static/images/rx.png",
          url: "https://rxjs-dev.firebaseapp.com/"
        },

        {
          name: "Uniapp",
          desc: "基于Vue的跨端框架",
          icon: "https://xiezhendong.cn/static/images/uniapp.png",
          url: "https://uniapp.dcloud.io/"
        },
        {
          name: "Mpvue",
          desc: "基于Vue的小程序框架",
          icon: "https://xiezhendong.cn/static/images/mpvue.png",
          url: "http://mpvue.com/"
        },
        {
          name: "Taro",
          desc: "多端统一开发解决方案",
          icon: "https://xiezhendong.cn/static/images/taro.ico",
          url: "https://taro.aotu.io/"
        }
      ]
    },
    {
      name: "UI组件库",
      icon: "geek-zujian-",
      list: [
        {
          name: "Element Ui",
          desc: "基于Vue2.x的PC组件库",
          icon: "https://xiezhendong.cn/static/images/element.ico",
          url: "https://element.eleme.cn/#/zh-CN"
        },
        {
          name: "Element Plus",
          desc: "基于Vue3.x的PC组件库",
          icon: "https://xiezhendong.cn/static/images/element.ico",
          url: "https://element-plus.gitee.io/zh-CN/"
        },
        {
          name: "iView Ui",
          desc: "基于Vue的高质量Ui组件库",
          icon: "https://xiezhendong.cn/static/images/iview.ico",
          url: "https://iviewui.com/"
        },
        {
          name: "Naive Ui",
          desc: "一个 Vue 3 组件库",
          icon: "https://xiezhendong.cn/static/images/naive.svg",
          url: "https://www.naiveui.com"
        },
        {
          name: "Ant-Design-Vue",
          desc: "基于Vue的Ui组件库",
          icon: "https://xiezhendong.cn/static/images/ant.ico",
          url: "https://www.antdv.com/docs/vue/introduce-cn/"
        },
        {
          name: "Vant Ui",
          desc: "基于Vue的轻量移动端组件库",
          icon: "https://xiezhendong.cn/static/images/vant.png",
          url: "https://vant-contrib.gitee.io/vant/#/zh-CN/"
        },
        {
          name: "Vux",
          desc: "基于WeUI和Vue的移动端UI组件库",
          icon: "https://xiezhendong.cn/static/images/vux.png",
          url: "https://vux.li/"
        },
        {
          name: "Mint Ui",
          desc: "基于Vue的移动端组件库",
          icon: "https://xiezhendong.cn/static/images/mint.svg",
          url: "http://mint-ui.github.io/?from=thosefree.com#!/zh-cn"
        },
        {
          name: "weui",
          desc: "微信团队为微信内网页和微信小程序量身设计的的基础样式库",
          icon: "https://xiezhendong.cn/static/images/weui.ico",
          url: "https://weui.io/"
        },
        {
          name: "weui+",
          desc: "在weui和zepto基础上开发的增强UI组件",
          icon: "https://xiezhendong.cn/static/images/weuiplus.png",
          url: "https://weui.shanliwawa.top/weui/index.html"
        },
        {
          name: "DataV",
          desc: "Vue 大屏数据展示组件库",
          icon: "https://xiezhendong.cn/static/images/datav.ico",
          url: "http://datav.jiaminghi.com/"
        }
      ]
    },
    {
      name: "社区门户",
      icon: "geek-shequ",
      list: [
        {
          name: "掘金",
          desc: "只有高手分享的中文技术社区",
          icon: "https://xiezhendong.cn/static/images/gold.png",
          url: "https://juejin.cn/"
        },

        {
          name: "GitHub",
          desc: "世界最大开源及私有软件项目的托管平台",
          icon: "https://xiezhendong.cn/static/images/github.png",
          url: "https://github.com/"
        },
        {
          name: "Gitee",
          desc: "中国最大开源及私有软件项目的托管平台",
          icon: "https://xiezhendong.cn/static/images/gitee.png",
          url: "https://gitee.com/"
        },
        {
          name: "知乎",
          desc: "中国最大问答社区",
          icon: "https://xiezhendong.cn/static/images/zhihu.png",
          url: "https://zhihu.com/"
        },
        {
          name: "简书",
          desc: "一个写作的社区",
          icon: "https://xiezhendong.cn/static/images/jianshu.png",
          url: "https://www.jianshu.com/"
        },
        {
          name: "博客园",
          desc: "面向开发者的知识分享社区",
          icon: "https://xiezhendong.cn/static/images/bky.svg",
          url: "https://www.cnblogs.com/"
        }, {
          name: "吾爱破解",
          desc: "吾爱破解论坛致力于软件安全与病毒分析的前沿，由无数热衷于软件加密解密及反病毒爱好者共同维护 ",
          icon: "https://xiezhendong.cn/static/images/wuaipojie.png",
          url: "https://www.52pojie.cn/"
        },
        {
          name: "印记中文",
          desc: "印记中文是最权威是技术中文文档社区",
          icon: "https://xiezhendong.cn/static/images/docschina.png",
          url: "https://docschina.org/"
        },
        {
          name: "SegmentFault",
          desc: "一个专注于解决编程问题，提高开发技能的社区",
          icon: "https://xiezhendong.cn/static/images/segmentfault.png",
          url: "https://segmentfault.com/"
        },
        {
          name: "CNode",
          desc: "Node.js专业中文社区",
          icon: "https://xiezhendong.cn/static/images/cnodejs.png",
          url: "https://cnodejs.org/"
        },
        {
          name: "W3cplus",
          desc: "W3cplus是一个致力于推广国内前端行业的技术博客",
          icon: "https://xiezhendong.cn/static/images/w3cplus.png",
          url: "https://www.w3cplus.com/"
        },
        {
          name: "菜鸟教材",
          desc: "学的不仅是技术，更是梦想",
          icon: "https://xiezhendong.cn/static/images/cn.png",
          url: "https://www.runoob.com/"
        },

      ]
    },
    {
      name: "图形动效",
      icon: "geek-fuwenbenbianjiqi_dongxiao",
      list: [
        {
          name: "Echarts",
          desc: "百度开发的可定制的数据可视化图表",
          icon: "https://xiezhendong.cn/static/images/echarts.png",
          url: "https://echarts.apache.org/zh/index.html"
        },
        {
          name: "Highcharts",
          desc: "兼容 IE6+、支持移动端、图表类型丰富的HTML5交互性图表库",
          icon: "https://xiezhendong.cn/static/images/highcharts.png",
          url: "https://www.highcharts.com/"
        },
        {
          name: "Threejs",
          desc: "运行在浏览器中的3D 引擎",
          icon: "https://xiezhendong.cn/static/images/threejs.png",
          url: "https://threejs.org/"
        },
        {
          name: "D3",
          desc: "用动态图形显示数据的JavaScript库",
          icon: "https://xiezhendong.cn/static/images/d3.png",
          url: "https://d3js.org/"
        }
      ]
    },

    {
      name: "字体图标",
      icon: "geek-tubiao7",
      list: [
        {
          name: "Iconfont",
          desc: "阿里巴巴矢量图标库",
          icon: "https://xiezhendong.cn/static/images/iconfont.svg",
          url: "https://www.iconfont.cn/"
        }, {
          name: "iconpark",
          desc: "字节跳动旗下图标库",
          icon: "https://xiezhendong.cn/static/images/iconp.svg",
          url: "https://iconpark.oceanengine.com/"
        },
        {
          name: "fontawesome",
          desc: "完美的图标字体 只为Bootstrap设计",
          icon: "https://xiezhendong.cn/static/images/font-awesome.png",
          url: "http://www.fontawesome.com.cn/"
        },

        {
          name: "Unicode 字符百科",
          desc: " 字符搜索Web服务。 查找并复制您最喜欢的角色：😎表情符号，▶Ar箭头，✪星星，💲货币，🈂️书写系统等",
          icon: "https://xiezhendong.cn/static/images/unicode.png",
          url: "https://unicode-table.com/cn/"
        }
      ]
    },
    {
      name: "构建工具",
      icon: "geek-goujian",
      list: [
        {
          name: "vite",
          desc: "下一代前端开发与构建工具",
          icon: "https://xiezhendong.cn/static/images/vite.png",
          url: "https://vitejs.cn/"
        },
        {
          name: "webpack",
          desc: "代码模块化构建打包工具",
          icon: "https://xiezhendong.cn/static/images/webpack.png",
          url: "https://webpack.js.org/"
        },
        {
          name: "Gulp",
          desc: "基于流的自动化构建工具",
          icon: "https://xiezhendong.cn/static/images/gulp.png",
          url: "https://www.gulpjs.com.cn/"
        },
        {
          name: "FIS3",
          desc: "FIS3 , 为你定制的前端工程构建工具",
          icon: "https://xiezhendong.cn/static/images/fis.png",
          url: "https://fex-team.github.io/fis3/"
        },
        {
          name: "Browserify",
          desc: "遵循commonjs规范的模块化工具",
          icon: "https://xiezhendong.cn/static/images/browserify.png",
          url: "https://browserify.org/"
        }
      ]
    }, {
      name: "国内镜像站",
      icon: "geek-sucaizhongxin",
      list: [
        {
          name: "清华大学开源软件镜像",
          desc: "清华大学开源软件镜像站，致力于为国内和校内用户提供高质量的开源软件镜像、Linux 镜像源服务",
          icon: "https://xiezhendong.cn/static/images/qinghuajingxiang.png",
          url: "https://mirrors.tuna.tsinghua.edu.cn/"
        },
        {
          name: "阿里云开源镜像",
          desc: "阿里巴巴开源镜像站-OPSX镜像站-阿里云开发者社区",
          icon: "https://xiezhendong.cn/static/images/aliyun.ico",
          url: "https://opsx.alibaba.com/mirror"
        },
        {
          name: "科大开源镜像",
          desc: "由中国科学技术大学在校的 GNU/Linux 爱好者发起并组成的一个全校性群众团体。",
          icon: "https://xiezhendong.cn/static/images/keda.jfif",
          url: "http://mirrors.ustc.edu.cn/"
        },
        {
          name: "华为开源镜像",
          desc: "华为云DevCloud团队提供的全类型镜像站服务，提供主流开发语言组件、操作系统、常用工具和库等镜像，极速下载，全站CDN，官方合作。",
          icon: "https://xiezhendong.cn/static/images/huawei.png",
          url: "https://mirrors.huaweicloud.com/"
        },
      ]
    },
    {
      name: "设计资源",
      icon: "geek-icon4",
      list: [
        {
          name: "uigreat",
          desc: "优秀设计师的贴心伴侣",
          icon: "https://xiezhendong.cn/static/images/uigreat.jpg",
          url: "https://uigreat.com/"
        },
        {
          name: "站酷",
          desc: "打开站酷,发现更好的设计",
          icon: "https://xiezhendong.cn/static/images/zcool-favicon.jpg",
          url: "https://www.zcool.com.cn/"
        },
        {
          name: "ui中国",
          desc: "专业用户体验设计平台",
          icon: "https://xiezhendong.cn/static/images/yearlogo.png",
          url: "https://www.ui.cn/"
        },
        {
          name: "花瓣",
          desc: "发现、采集你喜欢的UI设计素材、交互设计素材",
          icon: "https://xiezhendong.cn/static/images/huaban.png",
          url: "https://huaban.com/"
        },
        {
          name: "蓝湖",
          desc: "高效的产品设计协作平台",
          icon: "https://xiezhendong.cn/static/images/lanhu.png",
          url: "https://lanhuapp.com/"
        }
      ]
    },

    {
      name: "摸鱼",
      icon: "geek-fuwenbenbianjiqi_dongxiao",
      list: [
        {
          name: "抖音",
          icon: "https://xiezhendong.cn/static/images/douyin.png",
          desc: "短视频-记录美好生活",
          url: "https://www.douyin.com/"
        },
        {
          name: "1090影视",
          icon: "https://xiezhendong.cn/static/images/1090ys.png",
          desc: "免费无删减电影,无水印高清在线播放影视网站",
          url: "http://1090ys8.com/"
        },
        {
          name: "虎牙",
          icon: "https://xiezhendong.cn/static/images/huya.png",
          desc: "虎牙直播顶级游戏赛事直播，专业赛事直播，包括赛事直播，比赛视频，赛事战报，赛事资讯等。看电竞比赛，到虎牙。",
          url: "https://www.huya.com/"
        },
        {
          name: "哔哩哔哩",
          icon: "https://xiezhendong.cn/static/images/bili.png",
          desc: "bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。",
          url: "https://www.bilibili.com/"
        },

      ]
    }
  ]
}


export default data;



