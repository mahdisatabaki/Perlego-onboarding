import React, { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'dark';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  autoWidth?: boolean;
  large?: boolean;
};

export function Button({ variant = 'primary', autoWidth, large, className = '', ...props }: ButtonProps) {
  const classes = [
    'pg-btn',
    variant === 'outline' && 'pg-btn--outline',
    variant === 'ghost' && 'pg-btn--ghost',
    variant === 'dark' && 'pg-btn--dark',
    autoWidth && 'pg-btn--auto',
    large && 'pg-btn--lg',
    className,
  ].filter(Boolean).join(' ');
  return <button className={classes} {...props} />;
}

export function TextLink(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = '', ...rest } = props;
  return <button className={`pg-link ${className}`} {...rest} />;
}

type FieldProps = {
  label: string;
  id: string;
  hint?: string;
  adorn?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Field({ label, id, hint, adorn, className = '', ...inputProps }: FieldProps) {
  return (
    <div className="pg-field">
      <label className="pg-label" htmlFor={id}>{label}</label>
      <div className="pg-input-wrap">
        <input id={id} className={`pg-input ${className}`} {...inputProps} />
        {adorn ? <span className="pg-input-adorn">{adorn}</span> : null}
      </div>
      {hint ? <div className="pg-muted" style={{ fontSize: 13, marginTop: 8 }}>{hint}</div> : null}
    </div>
  );
}

export function Card({ children, lift = false, className = '' }: { children: ReactNode; lift?: boolean; className?: string }) {
  return <div className={`pg-card ${lift ? 'pg-card--lift' : ''} ${className}`}>{children}</div>;
}

export function Badge({ children, action = false }: { children: ReactNode; action?: boolean }) {
  return <span className={`pg-badge ${action ? 'pg-badge--action' : ''}`}>{children}</span>;
}

export function RadioOption({ label, selected, onClick }: { label: string; selected: boolean; onClick?: () => void }) {
  return (
    <button type="button" className="pg-radio-row" data-selected={selected} onClick={onClick} aria-pressed={selected} style={{ width: '100%', border: 0, background: 'transparent', textAlign: 'left' }}>
      <span className="pg-radio-dot" />
      <span>{label}</span>
    </button>
  );
}

export function CheckboxOption({ label, selected, onClick }: { label: string; selected: boolean; onClick?: () => void }) {
  return (
    <button type="button" className="pg-check-row" data-selected={selected} onClick={onClick} aria-pressed={selected} style={{ width: '100%', border: 0, background: 'transparent', textAlign: 'left', padding: 0 }}>
      <span className="pg-check-box">{selected ? '✓' : ''}</span>
      <span>{label}</span>
    </button>
  );
}

export function PerlegoHeader({ links = [] }: { links?: { label: string; href: string }[] }) {
  return (
    <header className="pg-top-nav">
      <div className="pg-brand">Perlego</div>
      {links.length ? (
        <nav className="pg-nav-links">
          {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
      ) : null}
    </header>
  );
}

export const TopNav = PerlegoHeader;

export function ProgressBar({ value, label, backLabel = '← Back', onBack }: { value: number; label: string; backLabel?: string; onBack?: () => void }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <>
      <div className="pg-progress-head">
        <button type="button" className="pg-link" onClick={onBack}>{backLabel}</button>
        <span className="pg-progress-label">{label}</span>
      </div>
      <div className="pg-progress-track" aria-label="Progress">
        <div className="pg-progress-fill" style={{ width: `${clamped}%` }} />
      </div>
    </>
  );
}

export function OnboardingShell({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="pg-onboarding-shell">
      <main className="pg-onboarding-main"><div className="pg-onboarding-narrow">{children}</div></main>
      {aside ? <aside className="pg-onboarding-aside">{aside}</aside> : null}
    </div>
  );
}

export function DemoBookCover({ width = 160 }: { width?: number }) {
  return (
    <div className="pg-cover" style={{ width }} aria-label="Measuring Social Change book cover">
      <div className="pg-cover-demo">
        <div className="pg-cover-demo-title">MEASURING<br/>SOCIAL<br/>CHANGE</div>
        <div className="pg-cover-demo-grid"><span/><span/><span/><span/></div>
        <div className="pg-cover-demo-author">ALNOOR EBRAHIM</div>
      </div>
    </div>
  );
}

type BookCardProps = {
  title: string;
  subtitle?: string;
  author?: string;
  year?: string;
  format?: string;
  coverUrl?: string;
  width?: number;
  action?: ReactNode;
  useDemoCover?: boolean;
};

export function BookCard({ title, subtitle, author, year, format, coverUrl, width = 160, action, useDemoCover = false }: BookCardProps) {
  return (
    <article className="pg-book-card" style={{ width }}>
      {useDemoCover ? <DemoBookCover width={width} /> : (
        <div className="pg-cover" style={{ width }}>
          {coverUrl ? <img src={coverUrl} alt={`Cover of ${title}`} /> : <div className="pg-cover-demo"><div className="pg-cover-demo-title">{title.toUpperCase()}</div></div>}
        </div>
      )}
      <div>
        {format ? <Badge>{format}</Badge> : null}
        <div className="pg-book-title" style={{ marginTop: format ? 8 : 0 }}>{title}</div>
        {subtitle ? <div className="pg-book-subtitle">{subtitle}</div> : null}
        {(author || year) ? <div className="pg-book-meta">{[author, year].filter(Boolean).join(' · ')}</div> : null}
      </div>
      {action ? <div className="pg-book-actions">{action}</div> : null}
    </article>
  );
}

export function SaveToBookshelfButton({ saved = false, onClick }: { saved?: boolean; onClick?: () => void }) {
  return <button type="button" className="pg-save-btn" data-saved={saved} onClick={onClick}>{saved ? '✓ Added' : '+ Add to bookshelf'}</button>;
}

export function BookResult({ title, subtitle, author, year, format = 'eBook · PDF', coverUrl, saved = false, onSave, onOpen, useDemoCover = false }: {
  title: string;
  subtitle?: string;
  author?: string;
  year?: string;
  format?: string;
  coverUrl?: string;
  saved?: boolean;
  onSave?: () => void;
  onOpen?: () => void;
  useDemoCover?: boolean;
}) {
  return (
    <article className="pg-card pg-book-result">
      <div>{useDemoCover ? <DemoBookCover width={96} /> : <div className="pg-cover" style={{ width: 96 }}>{coverUrl ? <img src={coverUrl} alt={`Cover of ${title}`} /> : null}</div>}</div>
      <div>
        <Badge>{format}</Badge>
        <div className="pg-book-result-title">{title}</div>
        {subtitle ? <div className="pg-book-subtitle">{subtitle}</div> : null}
        {(author || year) ? <div className="pg-book-meta" style={{ marginTop: 6 }}>{[author, year].filter(Boolean).join(' · ')}</div> : null}
      </div>
      <div className="pg-book-result-actions">
        <Button autoWidth onClick={onOpen}>View book</Button>
        <SaveToBookshelfButton saved={saved} onClick={onSave} />
      </div>
    </article>
  );
}

export function SearchBox({ placeholder = 'Search', value, onChange, onSubmit, buttonLabel = 'Search' }: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  buttonLabel?: string;
}) {
  return (
    <div className="pg-search">
      <span aria-hidden="true">⌕</span>
      <input value={value} placeholder={placeholder} onChange={(e) => onChange?.(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onSubmit?.(); }} />
      <button type="button" onClick={onSubmit}>{buttonLabel}</button>
    </div>
  );
}

