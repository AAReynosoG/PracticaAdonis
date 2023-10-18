import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @hasMany(() => Post, {foreignKey: 'user_id'})
  public posts: HasMany<typeof Post>

  @hasMany(() => Comment,{foreignKey: 'user_id'})
  public comments: HasMany<typeof Comment>

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public name: string

  @column()
  public last_names: string

  @column()
  public phone: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
