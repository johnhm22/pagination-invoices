import { notFound } from "next/navigation";

import { Status } from "@/src/components/Status";
import { getSingleInvoice } from "@/src/data-access/invoices";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

export default async function Page({
	params,
}: {
	params: Promise<{ invoiceId: string }>;
}) {
	const { invoiceId } = await params;
	const id = parseInt(invoiceId);
	if (isNaN(id)) {
		throw new Error("Invoice id format not recognised");
	}

	const invoice = await getSingleInvoice(id);

	if (!invoice) {
		notFound();
	}

	console.log("invoiceData: ", invoice);

	// console.log("invoice id: ", invoiceId);
	return (
		<main className="min-h-screen">
			<div className="min-h-2/3 ml-10 mt-20 w-1/3 border border-red-500">
				{/* <h1 className="text-4xl font-bold mt-7">Invoice Details</h1> */}
				<div className="flex flex-row gap-11 py-5 mb-5">
					<p className="text-3xl font-semibold">
						Invoice Reference: {invoiceId}
					</p>
					<Status
						className={cn(
							"capitalize",

							invoice.status === "OPEN" && "bg-blue-400",
							invoice.status === "PAID" && "bg-green-500",
							invoice.status === "CANCELLED" && "bg-zinc-400",
							invoice.status === "UNCOLLECTABLE" && "bg-red-500"
						)}
					>
						{invoice.status}{" "}
					</Status>
				</div>
				<div className="flex flex-col gap-7">
					<p className="text-xl font-semibold">{invoice.fullName}</p>
					<p className="text-xl font-semibold">{invoice.email}</p>
					<p className="text-xl font-semibold">
						{new Date(invoice.date).toLocaleDateString()}
					</p>
				</div>
				<button className=" border border-red-500 w-20 rounded-lg bg-blue-500 text-black hover:cursor-pointer hover:shadow-xl">
					<Link href="/">Back</Link>
				</button>
			</div>
		</main>
	);
}
