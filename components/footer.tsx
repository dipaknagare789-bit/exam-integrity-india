import { Shield, Mail, FileText, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground">Exam Integrity</span>
                <span className="text-xs text-muted-foreground">India Watch</span>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A citizen-led initiative documenting examination irregularities and demanding 
              accountability from conducting bodies. Our mission is transparent, fair, and 
              secure examinations for all Indian students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#incidents" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  View Incidents
                </Link>
              </li>
              <li>
                <Link href="#statistics" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="#objection" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Raise Objection
                </Link>
              </li>
              <li>
                <Link href="#vote" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Vote
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <FileText className="h-3 w-3" />
                  RTI Templates
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ExternalLink className="h-3 w-3" />
                  Legal Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-3 w-3" />
                  Contact MPs
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ExternalLink className="h-3 w-3" />
                  Social Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            Data compiled from public sources including court orders, RTI responses, and news reports.
          </p>
          <p>
            Built by concerned citizens for a better examination system.
          </p>
        </div>
      </div>
    </footer>
  )
}
