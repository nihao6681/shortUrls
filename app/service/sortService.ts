import { Service } from "egg";
export default class SortService extends Service{
    model:any
    constructor(e){
        super(e)
        this.model = this.ctx.model.ShortUrlModel
    }
    public async shortUrl(data:any){
         // 提交连接数据，并入库
        await this.model.create(data)
        return "/"
    }
    public async getShort(params:any){
        // 根据短链接码找到这条数据，数据里头有完整链接
        console.log(params)
        const shorturl = await this.model.findOne({
            where:{
                short: params
            }
        })
        
        return shorturl.full
    }
}