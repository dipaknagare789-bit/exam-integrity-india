'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { ThumbsUp, ThumbsDown, Users, TrendingUp, AlertTriangle } from 'lucide-react'

interface VoteOption {
  id: string
  title: string
  description: string
  votesFor: number
  votesAgainst: number
}

const initialVoteOptions: VoteOption[] = [
  {
    id: 'remove-nta',
    title: 'Remove NTA as Exam Conducting Body',
    description: 'Replace NTA with a more accountable organization or revert to previous examination bodies like CBSE/AICTE for major exams.',
    votesFor: 847523,
    votesAgainst: 124891,
  },
  {
    id: 'nta-reform',
    title: 'Major NTA Reforms Required',
    description: 'Keep NTA but demand comprehensive reforms including better security, transparency, and accountability measures.',
    votesFor: 562341,
    votesAgainst: 234567,
  },
  {
    id: 'independent-audit',
    title: 'Independent Audit of All NTA Exams',
    description: 'Mandate an independent third-party audit of all NTA-conducted examinations from 2019 onwards.',
    votesFor: 723456,
    votesAgainst: 89123,
  },
]

export function VoteSection() {
  const [voteOptions, setVoteOptions] = useState(initialVoteOptions)
  const [votedOptions, setVotedOptions] = useState<Record<string, 'for' | 'against'>>({})

  const handleVote = (optionId: string, voteType: 'for' | 'against') => {
    if (votedOptions[optionId]) return

    setVoteOptions(prev => 
      prev.map(option => {
        if (option.id === optionId) {
          return {
            ...option,
            votesFor: voteType === 'for' ? option.votesFor + 1 : option.votesFor,
            votesAgainst: voteType === 'against' ? option.votesAgainst + 1 : option.votesAgainst,
          }
        }
        return option
      })
    )
    setVotedOptions(prev => ({ ...prev, [optionId]: voteType }))
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  return (
    <section id="vote" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
            <Users className="mr-1 h-3 w-3" />
            Public Opinion
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Voice Your Opinion
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vote on key issues regarding examination integrity and accountability
          </p>
        </div>

        <div className="space-y-6">
          {voteOptions.map((option) => {
            const totalVotes = option.votesFor + option.votesAgainst
            const forPercentage = Math.round((option.votesFor / totalVotes) * 100)
            const hasVoted = votedOptions[option.id]

            return (
              <Card key={option.id} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{option.title}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">
                        {option.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {formatNumber(totalVotes)} votes
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-accent">Support: {forPercentage}%</span>
                      <span className="text-destructive">Against: {100 - forPercentage}%</span>
                    </div>
                    <Progress value={forPercentage} className="h-3 bg-destructive/30" />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Button
                        variant={hasVoted === 'for' ? 'default' : 'outline'}
                        size="sm"
                        className="gap-2"
                        onClick={() => handleVote(option.id, 'for')}
                        disabled={!!hasVoted}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        Support ({formatNumber(option.votesFor)})
                      </Button>
                      <Button
                        variant={hasVoted === 'against' ? 'destructive' : 'outline'}
                        size="sm"
                        className="gap-2"
                        onClick={() => handleVote(option.id, 'against')}
                        disabled={!!hasVoted}
                      >
                        <ThumbsDown className="h-4 w-4" />
                        Against ({formatNumber(option.votesAgainst)})
                      </Button>
                    </div>
                    {hasVoted && (
                      <Badge variant="outline" className="text-accent">
                        Vote recorded
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-secondary/50 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">About this poll</p>
              <p className="mt-1">
                This is a public opinion poll to gauge student sentiment. While not legally binding, 
                these results will be compiled and submitted to relevant authorities and parliamentary 
                committees as evidence of public demand for examination reforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
