import { defineRelations } from "drizzle-orm";
import * as schema from "../../drizzle/schema";

export const relations = defineRelations(schema, (r) => ({
	projects: {
		tags: r.many.tags({
			from: r.projects.id.through(r.projectTags.projectId),
			to: r.tags.id.through(r.projectTags.tagId)
		}),
	},
	tags: {
		projects: r.many.projects(),
	},
}))