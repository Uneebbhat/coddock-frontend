import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="relative z-10 motion-safe:cd-animate-slide-up">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/logo-green.png"} alt="CodDock" width={140} height={140} />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link className="hover:text-foreground" href="#features">
              Features
            </Link>
            <Link className="hover:text-foreground" href="#dashboard">
              Dashboard
            </Link>
            <Link className="hover:text-foreground" href="#pricing">
              Pricing
            </Link>
            <Link className="hover:text-foreground" href="#faq">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-black/25 transition hover:opacity-90"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
