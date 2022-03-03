"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.user.deleteMany();
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
//# sourceMappingURL=seed.js.map