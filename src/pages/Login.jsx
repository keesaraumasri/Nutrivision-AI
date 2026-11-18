import { useState } from 'react';
import { Activity, ArrowRight, Leaf } from 'lucide-react';
import '../styles/login.css';
export default function Login({ onLogin }) {
 const [form,setForm]=useState({name:'',age:'',weight:'',height:'',sex:'female',diet:'Vegetarian',activity:'moderate',conditions:[]});
 const [error,setError]=useState('');
 function update(e){setForm({...form,[e.target.name]:e.target.value})}
 function submit(e){e.preventDefault();if(!form.name.trim()||!form.age||!form.weight){setError('Please enter your name, age and weight.');return;}onLogin(form)}
 return <div className="login-page"><div className="login-art"><div className="brand light"><span className="brand-mark"><Activity/></span><span>NUTRI<span>VISION</span><small>SMART NUTRITION</small></span></div><div className="art-copy"><span className="pill-light"><Leaf size={14}/> YOUR WELLNESS JOURNEY STARTS HERE</span><h1>Make every bite<br/>count <em>for you.</em></h1><p>Understand your food. Discover your nutrition. Build healthier habits with a little help from AI.</p><div className="art-food">🥑 🍓 🥦 🍊</div></div><small className="art-footer">Nourish your body, one choice at a time.</small></div>
 <div className="login-form-wrap"><form className="login-form" onSubmit={submit}><div className="form-heading"><span className="eyebrow">WELCOME TO NUTRIVISION-AI</span><h2>Let's get to know you</h2><p>Tell us a little about yourself to personalize your demo dashboard.</p></div>
 <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Enter your name"/></label>
 <div className="form-grid"><label>Age<input type="number" min="13" max="100" name="age" value={form.age} onChange={update} placeholder="e.g. 22"/></label><label>Weight (kg)<input type="number" min="1" name="weight" value={form.weight} onChange={update} placeholder="e.g. 60"/></label><label>Height (cm)<input type="number" min="1" name="height" value={form.height} onChange={update} placeholder="e.g. 165"/></label><label>Sex for estimate<select name="sex" value={form.sex} onChange={update}><option value="female">Female</option><option value="male">Male</option><option value="other">Prefer not to say / other</option></select></label></div>
 <label>Food preference<select name="diet" value={form.diet} onChange={update}><option>Vegetarian</option><option>Non-vegetarian</option><option>Vegan</option><option>Eggetarian</option></select></label>
 <label>Activity level<select name="activity" value={form.activity} onChange={update}><option value="low">Low / mostly sitting</option><option value="moderate">Moderate / some exercise</option><option value="high">High / very active</option></select></label>
 {error&&<p className="error">{error}</p>}<button className="primary-btn full" type="submit">Create my nutrition dashboard <ArrowRight size={18}/></button><p className="privacy-note">Demo only. Avoid entering sensitive medical information. Estimates are not medical advice.</p>
 </form></div></div>;
}
