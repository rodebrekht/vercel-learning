const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

type Cell = { label?: string; time?: string; variant?: "blue" | "gold" | "rose" | "empty" };
const heroRota: Cell[][] = [
  [
    { label: "Pia",   time: "09–17", variant: "blue" },
    { label: "Sam",   time: "09–17", variant: "gold" },
    { label: "Pia",   time: "09–17", variant: "blue" },
    { label: "Eli",   time: "12–22", variant: "rose" },
    { label: "Eli",   time: "12–22", variant: "rose" },
    { label: "Tomi",  time: "17–01", variant: "gold" },
    { label: "Tomi",  time: "17–01", variant: "gold" },
  ],
  [
    { variant: "empty" },
    { label: "Eli",   time: "12–22", variant: "rose" },
    { label: "Sam",   time: "12–22", variant: "gold" },
    { label: "Sam",   time: "12–22", variant: "gold" },
    { label: "Pia",   time: "17–01", variant: "blue" },
    { label: "Eli",   time: "17–01", variant: "rose" },
    { variant: "empty" },
  ],
];

export default function Home() {
  return (
    <>
      <div className="day-grid" aria-hidden />
      <div className="now-line" aria-hidden />

      {/* TOP BAR ------------------------------------------------------- */}
      <header className="relative z-10 border-b" style={{ borderColor: "var(--ink-line)" }}>
        <div className="mx-auto max-w-[1280px] px-8 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[22px] tracking-tight">Rota Done</span>
            <span className="stamp stamp-dim">v.{new Date().getFullYear() - 2025}.0</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 stamp stamp-dim">
            <a href="#solve" className="hover:text-[color:var(--gold)] transition-colors">01 / Solve</a>
            <a href="#scaler" className="hover:text-[color:var(--gold)] transition-colors">02 / Scaler</a>
            <a href="#requirements" className="hover:text-[color:var(--gold)] transition-colors">03 / Requirements</a>
            <a href="#price" className="hover:text-[color:var(--gold)] transition-colors">£19</a>
          </nav>
          <a href="https://www.rotadone.co.uk" className="stamp" style={{ color: "var(--paper)" }}>
            Sign in →
          </a>
        </div>
      </header>

      {/* HERO ---------------------------------------------------------- */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-32">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-7 rise">
              <div className="stamp">07:14 — Monday morning</div>
              <h1
                className="font-display mt-6"
                style={{
                  fontSize: "clamp(56px, 8.2vw, 132px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.035em",
                  fontWeight: 300,
                }}
              >
                Seven<br />
                columns<br />
                of <em style={{ color: "var(--gold)", fontStyle: "italic", fontWeight: 400 }}>order.</em>
              </h1>
              <p
                className="mt-8 max-w-[44ch] text-[17px] leading-[1.55]"
                style={{ color: "var(--paper-dim)" }}
              >
                A constraint solver works out who covers what. You set the
                shape of the week, hit one button, and walk out with a
                published rota before the kettle boils.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="https://www.rotadone.co.uk" className="cta-primary">
                  Try free for 30 days <span>→</span>
                </a>
                <a href="#showcase" className="cta-ghost">
                  See the grid
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6 stamp stamp-dim">
                <span>£19 / month / venue</span>
                <span style={{ color: "var(--ink-line-strong)" }}>·</span>
                <span>No per-seat fees</span>
                <span style={{ color: "var(--ink-line-strong)" }}>·</span>
                <span>UK based</span>
              </div>
            </div>

            {/* mini rota panel */}
            <aside className="col-span-12 lg:col-span-5 mt-16 lg:mt-0 fade-slow">
              <div
                className="relative"
                style={{
                  background: "var(--ink-raised)",
                  border: "1px solid var(--ink-line-strong)",
                  borderRadius: 2,
                }}
              >
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ borderBottom: "1px solid var(--ink-line)" }}
                >
                  <span className="stamp">Week 19 · Bar Floor</span>
                  <span className="stamp stamp-dim">solved 00:00:42</span>
                </div>
                <div className="px-4 pt-3 pb-4">
                  <div className="grid grid-cols-7 gap-[6px] mb-2">
                    {days.map((d) => (
                      <div
                        key={d}
                        className="stamp stamp-dim text-center pb-2"
                        style={{ borderBottom: "1px solid var(--ink-line)" }}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                  {heroRota.map((row, r) => (
                    <div key={r} className="grid grid-cols-7 gap-[6px] mb-[6px]">
                      {row.map((c, i) => (
                        <div key={i} className={`chip chip--${c.variant ?? "empty"}`}>
                          {c.label ? (
                            <>
                              <div className="truncate">{c.label}</div>
                              <div className="chip-time">{c.time}</div>
                            </>
                          ) : (
                            <>
                              <div className="truncate" style={{ color: "var(--paper-faint)" }}>open</div>
                              <div className="chip-time">—</div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="mt-4 flex items-center justify-between stamp stamp-dim">
                    <span>14 shifts · 6 staff</span>
                    <span style={{ color: "var(--gold)" }}>● feasible</span>
                  </div>
                </div>
              </div>
              <div className="stamp stamp-dim mt-3 text-right">↑ a real solve, 42 ms</div>
            </aside>
          </div>
        </div>
      </section>

      {/* THREE PILLARS ------------------------------------------------- */}
      <section className="relative z-10" style={{ borderTop: "1px solid var(--ink-line)" }}>
        <div className="mx-auto max-w-[1280px] px-8">
          <Pillar
            anchor="solve"
            time="09:00"
            label="Build the week"
            num="01"
            title="Solve"
            body="An OR-Tools CP-SAT engine reads your shape — coverage, availability, contracted hours, role eligibility — and returns the rota that fits, with the trade-offs explained when it can't."
            visual={<SolveVisual />}
          />
          <Pillar
            anchor="scaler"
            time="11:30"
            label="Adjust to the week ahead"
            num="02"
            title="Scaler"
            body="Drag a forecast figure. Headcount recalculates against your baseline week, day by day, role by role. No spreadsheet, no arguing."
            visual={<ScalerVisual />}
            flip
          />
          <Pillar
            anchor="requirements"
            time="14:02"
            label="Decide the coverage, not the people"
            num="03"
            title="Daily requirements"
            body="Define what the day needs before you put a single name on it. Three on the bar, two in the kitchen, one floater. People come second."
            visual={<RequirementsVisual />}
          />
        </div>
      </section>

      {/* SHOWCASE ------------------------------------------------------ */}
      <section
        id="showcase"
        className="relative z-10"
        style={{ borderTop: "1px solid var(--ink-line)" }}
      >
        <div className="mx-auto max-w-[1280px] px-8 py-32">
          <div className="stamp">15:48 — Inside the editor</div>
          <h2
            className="font-display mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95, fontWeight: 300 }}
          >
            The grid is the<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>argument</em>.
          </h2>
          <p
            className="mt-6 max-w-[56ch] text-[16px] leading-[1.6]"
            style={{ color: "var(--paper-dim)" }}
          >
            One screen does the work. Drag to move, right-click to lock,
            hover for the chain of constraints that put a person there.
            Nothing is hidden behind a settings panel.
          </p>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <Frame caption="16:01 — The grid" tall className="col-span-12 lg:col-span-8" />
            <Frame caption="16:04 — Hover card" className="col-span-12 lg:col-span-4" />
            <Frame caption="16:09 — Context menu" className="col-span-12 lg:col-span-5" />
            <Frame caption="16:12 — Feasibility" className="col-span-12 lg:col-span-7" />
          </div>
        </div>
      </section>

      {/* A DAY IN THE LIFE -------------------------------------------- */}
      <section className="relative z-10" style={{ borderTop: "1px solid var(--ink-line)" }}>
        <div className="mx-auto max-w-[1280px] px-8 py-32">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-12">
                <div className="stamp">A day, end to end</div>
                <h2
                  className="font-display mt-4"
                  style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 0.95, fontWeight: 300 }}
                >
                  From idea<br />to <em style={{ color: "var(--gold)", fontStyle: "italic" }}>published</em>.
                </h2>
                <p
                  className="mt-6 max-w-[36ch] text-[15px] leading-[1.6]"
                  style={{ color: "var(--paper-dim)" }}
                >
                  A single Monday, traced through the product. Nothing in
                  this timeline is aspirational — every step is in the live
                  app today.
                </p>
              </div>
            </div>

            <ol className="col-span-12 lg:col-span-8 mt-12 lg:mt-0">
              <TimelineRow time="08:42" head="Open the editor" body="Last week is loaded automatically. Duplicate it as a starting point or wipe and start clean." />
              <TimelineRow time="08:54" head="Set the shape" body="Daily requirements panel. Three bar shifts, two kitchen, one floater for Friday and Saturday." />
              <TimelineRow time="09:11" head="Tweak the forecast" body="Saturday's revenue forecast lifted 22%. Scaler nudges headcount up by one across the busiest two services." />
              <TimelineRow time="09:18" head="Press Solve" body="42 ms. Feasible. Three staff hit their contracted hours dead on. One slot stays Open Shift — flagged with a reason." />
              <TimelineRow time="09:22" head="Hand-tune" body="Drag Pia from Wednesday to Thursday. The system re-checks rest hours and clears it instantly." />
              <TimelineRow time="09:25" head="Publish" body="One click. Snapshot saved. Staff get the email." />
              <TimelineRow time="09:25:08" head="Phone buzzes" body="Eli, on the bus, opens the link. The shifts page loads in a beat. No app store. No login faff." last />
            </ol>
          </div>
        </div>
      </section>

      {/* PRICING ------------------------------------------------------- */}
      <section
        id="price"
        className="relative z-10"
        style={{ borderTop: "1px solid var(--ink-line)" }}
      >
        <div className="mx-auto max-w-[1280px] px-8 py-32">
          <div className="grid grid-cols-12 gap-x-6 items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="stamp">19:00 — After service</div>
              <h2
                className="font-display mt-4"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)", lineHeight: 0.95, fontWeight: 300 }}
              >
                One price.<br />
                One <em style={{ color: "var(--gold)", fontStyle: "italic" }}>venue.</em><br />
                No tiers.
              </h2>
              <p
                className="mt-6 max-w-[40ch] text-[16px] leading-[1.6]"
                style={{ color: "var(--paper-dim)" }}
              >
                Add staff, add roles, add weeks. The bill does not budge.
                Cancel any time from inside the app.
              </p>
            </div>

            <div
              className="col-span-12 lg:col-span-6 mt-12 lg:mt-0 p-10"
              style={{
                background: "var(--ink-raised)",
                border: "1px solid var(--ink-line-strong)",
                borderRadius: 2,
              }}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="font-display"
                  style={{ fontSize: "112px", lineHeight: 0.85, fontWeight: 300, color: "var(--paper)" }}
                >
                  £19
                </span>
                <span className="stamp stamp-dim">/ month / venue</span>
              </div>
              <div className="rule my-8" />
              <ul className="space-y-3 text-[15px]" style={{ color: "var(--paper-dim)" }}>
                <PriceRow>30-day free trial, no card</PriceRow>
                <PriceRow>Unlimited staff &amp; shifts</PriceRow>
                <PriceRow>OR-Tools solver — every plan</PriceRow>
                <PriceRow>Staff app on phone, no install</PriceRow>
                <PriceRow>£190 / year if paid annually (2 months free)</PriceRow>
              </ul>
              <a href="https://www.rotadone.co.uk" className="cta-primary mt-10">
                Open the live app <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER -------------------------------------------------------- */}
      <footer className="relative z-10" style={{ borderTop: "1px solid var(--ink-line)" }}>
        <div className="mx-auto max-w-[1280px] px-8 py-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="font-display text-[28px] tracking-tight">Rota Done</div>
            <div className="stamp stamp-dim mt-2">
              Made in the UK · For shift-based teams · {new Date().getFullYear()}
            </div>
          </div>
          <div className="stamp stamp-dim flex flex-wrap gap-6">
            <a href="https://www.rotadone.co.uk/help">Help centre</a>
            <a href="https://www.rotadone.co.uk/pricing">Pricing</a>
            <a href="https://www.rotadone.co.uk/contact">Contact</a>
            <a href="https://www.rotadone.co.uk/privacy">Privacy</a>
          </div>
          <div className="stamp stamp-dim w-full text-right">
            ↳ This page is a Vercel-hosted showcase. The live product is at rotadone.co.uk.
          </div>
        </div>
      </footer>
    </>
  );
}

/* ---------- supporting components ---------- */

function Pillar({
  anchor,
  time,
  label,
  num,
  title,
  body,
  visual,
  flip,
}: {
  anchor: string;
  time: string;
  label: string;
  num: string;
  title: string;
  body: string;
  visual: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div
      id={anchor}
      className="grid grid-cols-12 gap-x-6 py-28"
      style={{ borderBottom: "1px solid var(--ink-line)" }}
    >
      <div className={`col-span-12 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <div className="flex items-baseline gap-6">
          <span className="stamp">{time}</span>
          <span className="stamp stamp-dim">{label}</span>
        </div>
        <div className="mt-10 flex items-start gap-8">
          <span
            className="numeral"
            style={{ fontSize: "clamp(72px, 9vw, 140px)" }}
          >
            {num}
          </span>
          <div className="pt-2">
            <h3
              className="font-display"
              style={{ fontSize: "clamp(40px, 4.4vw, 64px)", lineHeight: 0.95, fontWeight: 300 }}
            >
              {title}
            </h3>
            <p
              className="mt-6 max-w-[44ch] text-[16px] leading-[1.6]"
              style={{ color: "var(--paper-dim)" }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
      <div className={`col-span-12 lg:col-span-5 mt-12 lg:mt-0 ${flip ? "lg:order-1" : ""}`}>
        {visual}
      </div>
    </div>
  );
}

function SolveVisual() {
  // a constraint-node diagram
  const nodes = [
    { x: 12, y: 20, label: "rest" },
    { x: 78, y: 14, label: "role" },
    { x: 86, y: 70, label: "hours" },
    { x: 18, y: 78, label: "avail." },
    { x: 50, y: 46, label: "solve" },
  ];
  const edges = [
    [0, 4], [1, 4], [2, 4], [3, 4], [0, 1], [2, 3],
  ];
  return (
    <div
      className="aspect-[5/4] relative"
      style={{ background: "var(--ink-raised)", border: "1px solid var(--ink-line-strong)" }}
    >
      <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--ink-line-strong)"
            strokeWidth="0.25"
          />
        ))}
      </svg>
      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className="rounded-full"
            style={{
              width: i === 4 ? 16 : 10,
              height: i === 4 ? 16 : 10,
              background: i === 4 ? "var(--gold)" : "var(--blue)",
              boxShadow: i === 4 ? "0 0 24px rgba(201,163,90,0.5)" : "none",
            }}
          />
          <div
            className="stamp stamp-dim mt-2 text-center whitespace-nowrap"
            style={{ transform: "translateX(-50%)", marginLeft: i === 4 ? 8 : 5 }}
          >
            {n.label}
          </div>
        </div>
      ))}
      <div className="absolute left-3 bottom-3 stamp stamp-dim">CP-SAT · 42ms</div>
    </div>
  );
}

function ScalerVisual() {
  const bars = [42, 58, 51, 49, 64, 88, 76];
  const scaled = [50, 64, 58, 56, 72, 102, 88];
  return (
    <div
      className="aspect-[5/4] relative p-6"
      style={{ background: "var(--ink-raised)", border: "1px solid var(--ink-line-strong)" }}
    >
      <div className="flex items-center justify-between stamp stamp-dim mb-4">
        <span>baseline → forecast</span>
        <span style={{ color: "var(--gold)" }}>+12%</span>
      </div>
      <div className="grid grid-cols-7 gap-[10px] items-end" style={{ height: "60%" }}>
        {bars.map((b, i) => (
          <div key={i} className="relative flex flex-col items-stretch h-full justify-end">
            <div
              style={{
                height: `${(scaled[i] / 110) * 100}%`,
                background: "var(--gold)",
                opacity: 0.25,
                borderTop: "1px solid var(--gold)",
              }}
            />
            <div
              style={{
                height: `${(b / 110) * 100}%`,
                background: "var(--blue)",
                opacity: 0.55,
                marginTop: -2,
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-[10px] mt-2">
        {days.map((d) => (
          <div key={d} className="stamp stamp-dim text-center">{d.slice(0, 1)}</div>
        ))}
      </div>
      <div className="absolute left-6 bottom-5 right-6 flex justify-between stamp stamp-dim">
        <span>£14.2k baseline</span>
        <span>£15.9k forecast</span>
      </div>
    </div>
  );
}

function RequirementsVisual() {
  // a grid showing role coverage
  const rows = [
    { role: "Bar",     cells: [3, 3, 3, 3, 4, 5, 4] },
    { role: "Kitchen", cells: [2, 2, 2, 2, 3, 3, 3] },
    { role: "Floor",   cells: [1, 1, 1, 1, 2, 2, 1] },
  ];
  return (
    <div
      className="aspect-[5/4] relative p-6"
      style={{ background: "var(--ink-raised)", border: "1px solid var(--ink-line-strong)" }}
    >
      <div className="stamp stamp-dim mb-4">required headcount</div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.role} className="grid grid-cols-[60px_1fr] items-center gap-3">
            <div className="stamp" style={{ color: "var(--paper)" }}>{r.role}</div>
            <div className="grid grid-cols-7 gap-1">
              {r.cells.map((c, i) => (
                <div
                  key={i}
                  className="h-7 flex items-center justify-center font-mono text-[11px]"
                  style={{
                    background:
                      c >= 4 ? "rgba(201,163,90,0.22)" :
                      c >= 3 ? "rgba(201,163,90,0.12)" :
                      "rgba(90,143,216,0.10)",
                    border: "1px solid var(--ink-line-strong)",
                    color: c >= 4 ? "var(--gold)" : "var(--paper-dim)",
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[60px_1fr] mt-3 gap-3">
        <div></div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => (
            <div key={d} className="stamp stamp-dim text-center">{d.slice(0, 1)}</div>
          ))}
        </div>
      </div>
      <div className="absolute left-6 bottom-5 right-6 flex justify-between stamp stamp-dim">
        <span>42 shift slots / week</span>
        <span>0 names yet</span>
      </div>
    </div>
  );
}

function Frame({
  caption,
  tall,
  className = "",
}: {
  caption: string;
  tall?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="relative w-full"
        style={{
          aspectRatio: tall ? "16 / 11" : "16 / 10",
          background: "var(--ink-raised)",
          border: "1px solid var(--ink-line-strong)",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(232,236,243,0.04) 23px, rgba(232,236,243,0.04) 24px), repeating-linear-gradient(90deg, transparent, transparent 23px, rgba(232,236,243,0.04) 23px, rgba(232,236,243,0.04) 24px)",
        }}
      >
        <div className="absolute top-3 left-4 stamp stamp-dim">rotadone · editor</div>
        <div className="absolute top-3 right-4 stamp stamp-dim">⌘ K</div>
        <div
          className="absolute"
          style={{
            left: "8%",
            top: "28%",
            right: "8%",
            bottom: "14%",
            background:
              "linear-gradient(180deg, rgba(90,143,216,0.06), transparent 60%), linear-gradient(0deg, rgba(201,163,90,0.06), transparent 50%)",
            border: "1px solid var(--ink-line)",
          }}
        >
          <div className="grid grid-cols-7 gap-[6px] p-3 h-full">
            {Array.from({ length: 7 }).map((_, c) => (
              <div key={c} className="flex flex-col gap-[6px]">
                {Array.from({ length: tall ? 4 : 3 }).map((_, r) => {
                  const variants = ["blue", "gold", "rose", "empty"] as const;
                  const v = variants[(c + r) % 4];
                  return (
                    <div
                      key={r}
                      className={`chip chip--${v}`}
                      style={{ minHeight: tall ? 34 : 28 }}
                    >
                      <div className="truncate" style={{ fontSize: 10 }}>
                        {v === "empty" ? "open" : ["Pia", "Sam", "Eli", "Tomi"][r % 4]}
                      </div>
                      <div className="chip-time">09–17</div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="stamp stamp-dim mt-3">{caption}</figcaption>
    </figure>
  );
}

function TimelineRow({
  time,
  head,
  body,
  last,
}: {
  time: string;
  head: string;
  body: string;
  last?: boolean;
}) {
  return (
    <li
      className="grid grid-cols-[88px_1fr] gap-6 pb-10"
      style={{ borderLeft: last ? "none" : undefined }}
    >
      <div className="stamp pt-1">{time}</div>
      <div style={{ borderTop: "1px solid var(--ink-line)" }} className="pt-4">
        <div className="font-display text-[26px] leading-tight" style={{ fontWeight: 300 }}>
          {head}
        </div>
        <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--paper-dim)" }}>
          {body}
        </p>
      </div>
    </li>
  );
}

function PriceRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span style={{ color: "var(--gold)" }}>+</span>
      <span>{children}</span>
    </li>
  );
}
