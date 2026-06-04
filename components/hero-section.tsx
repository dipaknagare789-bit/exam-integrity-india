import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { statistics } from '@/lib/exam-data'
import { AlertTriangle, TrendingUp, Users, FileWarning, ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 bg-primary/10 text-primary">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Critical Issue: 80+ Exams Compromised in 10 Years
          </Badge>
          
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Exposing the Crisis of{' '}
            <span className="text-primary">Exam Integrity</span>{' '}
            in India
          </h1>
          
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A comprehensive documentation of exam leaks, misconduct, and systemic failures 
            that have affected millions of Indian students. Stand up for transparency 
            and accountability in our examination system.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              <FileWarning className="h-5 w-5" />
              Raise Objection
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View All Incidents
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard
              icon={<FileWarning className="h-5 w-5" />}
              value={statistics.totalExamsAffected.toString()}
              label="Exams Affected"
            />
            <StatCard
              icon={<Users className="h-5 w-5" />}
              value={statistics.candidatesAffected}
              label="Students Impacted"
            />
            <StatCard
              icon={<TrendingUp className="h-5 w-5" />}
              value={statistics.ntaIncidents.toString()}
              label="NTA Incidents"
            />
            <StatCard
              icon={<AlertTriangle className="h-5 w-5" />}
              value={statistics.pendingInvestigations.toString()}
              label="Under Investigation"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="mb-2 text-primary">{icon}</div>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
