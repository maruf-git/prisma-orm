import { prisma } from "./lib/prisma"

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "orion",
    //         email: "orion@gmail.com"
    //     }
    // })
    // console.log(user);

    const userData = await prisma.user.findMany({});
    console.log("find user data:", userData);
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