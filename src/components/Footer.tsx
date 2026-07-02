export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-12 border-t border-gray-200">
			<div className="mx-auto max-w-3xl px-4 py-6 text-sm text-gray-500">&copy; {year} Blog</div>
		</footer>
	);
}
