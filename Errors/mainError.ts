export enum HTTP{
OK=200,
CREATED=201,
BAD_REQUEST=404

}

interface iError {
    name: string;
    status:HTTP;
    message:string;
    success:boolean
}

export class mainError extends Error {
    public readonly name:string
    public readonly status:HTTP
    public readonly message:string
    public readonly success:boolean=true

    constructor(args:iError){
        super(args.message)
        Object.setPrototypeOf(this,new.target.prototype)
        

        this.name = args.name,
        this.status = args.status,
        this.message = args.message

        if (this.success!==undefined) {
this.success=args.success
        }
        Error.captureStackTrace(this)

    }
}