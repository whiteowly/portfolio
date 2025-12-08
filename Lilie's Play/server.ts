import express from 'express'
import cors from 'cors'
import { createAuthMiddleware } from 'better-auth/api'
import { auth } from './auth'

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

// Mount Better Auth under /api/auth
app.use('/api/auth', createAuthMiddleware(auth))

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`[auth] listening on http://localhost:${PORT}`)
})
