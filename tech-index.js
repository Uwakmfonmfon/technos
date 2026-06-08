
// BOOT SEQUENCE
const bootLines=["[INIT] Loading TECHNOS v2.0...","[OK] Technology archive: 300,000 BCE → present","[OK] 80+ pioneer profiles indexed","[OK] All domains mapped","[OK] Learning tracker initialized","[OK] Daily transmission ready","[BOOT] System ready. Welcome."];
let bl=0;
function runBoot(){
  const container=document.getElementById('bootLines');
  const bar=document.getElementById('bootBar');
  if(bl<bootLines.length){
    const p=document.createElement('p');
    p.textContent=bootLines[bl];
    p.style.animationDelay=bl*0.12+'s';
    container.appendChild(p);
    bar.style.width=((bl+1)/bootLines.length*100)+'%';
    bl++;
    setTimeout(runBoot,120);
  } else {
    setTimeout(()=>document.getElementById('bootScreen').classList.add('hidden'),600);
  }
}
runBoot();

// REVEAL
const revEls=document.querySelectorAll('.reveal');
const ro=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*50);ro.unobserve(e.target);}});},{threshold:0.06});
revEls.forEach(el=>ro.observe(el));

// DAILY
const now=new Date();
const DAY_NAMES=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MON_NAMES=['January','February','March','April','May','June','July','August','September','October','November','December'];
document.getElementById('dailyDate').textContent=`${DAY_NAMES[now.getDay()].toUpperCase()} ${now.getDate()} ${MON_NAMES[now.getMonth()].toUpperCase()} ${now.getFullYear()}`;

const facts=[
  {text:"The first programmable electronic computer, ENIAC, weighed 30 tons and occupied 1,800 square feet. Today's smartphones are billions of times more powerful.",source:"Computing History · 1945"},
  {text:"The internet was originally called ARPANET and connected just four universities in 1969. Today it connects 5 billion people.",source:"Internet History · 1969"},
  {text:"The first hard drive, IBM's RAMAC 350 (1956), stored 5MB and was the size of two refrigerators. A modern microSD card stores 1TB in a fingernail.",source:"Storage Evolution"},
  {text:"The transistor — the fundamental unit of all modern electronics — was invented at Bell Labs in 1947 by Bardeen, Brattain, and Shockley.",source:"Transistor · 1947"},
  {text:"Moore's Law (1965) predicted that transistor density would double every two years. It held for 50 years — the most accurate prediction in technology history.",source:"Gordon Moore · 1965"},
  {text:"Linux, which powers 96.4% of the world's top web servers, was started in 1991 by a 21-year-old Finnish student named Linus Torvalds as a personal hobby project.",source:"Linux · 1991"},
  {text:"The World Wide Web was invented by Tim Berners-Lee in 1989 as a way to share information between physicists at CERN. He gave it away for free.",source:"WWW · 1989"},
  {text:"The first computer bug was a literal bug — a moth found trapped in a relay of the Harvard Mark II computer in 1947, documented by Grace Hopper's team.",source:"Grace Hopper · 1947"},
  {text:"Claude Shannon's 1948 paper 'A Mathematical Theory of Communication' established information theory and defined the 'bit' — a single unit of information.",source:"Claude Shannon · 1948"},
  {text:"GPS was developed by the US military and opened to civilians after Korean Air Lines Flight 007 was shot down due to navigation errors in 1983.",source:"GPS History"},
  {text:"The first email was sent by Ray Tomlinson to himself in 1971. He chose @ to separate user from host — a decision that shaped all digital communication.",source:"Email · 1971"},
  {text:"Alan Turing's 1936 paper 'On Computable Numbers' described the theoretical basis for all computers — before a single electronic computer existed.",source:"Alan Turing · 1936"},
  {text:"The first iPhone in 2007 had 128MB of RAM and a 412 MHz processor. It was slower than most computers of 1990 — yet it changed the world.",source:"iPhone · 2007"},
  {text:"Bitcoin's blockchain, invented by the anonymous Satoshi Nakamoto in 2008, was the first system to solve the 'double-spend problem' without a central authority.",source:"Bitcoin · 2008"},
  {text:"The human brain operates at roughly 1 exaFLOP (10^18 operations/sec). The fastest supercomputer, Frontier, reached 1.1 exaFLOPS in 2022 — matching it for the first time.",source:"Supercomputing · 2022"}
];

