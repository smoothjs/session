export interface CookieOptions {
  path: string
  domain: string
  httpOnly: boolean
  secure: boolean
  maxAge: any
  expires: number | object
  sameSite: string | boolean
}
