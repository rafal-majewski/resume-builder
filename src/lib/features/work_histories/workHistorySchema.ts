import zod from "zod";

export const workHistorySchema = zod.object({
	employer: zod.object({
		name: zod.string().min(1),
		logo: zod.object({
			filePath: zod.string().min(1),
		}),
		url: zod.string().url(),
	}),
	period: zod.object({
		start: zod.string().min(1),
		end: zod.string().min(1),
	}),
	title: zod.string().min(1),
	keyPoints: zod.array(zod.string().min(1)),
});
