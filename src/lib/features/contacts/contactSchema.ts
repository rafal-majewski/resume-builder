import zod from "zod";

export const contactSchema = zod.object({
	datum: zod.string().min(1),
	href: zod.string().min(1),
	icon: zod.object({
		filePath: zod.string().min(1),
		alt: zod.string().min(1),
	}),
});
