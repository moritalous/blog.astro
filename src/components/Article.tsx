import type { ReactNode } from 'react';
import FormattedDate from './FormattedDate';
import TableOfContents, { type Heading } from './TableOfContents';

interface Props {
	title: string;
	/** ISO 8601 date string */
	pubDate: string;
	/** ISO 8601 date string */
	updatedDate?: string;
	headings: Heading[];
	children: ReactNode;
}

export default function Article({ title, pubDate, updatedDate, headings, children }: Props) {
	return (
		<main className="mx-auto max-w-5xl px-4 py-12">
			<div className="lg:flex lg:items-start lg:gap-8">
				<article className="mx-auto prose max-w-3xl prose-slate lg:mx-0 lg:max-w-none lg:flex-1">
					<header className="not-prose mb-8">
						<h1 className="text-3xl font-bold">{title}</h1>
						<p className="mt-2 text-sm text-gray-500">
							<FormattedDate date={pubDate} />
							{updatedDate && (
								<>
									{' '}
									(更新: <FormattedDate date={updatedDate} />)
								</>
							)}
						</p>
					</header>
					{children}
				</article>
				<TableOfContents headings={headings} />
			</div>
		</main>
	);
}
