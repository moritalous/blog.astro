import { getCollection } from 'astro:content';

/**
 * 公開対象の記事を新しい順で返す。
 * draft: true の記事は本番ビルドでは除外され、開発中はプレビューできる。
 */
export async function getBlogPosts() {
	const posts = await getCollection('blog', ({ data }) =>
		import.meta.env.PROD ? data.draft !== true : true,
	);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
