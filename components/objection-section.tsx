'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  Building2, 
  Tv, 
  Send, 
  CheckCircle, 
  FileText, 
  AlertTriangle,
  Scale,
  Megaphone,
  X
} from 'lucide-react'

type ObjectionType = 'government' | 'nta' | 'media'

interface ObjectionCategory {
  id: string
  title: string
  description: string
}

const governmentCategories: ObjectionCategory[] = [
  { id: 'accountability', title: 'Lack of Accountability', description: 'No concrete action taken against exam malpractices' },
  { id: 'compensation', title: 'Student Compensation', description: 'Demand compensation for affected students' },
  { id: 'reform', title: 'Systemic Reform', description: 'Demand comprehensive examination system reform' },
  { id: 'investigation', title: 'Independent Investigation', description: 'Demand independent inquiry committees' },
]

const ntaCategories: ObjectionCategory[] = [
  { id: 'security', title: 'Security Lapses', description: 'Repeated paper leaks despite assurances' },
  { id: 'transparency', title: 'Lack of Transparency', description: 'No clear communication with candidates' },
  { id: 'technical', title: 'Technical Failures', description: 'Server issues and glitches during exams' },
  { id: 'evaluation', title: 'Evaluation Concerns', description: 'Answer key errors and normalization issues' },
]

const mediaCategories: ObjectionCategory[] = [
  { id: 'coverage', title: 'Inadequate Coverage', description: 'Student issues not given adequate airtime' },
  { id: 'bias', title: 'Biased Reporting', description: 'One-sided coverage favoring authorities' },
  { id: 'followup', title: 'No Follow-up', description: 'Stories dropped without resolution coverage' },
  { id: 'sensationalism', title: 'Sensationalism', description: 'Focus on drama over substantive issues' },
]

export function ObjectionSection() {
  const [activeTab, setActiveTab] = useState<ObjectionType>('government')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [details, setDetails] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [submittedCount, setSubmittedCount] = useState(12847)

  const categories = {
    government: governmentCategories,
    nta: ntaCategories,
    media: mediaCategories,
  }

  const tabInfo = {
    government: {
      title: 'Government & Conducting Bodies',
      icon: <Building2 className="h-4 w-4" />,
      description: 'Raise objections against Ministry of Education, State Governments, and exam conducting bodies',
    },
    nta: {
      title: 'National Testing Agency',
      icon: <Scale className="h-4 w-4" />,
      description: 'Specific objections against NTA for exam conduct, security, and transparency issues',
    },
    media: {
      title: 'Indian Media',
      icon: <Tv className="h-4 w-4" />,
      description: 'Raise concerns about media coverage of student issues and examination scams',
    },
  }

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleSubmit = () => {
    if (selectedCategories.length === 0) return
    setShowSuccess(true)
    setSubmittedCount(prev => prev + 1)
    setSelectedCategories([])
    setDetails('')
  }

  return (
    <section id="objection" className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
            <Megaphone className="mr-1 h-3 w-3" />
            Raise Your Voice
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Raise an Objection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Submit formal objections that will be compiled and presented to relevant authorities
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground">
            <FileText className="h-4 w-4" />
            {submittedCount.toLocaleString()} objections submitted
          </div>
        </div>

        {/* Success Banner */}
        {showSuccess && (
          <div className="mb-6 flex items-center justify-between rounded-lg border border-accent/50 bg-accent/10 p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-foreground">Objection Submitted Successfully</p>
                <p className="text-sm text-muted-foreground">
                  Your objection has been recorded and will be included in our compilation to relevant authorities.
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Select Target</CardTitle>
            <CardDescription className="text-muted-foreground">
              Choose who you want to raise your objection against
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="government" onValueChange={(v) => setActiveTab(v as ObjectionType)}>
              <TabsList className="grid w-full grid-cols-3 bg-secondary">
                <TabsTrigger value="government" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Building2 className="hidden h-4 w-4 sm:block" />
                  Government
                </TabsTrigger>
                <TabsTrigger value="nta" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Scale className="hidden h-4 w-4 sm:block" />
                  NTA
                </TabsTrigger>
                <TabsTrigger value="media" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Tv className="hidden h-4 w-4 sm:block" />
                  Media
                </TabsTrigger>
              </TabsList>

              {Object.entries(tabInfo).map(([key, info]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="mb-6 rounded-lg border border-border bg-secondary/50 p-4">
                    <div className="flex items-center gap-2 text-foreground">
                      {info.icon}
                      <span className="font-medium">{info.title}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{info.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Select issues (multiple allowed):</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {categories[key as ObjectionType].map((category) => (
                        <button
                          key={category.id}
                          onClick={() => toggleCategory(category.id)}
                          className={`flex flex-col items-start rounded-lg border p-4 text-left transition-all ${
                            selectedCategories.includes(category.id)
                              ? 'border-primary bg-primary/10'
                              : 'border-border bg-secondary/30 hover:border-primary/50'
                          }`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span className="font-medium text-foreground">{category.title}</span>
                            {selectedCategories.includes(category.id) && (
                              <CheckCircle className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <span className="mt-1 text-sm text-muted-foreground">{category.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div>
                <label htmlFor="details" className="text-sm font-medium text-foreground">
                  Additional Details (Optional)
                </label>
                <textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Provide any specific details, incident references, or personal experiences..."
                  className="mt-2 min-h-[120px] w-full rounded-lg border border-border bg-input p-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <Button 
                onClick={handleSubmit} 
                disabled={selectedCategories.length === 0}
                className="w-full gap-2"
                size="lg"
              >
                <Send className="h-4 w-4" />
                Submit Objection
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">How your objection helps</p>
              <p className="mt-1">
                All objections are compiled into a comprehensive report submitted to Parliamentary Standing 
                Committees, RTI applications, and used in Public Interest Litigations (PILs). Your voice 
                contributes to the collective demand for reform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
