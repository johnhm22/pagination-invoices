import Form from "next/form";

import { addInvoice } from "@/src/data-access/invoices";
import Link from "next/link";

const page = () => {
	return (
		<main className="min-h-screen">
			<h1 className="text-4xl font-bold ml-5 mt-7">Add Invoice</h1>
			<Form
				action={addInvoice}
				className="p-5 pt-7 bg-slate-100 rounded-lg w-1/2 min-h-2/3 mx-auto mt-20 flex flex-col gap-11 border border-slate-200"
			>
				<div className="">
					<label htmlFor="name">
						Customer name
						<input
							required
							type="text"
							className="hover:shadow-lg border border-slate-300 rounded-md ml-7 pl-2 py-1 w-1/2 focus:bg-slate-100"
							name="name"
						/>
					</label>
				</div>
				<label htmlFor="email">
					Customer email
					<input
						required
						type="email"
						name="email"
						className="hover:shadow-lg border border-slate-300 rounded-md ml-7 pl-2 py-1 w-1/2 focus:bg-slate-100"
					/>
				</label>
				<label htmlFor="amount">
					Invoice amount
					<input
						required
						type="text"
						name="amount"
						className="hover:shadow-lg mb-10 border border-slate-300 rounded-md ml-7 pl-2 py-1 w-1/2 focus:bg-slate-100"
					/>
				</label>
				<div className="flex flex-row gap-3 justify-end">
					<button className="w-20 rounded-lg bg-red-500 text-black hover:cursor-pointer hover:shadow-xl">
						<Link href="/">Cancel</Link>
					</button>
					<button className="w-20 rounded-lg bg-blue-500 text-black hover:cursor-pointer hover:shadow-xl">
						Add
					</button>
				</div>
			</Form>
		</main>
	);
};

export default page;
