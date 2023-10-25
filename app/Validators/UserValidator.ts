import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [
      rules.required(),
      rules.minLength(4),
      rules.maxLength(255),
    ]),
    last_names:schema.string({}, [
      rules.required(),
      rules.minLength(5),
      rules.maxLength(255),
    ]),
    phone:schema.string({}, [
      rules.required(),
      rules.minLength(10),
      rules.maxLength(10),
      rules.unique({table: 'users', column: 'phone'})
    ]),
    email:schema.string({}, [
      rules.required(),
      rules.minLength(10),
      rules.maxLength(100),
      rules.unique({table: 'users', column: 'email'})
    ]),
    password:schema.string({}, [
      rules.required(),
      rules.minLength(8),
      rules.maxLength(180),
      rules.confirmed()
    ])
  })
  public messages: CustomMessages = {
  'name.required': 'El nombre es requerido',
  'name.minLength': 'El nombre debe tener al menos 4 caracteres',
  'name.maxLength': 'El nombre no puede tener más de 255 caracteres',
  
  'last_names.required': 'Los apellidos son requeridos',
  'last_names.minLength': 'Los apellidos deben tener al menos 5 caracteres',
  'last_names.maxLength': 'Los apellidos no pueden tener más de 255 caracteres',
  
  'phone.required': 'El teléfono es requerido',
  'phone.minLength': 'El teléfono debe tener al menos 10 dígitos',
  'phone.maxLength': 'El teléfono no puede tener más de 10 dígitos',
  'phone.unique': 'El número de teléfono ya está en uso',
  
  'email.required': 'El correo electrónico es requerido',
  'email.minLength': 'El correo electrónico debe tener al menos 10 caracteres',
  'email.maxLength': 'El correo electrónico no puede tener más de 100 caracteres',
  'email.unique': 'El correo electrónico ya está en uso',

  'password.required': 'La contraseña es requerida',
  'password.minLength': 'La contraseña debe tener al menos 8 caracteres',
  'password.maxLength': 'La contraseña no puede tener más de 180 caracteres'
  }
}
