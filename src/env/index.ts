import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333),
  HOST: z.string().default('0.0.0.0'),
})

const _env = envSchema.safeParse(process.env) // irás tentar validar o process.env com as info acima citada

if (_env.success === false) {
  console.error('🚫Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
