window.addEventListener('scroll',()=>{const p=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;document.getElementById('progressBar').style.width=p+'%';});

const pioneers=[
  {id:1,name:'Ada Lovelace',era:'CLASSICAL ERA',years:'1815–1852',color:'#BF5AF2',field:'programming',role:'World\'s First Programmer',tagline:'Saw the soul of the machine before the machine existed. In 1843, she wrote the world\'s first algorithm — for a computer that had not yet been built.',contributions:['First computer algorithm','Concept of general-purpose computing','Recognized machines could go beyond pure calculation'],quote:{text:'The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.',attr:'Ada Lovelace, 1843'},aiQ:'What would Ada Lovelace think of modern AI — and how did her 1843 insight predict it?',
  story:`Ada Lovelace was the daughter of the poet Lord Byron, raised by a mother determined to suppress any poetic tendencies by filling her daughter's education with mathematics.

It worked — just not in the way her mother intended.

At 17, Ada met Charles Babbage at a dinner party. He showed her his Difference Engine — a mechanical calculator. Everyone else saw a calculator. Ada saw something deeper.

When Babbage designed the Analytical Engine — a more ambitious, programmable machine — Ada was asked to translate an Italian mathematician's paper about it from French into English. Instead, she added notes that were three times longer than the original paper.

Those notes included: the world's first algorithm (a method for calculating Bernoulli numbers), the first recognition that the machine could manipulate any kind of symbolic information — not just numbers — and a prescient warning that the machine "has no power of originating anything" — a caution that AI researchers still debate 180 years later.

**She had never seen a working computer.** She was describing the potential of a theoretical machine. Her understanding of what computing *could* be was so far ahead of what computing *was* that it took 100 years for the world to catch up.

She died at 36, of cancer, after a painful last year. The Analytical Engine was never built. Her notes were largely forgotten until Alan Turing cited them in 1950 when writing about machine intelligence.

The US Department of Defense named a programming language "Ada" after her in 1980. She appears on the holographic overlay of the British £5 note. But her greatest monument is the idea she had — the idea that a machine given the right instructions could compute anything computable.

She had that idea in 1843.`},

  {id:2,name:'Alan Turing',era:'ELECTRONIC ERA',years:'1912–1954',color:'#00F5FF',field:'computing',role:'Father of Computer Science & AI',tagline:'Defined what a computer is before computers existed. Broke Nazi encryption. Laid the theoretical foundation for artificial intelligence. Was destroyed by the government he saved.',contributions:['Turing Machine — theoretical foundation of computing','Cracked Enigma cipher (WWII)','Turing Test — definition of machine intelligence','Computable numbers — limits of computation'],quote:{text:'We can only see a short distance ahead, but we can see plenty there that needs to be done.',attr:'Alan Turing'},aiQ:'How does Turing\'s 1950 paper "Computing Machinery and Intelligence" hold up today — and was the Turing Test the right test?',
  story:`Alan Turing was a genius who saved millions of lives, defined the theory of computing, and asked the first serious questions about machine intelligence.

The British government destroyed him for being gay.

At 24, Turing published "On Computable Numbers" — a theoretical paper about the limits of mathematical computation. He described a hypothetical machine (now called a Turing Machine) that could compute any computable function. He was answering an abstract mathematical question. He was also, without realizing it, describing the architecture of every computer that would ever be built.

During World War II, Turing led the effort to crack Nazi Germany's Enigma encryption at Bletchley Park. His bombe machine systematically tested possible Enigma settings and broke messages that had been considered unbreakable. Historians estimate this work shortened the war by 2–4 years and saved 14–21 million lives.

After the war, Turing continued working on computer design and artificial intelligence. His 1950 paper "Computing Machinery and Intelligence" begins: "I propose to consider the question, 'Can machines think?'" He introduced the Turing Test — if a machine's responses are indistinguishable from a human's, it should be considered to think.

In 1952, Turing reported a burglary to police. During the investigation, they discovered he was in a relationship with a man. He was arrested, tried, and convicted of "gross indecency." He was forced to undergo chemical castration — injections of synthetic estrogen.

In June 1954, he was found dead beside a half-eaten apple — almost certainly suicide by cyanide poisoning. He was 41.

Britain issued a formal apology in 2009. A royal pardon came in 2013. His face appeared on the £50 note in 2021.

The debt civilization owes Alan Turing is incalculable. The injustice done to him is unforgivable.`},

  {id:3,name:'Grace Hopper',era:'ELECTRONIC ERA',years:'1906–1992',color:'#00FF41',field:'programming',role:'Mother of the Compiler',tagline:'Made computers speak human. Invented the first compiler. Found the first computer bug. Coined the term "debugging." And served in the US Navy until she was 79.',contributions:['First compiler (A-0, 1952)','COBOL programming language','Coined "debugging"','Nanosecond visualization teaching tool'],quote:{text:'The most dangerous phrase in the language is, "We\'ve always done it this way."',attr:'Grace Hopper, Admiral USN'},aiQ:'Why did Grace Hopper\'s insight — that programs should be written in human language, not machine code — matter so enormously?',
  story:`Grace Hopper had a simple but revolutionary idea: computers should understand human language, not the other way around.

In 1952, she wrote the world's first compiler — a program that translated human-readable code into machine instructions. Her colleagues told her it was impossible. "Computers can't understand English," they said.

She proved them wrong. And in doing so, she democratized programming — making it accessible to people who weren't specialists in machine code.

She also found the world's first computer bug. In 1947, a moth got trapped in a relay of the Harvard Mark II computer. Her team taped it into the logbook with the note: "First actual case of bug being found." The term "debugging" followed.

**Hopper joined the US Navy at 37** during World War II, eventually rising to the rank of Rear Admiral. She was recalled from retirement three times. When she finally retired at 79, she was the oldest serving officer in the US military.

She was famous for her "nanosecond" teaching tool: a wire 11.8 inches long — the distance light travels in a nanosecond. She handed them out to explain to admirals why satellite communication had delays.

When asked why she kept pushing new ideas despite resistance, she said: "It's easier to ask forgiveness than it is to get permission."

Grace Hopper received the Presidential Medal of Freedom posthumously in 2016. The US Navy named a guided-missile destroyer after her: USS Hopper. A Grace Hopper Celebration of Women in Computing is held annually — the world's largest gathering of women technologists.

She changed how humans and computers communicate. Then she changed how a Navy thinks about technology. She never stopped.`},

  {id:4,name:'Claude Shannon',era:'ELECTRONIC ERA',years:'1916–2001',color:'#FFB800',field:'theory',role:'Father of Information Theory',tagline:'Defined information mathematically. Invented the bit. Proved that any message can be transmitted reliably through any noisy channel. Then went home and unicycled through Bell Labs.',contributions:['Information theory (1948)','Defined the "bit"','Data compression theory','Error correction codes','Shannon\'s theorem'],quote:{text:'Information is the resolution of uncertainty.',attr:'Claude Shannon'},aiQ:'Shannon proved that information can be reliably transmitted through any noisy channel. How does this underpin everything from MP3 to 5G?',
  story:`Claude Shannon did for information what Newton did for motion: he gave it precise mathematics.

Before Shannon, "information" was a vague concept. After his 1948 paper "A Mathematical Theory of Communication," it was as precisely defined and measurable as mass or velocity.

Shannon defined the **bit** (binary digit) as the fundamental unit of information. He proved that any message could be encoded efficiently and transmitted reliably through any noisy channel — as long as the transmission rate stayed below the channel's theoretical maximum (now called the Shannon limit).

These aren't just interesting theorems. Every digital system built in the past 75 years uses Shannon's mathematics:
- Your MP3 files are compressed using entropy coding — Shannon's work.
- 5G wireless networks operate at the Shannon limit — the maximum theoretical efficiency he proved.
- Your SSD's error correction — Shannon's error-correcting codes.
- Data centers and internet backbones — Shannon's information theory, everywhere.

**Shannon himself was eccentric and brilliant.** At Bell Labs, he was known for riding a unicycle through the hallways while juggling. He built machines: a chess-playing computer (1950), a maze-solving mouse named "Theseus" that used early learning algorithms, a device that juggled balls while keeping track of them mathematically.

He essentially *played* at the intersection of mathematics and machinery, and in playing, built the theoretical foundation of the information age.

He spent his final years in obscurity, forgotten by most, his mind eventually lost to Alzheimer's. But the world he described in a 55-page paper in 1948 — a world where information is measurable, compressible, and perfectly transmissible — that is the world we live in.`},

  {id:5,name:'Linus Torvalds',era:'DIGITAL ERA',years:'Born 1969',color:'#00C832',field:'opensource',role:'Creator of Linux & Git',tagline:'Started Linux as a hobby at 21. It now runs 96% of web servers, all supercomputers, every Android phone, and most of the cloud. Still reviews code personally.',contributions:['Linux kernel (1991)','Git version control (2005)','Open source operating system','Foundation of modern internet infrastructure'],quote:{text:'Talk is cheap. Show me the code.',attr:'Linus Torvalds'},aiQ:'Why did the open source model — Linus\'s "just a hobby" approach — produce the most important software infrastructure in the world?',
  story:`On August 25, 1991, a 21-year-old Finnish computer science student posted to a Usenet newsgroup:

*"I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones."*

That operating system was Linux.

Linus Torvalds had started it because he wanted to use a Unix-like system on his personal computer and couldn't afford a commercial Unix license. He posted his project online, released the source code freely, and invited others to contribute.

Within months, programmers worldwide were sending improvements. Within years, it was a serious operating system. Within decades, **it became the foundation of the modern internet.**

Today:
- 96.4% of the world's top web servers run Linux
- All 500 of the world's fastest supercomputers run Linux
- Android (which runs on 3 billion devices) is built on the Linux kernel
- AWS, Google Cloud, and Azure primarily run Linux

Linus also created **Git** in 2005 — in two weeks — because he was frustrated with the version control system being used for Linux development. Git is now used by 100 million developers worldwide and is the foundation of GitHub (acquired by Microsoft for $7.5 billion).

Linus is famously blunt, technically rigorous, and still personally reviews kernel code. He has said: "I'm not a visionary. I'm an engineer. I'm happy with the people who are wandering around looking at the stars, but I think we need the people who make sure the buildings are built well."

The buildings he's built house the entire internet.`},

  {id:6,name:'Tim Berners-Lee',era:'DIGITAL ERA',years:'Born 1955',color:'#0A84FF',field:'internet',role:'Inventor of the World Wide Web',tagline:'Gave the world wide web to humanity for free. Could have been a trillionaire. Chose instead to give everyone equal access to human knowledge.',contributions:['HTML (HyperText Markup Language)','HTTP (HyperText Transfer Protocol)','URL (Uniform Resource Locator)','First web browser and server'],quote:{text:'The Web is for everyone.',attr:'Tim Berners-Lee'},aiQ:'Berners-Lee could have patented the web and become the world\'s richest person. Why did he give it away — and what would the world look like if he hadn\'t?',
  story:`Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, the European physics lab.

He was trying to solve a specific problem: CERN had thousands of researchers using thousands of computers, and there was no easy way to share information between them. He wrote a proposal titled "Information Management: A Proposal." His supervisor wrote on it: "Vague but exciting."

That vague, exciting idea became HTML, HTTP, and the URL — the three technologies that together created the World Wide Web.

The first website went live on December 20, 1990: info.cern.ch. It described what the World Wide Web was.

**Then Berners-Lee did something extraordinary.** When CERN asked whether they should patent the web, he argued against it. He insisted the technologies should be royalty-free, available to everyone, forever.

He gave it away.

If the Web had been patented, every website would pay licensing fees. Every browser. Every email. The cost would have been prohibitive for individuals, small businesses, and especially people in developing countries. The web would have been a toll road accessible only to those who could afford it.

Instead, it became a commons — a global information infrastructure that a student with a laptop in Lagos has the same access to as a corporation in New York.

The economic value of the web is estimated in the hundreds of trillions of dollars. Berners-Lee received none of it. He received a knighthood, a Turing Award, and the honor of designing the 2012 London Olympics opening ceremony's tribute to the internet.

He has spent his later career fighting to protect the open web — against surveillance, against centralization, against the concentration of power in a few platforms. "The web is for everyone," he insists. And because of his 1989 decision, it legally is.`},

  {id:7,name:'Dennis Ritchie',era:'DIGITAL ERA',years:'1941–2011',color:'#FF6B6B',field:'programming',role:'Creator of C & Unix',tagline:'Created C and co-created Unix. The operating systems, programming languages, and internet protocols you use daily descend directly from his work. He died quietly, unnoticed.',contributions:['C programming language','Unix operating system (with Ken Thompson)','Unix philosophy','B language predecessor'],quote:{text:'UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.',attr:'Dennis Ritchie'},aiQ:'Why did C become the most influential programming language in history — and what does Dennis Ritchie\'s legacy tell us about recognition in tech?',
  story:`Dennis Ritchie created C and co-created Unix in the early 1970s. He may be the most influential programmer who ever lived — and almost no one outside of computing knows his name.

C became the foundation of the programming world. It was used to write Unix, which was used to write Linux, which runs the internet. C itself was used to write the first compilers for dozens of other languages — C++, Objective-C, Python (the CPython interpreter), and many others. **If you unrolled the stack of technology that runs today's world, C would be near the bottom of almost everything.**

The Unix philosophy — do one thing and do it well, combine simple tools through pipes, everything is a file — shaped how software is designed for fifty years.

When Dennis Ritchie died in October 2011 — the same week as Steve Jobs — his death received almost no mainstream coverage. Jobs's death dominated news cycles for weeks.

Ken Thompson (his Unix co-creator) wrote: "I think the work Dennis did was as close to a singularity as any individual's work in computing. The rest of us have built on that foundation."

Ritchie never sought fame. He worked at Bell Labs his entire career, publishing papers and writing code. He received a Turing Award (shared with Ken Thompson) and the National Medal of Technology. He used neither for self-promotion.

The technology world builds on his work every day without knowing his name. This is, in some ways, the highest compliment an engineer can receive: to build something so foundational that it disappears into the infrastructure itself, invisible because it is everywhere.`},

  {id:8,name:'Steve Jobs',era:'DIGITAL ERA',years:'1955–2011',color:'#E0E0E0',field:'product',role:'Co-Founder of Apple',tagline:'Did not invent the computer, the mouse, the smartphone, or the music player. Made each of them so good that everyone wanted one. That\'s a different and equally rare gift.',contributions:['Apple II — personal computer revolution','Macintosh — GUI for the masses','iPod — music in your pocket','iPhone — smartphone redefined','Pixar — computer animation','Apple retail stores'],quote:{text:'Design is not just what it looks like and feels like. Design is how it works.',attr:'Steve Jobs'},aiQ:'Jobs was not an engineer. What was his actual genius — and why does it matter?',
  story:`Steve Jobs was not an engineer. He couldn't write significant code. He didn't invent the graphical user interface (Xerox PARC did), the mouse, the MP3 player, or the smartphone.

What he had was rarer: the ability to look at a technology that was technically working but experientially wrong, and refuse to ship it until it was right.

"Most people make the mistake of thinking design is what it looks like," he said. "That's not what we think design is. It's not just what it looks like and feels like. Design is how it works."

Jobs was fired from Apple in 1985 — forced out by the board he had recruited. He spent 12 years building Pixar (which made Toy Story) and NeXT (which developed the operating system that became macOS). He was brought back to Apple in 1997 when the company was 90 days from bankruptcy.

In the next 14 years, he launched the iMac, iPod, iTunes, iPhone, iPad, and the App Store. Apple went from near-bankruptcy to the world's most valuable company.

**The iPhone moment** (January 9, 2007) is worth understanding. Every smartphone before the iPhone required a stylus or physical keyboard. Jobs introduced a phone with no keyboard and no stylus. The audience laughed when he said it. Within two years, every other smartphone had followed.

He had bet that people would learn to use a touchscreen if the touchscreen was good enough. He was right. His confidence in making that bet — in insisting on a level of quality that most companies wouldn't accept as necessary — is the thing that separated him from the people who technically invented the same components.

Jobs died of pancreatic cancer at 56, in October 2011, at the height of Apple's power. His last words, reportedly spoken looking past his family toward something unseen, were: "Oh wow. Oh wow. Oh wow."`},

  {id:9,name:'Margaret Hamilton',era:'ELECTRONIC ERA',years:'Born 1936',color:'#BF5AF2',field:'computing',role:'Apollo Software Pioneer',tagline:'Her software landed humans on the moon. She coined the term "software engineering" — and fought to have it treated as a real engineering discipline.',contributions:['Apollo Guidance Computer software','Coined "software engineering"','Asynchronous software design','Priority-based scheduling — saved Apollo 11'],quote:{text:'Software during the early days of this project was treated like a stepchild... I fought to bring the software legitimacy.',attr:'Margaret Hamilton'},aiQ:'How did Margaret Hamilton\'s asynchronous software design save Apollo 11 from aborting its lunar landing?',
  story:`On July 20, 1969, three minutes before the Apollo 11 lunar module was about to land on the moon, the guidance computer began issuing error alarms: "1202."

Mission Control had no idea what 1202 meant. The controllers called Margaret Hamilton's team. Her team had built the software.

The answer: the computer was overloaded with data from a radar that was accidentally left on. Hamilton's team had anticipated exactly this kind of situation. **They had designed the software with a priority system** — if tasks overloaded the computer, it would drop lower-priority tasks and focus on what mattered most: landing the spacecraft.

The 1202 alarm was the computer saying: "I'm overloaded, but I'm dropping non-essential tasks and continuing to focus on landing." Mission Control: "Go. Land."

Neil Armstrong stepped onto the moon.

Margaret Hamilton had built software for the US Air Force's Semi-Automatic Ground Environment (SAGE) air defense system before joining MIT's Instrumentation Laboratory to work on Apollo. She led the software development team and wrote much of the code herself.

She was one of the first people to use the term "software engineering" — and she used it deliberately. Software in the 1960s was not treated as a serious engineering discipline. It was seen as secondary to hardware, done by whoever was available. Hamilton insisted it was engineering — rigorous, systematic, with defined processes and standards — and fought to have it recognized as such.

She received the Presidential Medal of Freedom in 2016. The iconic photo of her standing next to stacks of printed Apollo code — taller than she is — has become one of the most recognizable images in computing history.`},

  {id:10,name:'Geoffrey Hinton',era:'AI ERA',years:'Born 1947',color:'#FF3B30',field:'ai',role:'Godfather of Deep Learning',tagline:'Spent 40 years being told neural networks couldn\'t work. Won the Turing Award for proving they could. Then quit Google to warn the world about what he\'d helped create.',contributions:['Backpropagation algorithm','Deep learning revolution','ImageNet breakthrough (2012)','Capsule networks','Left Google to warn about AI risks (2023)'],quote:{text:'I think it\'s quite conceivable that humanity is just a passing phase in the evolution of intelligence.',attr:'Geoffrey Hinton'},aiQ:'Hinton left Google to warn about AI risks. What does it mean when the people who built AI are the most worried about it?',
  story:`Geoffrey Hinton spent most of his career being wrong — or rather, being right in a world that wasn't ready to find out.

Neural networks — systems loosely modeled on how the brain processes information — were first proposed in the 1940s. By the 1970s, mainstream AI researchers had largely abandoned them. They were too slow, too data-hungry, and didn't work well enough. The field moved to expert systems and symbolic reasoning.

Hinton kept working on neural networks. For decades, with funding difficult to get and academic prestige directed elsewhere, he persisted in the belief that the basic approach was right — that training neural networks on data, using an algorithm called backpropagation, would eventually produce powerful AI.

**In 2012, he was right.** At the ImageNet competition — a benchmark for image recognition — Hinton's team submitted AlexNet, a deep learning system that reduced the error rate from 26% to 15%. The second-place team had 26.1%. The gap was so large that competitors initially thought there had been an error.

There had been no error. Deep learning had simply arrived, finally powered by enough data and enough GPU compute to show what the approach could do.

Hinton received the 2018 Turing Award (shared with LeCun and Bengio) — the highest honor in computing.

In 2023, he resigned from Google. He said he wanted to speak freely about AI risks without the constraints of employment at a major AI company.

"I console myself with the normal excuse: If I hadn't done it, someone else would have," he said. "It is hard to see how you can prevent the bad actors from using it for bad things."

The man who spent 40 years making AI work now spends his time thinking about whether it should have been made.`},

  {id:11,name:'Vint Cerf & Bob Kahn',era:'DIGITAL ERA',years:'Born 1943 / Born 1938',color:'#0A84FF',field:'internet',role:'Fathers of the Internet',tagline:'Designed TCP/IP — the protocol that defines how the internet works. Every packet of data you have ever sent has traveled by their rules.',contributions:['TCP/IP protocol suite','RFC 675 (first TCP spec, 1974)','Architecture of the internet','Packet-switching network design'],quote:{text:'The internet is a reflection of our society and that mirror is going to be reflecting what we see.',attr:'Vint Cerf'},aiQ:'TCP/IP was designed for nuclear survivability in the 1970s. How does that original design decision affect the politics of the internet today?',
  story:`In 1974, Vint Cerf and Bob Kahn published RFC 675: "A Protocol for Packet Network Intercommunication." It was the first complete specification of TCP/IP — the protocols that define how data travels across the internet.

This is the moment the internet was born, technically speaking.

ARPANET existed already — a network connecting a handful of universities. But ARPANET was a single network. What Cerf and Kahn designed was a way to connect **any** network to **any** other network — an "internetwork," or internet.

The key insight: **no single point of control.** TCP/IP is deliberately decentralized. Routers figure out independently how to get packets to their destination. There's no central switchboard. No authority that routes everything through a single hub. Any node that goes down is simply routed around.

This was designed for nuclear survivability. The thinking: if the Soviets destroyed half of America's communication infrastructure, the remaining half should still be able to communicate.

The side effect of this design: **the internet is extraordinarily difficult to control or censor.** Because there's no center, there's no single point where an authority can intercept or block traffic without blocking everything. This is why authoritarian governments that have tried to "turn off the internet" have found it much harder than expected.

Vint Cerf has become the internet's ambassador — explaining it, defending it, and arguing for it as a global public good. Bob Kahn has been less public but equally foundational.

They called themselves the "fathers of the internet." Every bit of data you have ever sent has traveled by the rules they wrote in 1974.`},

  {id:12,name:'Jensen Huang',era:'AI ERA',years:'Born 1963',color:'#76B900',field:'hardware',role:'NVIDIA CEO / GPU Revolution',tagline:'Built a gaming graphics company. Then AI happened. NVIDIA became the most strategically important hardware company in the world — and the most valuable.',contributions:['NVIDIA GPU architecture','CUDA parallel computing platform','GeForce → AI compute pipeline','H100 GPU — the engine of AI'],quote:{text:'The most important general purpose technology of our time is accelerated computing and deep learning.',attr:'Jensen Huang'},aiQ:'Why did gaming GPUs become the hardware of the AI revolution — and what does that tell us about how technology evolves?',
  story:`Jensen Huang co-founded NVIDIA in 1993 with a single focus: graphics processing units (GPUs) for video games.

For twenty years, that's what NVIDIA made. Better graphics. Higher frame rates. More realistic games.

Then, in 2012, Geoffrey Hinton's AlexNet won the ImageNet competition by running a deep neural network on NVIDIA GPUs. Training the network would have taken months on CPUs. On GPUs, it took days.

GPUs, originally designed to render millions of pixels in parallel for games, turned out to be perfect for training neural networks — which require running millions of simple matrix multiplications in parallel. **The same hardware architecture that made Halo look realistic also trains language models.**

This was not a coincidence. Jensen Huang had invested in CUDA — a general-purpose programming platform for GPU computation — in 2006, eight years before deep learning went mainstream. He saw that the parallel processing architecture of GPUs had applications far beyond graphics.

When AI exploded, NVIDIA had a decade-long head start in the hardware and software ecosystem (CUDA) that AI companies needed.

By 2024, NVIDIA's market capitalization exceeded $3 trillion — briefly making it the world's most valuable company. The waiting list for NVIDIA's H100 AI training chips stretched months. Governments and corporations were competing to acquire them the way nations once competed for oil.

Jensen Huang — who dropped out of nothing, who co-founded a company making gaming chips — built the engine of the AI revolution.

"We are at the iPhone moment of AI," he said in 2023. He was comparing it to a revolution he'd helped enable through the chips in every early iPhone.

He wears a black leather jacket. He gives speeches that run two hours. He is, by any measure, the most consequential hardware executive alive.`}
];

