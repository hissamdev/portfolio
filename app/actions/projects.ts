'use server'

import { db } from "@/lib/db"
import { usersTable } from "@/lib/db/schema"

// export async function createProject() {
//     await prisma.project.create({
//         data: {
//             imagePath: "/Ahmed-Hissam-Recording-a-Resume.jpg",
//             imageAlt: "Image alt here",
//             heading: "Heading goes here",
//             description: "Description text",
//             link: "/link-was-successful",
//             tags: {
//                 connectOrCreate: [{
//                     where: { name: "FullStack" },
//                     create: { name: "FullStack" },
//                 }
//                 ]
//             }
//         }
//     })
//     console.log("Project created")
// }

// export type ProjectWithTags = Prisma.ProjectGetPayload<{ include: { tags: true } }>
// export async function getProjects(): Promise<ProjectWithTags[]> {
//     return prisma.project.findMany({
//         include: { tags: true }
//     })
// }

export async function getProjects() {
    
    try {
        await db.insert(usersTable).values({
        name: "Me",
        age: "20",
        email: 'email@gmail.com'
    })

    const result = await db.select().from(usersTable);
    console.log(result)
    } catch (error) {
        console.error("Error inserting user: ", error)
        throw(error)
    }
    
}