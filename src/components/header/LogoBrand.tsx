import Image from "next/image";
import Link from "next/link";

export default function LogoBrand() {
    return (
        <Link href="/" className="p-1 max-w-[180px]">
            <Image
                src="/branding/logo.svg"
                alt="logo"
                width={160}
                height={50}
                priority
            />
        </Link>
    )
}