const fields=[...new Set(pioneers.map(p=>p.field))];
const allFields=['all',...fields];
let activeField='all';
let searchTerm='';
let currentPioneer=null;

// Build filter buttons
const filterRow=document.getElementById('filterRow');
allFields.forEach(f=>{
  const btn=document.createElement('button');
  btn.className='filter-btn'+(f==='all'?' active':'');
  btn.textContent=f==='all'?'ALL PIONEERS':f.toUpperCase();
  btn.onclick=()=>{activeField=f;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderGrid();};
  filterRow.appendChild(btn);
});

function filterPeople(){searchTerm=document.getElementById('searchInput').value.toLowerCase();renderGrid();}

function renderGrid(){
  const grid=document.getElementById('peopleGrid');
  grid.innerHTML='';
  const filtered=pioneers.filter(p=>{
    const matchField=activeField==='all'||p.field===activeField;
    const matchSearch=!searchTerm||p.name.toLowerCase().includes(searchTerm)||p.role.toLowerCase().includes(searchTerm)||p.tagline.toLowerCase().includes(searchTerm);
    return matchField&&matchSearch;
  });
  if(!filtered.length){grid.innerHTML='<p class="no-results">No pioneers match your search.</p>';return;}
  filtered.forEach((p,i)=>{
    const card=document.createElement('div');
    card.className='person-card reveal';
    card.style.color=p.color;
    card.style.animationDelay=i*0.04+'s';
    card.innerHTML=`<div class="pc-head"><p class="pc-era">${p.era} // ${p.field.toUpperCase()}</p><h3 class="pc-name">${p.name}</h3><p class="pc-role">${p.role}</p></div><div class="pc-body"><p class="pc-tagline">${p.tagline}</p><p class="pc-contrib">CONTRIBUTIONS: ${p.contributions.slice(0,2).join(' · ')}</p></div><div class="pc-foot"><span class="pc-years">${p.years}</span><span class="pc-read">READ STORY →</span></div>`;
    card.addEventListener('click',()=>openModal(p));
    grid.appendChild(card);
  });
  document.querySelectorAll('.person-card.reveal').forEach((el,i)=>{
    setTimeout(()=>{el.classList.add('on');},i*60);
  });
}

