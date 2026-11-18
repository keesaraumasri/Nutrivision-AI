export default function StatCard({ label, value, unit, note, icon: Icon, tone='green' }) {
  return <article className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={20}/></div><span className="muted">{label}</span><div className="stat-value">{value}<small> {unit}</small></div><p>{note}</p></article>;
}
