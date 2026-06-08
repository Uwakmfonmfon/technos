
window.addEventListener('scroll',()=>{
  const pct=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.getElementById('progressBar').style.width=pct+'%';
});

const eras=[
  {
    id:'prehistoric',color:'#4FC3F7',label:'PREHISTORIC',span:'300,000 BCE → 3,000 BCE',
    title:'THE FIRST TOOLS',
    intro:'Before writing, before cities, before civilization — humans were already engineers. The story of technology begins not with silicon but with stone, fire, and the fundamental human drive to shape the world rather than merely endure it.',
    events:[
      {date:'~300,000 BCE',title:'Stone Tools & the First Engineers',body:'Homo sapiens craft stone tools with deliberate precision — flint knapped to create edges sharper than any modern surgical blade. This is the first technology: the intentional modification of natural materials to extend human capability. The cognitive leap required — imagining a final form inside a raw stone — is the same cognitive act behind every invention since.',impact:'Material shaping · Tool use · Extended capability'},
      {date:'~1,000,000 BCE',title:'Fire: Controlled Energy',body:'The control of fire is arguably the most consequential technology in human history. Cooked food unlocks calories that grow larger brains. Light extends the productive day. Heat enables ceramics, then metallurgy. The ability to harness and direct energy — which is what all technology ultimately is — begins here, around a fire pit in Africa.',impact:'Energy control · Cooking · Warmth · Social gathering · The template for all energy technology'},
      {date:'~40,000 BCE',title:'The Bow and Arrow',body:'Ranged weapons represent a fundamental technological principle: transferring stored energy (in a bent bow) into kinetic energy (a flying arrow). This same principle — storing and releasing energy — underlies springs, capacitors, batteries, and nuclear reactions. The bow is also the first example of a precision tool that requires multi-stage manufacturing.',impact:'Stored energy transfer · Precision manufacturing · Hunting efficiency'},
      {date:'~10,000 BCE',title:'Agriculture: The First System',body:'The transition from hunter-gatherer to farmer is the first large-scale "system design" in human history. Humans don\'t just modify a tool — they modify an entire ecosystem, selecting crops, managing soil, timing seasons. Agriculture requires long-term planning, abstract modeling of future states, and coordination across groups. These are the cognitive foundations of engineering.',impact:'System thinking · Food surplus · Population growth · Specialization · Civilization'},
      {date:'~6,000 BCE',title:'The Wheel',body:'The wheel seems obvious in retrospect. But it required two non-obvious innovations: a circular disc (not obvious — nature has no wheels) and an axle (the crucial component that took 300 years to figure out after wheels existed). The combination reduces friction by converting it from sliding to rolling. This is the first exploitation of a fundamental physical principle — friction reduction — that underpins all of mechanical engineering.',impact:'Friction reduction · Transportation · Pottery (wheel used there first) · Mechanical principle extraction'},
      {date:'~3,500 BCE',title:'Writing: The First Information Technology',body:'Cuneiform and hieroglyphs are not just communication tools — they are information storage and retrieval systems. Writing externalizes memory, allowing knowledge to persist beyond a single human lifespan, travel beyond a single location, and accumulate across generations. The entire information technology revolution of the 20th century is a direct continuation of what the Sumerians invented: durable, transmissible information encoding.',impact:'Information persistence · Knowledge accumulation · The ancestor of all IT'},
    ],
    figures:[
      {name:'Homo Sapiens',role:'First engineers · 300K BCE'},
      {name:'Unknown Sumerians',role:'Inventors of writing · 3500 BCE'},
      {name:'Unknown Mesopotamians',role:'Inventors of the wheel · 6000 BCE'},
    ],
    insight:{color:'#4FC3F7',text:'Every technology follows the same pattern: observe a natural phenomenon, abstract the underlying principle, then intentionally apply that principle to extend human capability. Fire is controlled exothermic reaction. The wheel is friction reduction. Writing is durable information encoding. AI is pattern extraction from data. The names change; the principle does not.'}
  },
  {
    id:'classical',color:'#00FF41',label:'CLASSICAL',span:'3,000 BCE → 1450 CE',
    title:'ANCIENT ENGINES',
    intro:'Across three thousand years, ancient and medieval engineers built aqueducts, calculated pi, invented clockwork, developed algebra, and laid down mathematical and mechanical principles that Newton and Galileo would later formalize. This era is not a prelude to technology — it IS technology, often of breathtaking sophistication.',
    events:[
      {date:'~250 BCE',title:'Archimedes and the Mathematics of Machines',body:'Archimedes derives the principle of the lever ("Give me a place to stand and I will move the Earth"), invents the Archimedes screw for moving water, and calculates pi with extraordinary precision. His mathematical treatment of physical machines — finding the principles behind why machines work — is the birth of mechanical engineering as a discipline.',impact:'Mechanical principles · Mathematics of machines · Lever · Screw · Engineering as science'},
      {date:'~100 BCE',title:'The Antikythera Mechanism',body:'Recovered from a Greek shipwreck, this 2,100-year-old bronze device could predict astronomical events, calculate the positions of the sun and moon, and track the cycle of Olympic games. It contains differential gearing and complex mechanical computing. It is the world\'s first known analog computer — and demonstrates that sophisticated mechanical computing is far older than the digital age.',impact:'Mechanical computing · Gearing systems · 2000+ years ahead of its apparent time'},
      {date:'~800 CE',title:'Al-Khwarizmi and the Birth of Algorithms',body:'In Baghdad\'s House of Wisdom, Muhammad ibn Musa al-Khwarizmi writes two books that reshape mathematics permanently. "Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala" gives us the word "algebra." His second book describes the Hindu-Arabic numeral system — the positional notation that makes arithmetic tractable. The word "algorithm" derives from the Latin transliteration of his name. Every line of code ever written rests on his foundations.',impact:'Algebra · Algorithm concept · Positional numerals · The mathematical foundation of computing'},
      {date:'~1040 CE',title:'Bi Sheng: Movable Type',body:'Chinese inventor Bi Sheng creates the world\'s first movable type printing system using ceramic characters. Four hundred years before Gutenberg, China has a system for mass-producing text. The reason it didn\'t spark the same revolution: the Chinese writing system\'s thousands of characters make movable type logistically impractical at scale. Technology\'s impact depends not just on the invention, but on the context in which it\'s deployed.',impact:'Movable type · Information reproduction · Context-dependent impact of technology'},
      {date:'~1200 CE',title:'Medieval Mechanical Clocks',body:'The first mechanical clocks, developed in European monasteries to regulate prayer times, are the first machines designed specifically to measure time rather than do physical work. They introduce the escapement — a mechanism that converts continuous rotation into discrete ticks — which is the grandfather of all digital computing\'s discrete states. Binary logic is escapement logic: on/off, tick/tock, 0/1.',impact:'Escapement mechanism · Discrete states · Time measurement · The mechanical ancestor of digital logic'},
    ],
    figures:[
      {name:'Archimedes',role:'Mathematician · Inventor · ~287–212 BCE'},
      {name:'Al-Khwarizmi',role:'Father of Algebra & Algorithms · ~780–850 CE'},
      {name:'Bi Sheng',role:'Inventor of Movable Type · ~990–1051 CE'},
      {name:'Hero of Alexandria',role:'Steam engine prototype (aeolipile) · ~10–70 CE'},
    ],
    insight:{color:'#00FF41',text:'The so-called "Dark Ages" were not dark for technology. Islamic scholars preserved and advanced Greek mathematics, invented algebra, pioneered optics, and laid mathematical foundations without which the Scientific Revolution would have been delayed by centuries. Technology has no single geography or culture — it emerges wherever curious minds have time and resources to experiment.'}
  },
  {
    id:'industrial',color:'#FFB800',label:'INDUSTRIAL',span:'1450 → 1900',
    title:'THE MACHINE AGE',
    intro:'In four centuries, humanity transitions from hand-crafted tools to steam-powered factories, from hand-copied manuscripts to mass-printed books, from horse-drawn transport to railroads and telegraphs. The pace of technological change accelerates beyond anything history had seen — and a new kind of person emerges: the inventor-entrepreneur who commercializes scientific discovery.',
    events:[
      {date:'1440',title:'Gutenberg\'s Printing Press',body:'Gutenberg\'s movable type press using metal type (building on Bi Sheng\'s ceramic version) combines three existing technologies — the wine press, movable type, and oil-based ink — into a system that drops the cost of book production by 300x. Within 50 years, 20 million books exist in Europe. The explosion of literacy, the Protestant Reformation, the Scientific Revolution, and the Enlightenment all flow from this single invention. The printing press is the internet of the 15th century.',impact:'Mass information distribution · Literacy · Reformation · Scientific Revolution · Democratic knowledge'},
      {date:'1687',title:'Newton\'s Principia: Science Becomes Engineering',body:'Isaac Newton\'s laws of motion and universal gravitation do something unprecedented: they give engineers mathematical tools to predict the behavior of physical systems before building them. Before Newton, engineering was empirical — you built it and hoped it worked. After Newton, you could calculate. This transformation — from craft to science-based engineering — is what makes the Industrial Revolution possible.',impact:'Predictive engineering · Mathematics of motion · Foundation of classical mechanics'},
      {date:'1769',title:'Watt\'s Steam Engine',body:'James Watt doesn\'t invent the steam engine — Newcomen did that in 1712. What Watt invents is the efficient steam engine, adding the separate condenser that prevents wasted energy. His insight is thermodynamic: he sees that the existing engine wastes energy reheating the cylinder. The result is an engine four times more efficient and commercially viable. This is the invention that ignites the Industrial Revolution — not the first version of a technology, but the optimized version.',impact:'Industrial Revolution · Fossil fuel economy · Mass manufacturing · The optimization insight'},
      {date:'1833',title:'Babbage\'s Analytical Engine',body:'Charles Babbage designs a mechanical general-purpose computer with an arithmetic logic unit, control flow, memory, and input/output — all in 1833. His collaborator Ada Lovelace writes the world\'s first computer program for it and recognizes its potential to manipulate any kind of symbolic information, not just numbers. The machine is never built in Babbage\'s lifetime. But the architecture he designs is essentially the von Neumann architecture of modern computers.',impact:'Computer architecture · Programmability concept · Ada Lovelace\'s algorithm · 100 years ahead of its time'},
      {date:'1837',title:'The Telegraph: Long-Distance Instant Communication',body:'The telegraph is the internet of the 19th century. For the first time in history, information travels faster than a human body. A message that took weeks by horse can arrive in seconds. The transatlantic cable (1866) links continents. Financial markets, military coordination, news distribution — all are transformed. The telegraph proves that communication networks create economic and social value exponentially, not linearly.',impact:'Network effects · Real-time communication · Global information infrastructure · First electronic network'},
      {date:'1876–1900',title:'Edison\'s Laboratory: Invention as Industry',body:'Thomas Edison doesn\'t just invent — he systematizes invention. Menlo Park is the world\'s first industrial research laboratory, a factory for producing breakthroughs. The phonograph, the light bulb, the motion picture, the power grid — all emerge from the same organized, well-funded research process. Edison\'s model — the corporate R&D lab — becomes the template for Bell Labs, Xerox PARC, Google X, and DeepMind.',impact:'R&D industrialization · Electric power grid · The invention-as-business model'},
    ],
    figures:[
      {name:'Johannes Gutenberg',role:'Printing Press · 1440'},
      {name:'Isaac Newton',role:'Classical Mechanics · 1687'},
      {name:'James Watt',role:'Steam Engine · 1769'},
      {name:'Charles Babbage',role:'Computer Architecture · 1833'},
      {name:'Ada Lovelace',role:'First Programmer · 1843'},
      {name:'Samuel Morse',role:'Telegraph · 1837'},
      {name:'Thomas Edison',role:'Industrial Inventor · 1876–1900'},
      {name:'Nikola Tesla',role:'AC Power · Wireless · 1880s–1900s'},
    ],
    insight:{color:'#FFB800',text:'Ada Lovelace\'s 1843 note on the Analytical Engine contains a remarkable prediction: she recognized that a machine capable of manipulating symbols could compose music, produce graphics, and solve any problem that could be expressed in mathematical notation. She saw what Babbage himself didn\'t see — that the machine was not a calculator but a universal symbol processor. She was right about the 20th century in 1843.'}
  },
  {
    id:'electronic',color:'#FF6B6B',label:'ELECTRONIC',span:'1900 → 1970',
    title:'ELECTRONS & LOGIC',
    intro:'The 20th century\'s first seven decades are the age of applied physics. Quantum mechanics reveals the behavior of electrons. The transistor replaces the vacuum tube. Claude Shannon defines information mathematically. Alan Turing defines computation theoretically. And then — in a government-funded wartime crash program — the first electronic computers are built. The digital age is about to be born.',
    events:[
      {date:'1904–1940s',title:'Vacuum Tubes: The First Electronic Switches',body:'Lee de Forest\'s triode vacuum tube (1906) creates the first electronic amplifier — a device that uses a small electrical signal to control a large one. Vacuum tubes enable radio, television, early computing, and radar. They are also hot, large, fragile, and power-hungry. The limitation that drives their replacement — the transistor — produces the most consequential miniaturization in history.',impact:'Electronic switching · Amplification · Radio · Television · Early computers'},
      {date:'1936',title:'Turing\'s Universal Machine',body:'Alan Turing\'s theoretical paper "On Computable Numbers" describes a hypothetical machine that could compute any computable function. The "Turing Machine" has a tape (memory), a head (processor), and a table of rules (program). It is entirely theoretical — Turing is answering a mathematical question about the limits of computation. But he accidentally describes the architecture of every computer ever built.',impact:'Theoretical foundation of computing · Definition of computation · Computability theory · Church-Turing thesis'},
      {date:'1947',title:'The Transistor: The Atom of the Digital World',body:'John Bardeen, Walter Brattain, and William Shockley at Bell Labs create the transistor — a solid-state switch made of semiconductor material. Unlike a vacuum tube, it has no moving parts, generates minimal heat, can be made microscopic, and can switch billions of times per second. The transistor is the fundamental unit of all modern electronics: every smartphone contains ~15 billion of them.',impact:'Modern electronics · Miniaturization · The building block of all digital technology'},
      {date:'1948',title:'Claude Shannon: Information Has a Quantity',body:'Shannon\'s "A Mathematical Theory of Communication" does for information what Newton did for motion: it makes it precisely measurable. Shannon defines the "bit" as the fundamental unit of information, proves that information can be reliably transmitted through noisy channels (with redundancy), and establishes the theoretical limits of compression. Every digital system — from MP3 to 5G to DNA sequencing — uses his mathematics.',impact:'Information theory · The bit · Compression · Error correction · All digital communication'},
      {date:'1945–1950s',title:'ENIAC to UNIVAC: The First Computers',body:'ENIAC (1945) weighs 30 tons, fills 1,800 sq ft, and can perform 5,000 additions per second — faster than any human. UNIVAC (1951) is the first commercially sold computer. These machines are programmed by rewiring physical cables. Grace Hopper\'s insight — that programming should use human-readable languages compiled to machine code — leads to the first compilers and changes who can use computers.',impact:'Electronic computing · Commercial computers · Grace Hopper\'s compiler · Programming languages'},
      {date:'1958',title:'The Integrated Circuit',body:'Jack Kilby at Texas Instruments and Robert Noyce at Fairchild Semiconductor independently invent the integrated circuit — placing multiple transistors on a single chip of semiconductor material. This is the invention that makes Moore\'s Law possible: instead of wiring transistors together by hand, you can manufacture billions of them simultaneously through photolithography. The modern chip industry is born.',impact:'IC fabrication · Moore\'s Law enabled · Semiconductor industry · Modern chip manufacturing'},
    ],
    figures:[
      {name:'Alan Turing',role:'Theoretical Computing · 1912–1954'},
      {name:'Claude Shannon',role:'Information Theory · 1916–2001'},
      {name:'John Bardeen',role:'Co-inventor of Transistor · Nobel Prize'},
      {name:'Grace Hopper',role:'Compiler Pioneer · "Amazing Grace"'},
      {name:'John von Neumann',role:'Computer Architecture · 1903–1957'},
      {name:'Jack Kilby',role:'Integrated Circuit · Nobel Prize 2000'},
    ],
    insight:{color:'#FF6B6B',text:'Alan Turing was a gay man convicted by the British government for his sexuality in 1952, chemically castrated, and died by cyanide poisoning in 1954 — almost certainly suicide. He had already broken the Enigma code, likely shortening WWII by two years, and had defined the theoretical foundation of all computing. Britain issued a formal apology in 2009 and a royal pardon in 2013. Technology\'s history is also a history of injustice against the people who built it.'}
  },
  {
    id:'digital',color:'#BF5AF2',label:'DIGITAL',span:'1970 → 2000',
    title:'THE PC & INTERNET REVOLUTION',
    intro:'The digital revolution arrives not from corporations but from garages, dorm rooms, and counterculture. The personal computer puts computing in human hands for the first time. ARPANET becomes the internet. The World Wide Web makes it navigable. Open source software distributes the means of production. In thirty years, the world\'s information infrastructure is rebuilt from scratch.',
    events:[
      {date:'1969',title:'ARPANET: The Internet\'s Origin',body:'The US Department of Defense\'s ARPANET connects four universities — UCLA, Stanford, UC Santa Barbara, and Utah — in a packet-switching network designed to survive nuclear attack. The first message sent ("login") crashes the system after two letters. But the principle works: data broken into packets, routed independently, reassembled at the destination. This is TCP/IP. This is the internet.',impact:'Packet switching · Distributed networks · The internet\'s technical foundation'},
      {date:'1972–1975',title:'The Microprocessor and Personal Computing',body:'Intel\'s 4004 (1971) and 8080 (1974) put an entire CPU on a single chip. The Altair 8800 (1975) is the first personal computer kit — a machine you assemble yourself with no display and no software. Two college dropouts in a garage, Bill Gates and Paul Allen, write a BASIC interpreter for it. Another garage — Jobs and Wozniak\'s — produces the Apple I, then Apple II. Computing moves from institutions to individuals.',impact:'CPU miniaturization · Personal computing · Home computer industry · Software industry birth'},
      {date:'1984',title:'The GUI: Computers Become Human',body:'Xerox PARC researchers invent the graphical user interface — windows, icons, pointer. Apple licenses it for the Macintosh (1984). Microsoft copies it for Windows. The command line required memorized syntax; the GUI requires only visual recognition. In a single design decision, the potential audience for computing expands from millions to billions. UI/UX is not decoration — it is the interface between human and tool.',impact:'GUI · Personal computing for everyone · Mouse · Visual computing · UI/UX as discipline'},
      {date:'1991',title:'The World Wide Web',body:'Tim Berners-Lee at CERN invents HTML, HTTP, and the URL — the three technologies that together create the World Wide Web. He could have patented it and become a billionaire. He gave it away. "The web is for everyone," he said. Within five years, Netscape, Yahoo, Amazon, and eBay exist. The web turns the internet from a research network into a global commercial and cultural platform.',impact:'HTML · HTTP · URL · The open web · Global information platform · E-commerce'},
      {date:'1991',title:'Linux: Open Source Changes Everything',body:'Linus Torvalds, a 21-year-old Finnish student, posts to a newsgroup: "I\'m doing a (free) operating system (just a hobby, won\'t be big and professional like gnu)..." Linux becomes the foundation of Android (3 billion devices), 96% of web servers, all supercomputers, and the cloud. The open source model — code freely shared and collectively improved — demonstrates that the most powerful software is built collaboratively.',impact:'Open source · Linux · Collaborative development · Free software · Powers the modern internet'},
      {date:'1994–2000',title:'The Dot-Com Boom and Crash',body:'The Web creates the first technology speculative bubble. Companies with no revenue and business plans built on "eyeballs" raise hundreds of millions. Amazon, Google, eBay, and PayPal are founded. Pets.com, Webvan, and thousands of others burn through capital and disappear. The crash wipes out $5 trillion. What survives — Google, Amazon, eBay — dominates the next twenty years. The lesson: new technology creates real value, but not for every company claiming to deliver it.',impact:'Internet economy · Venture capital · The survivors become giants · Lessons in technology valuation'},
    ],
    figures:[
      {name:'Linus Torvalds',role:'Linux · Open Source · Born 1969'},
      {name:'Tim Berners-Lee',role:'World Wide Web · CERN · Born 1955'},
      {name:'Steve Jobs',role:'Apple · Personal Computing · 1955–2011'},
      {name:'Bill Gates',role:'Microsoft · Software Industry · Born 1955'},
      {name:'Dennis Ritchie',role:'C language · Unix · 1941–2011'},
      {name:'Larry Page & Sergey Brin',role:'Google · Search · Founded 1998'},
    ],
    insight:{color:'#BF5AF2',text:'Tim Berners-Lee\'s decision to give the World Wide Web away for free — refusing to patent HTTP, HTML, and URLs — may be the most consequential act of technological generosity in history. A patented web would have been a toll road. The free web became a global commons that allowed billions of people, including people with no resources, to participate in the information economy. The open vs. closed question in technology is never just technical. It is always political and ethical.'}
  },
  {
    id:'connected',color:'#00F5FF',label:'CONNECTED',span:'2000 → 2020',
    title:'THE CONNECTED WORLD',
    intro:'Smartphones connect five billion people. Social media rewires democracy and attention. Cloud computing virtualizes infrastructure. Machine learning begins to outperform humans on specific tasks. And then, from a pandemic, a massive acceleration: remote work, digital-first everything, and mRNA vaccines developed in eleven months using computational biology.',
    events:[
      {date:'2007',title:'The iPhone: Computing in Every Pocket',body:'Steve Jobs announces "an iPod, a phone, and an internet communicator" — three devices in one. The iPhone is not the first smartphone, but it is the first smartphone with an interface good enough for everyone. The App Store (2008) creates a new software distribution model. By 2023, there are 6.8 billion smartphone users. The mobile internet is the largest platform in human history.',impact:'Mobile computing · App economy · Touch interface · Platform business model · 6.8B users'},
      {date:'2006–2010',title:'Cloud Computing: Software Becomes Service',body:'Amazon Web Services (2006) starts renting computing infrastructure to other companies. The insight: most companies don\'t need to own servers — they need computing on demand. AWS, Azure, and Google Cloud turn data centers into utilities, like electricity. A startup in a bedroom can now access the same computing power as a Fortune 500 company. The democratization of infrastructure.',impact:'Infrastructure as a service · Startup enablement · Scalable computing · Cost reduction · AWS economy'},
      {date:'2009–2015',title:'Deep Learning: Machines Start to See',body:'Geoffrey Hinton, Yann LeCun, and Yoshua Bengio — the "Godfathers of AI" — demonstrate that deep neural networks, trained on massive datasets with GPUs, can outperform all other approaches on image recognition, speech recognition, and language tasks. ImageNet 2012 is the watershed: a deep learning system reduces the error rate from 26% to 15% — a jump so large competitors initially assume it\'s a mistake.',impact:'Neural networks · GPU computing · Computer vision · Speech recognition · Foundation of modern AI'},
      {date:'2008',title:'Bitcoin: Cryptographic Trust',body:'Satoshi Nakamoto\'s Bitcoin whitepaper solves the Byzantine Generals Problem — how to reach consensus among parties who don\'t trust each other, without a central authority. The blockchain is a distributed ledger secured by cryptography and economic incentives. Whether or not Bitcoin succeeds as a currency, the technical innovation of trustless consensus has wide implications for any system requiring distributed agreement.',impact:'Blockchain · Cryptographic consensus · Decentralization · Smart contracts · Trustless systems'},
      {date:'2016–2020',title:'AI Becomes the Infrastructure',body:'AlphaGo defeats the world Go champion (a task previously thought to require human-level intuition). GPT-2 generates coherent paragraphs. AlphaFold predicts protein structures that had eluded scientists for fifty years. AI transitions from a research curiosity to a production tool used by hundreds of millions. The $10 trillion AI infrastructure buildout begins.',impact:'AI in production · Protein folding · Language models · AI as general-purpose technology'},
    ],
    figures:[
      {name:'Steve Jobs',role:'iPhone · Apple · 1955–2011'},
      {name:'Jeff Bezos',role:'AWS · Amazon · Born 1964'},
      {name:'Geoffrey Hinton',role:'Deep Learning Godfather · Turing Award 2018'},
      {name:'Satoshi Nakamoto',role:'Bitcoin · Anonymous · ~2008'},
      {name:'Demis Hassabis',role:'DeepMind · AlphaGo · AlphaFold'},
    ],
    insight:{color:'#00F5FF',text:'The smartphone is not just a communication device — it is the first computing platform designed around human attention as the primary resource. Every design decision in iOS and Android is optimized to keep humans engaged. The result: the average person touches their phone 2,617 times per day. Understanding technology requires understanding not just what it does, but what it does to its users.'}
  },
  {
    id:'ai-era',color:'#FF3B30',label:'AI ERA',span:'2020 → PRESENT',
    title:'THE INTELLIGENCE ERA',
    intro:'Language models cross the threshold from narrow tools to general assistants. Generative AI produces images, code, music, and text at superhuman quality. The question is no longer whether AI will transform every domain — it will — but whether that transformation will be governed wisely. We are in the first chapter of the most consequential technological transition in human history.',
    events:[
      {date:'2020',title:'GPT-3: Language Models Change Everything',body:'OpenAI\'s GPT-3 (175 billion parameters) demonstrates that a large enough language model, trained on enough text, develops emergent capabilities not explicitly programmed: translation, coding, reasoning, creative writing. The world wakes up to the possibility that the "last great AI breakthrough" might not be a specialized system but a general one. The race to build larger models begins.',impact:'Emergent AI capabilities · Natural language processing · Foundation models · AI race'},
      {date:'2022',title:'ChatGPT and the Public Awakening',body:'OpenAI\'s ChatGPT reaches 100 million users in two months — the fastest product adoption in history. Suddenly, AI is not a research tool but a daily utility. Programmers use it to write code. Students use it to write essays. Businesses automate workflows. The societal conversation about AI — jobs, creativity, safety, truth — becomes impossible to avoid. The technology has escaped the lab.',impact:'AI mainstream adoption · 100M users in 2 months · Productivity revolution · Societal AI debate'},
      {date:'2022–2023',title:'Generative AI: Images, Music, Video',body:'DALL-E, Midjourney, Stable Diffusion generate photorealistic images from text descriptions. Sora generates video. MuseNet and MusicLM compose music. For the first time, creative production no longer requires human creative labor as a bottleneck. This creates unprecedented productivity and unprecedented disruption for creative professions simultaneously.',impact:'Creative AI · Text-to-image · Text-to-video · Disruption of creative industries'},
      {date:'2023–2025',title:'AI Agents and Autonomous Systems',body:'The next frontier: AI that doesn\'t just respond to prompts but takes sequences of actions to accomplish goals — browsing the web, writing and running code, managing files, operating software. AI agents begin to automate knowledge work that required human judgment. The question of AI autonomy, safety, and alignment — how to build AI that reliably pursues human values — becomes the central engineering challenge of the decade.',impact:'AI agents · Autonomous systems · AI safety · AGI debate · Human-AI collaboration'},
      {date:'2024–Present',title:'The Compute Race and Infrastructure',body:'Training frontier AI models requires data centers consuming gigawatts of power. NVIDIA\'s H100 GPU becomes the most strategically important piece of hardware since the nuclear bomb. Governments compete for semiconductor manufacturing capacity. The AI infrastructure buildout is the largest capital investment in technology history — estimated at $1 trillion through 2030.',impact:'AI infrastructure · GPU scarcity · Energy demand · Geopolitical tech competition · $1T investment'},
    ],
    figures:[
      {name:'Sam Altman',role:'OpenAI CEO · ChatGPT · Born 1985'},
      {name:'Ilya Sutskever',role:'OpenAI Co-founder · GPT systems'},
      {name:'Andrej Karpathy',role:'Former Tesla/OpenAI AI Lead'},
      {name:'Yann LeCun',role:'Meta AI Chief · CNN Pioneer'},
      {name:'Demis Hassabis',role:'Google DeepMind CEO · Nobel Prize Chemistry 2024'},
      {name:'Jensen Huang',role:'NVIDIA CEO · GPU Revolution'},
    ],
    insight:{color:'#FF3B30',text:'The question is not whether AI will change your field — it will. The question is whether you will be the person who understands it deeply enough to shape how it is used, or whether you will be shaped by decisions others make. Every previous technology revolution created a generation of people who were displaced and a generation who thrived. The difference between them was almost never intelligence — it was curiosity and willingness to learn.'}
  }
];

