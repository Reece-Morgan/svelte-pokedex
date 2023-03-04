import { getGenerations } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await getGenerations();
    return res;
}
