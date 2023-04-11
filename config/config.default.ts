import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

const path = require("path")
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1664110336440_1330';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/static', 
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };
  config.jwt = {
    secret: 'nihao6681',
  };
  config.cryp={}
  config.multipart = {
    mode: 'stream',
    // 只允许上传的图片格式
    whitelist:['.png','.jpg','.jpeg'],
    // 文件允许大小
    fileSize: '50mb'
  }
  // 服务端接受 post 请求
  config.security = {
    csrf: {
      enable: false, // 将内置的安全系统关闭
      ignoreJSON: false,
      withCredentials: false,
      ignore: () => true,
    },
    domainWhiteList: ['*'],
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
