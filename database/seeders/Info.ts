import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    const trx = await Database.transaction()

    try {
      await Database
        .insertQuery()
        .table('users')
        .useTransaction(trx)
        .insert([
          { 
            email: 'elmencho@outlook.com', 
            name: 'El mencho', 
            last_names: 'Wey', 
            phone: '8715772525', 
            password: 'elmencho1234' 
          },
          { 
            email: 'marco@gaymail.com', 
            name: 'El', 
            last_names: 'Marco', 
            phone: '6242647989', 
            password: 'FallingInLoveWithBeto' 
          },
          {
            email: 'tony@gmail.com',
            name: 'Tony',
            last_names: 'Montana',
            phone: '8719588389',
            password: 'yeaPerdoneKameKameJa'

          },
          {
            email: 'Elchuy@gmail.com',
            name: 'Chuy',
            last_names: 'Wamas Lokas',
            phone: '8112121212',
            password: 'pistoymaspisto'
          },
          {
            email: 'chakalitos@gmail.com',
            name: 'Chakalito',
            last_names: 'Chakalita',
            phone: '1234567890',
            password: 'CHKchk'
          }
        ])

        await Database
        .insertQuery()
        .table('posts')
        .useTransaction(trx)
        .insert([
          {
            text: 'Amigos, alguien sabe como crear APIs en Adonis?????', 
            user_id: 1,
          },
          {
            text: 'Hola, soy nuevo en esta plataforma',
            user_id: 2
          },
          {
            text: 'Es mejor ChatGPT o Bing??',
            user_id: 3
          },
          {
            text: 'Recomienden buenas canciones pal spotify',
            user_id: 4
          }
        ])

        await Database
        .insertQuery()
        .table('comments')
        .useTransaction(trx)
        .insert([
          {
            text: 'Tengo, siempre lista mi carcacha, pa sacar a las muchachas y llevarlas a paseaaaar',
            user_id: 2,
            post_id: 4
          },
          {
            text: 'La del perrito chakarron',
            user_id: 1,
            post_id: 4
          },
          {
            text: 'Hola amigo',
            user_id: 1,
            post_id: 2
          },
          {
            text: 'JEJEJEJEJEJEJEJEJEJEJEJEJE NO',
            user_id: 3,
            post_id: 1
          },
          {
            text: 'Solo quiero a mi chakalito, quiero saber donde esta, jugar free contigo es bonito, no se que hacer si te me vas',
            user_id: 5,
            post_id: 4
          }
        ])
      await trx.commit()
    } catch (error) {
      await trx.rollback()
      throw error
    }
  }
}

