// 配置
window.Config = {

  // 站点名
  SiteName: '网站监控',

  // 站点链接
  SiteUrl: '#',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'little-queen-f1d5.78288la.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
	'm788355750-5dcf2865829a5138e008b280',//5003961
	'm788355752-6bd89f0ede74f78f59118250',//5003962
	//'m788355757-128fd131c20909851a249378',//5003963
    'm788355762-682d79b8e312373da8af4d5e',//5003964
	'm788355764-0fdfdfa11e96a6a686b6627c',//5003965
	'm788355768-bc754bd6787cced4b80844db',//5003966
	'm788355771-517db816ae40cff206bce671',//5003967
    'm788355775-7845d59a60bf18c2990e4a8e',//5003968
    'm788355777-17fd32a945b5561db1fe70c0',//5003969
    'm787908649-be34d1ad294d2bba55579816',//5003931
    'm787908786-c79143034e4b75f6d8eeca51',//5003932
    'm787909050-8e69257a4fd606bb7f174807',//5003933
    'm788071015-d1cf97e56717a901187e5035',//5003934
    'm787909053-a7e0e3f241c3673a96a6faff',//5003935
    'm787847028-21e60dbe9570a15510b338ba',//5003936
    'm787908816-7d0663e22455e1a670ef389e',//5003937
    'm788276774-2aaa65f39af4294d3c4235d6',//5003938
    'm788355801-81b06202b52d7720b2c004fa',//39la
	'm788355806-61361f4ce563c38640d3f310',//39lb
	'm787908800-f4dd61d90ed076f514900f58',//39lc
	'm787908720-3de8c253035ab22203cbf88c',//39ld
	'm788355816-f2701154171d839305aeb9e2',//39kc
	'm788355834-ae0fc7d7065eedfdcd649dce',//86kd
	'm788355837-81bc1424ffb60507a4a5eda7',//86ke
	'm788363670-0720b8b0ed98e4ae1c6cd061',//转发kd
	'm788363672-b657fbbb01ee3de7fa52aa1b',//转发ke
	'm788363673-6403f47afb021e6a104d5490',//转发kf
	'm788363771-f5e6eb102be8e159bd04f5ed',//转发88ka
	'm788363916-b77e59a80b0df571386e2557',//转发ttt
	'm788355898-1a27d5b3dece80b588cf9c63',//导航vip
	'm788356917-19b565ef96a20e6735495c51',//导航la
	'm788356920-9ce53ce2664369bf0dc1ff45',//导航.com
	'm788356939-6f7f3b6bc129789f090a1796',//导航.app
	'm788356960-d44c414c7dce6de135326760',//导航.cn
	'm788356955-877996fb8fe8c3cd5b49dc53',//导航.ceo
	'm788356966-70581f8f62e68e8d0c2a6f06',//导航dh50039.com
	'm788356972-56d73b9ce0a8bfc521f3f9a5',//导航www-50039.net
	'm788356969-dfaafe2b9bb95aa2c4e47340',//导航www-50039.com
	'm787847004-db173cd53fd8cc5d0f86f8fd',//客服自助
	'm788276780-3292dfe4becd4189d0fbbd8e',//客服自助
	'm788356963-af8e340a9da8119542ee4285',//50039dhnet
	'm788357381-abedb1ed3832a55f68f04933',//开奖50039
	'm788357380-3f518e77be4f67ef4be81eb1',//开奖50086
	'm788357659-aadb063dd88a3286c1711569',//APP
	'm788357663-2dfb770b99dce2527c3da436',//APP
	'm788357666-082378b1aa880d2cba36f003',//APP
	'm788357671-b12dab9fd9b04e99f17625cf',//APP
	'm788357673-0de61711689485aad258d0c5',//APP
	'm788357674-b87e4bafff4aba557acc2325',//APP
	'm788363242-b49c3e9ea53f2d9fa88d6356',//APP2
	'm788363243-9857f507663fe1331fac5119',//APP2
	'm788363415-8a533e347c9fc5c6d3565199',//APP2
	'm788363421-613c384a71a644e6c6ff5b6c',//APP2
	'm788363423-dbefde82e0de3f16d6f056c7',//APP2
	'm788363425-149992f298883fa0fed4ef7c',//APP2
	'm788363650-2bdef30e706ff9c0f3acae90',//主页
	'm788363234-3879039dc096453e66e97b24',//主页
	'm788363236-79183f0b97ef8cc11f87f06d',//主页
	'm788363238-1e7d7d9f497dd5166c0b0571',//主页
	'm788363240-cfe630eeaee7d0dae3dcc529',//主页
	'm788363652-5e50b0ef5e9c75859907b303',//主页
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 10,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://50039.vip/'
    },
    // {
    //   text: 'GitHub',
    //   url: 'https://github.com/yb/uptime-status'
    // }
  ]
};