import FormattedDate from './FormattedDate';

export interface PostSummary {
	id: string;
	title: string;
	description: string;
	/** ISO 8601 date string */
	pubDate: string;
}

interface Props {
	posts: PostSummary[];
}

export default function PostList({ posts }: Props) {
	return (
		<main className="mx-auto max-w-3xl px-4 py-12">
			<h1 className="text-3xl font-bold">Blog</h1>
			<ul className="mt-8 space-y-6">
				{posts.map((post) => (
					<li key={post.id}>
						<a href={`${import.meta.env.BASE_URL}/blog/${post.id}`} className="group block">
							<h2 className="text-xl font-semibold text-gray-900 group-hover:underline">
								{post.title}
							</h2>
							<p className="mt-1 text-sm text-gray-500">
								<FormattedDate date={post.pubDate} />
							</p>
							<p className="mt-1 text-gray-600">{post.description}</p>
						</a>
					</li>
				))}
			</ul>
		</main>
	);
}
