'use client';
import { useState } from 'react';
import { MapPin, ArrowUpRight, Coffee, Sprout, LocateFixed } from 'lucide-react';
import Link from 'next/link';

const regions = [
 {name:'Karnataka',area:'Chikkamagaluru · Kodagu · Hassan',note:'India’s leading coffee-producing state, with established Arabica and Robusta estates along the Western Ghats.',varieties:'Arabica · Robusta',image:'photo-1511537190424-bbbab87ac5eb',position:{left:'43%',top:'67%'}},
 {name:'Kerala',area:'Wayanad',note:'A key coffee-growing district in the northern Western Ghats, with a strong Robusta presence and Arabica cultivation.',varieties:'Robusta · Arabica',image:'photo-1495474472287-4d71bcdd2085',position:{left:'42%',top:'78%'}},
 {name:'Tamil Nadu',area:'Nilgiris · Yercaud · Pulneys',note:'Hill-grown coffee from selected estates, with sourcing discussions shaped around buyer grade and cup requirements.',varieties:'Arabica · Robusta',image:'photo-1442512595331-e89e73853f31',position:{left:'47%',top:'81%'}},
 {name:'Andhra Pradesh',area:'Araku Valley',note:'An eastern highland coffee-growing region known for its community-based coffee story and distinctive origin identity.',varieties:'Arabica',image:'photo-1559525839-b184a4d698c7',position:{left:'54%',top:'68%'}}
];
const karnatakaPlaces=[
 {name:'Chikkamagaluru',detail:'Bababudangiri · Mullayanagiri',kind:'Arabica · Robusta',x:54,y:35},
 {name:'Aldur',detail:'Chikkamagaluru district',kind:'Coffee estates',x:43,y:40},
 {name:'Mudigere',detail:'Western Ghats foothills',kind:'Arabica · Robusta',x:38,y:53},
 {name:'Koppa',detail:'Malnad coffee belt',kind:'Arabica · Robusta',x:59,y:25},
 {name:'Balehonnur',detail:'N.R. Pura taluk',kind:'Coffee estates',x:62,y:38},
 {name:'Sakleshpur',detail:'Hassan district',kind:'Arabica · Robusta',x:30,y:72},
 {name:'Kodagu (Coorg)',detail:'Madikeri · Virajpet · Somwarpet',kind:'Arabica · Robusta',x:47,y:79}
];
export default function OriginExplorer(){
 const [active,setActive]=useState(0); const [place,setPlace]=useState(0); const region=regions[active]; const selectedPlace=karnatakaPlaces[place];
 return <section id="origins" className="section origin-explorer">
  <div className="section-head"><div><div className="eyebrow blue">02 / COFFEE ORIGINS</div><h2>India has a story<br/><em>in every coffee region.</em></h2></div><p>Explore India’s coffee-growing regions, then zoom into Karnataka’s established coffee belt and its key growing locations.</p></div>
  <div className="origin-explorer-grid">
   <div className="origin-map-panel">
    <div className="origin-map-top"><span><MapPin size={14}/> INDIA / COFFEE ORIGINS</span><small>SELECT A REGION</small></div>
    <div className="india-map">
     <img className="india-outline-asset" src="https://commons.wikimedia.org/wiki/Special:FilePath/India-locator-map-blank.svg" alt="Accurate outline map of India" />
     {regions.map((r,i)=><button key={r.name} className={'map-pin '+(active===i?'active':'')} style={{left:r.position.left,top:r.position.top}} onClick={()=>setActive(i)} aria-label={'Explore '+r.name}><span/></button>)}
     <div className="map-caption"><Sprout size={13}/> INDIA'S COFFEE-GROWING REGIONS</div>
    </div>
    <div className="karnataka-inset">
     <div className="inset-heading"><span><LocateFixed size={14}/> KARNATAKA / ZOOM IN</span><small>7 KEY LOCATIONS</small></div>
     <div className="karnataka-mini-map">
      <img className="karnataka-outline-asset" src="https://commons.wikimedia.org/wiki/Special:FilePath/Karnataka-locator-map-blank.svg" alt="Accurate outline map of Karnataka" />
      {karnatakaPlaces.map((p,i)=><button key={p.name} className={'karnataka-pin '+(place===i?'active':'')} style={{left:p.x+'%',top:p.y+'%'}} onClick={()=>{setActive(0);setPlace(i)}} aria-label={'Select '+p.name}><span/></button>)}
     </div>
     <div className="inset-location-list">{karnatakaPlaces.map((p,i)=><button key={p.name} className={place===i?'chosen':''} onClick={()=>{setActive(0);setPlace(i)}}><span>{p.name}</span><small>{p.detail}</small></button>)}</div>
     <div className="selected-location"><b>{selectedPlace.name}</b><span>{selectedPlace.kind}</span></div>
    </div>
    <p className="map-footnote">Map outlines: Wikimedia Commons. Markers are indicative coffee-growing areas, not exact estate coordinates.</p>
   </div>
   <div className="origin-detail">
    <div className="origin-region-tabs">{regions.map((r,i)=><button key={r.name} onClick={()=>setActive(i)} className={active===i?'selected':''}><span>{r.name}</span><small>{r.varieties}</small></button>)}</div>
    <div className="origin-feature-image" style={{backgroundImage:'url(https://images.unsplash.com/'+region.image+'?auto=format&fit=crop&w=1400&q=85)'}}><span><MapPin size={13}/>{region.area}</span></div>
    <div className="origin-feature-copy"><div className="eyebrow blue">ORIGIN SPOTLIGHT / 0{active+1}</div><h3>{region.name}</h3><p>{region.note}</p><div className="origin-feature-bottom"><span><Coffee size={15}/>{region.varieties}</span><Link href="/contact">Enquire about this origin <ArrowUpRight size={15}/></Link></div></div>
   </div>
  </div>
  <small className="note">Locations are indicative coffee-growing areas. Specific estate access, producer relationships, lot details and availability are confirmed individually for each enquiry.</small>
 </section>
}
