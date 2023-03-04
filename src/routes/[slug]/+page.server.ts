import { getLimitAndOffset, getPokemon } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
    const param = getLimitAndOffset(params.slug);
    const res = await getPokemon(param.limit, param.offset);
    return {
        res: res,
        slug: params.slug
    }
}