const insights=[
  {text:"'The computer was born to solve problems that did not exist before.' — Bill Gates",source:"Bill Gates · Microsoft"},
  {text:"'It's fine to celebrate success, but it is more important to heed the lessons of failure.' — Bill Gates",source:"Bill Gates"},
  {text:"'The best way to predict the future is to invent it.' — Alan Kay",source:"Alan Kay · Xerox PARC"},
  {text:"'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' — Martin Fowler",source:"Martin Fowler"},
  {text:"'First, solve the problem. Then, write the code.' — John Johnson",source:"Engineering Principle"},
  {text:"'The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.' — Edsger Dijkstra",source:"Edsger Dijkstra"},
  {text:"'Simplicity is the soul of efficiency.' — Austin Freeman / Engineering wisdom",source:"Software Design"},
  {text:"'The Internet is becoming the town square for the global village of tomorrow.' — Bill Gates",source:"Bill Gates"},
  {text:"'In the long history of humankind, those who learned to collaborate and improvise most effectively have prevailed.' — Darwin (applied to tech teams)",source:"Team Dynamics"},
  {text:"'It always seems impossible until it's done.' — Nelson Mandela (applied to every impossible engineering challenge)",source:"Engineering Mindset"},
  {text:"'Programs must be written for people to read, and only incidentally for machines to execute.' — Hal Abelson",source:"SICP · MIT"},
  {text:"'Be curious. Read widely. Try new things. I think a lot of what people call intelligence boils down to curiosity.' — Aaron Swartz",source:"Aaron Swartz"},
  {text:"'The future is already here — it's just not evenly distributed.' — William Gibson",source:"William Gibson"},
  {text:"'Move fast and break things — unless you are breaking essential infrastructure.' — The engineering amendment",source:"Engineering Ethics"},
  {text:"'We build our computers the way we build our cities — over time, without a plan, on top of ruins.' — Ellen Ullman",source:"Ellen Ullman"}
];

const questions=[
  "If you had to explain how a computer works to a 10-year-old using only household objects, what would you use?",
  "What technology do you use every day that you genuinely don't understand — and does that bother you?",
  "If the internet disappeared tomorrow, what would break first in your life?",
  "What problem in your daily life do you think could be solved with technology that hasn't been built yet?",
  "Who is the technology pioneer whose story inspires you most — and why?",
  "What is the difference between data, information, knowledge, and wisdom — and which does technology give us?",
  "If you could learn one technical skill deeply, which would have the most impact on your life?",
  "What technology do you think is underrated — changing the world quietly without anyone noticing?",
  "What would computing look like today if the internet had been invented before the personal computer?",
  "Is AI a tool or an agent? What's the difference — and why does it matter?",
  "What does 'open source' mean philosophically — not just technically?",
  "If you built a startup, what problem would you solve — and what tech stack would you choose?",
  "How is the transistor similar to a neuron — and what does that tell us about the relationship between computing and biology?",
  "What technology has had the most negative unintended consequences — and could those have been predicted?",
  "If Moore's Law ends permanently, what happens to the pace of technological progress?"
];

function getDayIdx(arr){
  const doy=Math.floor((now-new Date(now.getFullYear(),0,0))/(1000*60*60*24));
  return doy%arr.length;
}

function loadDaily(){
  const fi=Math.floor(Math.random()*facts.length);
  const ii=Math.floor(Math.random()*insights.length);
  const qi=Math.floor(Math.random()*questions.length);
  animSet('factText',facts[fi].text);
  document.getElementById('factSource').textContent=facts[fi].source;
  animSet('insightText',insights[ii].text);
  document.getElementById('insightSource').textContent=insights[ii].source;
  animSet('questionText',questions[qi]);
}

