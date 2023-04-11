import { Controller } from 'egg';
import { ErrorModel, SuccessModel } from '../baseModel';
/**
 * 路由控制器
 * 采用mvc模式
 */
export default class HomeController extends Controller {
  /**
   * 录入长短链接信息
   * @param full 重定向的链接
   * @param short 短链接标识
   */
  public async shortUrl() {
    const { ctx, service } = this
    const { full, short } = ctx.request.body
    if(short&&short.length>8){
      ctx.body = new ErrorModel("短域名长度最大为 8 个字符")
      return
    }
   await service.sortService.shortUrl({ full, short })
    ctx.body = new SuccessModel("success")
  }
  /**
   * 重定向
   * 获取链接，前端输入/:sort地址就由短链接重定向长连接
   */
  public async getShort() {
    const { ctx, service } = this
    const { short } = ctx.params
    const path = await service.sortService.getShort(short.split(":")[1])
    ctx.redirect(path)
  }
}

