import {prisma} from "./lib/prisma"

async function main(){
    const user = await prisma.user.create({
        data:{
            name: "md maruf ur rahman",
            email:"maruf@gmail.com",
        }
    })

    console.log("created user: ",user);
}

