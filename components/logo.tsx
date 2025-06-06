import Link from "next/link"
import Image from "next/image"

export function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const logoSize = size === "small" ? { width: 40, height: 40 } : { width: 50, height: 50 }

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative">
        <Image
          src="/logo.png"
          alt="Lin's Infotechs Logo"
          width={logoSize.width}
          height={logoSize.height}
          className="object-contain"
        />
      </div>
      <span className="text-red-500 text-2xl font-bold">Lin's Infotechs</span>
    </Link>
  )
}
