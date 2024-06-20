import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email:"divyanshgupta1811@gmai.com",
        name:"Divyansh Gupta",
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
    console.log("Done with Queries");
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })