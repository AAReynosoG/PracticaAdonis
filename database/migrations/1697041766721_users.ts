import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 100).notNullable().unique()
      table.string('name', 255).notNullable()
      table.string('last_names', 255).notNullable()
      table.string('phone', 10).notNullable().unique()
      table.string('password', 180).notNullable()
      table.boolean('active').defaultTo(true) 
      table.string('remember_me_token').nullable()
      
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
      
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
