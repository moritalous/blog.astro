interface Props {
	/** ISO 8601 date string */
	date: string;
}

export default function FormattedDate({ date }: Props) {
	return (
		<time dateTime={date}>
			{new Date(date).toLocaleDateString('ja-JP', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})}
		</time>
	);
}
