import { Router } from 'express'

export const healthRoute = Router()

healthRoute.get('/health', (req, res) => {
  return res.status(200).json({ status: 'ok' })
})
