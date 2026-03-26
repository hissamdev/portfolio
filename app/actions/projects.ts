'use server'
import { db } from "@/lib/db"
import { usersTable, projectTable, projectTags, blogTable } from "@/lib/db/schema"

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

export async function createProject() {
    // try {
    //     await db.insert(projectTable).values({
    //         heading: "Heading here",
    //         description: "Description here",
    //         imageAlt: "Picture of Ahmed Hissam",
    //         imagePath: "/Ahmed-Hissam-Recording-a-Resume.jpg",
    //         linkUrl: "/link-successful",
    //     })
    // } catch (err) {
    //     console.error(err)
    // }
}

export async function addTag() {
    // try {
    //     await db.insert(projectTags).values({
    //         projectId: "01dd5c1e-471e-477d-8b5f-968d2bf841bb",
    //         tagId: "abb8df21-72ca-4c62-8c4f-265923ef5495",
    //     })
    // } catch (err) {
    //     console.error(err)
    // }
}

export async function getProjects() {
    try {
        const res = await db.query.projects.findMany({
            with: {
                tags: true,
            }
        })

        // await db.insert(blogTable).values({
        //     slug: "example-blog",
        //     content: "## Markdown Content \n * So cool \n * Isn't it? \n It is"
        // })

        console.log("Projects fetched successfully: ", res)
        return res;
    } catch (error) {
        console.error("Error fetching projects: ", error)
    }
}