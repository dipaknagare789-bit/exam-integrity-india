export interface ExamIncident {
  id: string
  examName: string
  year: number
  type: 'leak' | 'misconduct' | 'cancellation' | 'irregularity'
  description: string
  affectedCandidates: string
  conductingBody: string
  status: 'resolved' | 'under-investigation' | 'pending'
  sources: string[]
}

export const examIncidents: ExamIncident[] = [
  {
    id: '1',
    examName: 'NEET-UG 2024',
    year: 2024,
    type: 'leak',
    description: 'Widespread paper leak allegations with grace marks controversy. Multiple arrests made across states including Bihar and Gujarat. Questions raised about exam integrity.',
    affectedCandidates: '24 Lakh+',
    conductingBody: 'NTA',
    status: 'under-investigation',
    sources: ['CBI Investigation', 'Supreme Court Hearing']
  },
  {
    id: '2',
    examName: 'UGC-NET June 2024',
    year: 2024,
    type: 'cancellation',
    description: 'Exam cancelled within 24 hours of conduct due to integrity concerns. CBI investigation ordered.',
    affectedCandidates: '9 Lakh+',
    conductingBody: 'NTA',
    status: 'under-investigation',
    sources: ['Ministry of Education', 'CBI']
  },
  {
    id: '3',
    examName: 'CSIR-UGC NET 2024',
    year: 2024,
    type: 'cancellation',
    description: 'Exam postponed citing logistical issues and integrity concerns following UGC-NET cancellation.',
    affectedCandidates: '2 Lakh+',
    conductingBody: 'NTA',
    status: 'pending',
    sources: ['NTA Official Notice']
  },
  {
    id: '4',
    examName: 'SSC CGL 2017',
    year: 2017,
    type: 'leak',
    description: 'Major paper leak scandal leading to re-examination. Candidates protested for months.',
    affectedCandidates: '30 Lakh+',
    conductingBody: 'SSC',
    status: 'resolved',
    sources: ['Delhi High Court Order']
  },
  {
    id: '5',
    examName: 'UPSC CSE 2015',
    year: 2015,
    type: 'irregularity',
    description: 'CSAT controversy where English comprehension questions were alleged to discriminate against non-English medium students.',
    affectedCandidates: '5 Lakh+',
    conductingBody: 'UPSC',
    status: 'resolved',
    sources: ['Parliamentary Committee']
  },
  {
    id: '6',
    examName: 'JEE Main 2021',
    year: 2021,
    type: 'misconduct',
    description: 'Multiple sessions witnessed server issues, wrong questions, and technical glitches affecting thousands.',
    affectedCandidates: '10 Lakh+',
    conductingBody: 'NTA',
    status: 'resolved',
    sources: ['NTA Press Release']
  },
  {
    id: '7',
    examName: 'REET 2021',
    year: 2021,
    type: 'leak',
    description: 'Rajasthan Teacher Eligibility Test paper leaked hours before exam. Multiple arrests made.',
    affectedCandidates: '16 Lakh+',
    conductingBody: 'RBSE',
    status: 'resolved',
    sources: ['Rajasthan Police']
  },
  {
    id: '8',
    examName: 'UPPSC PCS 2022',
    year: 2022,
    type: 'irregularity',
    description: 'Answer key controversies and evaluation irregularities reported by candidates.',
    affectedCandidates: '4 Lakh+',
    conductingBody: 'UPPSC',
    status: 'resolved',
    sources: ['Allahabad High Court']
  },
  {
    id: '9',
    examName: 'Railway RRB NTPC 2022',
    year: 2022,
    type: 'misconduct',
    description: 'Massive protests by candidates over normalization process and result declaration delays.',
    affectedCandidates: '1.25 Crore+',
    conductingBody: 'RRB',
    status: 'resolved',
    sources: ['Railway Ministry']
  },
  {
    id: '10',
    examName: 'BPSC 67th 2022',
    year: 2022,
    type: 'leak',
    description: 'Bihar Public Service Commission exam paper leak allegations. Re-exam conducted for affected centers.',
    affectedCandidates: '6 Lakh+',
    conductingBody: 'BPSC',
    status: 'resolved',
    sources: ['Patna High Court']
  },
  {
    id: '11',
    examName: 'NEET-PG 2024',
    year: 2024,
    type: 'cancellation',
    description: 'Exam postponed hours before scheduled conduct citing administrative reasons.',
    affectedCandidates: '2 Lakh+',
    conductingBody: 'NBE/NTA',
    status: 'pending',
    sources: ['Health Ministry']
  },
  {
    id: '12',
    examName: 'CTET 2021',
    year: 2021,
    type: 'irregularity',
    description: 'Technical glitches during online exam causing candidates to lose time.',
    affectedCandidates: '20 Lakh+',
    conductingBody: 'CBSE',
    status: 'resolved',
    sources: ['CBSE Notice']
  },
  {
    id: '13',
    examName: 'Constable Recruitment 2022',
    year: 2022,
    type: 'leak',
    description: 'UP Police Constable exam cancelled due to paper leak. Fresh exam ordered.',
    affectedCandidates: '25 Lakh+',
    conductingBody: 'UPPRPB',
    status: 'resolved',
    sources: ['UP Government']
  },
  {
    id: '14',
    examName: 'RPSC RAS 2021',
    year: 2021,
    type: 'irregularity',
    description: 'Answer key disputes and evaluation concerns raised by candidates.',
    affectedCandidates: '3 Lakh+',
    conductingBody: 'RPSC',
    status: 'resolved',
    sources: ['Rajasthan High Court']
  },
  {
    id: '15',
    examName: 'GATE 2023',
    year: 2023,
    type: 'irregularity',
    description: 'Wrong questions reported in multiple papers. Grace marks awarded.',
    affectedCandidates: '8 Lakh+',
    conductingBody: 'IIT',
    status: 'resolved',
    sources: ['IIT Official']
  }
]

export const conductingBodies = [
  { name: 'NTA', fullName: 'National Testing Agency', incidents: 8 },
  { name: 'SSC', fullName: 'Staff Selection Commission', incidents: 5 },
  { name: 'UPSC', fullName: 'Union Public Service Commission', incidents: 3 },
  { name: 'RRB', fullName: 'Railway Recruitment Board', incidents: 4 },
  { name: 'State PSCs', fullName: 'State Public Service Commissions', incidents: 12 },
]

export const statistics = {
  totalExamsAffected: 80,
  yearsConsidered: 10,
  candidatesAffected: '10 Crore+',
  pendingInvestigations: 5,
  ntaIncidents: 15,
}
