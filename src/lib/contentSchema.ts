import zod from "zod";
import {contactEntrySchema} from "./features/contacts/contactEntrySchema.js";
import {educationEntrySchema} from "./features/educations/educationEntrySchema.js";
import {knownTechnologyEntrySchema} from "./features/known_technologies/knownTechnologyEntrySchema.js";

export default zod.object({
	gdprClause: zod.string().min(1),
	person: zod.object({
		firstName: zod.string().min(1),
		lastName: zod.string().min(1),
		description: zod.string().min(1),
		contact: zod.object({
			phoneNumber: contactEntrySchema,
			emailAddress: contactEntrySchema,
			location: contactEntrySchema,
			linkedin: contactEntrySchema,
			github: contactEntrySchema,
		}),
		education: zod.array(educationEntrySchema),
		knownTechnologies: zod.array(knownTechnologyEntrySchema),
	}),
});
