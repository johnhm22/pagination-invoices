"use client";

import Image from "next/image";
import Link from "next/link";

const InvoiceDetails = ({ id }: { id: number }) => {
	return (
		<div>
			<div className="hover:cursor-pointer">
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
