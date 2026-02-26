import { prisma } from "../"

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "hello",
            email: "hello@gmail.com"
        }
    })
    console.log("user :", user)

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });