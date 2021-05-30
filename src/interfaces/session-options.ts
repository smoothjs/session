import { CookieOptions } from './cookie-options'

export interface SessionOptions {
  secret: string
  resave: boolean
  saveUninitialized: boolean
  cookie: CookieOptions
  genid: Function
  name: string
  proxy: undefined | boolean
  rolling: boolean
}
