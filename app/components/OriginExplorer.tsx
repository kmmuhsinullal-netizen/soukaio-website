'use client';
import { useState } from 'react';
import { MapPin, ArrowUpRight, Coffee } from 'lucide-react';
import Link from 'next/link';

const regions = [
 {name:'Karnataka',area:'Chikkamagaluru · Kodagu · Hassan',note:'India’s leading coffee-producing state, with established Arabica and Robusta estates along the Western Ghats.',varieties:'Arabica · Robusta',image:'photo-1511537190424-bbbab87ac5eb',position:{left:'36%',top:'73%'}},
 {name:'Kerala',area:'Wayanad',note:'A key coffee-growing district in the northern Western Ghats, with a strong Robusta presence and Arabica cultivation.',varieties:'Robusta · Arabica',image:'photo-1495474472287-4d71bcdd2085',position:{left:'35%',top:'83%'}},
 {name:'Tamil Nadu',area:'Nilgiris · Yercaud · Pulneys',note:'Hill-grown coffee from selected estates, with sourcing discussions shaped around buyer grade and cup requirements.',varieties:'Arabica · Robusta',image:'photo-1442512595331-e89e73853f31',position:{left:'43%',top:'86%'}},
 {name:'Andhra Pradesh',area:'Araku Valley',note:'An eastern highland coffee-growing region known for its community-based coffee story and distinctive origin identity.',varieties:'Arabica',image:'photo-1559525839-b184a4d698c7',position:{left:'50%',top:'69%'}}
];
const karnatakaPlaces=[
 {name:'Chikkamagaluru',x:35,y:72},
 {name:'Aldur',x:33.5,y:73.5},
 {name:'Mudigere',x:33,y:76},
 {name:'Koppa',x:36,y:70.5},
 {name:'Balehonnur',x:37,y:72.5},
 {name:'Sakleshpur',x:34,y:79},
 {name:'Kodagu (Coorg)',x:35,y:82}
];
export default function OriginExplorer(){
 const [active,setActive]=useState(0); const region=regions[active];
 return <section id="origins" className="section origin-explorer">
  <div className="section-head"><div><div className="eyebrow blue">02 / COFFEE ORIGINS</div><h2>India has a story<br/><em>in every coffee region.</em></h2></div><p>Explore India’s coffee-growing regions, with Karnataka’s key coffee locations marked directly on the India map.</p></div>
  <div className="origin-explorer-grid origin-single-map-layout">
   <div className="origin-map-panel">
    <div className="origin-map-top"><span><MapPin size={14}/> INDIA / COFFEE ORIGINS</span><small>SELECT A REGION</small></div>
    <div className="india-map india-map-with-labels">
     <img className="india-outline-asset" src="https://commons.wikimedia.org/wiki/Special:FilePath/India-locator-map-blank.svg" alt="Outline map of India showing coffee-growing regions" />
     {regions.map((r,i)=><button key={r.name} className={'map-pin '+(active===i?'active':'')} style={{left:r.position.left,top:r.position.top}} onClick={()=>setActive(i)} aria-label={'Explore '+r.name}><span/></button>)}
     {karnatakaPlaces.map((p,i)=><button key={p.name} className="map-pin karnataka-origin-pin" style={{left:p.x+'%',top:p.y+'%'}} onClick={()=>setActive(0)} aria-label={'Karnataka coffee-growing location: '+p.name}><span/></button>)}
     <span className="map-region-label label-karnataka">Karnataka</span>
     <span className="map-region-label label-kerala">Kerala</span>
     <span className="map-region-label label-tamil">Tamil Nadu</span>
     <span className="map-region-label label-andhra">Andhra Pradesh</span>
    </div>
    <div className="map-location-key"><b>KARNATAKA COFFEE BELT</b><span>Chikkamagaluru · Aldur · Mudigere · Koppa · Balehonnur · Sakleshpur · Kodagu</span></div>
    <p className="map-footnote">Map markers identify approximate coffee-growing areas, not exact farm or estate coordinates.</p>
   </div>
   <div className="origin-detail">
    <div className="origin-region-tabs">{regions.map((r,i)=><button key={r.name} onClick={()=>setActive(i)} className={active===i?'selected':''}><span>{r.name}</span><small>{r.varieties}</small></button>)}</div>
    <div className="origin-feature-image" style={{backgroundImage:'url(https://images.unsplash.com/'+region.image+'?auto=format&fit=crop&w=1400&q=85)'}}><span><MapPin size={13}/>{region.area}</span></div>
    <div className="origin-feature-copy"><div className="eyebrow blue">ORIGIN SPOTLIGHT / 0{active+1}</div><h3>{region.name}</h3><p>{region.note}</p><div className="origin-feature-bottom"><span><Coffee size={15}/>{region.varieties}</span><Link href="/contact">Enquire about this origin <ArrowUpRight size={15}/></Link></div></div>
   </div>
  </div>
  <small className="note">Coffee-growing locations are indicative. Specific producer relationships, lot details and sourcing availability are confirmed individually for each enquiry.</small>
 </section>
}
