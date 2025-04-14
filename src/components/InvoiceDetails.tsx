"use client";

import Image from "next/image";
import Link from "next/link";

const InvoiceDetails = ({ id }: { id: number }) => {
	return (
		<div>
			<div className="h-9 w-12 p-1">
				<Link href={`/invoices/${id}`}>
					<Image
						src="/magnifying-glass.png"
						width={20}
						height={20}
						object-fit="none"
						alt="magnifying-glass"
					/>
				</Link>
			</div>
		</div>
	);
};

export default InvoiceDetails;
