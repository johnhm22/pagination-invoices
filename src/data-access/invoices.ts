import { prisma } from "../lib/prisma";

export const getInvoices = async (skip: number, limit: number) => {
	// add authentication here
	const invoices = await prisma.invoice.findMany({
		skip,
		take: limit,
	});

	const numberOfInvoices = await prisma.invoice.count();

	return { invoices, numberOfInvoices };
};
