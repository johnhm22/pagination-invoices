import { notFound } from "next/navigation";
import Link from "next/link";

import { getSingleInvoice } from "@/src/data-access/invoices";
import { cn } from "@/src/lib/utils";

export default async function Page({
	params,
}: {
	params: Promise<{ invoiceId: string }>;
}) {
	const { invoiceId } = await params;
	const id = parseInt(invoiceId);
	if (isNaN(id)) {
		notFound();
	}

	const invoice = await getSingleInvoice(id);

	if (!invoice) {
		notFound();
	}

	return (
		<main className="flex justify-center items-center min-h-screen">
			<div className="bg-slate-200 rounded-tr-lg rounded-bl-lg flex flex-col w-4/5 md:w-2/3 lg:w-2/5 px-3">
				<div className="flex flex-row justify-around gap-11 py-5 mb-5">
					<p className="text-lg md:text-2xl font-semibold">
						Invoice Reference: {invoiceId}
					</p>
					<button
						type="button"
						className={cn(
							"capitalize",
							"rounded-lg",
							"px-3",
							"py-2",
							"text-center",
							"text-sm",
							"size-max",

							invoice.status === "OPEN" && "bg-blue-400",
							invoice.status === "PAID" && "bg-green-500",
							invoice.status === "CANCELLED" && "bg-zinc-400",
							invoice.status === "UNCOLLECTABLE" && "bg-red-500"
						)}
					>
						{invoice.status}{" "}
					</button>
				</div>
				<div className="flex flex-col gap-7 text-lg md:text-xl font-semibold ">
					<p>{invoice.fullName}</p>
					<p>{invoice.email}</p>
					<p>£{invoice.amount}</p>
					<p>{new Date(invoice.date).toLocaleDateString()}</p>
				</div>
				<div className="flex justify-end">
					<button className="bg-blue-400 py-1 my-3 mr-2 w-20 rounded-lg text-black hover:cursor-pointer hover:shadow-xl">
						<Link href="/">Back</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
