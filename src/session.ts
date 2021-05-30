import { createParamDecorator } from '@smoothjs/smooth'

export function Session(property?: string): ParameterDecorator {
  return createParamDecorator('SESSION')(property)
}
