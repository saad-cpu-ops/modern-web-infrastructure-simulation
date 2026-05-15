import React from'react'; 


export default function Page() {
  return (
    <main style={{ padding: '40px', fontFamily: 'monospace', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Section */}
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '2.5rem', margin: '0' }}>
          &gt; PROJECT: MODERN_INFRA_LAB_2026
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '10px' }}>
          Status: <span style={{ color: '#22c55e' }}>ONLINE</span> | 
          Operator: <span style={{ color: '#f472b6' }}>Kn0x99</span> | 
          Goal: <span style={{ color: '#fbbf24' }}>Deep Systems Architecture & Security Logic & cybersecurity engineer & vulnerabiltiy developer</span>
        </p>
      </header>

      {/* The Mission Statement (AWS Manager Bait) */}
      {/* The "Doctor vs Pharmacy" Mission Statement */}
<section style={{ marginBottom: '40px', maxWidth: '900px' }}>
  <h2 style={{ color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '2px' }}>
    [ The Philosophy ]
  </h2>
  <div style={{ padding: '20px', borderLeft: '4px solid #fbbf24', background: '#1e293b' }}>
    <p style={{ lineHeight: '1.6', fontSize: '1.2rem', margin: '0' }}>
      "In cybersecurity, there are <strong>pharmacists</strong> and there are <strong>doctors</strong>. 
      Most people are pharmacists—they just memorize payloads and hand out pre-made scripts."
    </p>
    <p style={{ lineHeight: '1.6', fontSize: '1.2rem', marginTop: '15px' }}>
      <strong>I am the doctor.</strong> I don't just use the medicine; I study the anatomy of the 
      modern web and OS. I build the infrastructure from the ground up to understand how its 
      organs—proxies, caches, and parsers—fail under pressure.
    </p>
  </div>
  <p style={{ color: '#94a3b8', marginTop: '20px', fontStyle: 'italic' }}>
    &gt; Diagnosing architectural flaws. Engineering permanent cures. 
    Moving beyond the 'SKID' mindset to reach elite systems mastery.
  </p>
</section>

      {/* The Strategy Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        
        {/* Step 1 */}
        <div style={{ padding: '20px', border: '1px solid #1e293b', borderRadius: '8px', background: '#1e293b' }}>
          <h3 style={{ color: '#38bdf8' }}>01. BUILD</h3>
          <p>Implementing RFC-compliant features from scratch using <strong>Next.js App Router</strong> to understand the internal request lifecycle.</p>
        </div>

        {/* Step 2 */}
        <div style={{ padding: '20px', border: '1px solid #1e293b', borderRadius: '8px', background: '#1e293b' }}>
          <h3 style={{ color: '#f43f5e' }}>02. BREAK</h3>
          <p>Intentionally introducing <strong>Trust Boundary</strong> failures and <strong>Parser Differentials</strong> to simulate real-world breaches.</p>
        </div>

        {/* Step 3 */}
        <div style={{ padding: '20px', border: '1px solid #1e293b', borderRadius: '8px', background: '#1e293b' }}>
          <h3 style={{ color: '#22c55e' }}>03. SECURE</h3>
          <p>Engineering production-grade patches. Documentation of every fix is stored in the <code>/docs</code> directory.</p>
        </div>


      </div>
      
      <div style={{ backgroundColor: '#020617', padding: '15px', borderRadius: '5px', border: '1px solid #1e293b' }}>
  <p style={{ color: '#22c55e', margin: '0' }}>[SYSTEM_VITALS]</p>
  <p style={{ margin: '5px 0' }}>&gt; ARCHITECTURE: Next.js 15 / App Router</p>
  <p style={{ margin: '5px 0' }}>&gt; RUNTIME: Node.js Distributed Edge</p>
  <p style={{ margin: '5px 0' }}>&gt; SECURITY_MODE: Learning (Intentional Vulnerabilities Active)</p>
  
</div>

      {/* The "Why" for AWS */}
      <footer style={{ marginTop: '50px', padding: '20px', borderLeft: '4px solid #38bdf8', background: '#0f172a' }}>
        <p style={{ margin: '0', fontStyle: 'italic', color: '#94a3b8' }}>
          "In the cloud, security is a shared responsibility. 
          Understanding how a <strong>CDN Cache</strong> interacts with <strong>Origin Middleware</strong> 
          isn't a 'hacking skill'—it's a fundamental engineering requirement."
        </p>
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>— Kn0x99, Future AWS IT Specialist</p>
      </footer>
    </main>
  );
}