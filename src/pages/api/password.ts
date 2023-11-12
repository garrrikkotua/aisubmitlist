// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { password } = req.body
  
  if (password === process.env.PAGE_PASSWORD) {
    console.log('password correct')
    res.setHeader('Set-Cookie', serialize(process.env.PASSWORD_COOKIE_NAME as string, 'true', { httpOnly: true, path: '/' } ))
    res.status(200).json({ message: 'Password correct' })
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}
