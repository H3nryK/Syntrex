// src/pages/CareersPage.tsx
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FiBriefcase,
    FiMapPin,
    FiClock,
    FiChevronDown,
    FiSearch,
    FiFilter,
} from 'react-icons/fi';

type JobType = 'Full-time' | 'Internship';

type Job = {
    id: string;
    title: string;
    location: string;
    type: JobType;
    postedAt: string; // ISO date
    description: string;
    responsibilities: string[];
};

const openPositions: Job[] = [
    {
        id: 'ssa-1',
        title: 'Senior Security Analyst',
        location: 'Nairobi, Kenya',
        type: 'Full-time',
        postedAt: '2025-07-01',
        description:
            "Lead security assessments, drive incident response, and collaborate across teams to mitigate risks and improve security posture.",
        responsibilities: [
            'Plan and execute risk assessments and audits',
            'Own incident response lifecycle and RCA documentation',
            'Collaborate with engineering to design secure systems',
            'Mentor junior analysts and improve runbooks',
        ],
    },
    {
        id: 'pt-1',
        title: 'Penetration Tester',
        location: 'Remote (Kenya)',
        type: 'Full-time',
        postedAt: '2025-07-15',
        description:
            'Perform offensive security testing, craft exploit PoCs, and communicate findings with actionable remediation steps.',
        responsibilities: [
            'Perform network, web, and mobile penetration tests',
            'Develop tooling and automation for repeatable tests',
            'Write clear, prioritized reports for stakeholders',
            'Partner with product teams to validate fixes',
        ],
    },
    {
        id: 'devops-jr-1',
        title: 'Junior DevOps Engineer',
        location: 'Nairobi, Kenya',
        type: 'Internship',
        postedAt: '2025-06-20',
        description:
            'Support CI/CD pipelines, infrastructure as code, and observability to enable secure, reliable deployments.',
        responsibilities: [
            'Assist in building CI/CD pipelines and IaC modules',
            'Monitor and triage infra alerts with senior guidance',
            'Contribute to documentation and internal tooling',
            'Learn cloud security best practices',
        ],
    },
];

const jobTypes: ('All' | JobType)[] = ['All', 'Full-time', 'Internship'];

function daysAgo(iso: string) {
    const then = new Date(iso).getTime();
    const now = Date.now();
    const diff = Math.max(0, Math.floor((now - then) / (1000 * 60 * 60 * 24)));
    return diff === 0 ? 'Today' : `${diff} day${diff > 1 ? 's' : ''} ago`;
}

const CareersPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<'All' | JobType>('All');
    const [locationFilter, setLocationFilter] = useState<'All' | string>('All');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const locations = useMemo(() => {
        const set = new Set(openPositions.map((j) => j.location));
        return ['All', ...Array.from(set)];
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return openPositions.filter((j) => {
            const matchesQuery =
                !q ||
                j.title.toLowerCase().includes(q) ||
                j.location.toLowerCase().includes(q) ||
                j.type.toLowerCase().includes(q);
            const matchesType = typeFilter === 'All' || j.type === typeFilter;
            const matchesLocation = locationFilter === 'All' || j.location === locationFilter;
            return matchesQuery && matchesType && matchesLocation;
        });
    }, [query, typeFilter, locationFilter]);

    const clearFilters = () => {
        setQuery('');
        setTypeFilter('All');
        setLocationFilter('All');
    };

    return (
        <div className="bg-gradient-to-t from-[#154c79] to-[#122c4a] pt-24 pb-20">
            {/* Hero */}
            <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">Join Our Mission</h1>
                <p className="text-base sm:text-lg text-white/60">
                    We are passionate innovators securing Africa&apos;s digital future. If you are driven by
                    challenge and committed to excellence, we want to hear from you.
                </p>
            </section>

            {/* Filters */}
            <section className="bg-[#122c4a] border-y border-gray-100 sticky top-16 z-10 backdrop-blur supports-[backdrop-filter]:bg-[#122c4a]/70">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-white mb-3">
                        <FiFilter />
                        <span className="font-medium">Find your role</span>
                        <span className="ml-auto text-sm text-white/60">
                            {filtered.length} position{filtered.length !== 1 ? 's' : ''} found
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search by title, location, type..."
                                className="w-full pl-10 pr-3 py-2 rounded-md placeholder-white/40 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue/50"
                            />
                        </div>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value as 'All' | JobType)}
                            className="w-full px-3 py-2 rounded-md border border-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue/50"
                        >
                            {jobTypes.map((t) => (
                                <option key={t} value={t} className="text-gray-800">
                                    {t}
                                </option>
                            ))}
                        </select>
                        <select
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value as 'All' | string)}
                            className="w-full px-3 py-2 rounded-md border border-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue/50"
                        >
                            {locations.map((loc) => (
                                <option key={loc} value={loc} className="text-gray-800">
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>
                    {(query || typeFilter !== 'All' || locationFilter !== 'All') && (
                        <div className="mt-2">
                            <button
                                onClick={clearFilters}
                                className="text-sm text-brand-blue hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Positions */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-8">Open Positions</h2>

                {filtered.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-white/60">
                        No positions match your filters.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {filtered.map((job) => {
                            const expanded = expandedId === job.id;
                            return (
                                <article
                                    key={job.id}
                                    className="group border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <header className="p-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="min-w-0">
                                                <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/60 mt-2 text-sm">
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <FiBriefcase /> {job.type}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <FiMapPin /> {job.location}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <FiClock /> Posted {daysAgo(job.postedAt)}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                aria-expanded={expanded}
                                                aria-controls={`job-${job.id}-details`}
                                                onClick={() => setExpandedId(expanded ? null : job.id)}
                                                className="shrink-0 inline-flex items-center gap-1 text-sm text-white/60 border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                                            >
                                                {expanded ? 'Hide details' : 'View details'}
                                                <FiChevronDown
                                                    className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                        </div>

                                        <div
                                            id={`job-${job.id}-details`}
                                            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                                                expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="pt-4 text-white/60">
                                                <p className="mb-3">{job.description}</p>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    {job.responsibilities.map((r, i) => (
                                                        <li key={i}>{r}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </header>

                                    <footer className="px-5 pb-5">
                                        <Link to={`/contact?role=${encodeURIComponent(job.title)}`}>
                                            <button className="w-full sm:w-auto bg-[#265473] text-white font-semibold py-2.5 px-5 rounded-lg shadow-lg hover:opacity-95 active:opacity-90 transition">
                                                Apply Now
                                            </button>
                                        </Link>
                                    </footer>
                                </article>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
};

export default CareersPage;