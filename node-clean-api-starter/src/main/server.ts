import express from 'express'
import { healthRoute } from './routes/health.route'

const app = express()

app.use(express.json())
app.use(healthRoute)

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})
