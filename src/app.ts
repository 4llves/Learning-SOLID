import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

// created app
export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Alves Jhonata',
    email: 'alves@email.com',
  },
})

// ORM - Object Relational Mapper
