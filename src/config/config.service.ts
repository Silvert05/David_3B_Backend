import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    private  readonly envConfig: {[key:string]:string}
    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== 'production'
    }
}
