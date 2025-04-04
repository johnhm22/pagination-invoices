import { cn } from "@/src/lib/utils";
import { Status } from "../components/Status";
import { getInvoices } from "../data-access/invoices";
import Link from "next/link";
import clsx from "clsx";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const searchTerms = await searchParams;

	const page = typeof searchTerms.page === "string" ? +searchTerms.page : 1;
	const limit = typeof searchTerms.limit === "string" ? +searchTerms.limit : 5;

	const skip = (page - 1) * limit;

	const { invoices, numberOfInvoices } = await getInvoices(skip, limit);

	return (
		<main className="">
			<h1 className="text-4xl font-bold ml-5 mt-7">Invoice Reporting</h1>
			<div className="w-4/5 min-h-2/3 mx-auto mt-20">
				<table className="min-w-full text-left text-sm font-light">
					<thead className="border-2 border-neutral-200 bg-white font-medium">
						<tr className="bg-blue-200">
							<th className="px-6 py-4">Date</th>
							<th className="px-6 py-4">Customer</th>
							<th className="px-6 py-4">Email</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Amount</th>
						</tr>
					</thead>
					<tbody>
						{invoices.map((invoice) => (
							<tr
								key={invoice.id}
								className="border-2 border-neutral-200 bg-whote"
							>
								<td className="whitespace-nowrap px-6 py-4">
									{new Date(invoice.date).toLocaleDateString()}
								</td>
								<td className="whitespace-nowrap px-6 py-4">
									{invoice.fullName}
								</td>
								<td className="whitespace-nowrap px-6 py-4">{invoice.email}</td>
								<td className="whitespace-nowrap px-6 py-4">
									<Status
										className={cn(
											"capitalize",

											invoice.status === "OPEN" && "bg-blue-400",
											invoice.status === "PAID" && "bg-green-500",
											invoice.status === "CANCELLED" && "bg-zinc-400",
											invoice.status === "UNCOLLECTABLE" && "bg-red-500"
										)}
									>
										{invoice.status}
									</Status>
								</td>
								<td className="whitespace-nowrap px-6 py-4">$5000</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex gap-2 justify-end mt-3 text-md">
					<Link
						href={`/?page=${page > 1 ? page - 1 : 1}&limit=${limit}`}
						className={clsx(
							"mr-4 rounded-md bg-slate-200 px-2",
							page <= 1 && "cursor-not-allowed font-light text-gray-400"
						)}
					>
						Previous{" "}
					</Link>
					<Link
						href={`/?page=${page + 1}&limit=${limit}`}
						className={clsx(
							"mr-4 rounded-md bg-slate-200 px-2",
							page >= numberOfInvoices / limit &&
								"cursor-not-allowed font-light text-gray-400"
						)}
					>
						Next{" "}
					</Link>
				</div>
			</div>
		</main>
	);
}
