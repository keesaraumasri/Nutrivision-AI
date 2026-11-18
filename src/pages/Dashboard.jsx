import { useMemo } from 'react';
import { Flame, Beef, Droplets, Salad, ArrowUpRight } from 'lucide-react';
import StatCard from '../components/StatCard.jsx';
import FoodCard from '../components/FoodCard.jsx';
import foodData from '../data/foodData.js';
import { estimateDailyNeeds } from '../utils/nutritionCalculator.js';
export default function Dashboard({profile}) {
 const needs=useMemo(()=>estimateDailyNeeds(profile),[profile]);
 return <><div className="welcome-row"><div><span className="eyebrow">YOUR DAILY SNAPSHOT</span><h1>Good day, {profile.name.split(' ')[0]} <span>✦</span></h1><p>Small, balanced choices can make a big difference.</p></div><div className="date-chip">PERSONAL NUTRITION PROFILE</div></div>
 <section className="hero-banner"><div><span className="pill-light">YOUR WELLNESS, IN FOCUS</span><h2>Eat with purpose.<br/>Feel the difference.</h2><p>Your demo nutrition targets are estimated from your profile.</p></div><div className="hero-illustration">🥗</div></section>
 <div className="section-heading"><div><h2>Daily nutrition targets</h2><p>Illustrative estimates — not a prescribed diet.</p></div><a href="/goals">View goals <ArrowUpRight size={15}/></a></div>
 <div className="stats-grid"><StatCard label="Energy" value={needs.calories.toLocaleString()} unit="kcal" note="Estimated daily target" icon={Flame} tone="orange"/><StatCard label="Protein" value={needs.protein} unit="g" note="Baseline estimate" icon={Beef} tone="purple"/><StatCard label="Water" value={needs.water} unit="L" note="Approximate daily guide" icon={Droplets} tone="blue"/><StatCard label="Carbohydrates" value={needs.carbs} unit="g" note="Example macro split" icon={Salad} tone="green"/></div>
 <div className="section-heading"><div><h2>Explore the food library</h2><p>Discover nutrients in everyday foods.</p></div><a href="/library">Browse foods <ArrowUpRight size={15}/></a></div>
 <div className="food-grid">{foodData.slice(0,4).map(food=><FoodCard key={food.name} food={food}/>)}</div>
 <div className="notice"><b>Health note</b><p>Nutrition needs vary with height, age, activity, pregnancy, medical conditions and other factors. Discuss disease-specific diets with a qualified dietitian or clinician.</p></div>
 </>;
}
