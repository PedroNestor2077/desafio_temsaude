import express from 'express'
import Router from './routes'
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(Router)

export default app