function openModal(p){
  currentPioneer=p;
  document.getElementById('modalTop').style.background=`linear-gradient(90deg,${p.color},${p.color}60)`;
  document.getElementById('mEra').textContent=`${p.era} // ${p.years}`;
  document.getElementById('mName').textContent=p.name;
  document.getElementById('mRole').textContent=p.role;
  // Story
  const storyEl=document.getElementById('mStory');
  const paragraphs=p.story.trim().split('\n\n');
  storyEl.innerHTML=paragraphs.map(para=>`<p>${para.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</p>`).join('');
  // Quote
  document.getElementById('mQuoteText').textContent=`"${p.quote.text}"`;
  document.getElementById('mQuoteAttr').textContent=`— ${p.quote.attr}`;
  // Chips
  const chips=document.getElementById('mChips');
  chips.innerHTML=p.contributions.map(c=>`<span class="mc-chip">${c}</span>`).join('');
  document.getElementById('mAiQ').textContent=p.aiQ;
  document.getElementById('masResponse').className='mas-response';
  document.getElementById('masResponse').innerHTML='';
  document.getElementById('masBtn').disabled=false;
  document.getElementById('masBtn').textContent='✦ EXPLORE THIS PIONEER';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(e){if(e.target===document.getElementById('modalOverlay'))closeModalDirect();}
function closeModalDirect(){document.getElementById('modalOverlay').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModalDirect();});

async function deepDive(){
  if(!currentPioneer)return;
  const btn=document.getElementById('masBtn');
  const resp=document.getElementById('masResponse');
  btn.disabled=true;btn.textContent='...';
  resp.className='mas-response on';
  resp.innerHTML='<div class="typing-dots"><span></span><span></span><span></span></div>';
  const prompt=`I just read about ${currentPioneer.name} (${currentPioneer.role}). The guiding question: "${currentPioneer.aiQ}" — Please explore this thoughtfully. Connect their work to modern technology, what their story reveals about the nature of innovation, and what lessons a technologist today should take from their life. Be insightful and personal. Use **bold** for key insights.`;
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:700,system:'You are a brilliant technology historian who helps people understand the deep significance of pioneering technologists. Write with insight and warmth. Use **bold** for key points. Paragraphs, not lists.',messages:[{role:'user',content:prompt}]})});
    const data=await r.json();
    const txt=data.content?.[0]?.text||'Offline.';
    resp.innerHTML=txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n\n/g,'<br><br>');
    btn.textContent='✦ EXPLORED';
  }catch(e){resp.innerHTML='Connection error.';btn.disabled=false;btn.textContent='✦ TRY AGAIN';}
}

renderGrid();