import zod from "zod";

export const knownTechnologySchema = zod.object({
	name: zod.string().min(1),
	icon: zod.object({
		filepath: zod.string().min(1),
	}),
	details: zod.string().min(1),
});
