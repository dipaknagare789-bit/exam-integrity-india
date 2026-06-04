'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, Shield, AlertTriangle, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Incidents', href: '#incidents' },
  { name: 'Statistics', href: '#statistics' },
  { name: 'Raise Objection', href: '#objection' },
  { name: 'Vote', href: '#vote' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">Exam Integrity</span>
            <span className="text-xs text-muted-foreground">India Watch</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Button variant="default" size="sm" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            Report Issue
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" className="mt-4 gap-2">
              <AlertTriangle className="h-4 w-4" />
              Report Issue
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
