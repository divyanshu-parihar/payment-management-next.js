import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
console.log('prisma connection success')

export default prisma;