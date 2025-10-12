import { json } from '@sveltejs/kit';

export const prerender = true;

export async function GET() {
	const data = { response: 'Hello World!' };

	return json(data);
}
