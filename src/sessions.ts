import { Config } from '@smoothjs/config'
import { Hook } from '@smoothjs/smooth'
import { SessionOptions } from './interfaces'

export function Sessions(options: SessionOptions): MethodDecorator & ClassDecorator {
  const config = new Config()
  const session = require('express-session')

  return Hook(session(config.get('session') || options))
}
