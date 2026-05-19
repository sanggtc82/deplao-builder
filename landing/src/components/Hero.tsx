import { useState } from 'react';
import {
  DOWNLOAD_URL, DOWNLOAD_URL_MAC_ARM64, DOWNLOAD_URL_MAC_X64,
  APP_VERSION, GITHUB_URL, RELEASES_URL,
} from '../constants';

function DownloadButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="btn-primary flex items-center gap-2 hero-cta-button"
      >
        <span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" className="inline mr-1"><path d="M12 16l-6-6h4V4h4v6h4z"/><path d="M20 20H4"/></svg>
          Tải về miễn phí
        </span>
        <span className="text-xs opacity-70 ml-1">v{APP_VERSION}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-black/8 shadow-xl shadow-black/8 py-2 z-50">
          <a href={DOWNLOAD_URL} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 no-underline transition-colors group">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l3 3 3-3M12 12V4"/></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Windows (x64)</p>
              <p className="text-xs text-slate-500">.exe installer · v{APP_VERSION}</p>
            </div>
          </a>
          <a href={DOWNLOAD_URL_MAC_ARM64} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 no-underline transition-colors group">
            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-100 transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-slate-700"><path d="M18.7 12.4c0-2.9 2.3-4.3 2.4-4.4-1.3-1.9-3.3-2.1-4.1-2.2-1.7-.2-3.4 1-4.3 1-0.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.9-2 3.5-.5 8.6 1.4 11.4 1 1.4 2.1 2.9 3.6 2.9 1.4-.1 2-0.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.6 0 2.6-1.4 3.6-2.8.7-1 1.3-2.1 1.5-3.3-3.3-1.3-3.1-5.4.0-5.5z"/><path d="M15.6 4.2c.8-1 1.3-2.4 1.2-3.7-1.2.1-2.5.8-3.3 1.8-.7.9-1.3 2.2-1.1 3.5 1.3 0 2.5-.7 3.2-1.6z"/></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">macOS Apple Silicon</p>
              <p className="text-xs text-slate-500">.dmg (M1/M2/M3/M4) · v{APP_VERSION}</p>
            </div>
          </a>
          <a href={DOWNLOAD_URL_MAC_X64} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 no-underline transition-colors group">
            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-100 transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-slate-500"><path d="M18.7 12.4c0-2.9 2.3-4.3 2.4-4.4-1.3-1.9-3.3-2.1-4.1-2.2-1.7-.2-3.4 1-4.3 1-0.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.9-2 3.5-.5 8.6 1.4 11.4 1 1.4 2.1 2.9 3.6 2.9 1.4-.1 2-0.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.6 0 2.6-1.4 3.6-2.8.7-1 1.3-2.1 1.5-3.3-3.3-1.3-3.1-5.4.0-5.5z"/><path d="M15.6 4.2c.8-1 1.3-2.4 1.2-3.7-1.2.1-2.5.8-3.3 1.8-.7.9-1.3 2.2-1.1 3.5 1.3 0 2.5-.7 3.2-1.6z"/></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">macOS Intel</p>
              <p className="text-xs text-slate-500">.dmg (x64) · v{APP_VERSION}</p>
            </div>
          </a>
          <div className="border-t border-black/5 mt-1 px-4 pt-2 pb-1">
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-700 no-underline">Xem tất cả phiên bản →</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-5 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="aos-element inline-flex items-center gap-2 hero-pill mb-6">
          <span className="dot-pulse" />
          <span>Open source · Miễn phí · v{APP_VERSION}</span>
        </div>

        {/* Headline */}
        <h1 className="aos-element delay-1 text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-5">
          Quản lý Zalo<br />
          <span className="gradient-text">đa tài khoản</span><br />
          mạnh hơn &amp; thông minh hơn
        </h1>

        {/* Subtitle */}
        <p className="aos-element delay-2 text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Deplao tích hợp <strong className="text-slate-700">CRM, Workflow tự động hóa, AI Assistant, POS và ERP</strong> vào
          một desktop app duy nhất — giúp đội ngũ bán hàng &amp; chăm sóc khách hàng trên Zalo vận hành tập trung.
        </p>

        {/* CTAs */}
        <div className="aos-element delay-3 flex flex-wrap items-center justify-center gap-3 mb-12 hero-cta-row">
          <DownloadButton />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hero-github-button flex items-center gap-2 no-underline"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.5 24 5.87 18.627.5 12 .5z"/></svg>
            ⭐ Star on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="aos-element delay-4 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
          {[
            { icon: '👤', label: 'Đa tài khoản Zalo' },
            { icon: '🔒', label: 'Dữ liệu lưu cục bộ 100%' },
            { icon: '⚡', label: 'Workflow 24/7' },
            { icon: '🤖', label: 'AI Assistant tích hợp' },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

