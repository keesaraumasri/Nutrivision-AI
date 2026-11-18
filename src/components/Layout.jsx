import { NavLink } from 'react-router-dom';
import { Activity, Apple, Camera, ChartNoAxesCombined, HeartPulse, History, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['/', 'Overview', LayoutDashboard], ['/scanner', 'Food scanner', Camera],
  ['/goals', 'Nutrition goals', ChartNoAxesCombined], ['/health', 'Health guide', HeartPulse],
  ['/library', 'Food library', Apple], ['/history', 'Meal history', History]
];
export default function Layout({ profile, onLogout, children }) {
  const [open, setOpen] = useState(false);
  return <div className="app-shell">
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-mark"><Activity size={22}/></span><span>NUTRI<span>VISION</span><small>SMART NUTRITION</small></span></div>
      <div className="side-label">WORKSPACE</div>
      <nav>{links.map(([to,label,Icon]) => <NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)}><Icon size={18}/>{label}</NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="mini-profile"><div className="avatar">{profile.name?.[0]?.toUpperCase()}</div><div><b>{profile.name}</b><small>{profile.diet} diet</small></div></div><button className="logout" onClick={onLogout}><LogOut size={17}/> Sign out</button></div>
    </aside>
    {open && <button className="scrim" onClick={()=>setOpen(false)} aria-label="Close menu"/>}
    <main className="main-area"><header className="topbar"><button className="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div><span className="eyebrow">YOUR PERSONAL NUTRITION SPACE</span><b>Eat well. Live well.</b></div><div className="top-user"><span className="online-dot"/> Profile active <div className="avatar">{profile.name?.[0]?.toUpperCase()}</div></div></header><div className="page-content">{children}</div></main>
  </div>;
}
