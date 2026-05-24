export default function Page() {
  return (
    <main style={{ padding: '40px', fontFamily: 'monospace', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1>Forgot Password functionality</h1>
      </header>
      <p>Enter your email address or username and we'll send you a link to reset your password.</p>
      <br />
      <input type="text" placeholder="Email or Username" style={{ width: '100%', padding: '10px', marginBottom: '20px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f8fafc' }} />
      <button style={{ padding: '10px 20px', backgroundColor: '#3b82f6', border: 'none', color: '#f8fafc', cursor: 'pointer' }}>
        Send Reset Link
      </button>
      
    </main>
  );
}