import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from './environment.js'
import { send } from '@emailjs/browser'

class Email {
  static async send(templateParams) {
    const hasSent = localStorage.getItem('hasSent')
    if (!hasSent) {
      send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    } else {
      throw new Error(
        'Você ja enviou um email, se precisar enviar outro, aqui está: <a href="mailto:nromario482@gmail.com">nromario482@gmail.com</a>'
      )
    }
  }
}

export default Email
