export default function Header() {
	return (
		<header className="border-b border-gray-200">
			<div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
				<a href="/" className="text-lg font-bold text-gray-900">
					Blog
				</a>
				<nav>
					<a href="/rss.xml" className="text-sm text-gray-500 hover:text-gray-900 hover:underline">
						RSS
					</a>
				</nav>
			</div>
		</header>
	);
}
