import express from 'express'
import { healthRoute } from './routes/health.route'

export const app = express()

app.use(express.json())
app.use(healthRoute)

