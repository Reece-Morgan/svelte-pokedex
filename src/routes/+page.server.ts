import { getGenerations } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log('get the generations')
    const res = await getGenerations();
    console.log('res: ' + JSON.stringify(res));
    return res;
}
