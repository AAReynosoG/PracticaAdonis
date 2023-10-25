import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'; 
import UserValidator2Validator from 'App/Validators/UserValidator2Validator';
import User from 'App/Models/User';

export default class DataController {
    public async index({ response }: HttpContextContract){
      const users = await User.query().preload('posts').preload('comments')
      return response.status(200).json({users})
    }


    public async methods({ response, request }: HttpContextContract){
      const Method = request.method()
      return response.status(200).json({'Mi loco, eto e un': Method})
    }


    public async crudUser({response, request, params}: HttpContextContract){
      try {
        switch (request.method()) {
          case "GET":
            const Users = await User.query().orderBy('id', 'asc')
            if (Users.length > 0) {
              return response.status(200).json({data: "Users: ", Users})
            } else {
              return response.status(404).json({error: "No users found.", data: null})
            }
            break;
          case "POST":
            const validatedData = await request.validate(UserValidator)
            const user = new User();
            user.name = validatedData.name
            user.last_names = validatedData.name
            user.phone = validatedData.name
            user.email = validatedData.name
            user.password = validatedData.name
            await user.save()

            return response.status(200).json({message: "User registered succesfully!", active: true})
          case "DELETE":
            const userDel = await User.find(params.id)
            if (!userDel) {
              return response.status(404).json({error: "User not found", data: null})
            }

            userDel.active = false;
            return response.status(200).json({error: "User is no longer active", data: userDel})
                break;
          case "PUT":
            const dataValidated = await request.validate(UserValidator2Validator)
            const userId = await User.find(params.id)

            if(!userId){
              return response.status(404).json({error: "User not found", data: null})
            }
            userId.merge(dataValidated)
            await userId.save()
            
            return response.status(200).json({
                message: "Modified user",
                active: true
            })
                  break;
          default:
            return response.badRequest();
            break;
        }
      } catch (error) {
        return response.status(500).json({ error});
      }
    }

    public async UserPerId({ response, params}: HttpContextContract){

      const user = await User.find(params.id)

      if(!user){
        return response.status(404).json({message: "User not found", data: null})
      }

      return response.status(200).json({ message: "User found", data: user  })

    }

  }
  
