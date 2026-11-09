'use client';
import { useState } from 'react';
import { MapPin, ArrowUpRight, Coffee, Sprout } from 'lucide-react';
import Link from 'next/link';

const regions=[
 {name:'Karnataka',area:'Chikkamagaluru · Coorg · Hassan',varieties:'Arabica · Robusta',note:'India’s largest coffee-producing state, with renowned estates across the Western Ghats. Explore established coffee belts and discuss origin-specific lots with our sourcing team.',image:'photo-1511537190424-bbbab87ac5eb',pin:{left:'47%',top:'69%'}},
 {name:'Kerala',area:'Wayanad',varieties:'Robusta · Arabica',note:'Coffee-growing landscapes in the northern Western Ghats, with Robusta prominent alongside Arabica cultivation.',image:'photo-1495474472287-4d71bcdd2085',pin:{left:'46%',top:'77%'}},
 {name:'Tamil Nadu',area:'Nilgiris · Yercaud · Pulneys',varieties:'Arabica · Robusta',note:'Coffee from selected hill estates, with sourcing conversations shaped around buyer grade, processing and cup requirements.',image:'photo-1442512595331-e89e73853f31',pin:{left:'51%',top:'80%'}},
 {name:'Andhra Pradesh',area:'Araku Valley',varieties:'Arabica',note:'An eastern highland coffee region known for its distinctive origin identity and community-based coffee story.',image:'photo-1559525839-b184a4d698c7',pin:{left:'59%',top:'61%'}}
];
const karnatakaLocations=['Chikkamagaluru','Bababudangiri','Mullayanagiri','Aldur','Mudigere','Koppa','Balehonnur','Sakleshpur','Kodagu / Coorg','Madikeri','Virajpet','Somwarpet'];
export default function OriginExplorer(){
 const [active,setActive]=useState(0); const region=regions[active];
 return <section id="origins" className="section origin-explorer">
  <div className="section-head"><div><div className="eyebrow blue">02 / COFFEE ORIGINS</div><h2>Discover India’s<br/><em>coffee-growing regions.</em></h2></div><p>From the Western Ghats to the Eastern Highlands, explore the regions behind India’s distinctive coffees and enquire about verified sourcing availability.</p></div>
  <div className="origin-classic-layout">
   <div className="origin-india-panel">
    <div className="origin-map-label"><span><MapPin size={14}/> INDIA / COFFEE ORIGINS</span><small>SELECT A LOCATION</small></div>
    <div className="origin-india-map">
     <img src="https://commons.wikimedia.org/wiki/Special:FilePath/India-locator-map-blank.svg" alt="Outline map of India" />
     {regions.map((r,i)=><button key={r.name} className={'india-region-pin '+(active===i?'active':'')} style={{left:r.pin.left,top:r.pin.top}} onClick={()=>setActive(i)} aria-label={'Select '+r.name}><i/></button>)}
     <span className="india-map-name">INDIA</span>
     <div className="india-map-legend"><Sprout size={16}/><span>INDIA’S COFFEE-GROWING REGIONS</span></div>
    </div>
    <div className="india-map-place-labels">{regions.map((r,i)=><button key={r.name} className={active===i?'active':''} onClick={()=>setActive(i)}><span className="legend-dot"/>{r.name}</button>)}</div>
    {active===0&&<div className="karnataka-location-strip"><div className="karnataka-strip-head"><b>KARNATAKA COFFEE BELT</b><span>KEY GROWING LOCATIONS</span></div><div className="karnataka-location-tags">{karnatakaLocations.map(n=><span key={n}>{n}</span>)}</div></div>}
   </div>
   <div className="origin-region-panel">
    <div className="origin-region-selector">{regions.map((r,i)=><button key={r.name} onClick={()=>setActive(i)} className={active===i?'selected':''}><strong>{r.name}</strong><small>{r.varieties}</small></button>)}</div>
    <div className="origin-region-rule"/>
    <div className="origin-region-heading"><div><span className="eyebrow blue">ORIGIN SPOTLIGHT / 0{active+1}</span><h3>{region.name}</h3></div><span className="origin-area-label">{region.area}</span></div>
    <div className="origin-region-photo" style={{backgroundImage:'url(https://images.unsplash.com/'+region.image+'?auto=format&fit=crop&w=1400&q=85)'}}><span><MapPin size={14}/>{region.area}</span></div>
    <p className="origin-region-description">{region.note}</p>
    <div className="origin-region-footer"><span><Coffee size={16}/>{region.varieties}</span><Link href="/contact">Enquire about this origin <ArrowUpRight size={16}/></Link></div>
   </div>
  </div>
  <small className="note">Map is an illustrative locator. Markers indicate coffee-growing regions, not exact estate coordinates. Origin access, producer relationships, lot details and availability are confirmed individually for each enquiry.</small>
 </section>
}
