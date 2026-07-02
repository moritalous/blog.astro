export interface Heading {
	depth: number;
	slug: string;
	text: string;
}

interface Props {
	headings: Heading[];
}

export default function TableOfContents({ headings }: Props) {
	const toc = headings.filter((h) => h.depth >= 2 && h.depth <= 3);

	if (toc.length === 0) return null;

	return (
		<nav className="not-prose hidden w-56 shrink-0 rounded-lg border border-gray-200 p-4 text-sm lg:sticky lg:top-8 lg:block">
			<p className="font-semibold text-gray-900">目次</p>
			<ul className="mt-2 space-y-1">
				{toc.map((h) => (
					<li key={h.slug} className={h.depth === 3 ? 'ml-4' : ''}>
						<a href={`#${h.slug}`} className="text-gray-600 hover:text-gray-900 hover:underline">
							{h.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
