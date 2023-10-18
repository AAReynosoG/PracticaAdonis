import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
  }
  
