import Link from "next/link";

export default function NotFound() {
	return (
		<div className="rounded-lg p-5 mx-auto mt-16 min-h-fit w-1/2 bg-slate-100 items-center text-center">
			<h1 className="text-6xl md:text-9xl font-semibold">404</h1>
			<h2 className="text-xl md:text-4xl mt-9 mb-9">
				So sorry, we couldn&apos;t find the invoice you were looking for
			</h2>

			<Link className="bg-blue-500 rounded-lg px-3 py-2 mb-7" href="/">
				Return Home
			</Link>
		</div>
	);
}
