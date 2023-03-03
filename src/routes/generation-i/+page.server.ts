import { getGen1Pokemon } from "./+server";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await getGen1Pokemon();
    console.log('res: ' + JSON.stringify(res));
    return res;
}