// Render
const wrap=document.getElementById('timelineWrap');
const eraBtns=document.getElementById('eraBtns');
const eraDots=document.getElementById('eraDots');

eras.forEach((era,idx)=>{
  // Era nav button
  const btn=document.createElement('button');
  btn.className='era-nav-btn';
  btn.textContent=era.label;
  btn.style.color=era.color;
  btn.onclick=()=>document.getElementById('era-'+era.id).scrollIntoView({behavior:'smooth'});
  eraBtns.appendChild(btn);
  // Dot
  const dot=document.createElement('div');
  dot.className='era-dot';
  dot.style.background=era.color;
  dot.title=era.label;
  dot.onclick=()=>document.getElementById('era-'+era.id).scrollIntoView({behavior:'smooth'});
  eraDots.appendChild(dot);
  // Section
  const sec=document.createElement('section');
  sec.className='era-section';
  sec.id='era-'+era.id;
  sec.innerHTML=`
    <div class="era-header reveal">
      <div class="era-big-num">${String(idx+1).padStart(2,'0')}</div>
      <div class="era-info">
        <span class="era-badge reveal" style="background:${era.color}18;color:${era.color}">ERA ${String(idx+1).padStart(2,'0')} // ${era.label}</span>
        <h2 class="era-title" style="color:${era.color}">${era.title}</h2>
        <p class="era-span">${era.span}</p>
        <p class="era-intro">${era.intro}</p>
      </div>
    </div>
    <div class="events-grid">${era.events.map(ev=>`
      <div class="event-card reveal" style="color:${era.color}">
        <p class="ev-date">${ev.date}</p>
        <h3 class="ev-title">${ev.title}</h3>
        <p class="ev-body">${ev.body}</p>
        <p class="ev-impact">IMPACT: ${ev.impact}</p>
      </div>`).join('')}</div>
    <div class="insight-box reveal" style="color:${era.insight.color};border-left-color:${era.insight.color}">
      <p class="insight-label">// THE BIG PICTURE</p>
      <p class="insight-text">${era.insight.text}</p>
    </div>
    <div class="figures-row reveal">
      <p class="fig-label">// KEY FIGURES</p>
      <div class="fig-chips">${era.figures.map(f=>`<div class="fig-chip"><span class="fig-name">${f.name}</span><span class="fig-role">${f.role}</span></div>`).join('')}</div>
    </div>
  `;
  wrap.appendChild(sec);
});

