import type { APIRoute } from 'astro';
import { getBlogPosts } from '../lib/blog';

export const GET: APIRoute = async ({ site }) => {
	const posts = await getBlogPosts();

	const lines = [
		'# Blog',
		'',
		'> ブログ記事のMarkdown版一覧です。各記事は URL 末尾に `.md` を付けると Markdown で取得できます。',
		'',
		'## Blog',
		'',
		...posts.map(
			(post) =>
				`- [${post.data.title}](${new URL(`${import.meta.env.BASE_URL}/blog/${post.id}.md`, site)}): ${post.data.description}`,
		),
	];

	return new Response(lines.join('\n') + '\n', {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
