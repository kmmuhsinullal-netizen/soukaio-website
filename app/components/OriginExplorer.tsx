'use client';
import { useState } from 'react';
import { MapPin, ArrowUpRight, Coffee } from 'lucide-react';
import Link from 'next/link';

const regions = [
 {name:'Karnataka',area:'Chikkamagaluru · Kodagu · Hassan',note:'India’s leading coffee-producing state, with established Arabica and Robusta estates along the Western Ghats.',varieties:'Arabica · Robusta',image:'photo-1511537190424-bbbab87ac5eb'},
 {name:'Kerala',area:'Wayanad',note:'A key coffee-growing district in the northern Western Ghats, with a strong Robusta presence and Arabica cultivation.',varieties:'Robusta · Arabica',image:'photo-1495474472287-4d71bcdd2085'},
 {name:'Tamil Nadu',area:'Nilgiris · Yercaud · Pulneys',note:'Hill-grown coffee from selected estates, with sourcing discussions shaped around buyer grade and cup requirements.',varieties:'Arabica · Robusta',image:'photo-1442512595331-e89e73853f31'},
 {name:'Andhra Pradesh',area:'Araku Valley',note:'An eastern highland coffee-growing region known for its community-based coffee story and distinctive origin identity.',varieties:'Arabica',image:'photo-1559525839-b184a4d698c7'}
];
const karnatakaLocations=['Chikkamagaluru','Aldur','Mudigere','Koppa','Balehonnur','Sakleshpur','Kodagu (Coorg)'];
export default function OriginExplorer(){
 const [active,setActive]=useState(0); const region=regions[active];
 return <section id="origins" className="section origin-explorer">
  <div className="section-head"><div><div className="eyebrow blue">02 / COFFEE ORIGINS</div><h2>India has a story<br/><em>in every coffee region.</em></h2></div><p>Explore India’s coffee-growing regions and discover the key sourcing areas across the country.</p></div>
  <div className="origin-detail origin-detail-no-map">
   <div className="origin-region-tabs">{regions.map((r,i)=><button key={r.name} onClick={()=>setActive(i)} className={active===i?'selected':''}><span>{r.name}</span><small>{r.varieties}</small></button>)}</div>
   <div className="origin-feature-image" style={{backgroundImage:'url(https://images.unsplash.com/'+region.image+'?auto=format&fit=crop&w=1600&q=85)'}}><span><MapPin size={13}/>{region.area}</span></div>
   <div className="origin-feature-copy"><div className="eyebrow blue">ORIGIN SPOTLIGHT / 0{active+1}</div><h3>{region.name}</h3><p>{region.note}</p>{active===0&&<div className="origin-location-list"><strong>KARNATAKA COFFEE-GROWING AREAS</strong><div>{karnatakaLocations.map(place=><span key={place}>{place}</span>)}</div></div>}<div className="origin-feature-bottom"><span><Coffee size={15}/>{region.varieties}</span><Link href="/contact">Enquire about this origin <ArrowUpRight size={15}/></Link></div></div>
  </div>
  <small className="note">Specific producer relationships, lot details and sourcing availability are confirmed individually for each enquiry.</small>
 </section>
}
