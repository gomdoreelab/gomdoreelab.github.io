import { Greet } from '$lib/api/greet.ts';

export const load = async () => {
	const greet = await Greet();

	return { greet };
};

export const prerender = true;
