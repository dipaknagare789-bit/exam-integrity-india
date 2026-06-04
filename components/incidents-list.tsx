'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { examIncidents, type ExamIncident } from '@/lib/exam-data'
import { Calendar, Users, Building2, AlertCircle, CheckCircle, Clock, Search } from 'lucide-react'

const typeColors = {
  leak: 'bg-destructive/20 text-destructive border-destructive/30',
  misconduct: 'bg-warning/20 text-warning-foreground border-warning/30',
  cancellation: 'bg-primary/20 text-primary border-primary/30',
  irregularity: 'bg-accent/20 text-accent-foreground border-accent/30',
}

const statusIcons = {
  resolved: <CheckCircle className="h-3 w-3" />,
  'under-investigation': <Search className="h-3 w-3" />,
  pending: <Clock className="h-3 w-3" />,
}

const statusColors = {
  resolved: 'bg-accent/20 text-accent-foreground',
  'under-investigation': 'bg-primary/20 text-primary',
  pending: 'bg-muted text-muted-foreground',
}

export function IncidentsList() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredIncidents = activeTab === 'all' 
    ? examIncidents 
    : examIncidents.filter(i => i.type === activeTab)

  return (
    <section id="incidents" className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">Documentation</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Documented Exam Incidents
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive timeline of exam irregularities across India
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
            <TabsTrigger 
              value="all"
              className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All ({examIncidents.length})
            </TabsTrigger>
            <TabsTrigger 
              value="leak"
              className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-destructive data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground"
            >
              Leaks ({examIncidents.filter(i => i.type === 'leak').length})
            </TabsTrigger>
            <TabsTrigger 
              value="cancellation"
              className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Cancellations ({examIncidents.filter(i => i.type === 'cancellation').length})
            </TabsTrigger>
            <TabsTrigger 
              value="misconduct"
              className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-warning data-[state=active]:bg-warning data-[state=active]:text-warning-foreground"
            >
              Misconduct ({examIncidents.filter(i => i.type === 'misconduct').length})
            </TabsTrigger>
            <TabsTrigger 
              value="irregularity"
              className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Irregularities ({examIncidents.filter(i => i.type === 'irregularity').length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <ScrollArea className="h-[600px] pr-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredIncidents.map((incident) => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function IncidentCard({ incident }: { incident: ExamIncident }) {
  return (
    <Card className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight text-foreground">
            {incident.examName}
          </CardTitle>
          <Badge variant="outline" className={typeColors[incident.type]}>
            {incident.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {incident.description}
        </p>
        
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {incident.year}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {incident.affectedCandidates}
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="h-3 w-3" />
            {incident.conductingBody}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <Badge variant="secondary" className={statusColors[incident.status]}>
            <span className="mr-1">{statusIcons[incident.status]}</span>
            {incident.status.replace('-', ' ')}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <AlertCircle className="h-3 w-3" />
            {incident.sources.length} source{incident.sources.length > 1 ? 's' : ''}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
