import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaExclamationTriangle, FaSearch, FaArrowRight } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type Category = 'all' | 'assessment' | 'monitoring' | 'compliance' | 'response';

const CATEGORIES: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'response', label: 'Response' },
];

type Service = {
    id: string;
    icon: IconType;
    title: string;
    description: string;
    categories: Exclude<Category, 'all'>[];
};

const allServices: Service[] = [
    {
        id: 'penetration-testing',
        icon: FaShieldAlt,
        title: 'Penetration Testing',
        description: 'Simulate real-world attacks to identify and fix vulnerabilities in your systems.',
        categories: ['assessment'],
    },
    {
        id: 'threat-intelligence',
        icon: FaChartLine,
        title: 'Threat Intelligence',
        description: 'Actionable insights on emerging threats and proactive risk mitigation.',
        categories: ['monitoring'],
    },
    {
        id: 'security-audits',
        icon: FaClipboardCheck,
        title: 'Security Audits',
        description: 'Ensure compliance with standards like ISO 27001, GDPR, and local data protection laws.',
        categories: ['compliance'],
    },
    {
        id: 'incident-response',
        icon: FaExclamationTriangle,
        title: 'Incident Response',
        description: 'Rapid response and recovery services to minimize the impact of a security breach.',
        categories: ['response'],
    },
];

const ServicesPage: React.FC = () => {
    const [params, setParams] = useSearchParams();
    const q = params.get('q') ?? '';
    const cat = (params.get('cat') as Category) ?? 'all';
    const sort = params.get('sort') ?? 'az';

    const setParam = (key: string, value?: string) => {
        const next = new URLSearchParams(params);
        if (!value || value.trim() === '' || (key === 'cat' && value === 'all')) {
            next.delete(key);
        } else {
            next.set(key, value);
        }
        setParams(next, { replace: true });
    };

    const services = useMemo(() => {
        let items = [...allServices];
        if (cat !== 'all') items = items.filter(s => s.categories.includes(cat));
        if (q) {
            const query = q.toLowerCase();
            items = items.filter(
                s => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
            );
        }
        if (sort === 'az') items.sort((a, b) => a.title.localeCompare(b.title));
        if (sort === 'za') items.sort((a, b) => b.title.localeCompare(a.title));
        return items;
    }, [q, cat, sort]);

    return (
        <main className="bg-gradient-to-t from-[#154c79] to-[#122c4a] pt-24 pb-20 px-4 sm:px-6">
            <section className="max-w-6xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-white mb-3">Cybersecurity Services</h1>
                    <p className="text-lg text-white/60">
                        End-to-end security solutions tailored for businesses in Kenya and across Africa.
                    </p>
                </header>

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative w-full sm:max-w-md">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white" aria-hidden />
                        <input
                            type="search"
                            value={q}
                            onChange={e => setParam('q', e.target.value)}
                            placeholder="Search services..."
                            aria-label="Search services"
                            className="w-full rounded-md bg-slate-800/70 pl-10 pr-3 py-2 text-white placeholder-white/40 border border-slate-700 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="sort" className="sr-only">
                            Sort services
                        </label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={e => setParam('sort', e.target.value)}
                            className="rounded-md bg-slate-800/70 px-3 py-2 text-white border border-slate-700 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                        >
                            <option value="az">A → Z</option>
                            <option value="za">Z → A</option>
                        </select>
                    </div>
                </div>

                <nav aria-label="Service categories" className="mb-8 overflow-x-auto">
                    <ul className="flex gap-2 min-w-max">
                        {CATEGORIES.map(({ id, label }) => {
                            const active = cat === id;
                            return (
                                <li key={id}>
                                    <button
                                        onClick={() => setParam('cat', id)}
                                        className={[
                                            'px-3 py-1.5 rounded-full text-sm transition border',
                                            active
                                                ? 'bg-brand-blue text-white border-brand-blue shadow-lg'
                                                : 'bg-slate-800/70 text-white border-slate-700 hover:text-light-slate hover:border-slate-600',
                                            'focus:outline-none focus:ring-2 focus:ring-brand-blue/40',
                                        ].join(' ')}
                                        aria-pressed={active}
                                    >
                                        {label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="mb-4 text-white" aria-live="polite">
                    Showing {services.length} service{services.length !== 1 ? 's' : ''}
                    {cat !== 'all' ? ` • ${CATEGORIES.find(c => c.id === cat)?.label}` : ''}
                    {q ? ` • “${q}”` : ''}
                </div>

                {services.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-white p-10 text-center">
                        <p className="text-white/60 font-medium mb-2">No services match your filters.</p>
                        <p className="text-white/40 mb-4">Try clearing the search or selecting a different category.</p>
                        <button
                            onClick={() => {
                                setParam('q', '');
                                setParam('cat', 'all');
                            }}
                            className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-4 py-2 text-white hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                        >
                            Reset filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map(({ id, icon: Icon, title, description, categories }) => (
                            <Link
                                to={`/services/${id}`}
                                key={id}
                                aria-label={`Learn more about ${title}`}
                                className="group block rounded-lg border border-white/30 bg-slate-800/50 p-6 hover:border-brand-blue transition transform hover:-translate-y-0.5 motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="text-white mb-4">
                                        <Icon size={28} aria-hidden />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                                <p className="text-white/60">{description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {categories.map(c => (
                                        <span
                                            key={c}
                                            className="text-xs rounded-full bg-slate-800 text-white/60 border border-slate-700 px-2 py-0.5"
                                        >
                                            {CATEGORIES.find(x => x.id === c)?.label}
                                        </span>
                                    ))}
                                </div>
                                <span className="mt-5 inline-flex items-center gap-2 text-white font-semibold">
                                    Learn More
                                    <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden>
                                        <FaArrowRight />
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default ServicesPage;