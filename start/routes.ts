import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { data: 'Hello world!' }
})

Route.get('/data', 'DataController.index')



Route.any('/methods', 'DataController.methods')


