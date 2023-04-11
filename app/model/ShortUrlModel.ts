import { Application } from "egg";
/**
 * 创建接口数据
 */
interface bean {
    id:number
    full: string
    short: string
}
/**
 * 实体模型
 */
export default (app: Application) => {
    const { STRING,INTEGER } = app.Sequelize;
    const Model = app.model.define("shortModel", {
        id:{
            type:INTEGER,
            primaryKey:true
        },
        full: {
            type: STRING
        },
        short: {
            type: STRING,
            defaultValue: "short" //默认字符
        }
    },
        {
            tableName: "short_model"
        }
    )

    return class ShortUrlModel extends Model implements bean {
        full: string
        short: string
        id:number

    }
}