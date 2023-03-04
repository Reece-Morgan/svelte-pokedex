import { error } from "@sveltejs/kit";
import { getLimitAndOffset, getPokemon } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
    const param = getLimitAndOffset(params.slug);
    const res = await getPokemon(param.limit, param.offset);
    if (acceptableUrls.includes(params.slug)) {
        console.log(params.slug + ' is an acceptable url');
        return {
            res: res,
            slug: params.slug
        }
    } else {
        throw error(404, 'Not found');
    }
}

const acceptableUrls = [
    'generation-i',
    'generation-ii',
    'generation-iii',
    'generation-iv',
    'generation-v',
    'generation-vi',
    'generation-vii',
    'generation-viii',
    'generation-ix'
]