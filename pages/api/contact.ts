import { type NextApiRequest, type NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') { res.status(400).json({ message: 'Bad request' }); return }

  const { name, email, message, phone } = JSON.parse(req.body)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!name || !email || !message || !phone) {
    res.status(400).json({ message: 'Todos los campos son requeridos' }); return
  }

  const nameRegex = /^[a-zA-Z\s]+$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const messageRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/

  if (!nameRegex.test(name)) {
    res.status(400).json({ message: 'Campo name: Formato inválido' }); return
  }

  if (!emailRegex.test(email)) {
    res.status(400).json({ message: 'Campo email: Formato inválido' }); return
  }

  if (!messageRegex.test(message)) {
    res.status(400).json({ message: 'Campo message: Formato inválido' }); return
  }

  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.PUBLIC_KEY,
    template_params: {
      name,
      email,
      message,
      phone
    },
    accessToken: process.env.PRIVATE_KEY
  }

  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response)
      if (response.status === 200) res.status(200).json({ message: 'OK' })
      if (response.status === 400) res.status(402).json({ message: 'Ha habido un error' })
    })
    .catch((error) => {
      res.status(400).json({ message: error.message })
      console.log(error)
    })
}
