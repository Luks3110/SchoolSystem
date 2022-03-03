import { DateTime } from './../src/graphql';
import { PrismaClient } from '@prisma/client'
const prisma  = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const alice = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@teste.com',
            cpf: '12345678901',
            phone: '11978851547',
            password: '142961',   
        }
    });
    
    console.log({ alice });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });