"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { deleteInvoice } from "../data-access/invoices";

const TrashCan = ({ id }: { id: number }) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const handleClose = () => {
		dialogRef.current!.close();
	};

	const handleDelete = (id: number) => {
		deleteInvoice(id);
	};

	return (
		<div>
			<div className="hover:cursor-pointer">
				<Image
					src="/trash.png"
					width={20}
					height={20}
					alt="trash can"
					onClick={() => {
						dialogRef.current?.showModal();
					}}
				/>
			</div>
			<dialog
				ref={dialogRef}
				className="mx-auto my-auto h-1/4 w-1/3 bg-stone-100 p-3 rounded-lg"
			>
				<h3 className="text-xl font-semibold flex justify-center">
					Are you absolutely sure?
				</h3>
				<p className="mt-4 w-3/4 text-wrap text-center mx-auto">
					This action cannot be undone. It will permanently delete this invoice
					and remove it from the database.
				</p>
				<span className="mt-5 flex flex-row gap-4 justify-end">
					<button
						className="bg-blue-400 rounded-lg px-2 py-1 font-semibold"
						onClick={handleClose}
					>
						Cancel
					</button>
					<button
						className="bg-red-500 rounded-lg px-2 py-1 font-semibold"
						onClick={() => {
							handleDelete(id);
						}}
					>
						Delete Invoice
					</button>
				</span>
			</dialog>
		</div>
	);
};

export default TrashCan;
