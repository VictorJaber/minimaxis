import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Message from 'App/Models/Chat'


export default class ChatsController {
  public async index({}: HttpContextContract) {
    return Message.all()
  }

  public async store({ request }: HttpContextContract) {
    try {
      const data = request.only(['message']) // Use 'message' em vez de 'content'
      const message = await Message.create(data)
      return message
    } catch (error) {
      return error
    }
  }
  public async show({ params }: HttpContextContract) {
    // Método para exibir uma mensagem específica, se necessário
    const message = await Message.find(params.id)
    return message
  }


  public async update({ params, request }: HttpContextContract) {

    const data = request.only(['message'])
    const message = await Message.find(params.id)
    if (message) {
      message.merge(data)
      await message.save()
    }
    return message
  }

  public async destroy({ params }: HttpContextContract) {
    const message = await Message.find(params.id)
    if (message) {
      await message.delete()
    }
  }
}