export function PlanCard({ title, price, copy, selected = false, onSelect, badge }: {
  title: string;
  price: string;
  copy?: string;
  selected?: boolean;
  onSelect?: () => void;
  badge?: string;
}) {
  return (
    <button type="button" className="pg-card pg-pricing-card" data-selected={selected} onClick={onSelect} style={{ width: '100%', textAlign: 'left', background: '#fff' }}>
      {badge ? <Badge action>{badge}</Badge> : null}
      <div className="pg-pricing-title" style={{ marginTop: badge ? 12 : 0 }}>{title}</div>
      <div className="pg-pricing-price">{price}</div>
      {copy ? <div className="pg-pricing-copy">{copy}</div> : null}
    </button>
  );
}

export const PricingCard = PlanCard;

export function BookshelfCard({ title, books }: { title: string; books: { title: string; coverUrl?: string }[] }) {
  return (
    <Card className="pg-bookshelf-card" lift>
      <h3 className="pg-heading" style={{ fontSize: 20 }}>{title}</h3>
      <div className="pg-bookshelf-grid">
        {books.slice(0, 3).map((book) => (
          <div className="pg-cover" key={book.title} title={book.title}>
            {book.coverUrl ? <img src={book.coverUrl} alt="" /> : <div className="pg-cover-demo"><div className="pg-cover-demo-title" style={{ fontSize: 11 }}>{book.title.toUpperCase()}</div></div>}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ReaderRail({ items, activeId, onSelect }: {
  items: { id: string; label: string; icon?: ReactNode }[];
  activeId?: string;
  onSelect?: (id: string) => void;
}) {
  return (
    <aside className="pg-reader-rail">
      <div className="pg-brand" style={{ fontSize: 26, marginBottom: 8 }}>P</div>
      {items.map((item) => (
        <button key={item.id} type="button" className="pg-rail-button" data-active={item.id === activeId} title={item.label} aria-label={item.label} onClick={() => onSelect?.(item.id)}>
          {item.icon ?? item.label.slice(0, 1)}
        </button>
      ))}
    </aside>
  );
}
