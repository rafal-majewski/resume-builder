import zod from "zod";

export const contactEntrySchema = zod.object({
	datum: zod.string().min(1),
	href: zod.string().min(1),
	icon: zod.object({
		filepath: zod.string().min(1),
		alt: zod.string().min(1),
	}),
});

export const educationEntrySchema = zod.object({
	name: zod.string().min(1),
	period: zod.object({
		start: zod.string().min(1),
		end: zod.string().min(1),
	}),
	description: zod.string().min(1),
	href: zod.string().min(1),
	icon: zod.object({
		filepath: zod.string().min(1),
	}),
	additionalInformations: zod.array(zod.string().min(1)),
});

export const knownTechnologySchema = zod.object({
	name: zod.string().min(1),
	icon: zod.object({
		filepath: zod.string().min(1),
	}),
	details: zod.string().min(1),
});

const contentSchema = zod.object({
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
		knownTechnologies: zod.array(knownTechnologySchema),
	}),
});
export default contentSchema;
