import { getPokemon } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await getPokemon(151, 0);
    return res;
}
