import { Container } from 'typescript-ioc'
import { SessionMiddleware } from './session-middleware'

export class SessionModule {
    static fire() {
        Container.bind(SessionMiddleware).factory(() => {
            return {
                middleware: new SessionMiddleware,
                propertyKey: 'handle'
            }
        })
    }
}