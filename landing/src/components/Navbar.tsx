import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOWNLOAD_URL, APP_VERSION, GITHUB_URL } from '../constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <img src="/deplao-builder/icon.png" alt="Deplao" className="w-8 h-8 rounded-xl object-contain" />
          <span className="font-extrabold text-lg text-slate-900 tracking-tight">Deplao</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors no-underline">Tính năng</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors no-underline">Workflow</a>
          <a href="#integrations" className="hover:text-slate-900 transition-colors no-underline">Tích hợp</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors no-underline">Cách dùng</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors no-underline">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.5 24 5.87 18.627.5 12 .5z"/></svg>
            GitHub
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={DOWNLOAD_URL}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors no-underline"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 16l-6-6h4V4h4v6h4z"/><path d="M20 20H4"/></svg>
            Tải về v{APP_VERSION}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open
            ? <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white px-5 py-4 space-y-3 text-sm font-medium text-slate-600">
          <a href="#features" onClick={() => setOpen(false)} className="block py-1 hover:text-slate-900 no-underline">Tính năng</a>
          <a href="#workflow" onClick={() => setOpen(false)} className="block py-1 hover:text-slate-900 no-underline">Workflow</a>
          <a href="#integrations" onClick={() => setOpen(false)} className="block py-1 hover:text-slate-900 no-underline">Tích hợp</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block py-1 hover:text-slate-900 no-underline">Cách dùng</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-slate-900 no-underline">GitHub</a>
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors no-underline"
          >
            Tải về v{APP_VERSION}
          </a>
        </div>
      )}
    </nav>
  );
}

