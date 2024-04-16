import fastify from 'fastify'
import { appRoutes } from './http/routes'

// created app
export const app = fastify()

app.register(appRoutes)
