"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

const limit = 5;

export const getInvoices = async (skip: number, limit: number) => {
	// add authentication here
	const invoices = await prisma.invoice.findMany({
		skip,
		take: limit,
	});

	const numberOfInvoices = await prisma.invoice.count();

	return { invoices, numberOfInvoices };
};

export const addInvoice = async (formData: FormData) => {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const amount = formData.get("amount") as string;

	await prisma.invoice.create({
		data: {
			fullName: name,
			email,
			amount,
			status: "OPEN",
		},
	});

	const numberOfInvoices = await prisma.invoice.count();

	redirect(`/?page=${Math.ceil(numberOfInvoices / limit)}&limit=${limit}`);
};

export const deleteInvoice = async (id: number) => {
	await prisma.invoice.delete({
		where: {
			id,
		},
	});
	redirect(`/`);
};
