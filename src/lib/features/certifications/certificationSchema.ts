import zod from "zod";

export const certificationSchema = zod.object({
	name: zod.string().min(1),
	url: zod.string().url(),
});
