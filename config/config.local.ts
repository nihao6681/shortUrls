import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
//配置数据库
config.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  host: '120.46.158.173',
  port: 3306,
  username: 'mmall',
  password: 'nihao6681',
  // host: '127.0.0.1',
  // port: 5432,
  // username: 'postgres',
  // password: '123456',
  database: 'sortUrl',
  timezone: '+08:00',
  define: {
      freezeTableName: true,

    },
  pool: {
      max: 10,
      min: 5,
      acquire: 1000,
      idle: 10000,
      evict: 0,
  }
};




  return config;
};
