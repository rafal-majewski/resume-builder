import Zod from "zod";

const contentSchema = Zod.object({
	gdprClause: Zod.string().min(1),
});
export default contentSchema;
