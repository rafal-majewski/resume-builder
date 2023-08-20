import zod from "zod";

export const skillSchema = zod.string().nonempty();
