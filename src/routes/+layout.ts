export const prerender = true;

export const load = async ({ fetch }) => {
	const response = await fetch('/api/greet', { headers: { 'content-type': 'application/json' } });
	const greet = await response.json();
	console.log(greet);

	return { greet };
};
