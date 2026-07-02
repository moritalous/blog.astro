import rss from '@astrojs/rss';
import { getBlogPosts } from '../lib/blog';

export async function GET(context) {
	const posts = await getBlogPosts();
	return rss({
		title: 'Blog',
		description: 'ブログ記事一覧',
		site: new URL(import.meta.env.BASE_URL, context.site).href,
		trailingSlash: false,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `${import.meta.env.BASE_URL}/blog/${post.id}`,
		})),
	});
}
