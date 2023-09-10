import zod from "zod";

export const languageSchema = zod.object({
	name: zod.string(),
	level: zod.string(),
	icon: zod.object({
		filePath: zod.string(),
	}),
});
