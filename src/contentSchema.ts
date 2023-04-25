import Zod from "zod";

export const contactEntrySchema = Zod.object({
	datum: Zod.string().min(1),
	icon: Zod.object({
		filepath: Zod.string().min(1),
		alt: Zod.string().min(1),
	}),
});

const contentSchema = Zod.object({
	gdprClause: Zod.string().min(1),
	person: Zod.object({
		firstName: Zod.string().min(1),
		lastName: Zod.string().min(1),
		description: Zod.string().min(1),
		contact: Zod.object({
			phoneNumber: contactEntrySchema,
			emailAddress: contactEntrySchema,
		}),
	}),
});
export default contentSchema;
