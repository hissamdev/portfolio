import prisma from "@/lib/prisma"
import { Prisma, Project } from "../generated/prisma/client"

export async function createProject() {
    await prisma.project.create({
        data: {
            imagePath: "/Ahmed-Hissam-Recording-a-Resume.jpg",
            imageAlt: "Image alt here",
            heading: "Heading goes here",
            description: "Description text",
            link: "/link-was-successful",
            tags: {
                connectOrCreate: [{
                    where: { name: "FullStack" },
                    create: { name: "FullStack" },
                }
                ]
            }
        }
    })
    console.log("Project created")
}

export type ProjectWithTags = Prisma.ProjectGetPayload<{ include: { tags: true } }>
export async function getProjects(): Promise<ProjectWithTags[]> {
    return prisma.project.findMany({
        include: { tags: true }
    })
}