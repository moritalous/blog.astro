import type { ReactNode } from 'react';
import FormattedDate from './FormattedDate';

interface Props {
	title: string;
	/** ISO 8601 date string */
	pubDate: string;
	/** ISO 8601 date string */
	updatedDate?: string;
	children: ReactNode;
}

export default function Article({ title, pubDate, updatedDate, children }: Props) {
	return (
		<main className="mx-auto max-w-3xl px-4 py-12">
			<article className="prose max-w-none prose-slate">
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
		</main>
	);
}
