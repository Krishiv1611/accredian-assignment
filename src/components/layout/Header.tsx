import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EnquireModal } from "@/components/ui/EnquireModal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/90 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block text-2xl tracking-tight text-blue-600">
              Accredian
            </span>
          </Link>
          <nav className="hidden lg:flex gap-5">
            <Link href="#stats" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">Stats</Link>
            <Link href="#clients" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">Clients</Link>
            <Link href="#accredian-edge" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">Accredian Edge</Link>
            <Link href="#cat" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">CAT</Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">How It Works</Link>
            <Link href="#faqs" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">FAQs</Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-blue-600 text-muted-foreground">Testimonials</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <EnquireModal>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition-all">
              Enquire Now
            </Button>
          </EnquireModal>
        </div>
      </div>
    </header>
  );
}
