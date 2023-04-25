import Zod from "zod";

export const contactEntrySchema = Zod.object({
	datum: Zod.string().min(1),
	href: Zod.string().min(1),
	icon: Zod.object({
		filepath: Zod.string().min(1),
		alt: Zod.string().min(1),
	}),
});

export const educationEntrySchema = Zod.object({
	name: Zod.string().min(1),
	period: Zod.object({
		start: Zod.string().min(1),
		end: Zod.string().min(1),
	}),
	description: Zod.string().min(1),
	href: Zod.string().min(1),
	icon: Zod.object({
		filepath: Zod.string().min(1),
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
			location: contactEntrySchema,
			linkedin: contactEntrySchema,
			github: contactEntrySchema,
		}),
		education: Zod.array(educationEntrySchema),
	}),
});
export default contentSchema;
