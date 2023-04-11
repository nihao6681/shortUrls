class BaseModel {
    msg: string
    data: any
    constructor(data, msg) {
        if (typeof data == "string") {
            this.msg = data
            data = null
            msg = null
        }

        if (data) {
            this.data = data
        }
        if (msg) {
            this.msg = msg
        }

    }
}
export class SuccessModel extends BaseModel {
    code: number
    constructor(data?, msg?) {
        super(data, msg)
        this.code = 200
    }
}
 export class ErrorModel extends BaseModel {
    code: number
    constructor(data?, msg?) {
        super(data, msg)
        this.code = -1
    }
}