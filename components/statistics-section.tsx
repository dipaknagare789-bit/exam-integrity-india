import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { conductingBodies, statistics, examIncidents } from '@/lib/exam-data'
import { BarChart3, PieChart, TrendingUp, AlertTriangle, Calendar } from 'lucide-react'

export function StatisticsSection() {
  const leakCount = examIncidents.filter(i => i.type === 'leak').length
  const cancellationCount = examIncidents.filter(i => i.type === 'cancellation').length
  const misconductCount = examIncidents.filter(i => i.type === 'misconduct').length
  const irregularityCount = examIncidents.filter(i => i.type === 'irregularity').length

  const yearlyData = [
    { year: 2015, count: 2 },
    { year: 2016, count: 3 },
    { year: 2017, count: 5 },
    { year: 2018, count: 4 },
    { year: 2019, count: 6 },
    { year: 2020, count: 4 },
    { year: 2021, count: 12 },
    { year: 2022, count: 18 },
    { year: 2023, count: 11 },
    { year: 2024, count: 15 },
  ]

  const maxCount = Math.max(...yearlyData.map(d => d.count))

  return (
    <section id="statistics" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            <BarChart3 className="mr-1 h-3 w-3" />
            Data Analysis
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Numbers Tell the Story
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A decade of examination irregularities visualized
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Incident Types */}
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Incident Types</h3>
              </div>
              <div className="space-y-4">
                <IncidentTypeBar label="Paper Leaks" count={leakCount} total={examIncidents.length} color="bg-destructive" />
                <IncidentTypeBar label="Cancellations" count={cancellationCount} total={examIncidents.length} color="bg-primary" />
                <IncidentTypeBar label="Misconduct" count={misconductCount} total={examIncidents.length} color="bg-warning" />
                <IncidentTypeBar label="Irregularities" count={irregularityCount} total={examIncidents.length} color="bg-accent" />
              </div>
            </CardContent>
          </Card>

          {/* Yearly Trend */}
          <Card className="border-border bg-card lg:col-span-2">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Yearly Trend (2015-2024)</h3>
              </div>
              <div className="flex h-48 items-end gap-2">
                {yearlyData.map((data) => (
                  <div key={data.year} className="flex flex-1 flex-col items-center gap-2">
                    <div 
                      className="w-full rounded-t bg-primary transition-all hover:bg-primary/80"
                      style={{ height: `${(data.count / maxCount) * 100}%` }}
                    />
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-medium text-foreground">{data.count}</span>
                      <span className="text-xs text-muted-foreground">{data.year.toString().slice(-2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <span>Significant spike observed post-2020</span>
              </div>
            </CardContent>
          </Card>

          {/* Conducting Bodies */}
          <Card className="border-border bg-card lg:col-span-2">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Incidents by Conducting Body</h3>
              </div>
              <div className="space-y-4">
                {conductingBodies.map((body) => (
                  <div key={body.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-medium text-foreground">{body.name}</span>
                        <span className="ml-2 text-muted-foreground">({body.fullName})</span>
                      </div>
                      <span className="text-primary">{body.incidents} incidents</span>
                    </div>
                    <Progress 
                      value={(body.incidents / Math.max(...conductingBodies.map(b => b.incidents))) * 100} 
                      className="h-2" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Key Statistics</h3>
              </div>
              <div className="space-y-4">
                <StatItem label="Total Exams Affected" value={statistics.totalExamsAffected.toString()} />
                <StatItem label="Years Analyzed" value={`${statistics.yearsConsidered} years`} />
                <StatItem label="Students Impacted" value={statistics.candidatesAffected} />
                <StatItem label="NTA Incidents" value={statistics.ntaIncidents.toString()} />
                <StatItem label="Under Investigation" value={statistics.pendingInvestigations.toString()} highlight />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function IncidentTypeBar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const percentage = Math.round((count / total) * 100)
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{count} ({percentage}%)</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div className={`h-full ${color}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

function StatItem({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-semibold ${highlight ? 'text-primary' : 'text-foreground'}`}>{value}</span>
    </div>
  )
}
