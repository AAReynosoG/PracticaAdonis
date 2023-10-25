import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { data: 'Hello world!' }
})

Route.get('/data', 'DataController.index')

Route.any('/methods', 'DataController.methods')

Route.any('/crud/:id?', 'DataController.crudUser')

Route.get('/user/:id', 'DataController.UserPerId')


//BadRequest}
//Buscar un usuario
//Buscar todos los usuarios
//Registrar usuario
//Actualizar un usuario
//Eliminar un usuario jaja

//Hacer una sola ruta para las opciones de arriba, con un switch(req.met)
// y otra con el parametro id
