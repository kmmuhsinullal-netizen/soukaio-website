'use client';
import { useState } from 'react';
import { MapPin, ArrowUpRight, Coffee, Sprout } from 'lucide-react';
import Link from 'next/link';

const regions = [
  { name:'Karnataka', area:'Chikmagalur · Coorg', note:'India’s best-known coffee belt, with established Arabica and Robusta growing areas across the Western Ghats.', varieties:'Arabica · Robusta', image:'photo-1511537190424-bbbab87ac5eb', position:{left:'43%',top:'66%'} },
  { name:'Kerala', area:'Wayanad', note:'A key coffee-growing district where coffee is cultivated alongside the region’s diverse plantation landscape.', varieties:'Robusta · Arabica', image:'photo-1495474472287-4d71bcdd2085', position:{left:'40%',top:'77%'} },
  { name:'Tamil Nadu', area:'Nilgiris · Yercaud', note:'Hill-grown coffee from selected estates, with sourcing discussions shaped around the buyer’s grade and cup requirements.', varieties:'Arabica · Robusta', image:'photo-1442512595331-e89e73853f31', position:{left:'48%',top:'79%'} },
  { name:'Andhra Pradesh', area:'Araku Valley', note:'An eastern highland coffee-growing region known for its community-based coffee story and distinctive origin identity.', varieties:'Arabica', image:'photo-1559525839-b184a4d698c7', position:{left:'59%',top:'60%'} }
];
export default function OriginExplorer(){
 const [active,setActive]=useState(0); const region=regions[active];
 return <section id="origins" className="section origin-explorer">
  <div className="section-head"><div><div className="eyebrow blue">02 / COFFEE ORIGINS</div><h2>India has a story<br/><em>in every coffee region.</em></h2></div><p>Explore selected coffee-growing regions across India. Choose a location to discover its origin story and begin a sourcing conversation.</p></div>
  <div className="origin-explorer-grid">
   <div className="origin-map-panel">
    <div className="origin-map-top"><span><MapPin size={14}/> INDIA / ORIGIN MAP</span><small>SELECT A PIN</small></div>
    <div className="india-map">
     <svg viewBox="0 0 420 500" role="img" aria-label="Stylised map of India showing coffee-growing regions">
      <defs><linearGradient id="indiaFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e7edf3"/><stop offset="100%" stopColor="#cbd8e5"/></linearGradient></defs>
      <path d="M112 24 L151 42 175 35 197 55 228 58 244 82 276 88 291 112 319 126 315 151 341 165 330 190 350 212 337 239 314 247 305 274 283 289 274 321 255 340 245 376 226 408 213 453 196 482 180 457 170 426 154 398 143 365 123 340 112 310 91 292 78 266 57 247 66 219 49 195 65 173 58 146 78 128 73 103 94 84 93 57 Z" fill="url(#indiaFill)" stroke="#aab9c9" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M76 247 Q115 267 142 295 M143 365 Q169 382 190 420 M198 118 Q235 145 271 150" fill="none" stroke="#b8c7d6" strokeWidth="1.5" strokeDasharray="4 7"/>
      <path d="M112 24 L151 42 175 35 197 55 228 58 244 82 276 88 291 112 319 126 315 151 341 165 330 190 350 212 337 239 314 247 305 274 283 289 274 321 255 340 245 376 226 408 213 453 196 482 180 457 170 426 154 398 143 365 123 340 112 310 91 292 78 266 57 247 66 219 49 195 65 173 58 146 78 128 73 103 94 84 93 57 Z" fill="none" stroke="#fff" strokeWidth="1" opacity=".8"/>
     </svg>
     {regions.map((r,i)=><button key={r.name} className={'map-pin '+(active===i?'active':'')} style={{left:r.position.left,top:r.position.top}} onClick={()=>setActive(i)} aria-label={'Explore '+r.name}><span/></button>)}
     <div className="map-caption"><Sprout size={13}/> COFFEE-GROWING BELT</div>
    </div>
    <p className="map-footnote">Illustrative location map · selected sourcing regions</p>
   </div>
   <div className="origin-detail">
    <div className="origin-region-tabs">{regions.map((r,i)=><button key={r.name} onClick={()=>setActive(i)} className={active===i?'selected':''}><span>{r.name}</span><small>{r.varieties}</small></button>)}</div>
    <div className="origin-feature-image" style={{backgroundImage:'url(https://images.unsplash.com/'+region.image+'?auto=format&fit=crop&w=1400&q=85)'}}><span><MapPin size={13}/>{region.area}</span></div>
    <div className="origin-feature-copy"><div className="eyebrow blue">ORIGIN SPOTLIGHT / 0{active+1}</div><h3>{region.name}</h3><p>{region.note}</p><div className="origin-feature-bottom"><span><Coffee size={15}/>{region.varieties}</span><Link href="/contact">Enquire about this origin <ArrowUpRight size={15}/></Link></div></div>
   </div>
  </div>
  <small className="note">Regions shown are potential sourcing origins. Specific origin access, producer relationships, lot details and availability are confirmed individually for each enquiry.</small>
 </section>
}
