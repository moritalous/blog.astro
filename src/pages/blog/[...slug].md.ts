import type { APIRoute, InferGetStaticPropsType } from 'astro';
import { getBlogPosts } from '../../lib/blog';

export async function getStaticPaths() {
	const posts = await getBlogPosts();
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { post },
	}));
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute<Props> = ({ props }) => {
	const { post } = props;
	const markdown = `# ${post.data.title}\n\n${post.body ?? ''}`;

	return new Response(markdown, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