function animSet(id,text){
  const el=document.getElementById(id);
  el.style.opacity=0;
  setTimeout(()=>{el.textContent=text;el.style.transition='opacity 0.5s';el.style.opacity=1;},200);
}

// Init daily (deterministic)
(function(){
  const f=facts[getDayIdx(facts)],i=insights[getDayIdx(insights)],q=questions[getDayIdx(questions)];
  document.getElementById('factText').textContent=f.text;
  document.getElementById('factSource').textContent=f.source;
  document.getElementById('insightText').textContent=i.text;
  document.getElementById('insightSource').textContent=i.source;
  document.getElementById('questionText').textContent=q;
})();

// TRACKER
const pillars=[
  {key:'foundations',name:'FOUNDATIONS',color:'var(--foundations)',items:['Understand binary & logic gates','Learn how CPUs work','Understand memory (RAM/ROM/Cache)','Know basic data structures','Understand networking basics','Learn OS concepts','Study algorithms & Big O']},
  {key:'coding',name:'CODING',color:'var(--learn)',items:['Write your first program','Understand a language deeply','Learn version control (Git)','Build a CLI application','Work with APIs','Write tests','Deploy something live']},
  {key:'domains',name:'DOMAINS',color:'var(--domains)',items:['Explore web development','Understand databases','Try data science / ML basics','Learn about cybersecurity','Study cloud computing','Understand system design','Explore a specialization']},
  {key:'pioneers',name:'PIONEERS',color:'var(--people)',items:['Read about Alan Turing','Study Grace Hopper','Learn about Ada Lovelace','Explore Claude Shannon','Study Linus Torvalds','Read about Tim Berners-Lee','Pick a living pioneer to follow']}
];

let state={checks:{},notes:'',reading:[],finished:[]};
function loadState(){try{const s=localStorage.getItem('technos_journey');if(s)state=JSON.parse(s);}catch(e){}}
function saveState(){try{localStorage.setItem('technos_journey',JSON.stringify(state));showSaved();}catch(e){}}
function showSaved(){const m=document.getElementById('savedMsg');m.classList.add('on');setTimeout(()=>m.classList.remove('on'),2500);}
function autoSave(){state.notes=document.getElementById('notesTA').value;saveState();}

function renderPillar(p){
  const checks=state.checks[p.key]||{};
  let done=0;
  const items=p.items.map((item,i)=>{
    const on=checks[i]||false;
    if(on)done++;
    return `<div class="track-item${on?' done':''}" onclick="toggleCheck('${p.key}',${i},${p.items.length})" style="color:${p.color}">
      <div class="t-check${on?' on':''}" style="${on?`background:${p.color};border-color:${p.color}`:''}">✓</div>
      <span class="t-label">${item}</span>
    </div>`;
  }).join('');
  const pct=Math.round(done/p.items.length*100);
  return `<div class="track-pillar reveal" style="color:${p.color};border-top-color:${p.color}">
    <div class="track-top">
      <span class="track-name" style="color:${p.color}">${p.name}</span>
      <span class="track-pct" style="color:${p.color}">${pct}%</span>
    </div>
    <div class="track-bar"><div class="track-bar-fill" style="background:${p.color};width:${pct}%;box-shadow:0 0 8px ${p.color}"></div></div>
    <div class="track-items">${items}</div>
  </div>`;
}

function toggleCheck(key,idx,total){
  if(!state.checks[key])state.checks[key]={};
  state.checks[key][idx]=!state.checks[key][idx];
  renderTracker();saveState();
}

function renderTracker(){
  document.getElementById('trackerGrid').innerHTML=pillars.map(renderPillar).join('');
  document.getElementById('notesTA').value=state.notes||'';
  // Re-observe new reveal elements
  document.querySelectorAll('.track-pillar.reveal:not(.on)').forEach(el=>ro.observe(el));
}

function saveTracker(){state.notes=document.getElementById('notesTA').value;saveState();}
function resetTracker(){if(!confirm('Reset all learning progress?'))return;state={checks:{},notes:'',reading:[],finished:[]};saveState();renderTracker();}

loadState();
renderTracker();