# exam-integrity-india
Tracking examination transparency, incidents, reforms and public information
npx create-next-app@latest exam-integrity-india \
--typescript \
--tailwind \
--app
import "./globals.css";

export const metadata = {
  title: "Exam Integrity India",
  description:
    "Tracking examination transparency, misconduct cases, reforms and accountability."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
    </>
  );
}
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto p-4 flex justify-between">

        <Link href="/">
          Exam Integrity India
        </Link>

        <div className="flex gap-6">

          <Link href="/incidents">
            Incidents
          </Link>

          <Link href="/timeline">
            Timeline
          </Link>

          <Link href="/analytics">
            Analytics
          </Link>

          <Link href="/polls">
            Polls
          </Link>

        </div>
      </div>
    </nav>
  );
}
export default function Hero() {
  return (
    <section className="py-32">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-7xl font-bold">

          India's Examination
          Integrity Tracker

        </h1>

        <p className="mt-8 text-xl">

          Explore verified examination
          irregularities, investigations,
          court proceedings and reforms.

        </p>

      </div>

    </section>
  );
}
export default function Stats() {

  const stats = [
    {
      title: "Incidents",
      value: "85+"
    },
    {
      title: "Exams",
      value: "20+"
    },
    {
      title: "States",
      value: "15+"
    },
    {
      title: "Candidates",
      value: "1Cr+"
    }
  ];

  return (
    <section className="py-20">

      <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">

        {stats.map((item) => (

          <div
            key={item.title}
            className="border rounded-xl p-8"
          >

            <h2>{item.title}</h2>

            <p className="text-4xl font-bold">

              {item.value}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
export interface Incident {

  id: number;

  examName: string;

  year: number;

  state: string;

  incidentType: string;

  description: string;

  status: string;

  sourceLink: string;
}
import { Incident } from "@/types/incident";

export default function IncidentCard({
  incident
}: {
  incident: Incident;
}) {
  return (
    <div className="border rounded-xl p-6">

      <h2 className="text-xl font-bold">

        {incident.examName}

      </h2>

      <p>{incident.year}</p>

      <p>{incident.incidentType}</p>

      <p>{incident.status}</p>

    </div>
  );
}
import IncidentCard from "@/components/IncidentCard";

const incidents = [
  {
    id: 1,
    examName: "NEET UG",
    year: 2024,
    state: "Multiple",
    incidentType: "Paper Leak",
    description: "",
    status: "Investigated",
    sourceLink: ""
  }
];

export default function IncidentsPage() {
  return (
    <main className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl mb-8">

        Incident Database

      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {incidents.map((incident) => (

          <IncidentCard
            key={incident.id}
            incident={incident}
          />

        ))}

      </div>

    </main>
  );
}
