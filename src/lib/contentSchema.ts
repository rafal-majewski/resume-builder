import zod from "zod";
import {contactSchema} from "./features/contacts/contactSchema.js";
import {educationSchema} from "./features/educations/educationSchema.js";
import {knownTechnologySchema} from "./features/known_technologies/knownTechnologySchema.js";

export const contentSchema = zod.object({
	gdprClause: zod.string().min(1),
	person: zod.object({
		firstName: zod.string().min(1),
		lastName: zod.string().min(1),
		description: zod.string().min(1),
		contact: zod.object({
			phoneNumber: contactSchema,
			emailAddress: contactSchema,
			location: contactSchema,
			linkedin: contactSchema,
			github: contactSchema,
		}),
		education: zod.array(educationSchema),
		knownTechnologies: zod.array(knownTechnologySchema),
	}),
});
