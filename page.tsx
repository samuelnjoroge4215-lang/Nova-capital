import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Wallet, BarChart3, CheckCircle2, Menu } from "lucide-react";

const plans = [
  { name: "Starter", size: "$5,000", fee: "$49", daily: "5%", total: "8%", split: "80%" },
  { name: "Growth", size: "$10,000", fee: "$89", daily: "5%", total: "8%", split: "80%", featured: true },
  { name: "Pro", size: "$25,000", fee: "$199", daily: "5%", total: "8%", split: "80%" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <Link href="/" className="brand"><span className="brand-mark">N</span> NOVA <b>CAPITAL</b></Link>
        <div className="nav-links"><a href="#programs">Programs</a><a href="#rules">Trading rules</a><a href="#how">How it works</a></div>
        <div className="nav-actions"><Link className="login" href="/dashboard">Trader login</Link><a className="btn btn-small" href="#programs">Get started <ArrowRight size={15}/></a></div>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> BUILT FOR DISCIPLINED TRADERS</div>
          <h1>Trade your<br/><em>potential.</em></h1>
          <p className="hero-text">Prove your skill. Follow your plan. Build consistency. Take your trading journey to the next level with Nova Capital.</p>
          <div className="hero-buttons"><a className="btn" href="#programs">Explore challenges <ArrowRight size={17}/></a><a className="btn btn-ghost" href="#how">How it works</a></div>
          <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={18}/></div><span><strong>Rules-first trading</strong><small>Clear targets. Defined risk.</small></span></div>
        </div>
        <div className="hero-visual">
          <div className="glow"/>
          <div className="chart-card">
            <div className="chart-top"><span>PERFORMANCE OVERVIEW</span><span className="live-dot">● LIVE UI DEMO</span></div>
            <div className="balance-label">Demo account balance</div><div className="balance">$10,482.60 <span>+4.82%</span></div>
            <div className="chart"><svg viewBox="0 0 600 220" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8ee6c0" stopOpacity=".26"/><stop offset="100%" stopColor="#8ee6c0" stopOpacity="0"/></linearGradient></defs><path d="M0 190 C35 160 45 175 72 142 S112 168 145 125 S188 135 210 105 S252 132 290 86 S333 110 365 69 S408 96 445 54 S490 75 520 36 S570 49 600 16 L600 220 L0 220Z" fill="url(#area)"/><path d="M0 190 C35 160 45 175 72 142 S112 168 145 125 S188 135 210 105 S252 132 290 86 S333 110 365 69 S408 96 445 54 S490 75 520 36 S570 49 600 16" fill="none" stroke="#8ee6c0" strokeWidth="3"/></svg></div>
            <div className="chart-foot"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
            <div className="floating-stat"><div className="stat-icon"><TrendingUp size={17}/></div><div><small>Weekly growth</small><strong>+2.46%</strong></div><span className="stat-tag">DEMO</span></div>
          </div>
          <div className="hero-caption">Illustrative dashboard preview · not live trading data</div>
        </div>
      </section>

      <section className="trust-strip"><div className="wrap trust-inner"><span><ShieldCheck/> Transparent rules</span><span><BarChart3/> Performance focused</span><span><Wallet/> Crypto payment concept</span><span><CheckCircle2/> Trader-first design</span></div></section>

      <section className="section wrap" id="programs">
        <div className="section-head"><div><div className="eyebrow">CHOOSE YOUR PATH</div><h2>Find your challenge.</h2></div><p>Choose a simulated evaluation size that suits your strategy and risk discipline.</p></div>
        <div className="plans">{plans.map((p)=><article className={`plan ${p.featured?"featured":""}`} key={p.name}>
          {p.featured&&<div className="popular">MOST POPULAR</div>}<div className="plan-name">{p.name} challenge</div><div className="plan-size">{p.size}<small> simulated account</small></div><div className="fee">{p.fee}<small> one-time evaluation fee · draft</small></div>
          <div className="plan-divider"/><ul><li><CheckCircle2/> Profit target <b>8%</b></li><li><CheckCircle2/> Daily drawdown <b>{p.daily}</b></li><li><CheckCircle2/> Max drawdown <b>10%</b></li><li><CheckCircle2/> Profit split <b>{p.split}</b></li></ul><a className={p.featured?"btn":"btn btn-outline"} href="/dashboard">View challenge <ArrowRight size={16}/></a>
        </article>)}</div><p className="disclaimer">Program figures are illustrative draft terms—not an active funded program. Final rules, fees, availability, and legal disclosures must be approved before launch.</p>
      </section>

      <section className="dark-section" id="how"><div className="wrap section"><div className="eyebrow">A CLEAR PROCESS</div><h2>Focus on the process.<br/><em>Let skill lead.</em></h2><div className="steps"><div><span>01</span><h3>Choose a challenge</h3><p>Select a simulated account size and review all terms before payment.</p></div><div><span>02</span><h3>Trade your plan</h3><p>Use a consistent strategy while respecting risk and drawdown limits.</p></div><div><span>03</span><h3>Review performance</h3><p>Evaluation outcomes are reviewed against the published rules.</p></div></div></div></section>

      <section className="section wrap" id="rules"><div className="section-head"><div><div className="eyebrow">RISK & TRANSPARENCY</div><h2>Rules you can understand.</h2></div><p>Every trader should know the conditions before joining any program.</p></div><div className="rule-grid"><div><ShieldCheck/><h3>Risk limits</h3><p>Daily and overall drawdown limits should be clearly defined and consistently measured.</p></div><div><BarChart3/><h3>Evaluation criteria</h3><p>Targets, minimum trading days, and prohibited strategies must be disclosed upfront.</p></div><div><Wallet/><h3>Payment clarity</h3><p>Fees, refund policy, payout eligibility, timing, and supported networks need clear terms.</p></div></div></section>

      <footer><div className="wrap footer-top"><Link href="/" className="brand"><span className="brand-mark">N</span> NOVA <b>CAPITAL</b></Link><p>Discipline is the edge.</p><Link href="/dashboard">Trader dashboard <ArrowRight size={15}/></Link></div><div className="wrap footer-bottom"><span>© 2026 Nova Capital. Concept website.</span><span>Risk disclosure · Terms · Privacy (to be published)</span></div></footer>
    </main>
  );
}