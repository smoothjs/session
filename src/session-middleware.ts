import { Singleton } from "typescript-ioc";

@Singleton
export class SessionMiddleware {
    async handle(req: any, res: any, next: Function) {
        const session = require('express-session')
        
        session({
            secret: 'my-secret',
            resave: false,
            saveUninitialized: false,
        })(req, res, next)
    }
}