// Reveal
const revEls=document.querySelectorAll('.reveal');
const ro=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*50);ro.unobserve(e.target);}});},{threshold:0.05});
revEls.forEach(el=>ro.observe(el));

// CHAT
const msgs=document.getElementById('chatMsgs');
const inp=document.getElementById('chatInput');
const sendBtn=document.getElementById('chatSend');
let history=[];

function ask(q){inp.value=q;sendMsg();document.getElementById('chatMsgs').scrollIntoView({behavior:'smooth'});}

function addMsg(role,html){
  const d=document.createElement('div');
  d.className='cmsg '+role;
  const av=document.createElement('div');
  av.className='cmsg-av';
  av.textContent=role==='user'?'>_':'AI';
  const b=document.createElement('div');
  b.className='cmsg-bubble';
  b.innerHTML=html;
  d.appendChild(av);d.appendChild(b);
  msgs.appendChild(d);
  msgs.scrollTop=msgs.scrollHeight;
}

function showTyping(){
  const d=document.createElement('div');
  d.className='cmsg assistant';d.id='typing';
  d.innerHTML='<div class="cmsg-av">AI</div><div class="cmsg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;
}

async function sendMsg(){
  const q=inp.value.trim();if(!q)return;
  inp.value='';sendBtn.disabled=true;
  addMsg('user',q);
  history.push({role:'user',content:q});
  showTyping();
  const sys=`You are a brilliant technology historian and educator — passionate, precise, and able to make any concept clear. You explain how technology works, why it matters, and connect it to the human story behind it. You love the unexpected connections between technologies. Format with **bold** for key terms and people. Keep answers focused and insightful — not lists, but flowing explanation. End with something that connects to the person's curiosity.`;
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:900,system:sys,messages:history})});
    const data=await r.json();
    document.getElementById('typing')?.remove();
    const txt=data.content?.[0]?.text||'Archive temporarily offline.';
    history.push({role:'assistant',content:txt});
    addMsg('assistant',txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n\n/g,'<br><br>'));
  }catch(e){document.getElementById('typing')?.remove();addMsg('assistant','Connection error. Try again.');}
  sendBtn.disabled=false;inp.focus();
};