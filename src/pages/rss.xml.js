import rss from '@astrojs/rss';
import { getBlogPosts } from '../lib/blog';

export async function GET(context) {
	const posts = await getBlogPosts();
	return rss({
		title: 'Blog',
		description: 'ブログ記事一覧',
		site: context.site,
		trailingSlash: false,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}`,
		})),
	});
}
