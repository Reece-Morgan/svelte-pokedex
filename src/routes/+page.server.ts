import { getGenerations } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await getGenerations();
    console.log('res: ' + JSON.stringify(res));
    return res;
}
