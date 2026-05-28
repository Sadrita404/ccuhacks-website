import { redirect } from '@sveltejs/kit';

export const load = ({ url }) => {
	const target = new URL('https://ccuhacks.devfolio.co/');

	for (const [key, value] of url.searchParams.entries()) {
		target.searchParams.set(key, value);
	}

	redirect(302, target.toString());
};
