import zod from "zod";

export const educationSchema = zod.object({
	name: zod.string().min(1),
	period: zod.object({
		start: zod.string().min(1),
		end: zod.string().min(1),
	}),
	description: zod.string().min(1),
	href: zod.string().min(1),
	icon: zod.object({
		filePath: zod.string().min(1),
	}),
	additionalInformations: zod.array(zod.string().min(1)),
});
