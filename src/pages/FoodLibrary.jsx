import { useMemo, useState } from 'react';
import { Search, Apple } from 'lucide-react';
import foodData from '../data/foodData.js';
import FoodCard from '../components/FoodCard.jsx';
export default function FoodLibrary(){
 const [query,setQuery]=useState('');const [category,setCategory]=useState('All');
 const filtered=useMemo(()=>foodData.filter(f=>(category==='All'||f.category===category)&&f.name.toLowerCase().includes(query.toLowerCase())),[query,category]);
 return <><div className="page-title"><span className="eyebrow">FOOD KNOWLEDGE</span><h1>Food library <span>🍉</span></h1><p>Explore example nutrition values per 100 grams.</p></div><div className="library-tools"><label className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search apple, spinach, lentils..."/></label><div className="filter-row">{['All','Fruit','Vegetable','Protein','Nuts','Dairy','Grains'].map(c=><button className={category===c?'filter active':'filter'} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div></div><div className="food-grid library-grid">{filtered.map(food=><article className="panel library-card" key={food.name}><FoodCard food={food}/><div className="nutrient-table"><div><span>Carbs</span><b>{food.carbs}g</b></div><div><span>Fat</span><b>{food.fat}g</b></div><div><span>Fiber</span><b>{food.fiber}g</b></div></div></article>)}</div>{!filtered.length&&<div className="empty-state"><Apple size={35}/>No foods match your search.</div>}<p className="muted">Nutrition values are approximate reference examples and may differ by source, variety and preparation.</p></>;
}
