window.addEventListener('scroll',()=>{const p=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;document.getElementById('progressBar').style.width=p+'%';});

const topics=[
  {
    id:'binary',color:'#00FF41',label:'BINARY',title:'Binary & Logic: The Language of Machines',
    badge:'LAYER 01 // PHYSICS → LOGIC',
    intro:'Every piece of data in every computer — every photo, every song, every word you type — is ultimately stored and processed as a sequence of 1s and 0s. Not because it\'s elegant, but because it maps perfectly to physical reality: a transistor is either conducting (1) or not conducting (0). Binary is not a design choice. It\'s physics.',
    content:`binary`
  },
  {
    id:'hardware',color:'#00F5FF',label:'HARDWARE',title:'Hardware: The Physical Machine',
    badge:'LAYER 02 // SILICON → COMPUTATION',
    intro:'Hardware is the physical substrate of computing. Understanding how CPUs, memory, and storage actually work — not just what they do but how — gives you the mental model to write faster code, debug harder problems, and design better systems.',
    content:'hardware'
  },
  {
    id:'os',color:'#FFB800',label:'OS',title:'Operating Systems: The Invisible Manager',
    badge:'LAYER 03 // HARDWARE → SOFTWARE',
    intro:'The operating system is the software that turns raw hardware into a usable computer. It manages memory, runs multiple programs simultaneously, handles file storage, and provides a consistent interface for applications. Without it, you\'d write machine code directly to hardware — which is exactly what early programmers did.',
    content:'os'
  },
  {
    id:'algorithms',color:'#FF6B6B',label:'ALGORITHMS',title:'Algorithms & Data Structures: The Science of Efficiency',
    badge:'LAYER 04 // LOGIC → EFFICIENCY',
    intro:'An algorithm is a precise sequence of steps to solve a problem. A data structure is a way of organizing data to make operations efficient. Together, they determine whether your program runs in seconds or years — and understanding them is what separates programmers who can solve any problem from those who can only follow tutorials.',
    content:'algorithms'
  },
  {
    id:'networks',color:'#BF5AF2',label:'NETWORKS',title:'Networks & the Internet: Connecting Everything',
    badge:'LAYER 05 // LOCAL → GLOBAL',
    intro:'The internet is the most complex engineered system in human history — and it runs on a surprisingly elegant set of principles. Packet switching, protocols, and layered abstraction turn billions of independent devices into a single coherent global network.',
    content:'networks'
  },
  {
    id:'software',color:'#FF3B30',label:'SOFTWARE',title:'Software Architecture: Building Systems That Last',
    badge:'LAYER 06 // CODE → SYSTEMS',
    intro:'Software architecture is the art of organizing code so that complex systems remain understandable, maintainable, and scalable. Every large software system has an architecture — good or bad. Understanding architectural patterns is what separates someone who can build a feature from someone who can build a product.',
    content:'software'
  }
];

const topicContent={
  binary:{
    concepts:[
      {label:'FOUNDATION',term:'Binary (Base-2)',def:'A number system using only two digits: 0 and 1. Every number, letter, image, and instruction is represented as a combination of these two states. A single binary digit is called a "bit" (binary digit).',analogy:'Analogy: Like a light switch — it\'s either off (0) or on (1). Chain enough switches together and you can represent any number.'},
      {label:'UNIT',term:'Byte',def:'8 bits grouped together. A byte can represent 256 different values (2^8). Text characters, pixel color values, and small numbers are typically stored in bytes. 1 byte = 1 character of ASCII text.',analogy:'Analogy: If a bit is a coin (heads/tails), a byte is a stack of 8 coins — 256 different combinations.'},
      {label:'UNIT',term:'Kilobyte / Megabyte / Gigabyte',def:'1 KB = 1,024 bytes. 1 MB = 1,024 KB. 1 GB = 1,024 MB. 1 TB = 1,024 GB. A typical photo is ~3 MB. A movie is ~4 GB. A modern SSD is 1-2 TB.',analogy:'Each step up is 1,024x larger — not 1,000x, because binary math uses powers of 2.'},
      {label:'ENCODING',term:'ASCII & Unicode',def:'ASCII assigns a number to each character: A=65, B=66, space=32. Unicode (UTF-8) extends this to 143,000+ characters covering every human language, emoji, and symbol.',analogy:'Like a codebook: number 65 = letter A. The computer stores 65; your screen displays A.'},
      {label:'LOGIC',term:'Logic Gates',def:'Electronic circuits that perform basic logical operations — AND, OR, NOT, XOR. Built from transistors. Combined in millions, they perform arithmetic, comparison, and all computation.',analogy:'Logic gates are the verbs of computing — they perform operations on bits.'},
      {label:'REPRESENTATION',term:'Hexadecimal',def:'Base-16 numbering (0-9, A-F). Used to represent binary more compactly. #FF5733 is a color: FF=red(255), 57=green(87), 33=blue(51). Memory addresses are shown in hex.',analogy:'Hex is shorthand for binary — 1 hex digit = 4 bits. Programmers use it because 8-bit binary (10110111) is harder to read than hex (B7).'}
    ],
    gates:[
      {name:'AND',truth:'0 AND 0 = 0\n0 AND 1 = 0\n1 AND 0 = 0\n1 AND 1 = 1',desc:'Both inputs must be 1'},
      {name:'OR',truth:'0 OR 0 = 0\n0 OR 1 = 1\n1 OR 0 = 1\n1 OR 1 = 1',desc:'Either input can be 1'},
      {name:'NOT',truth:'NOT 0 = 1\nNOT 1 = 0',desc:'Inverts the input'},
      {name:'XOR',truth:'0 XOR 0 = 0\n0 XOR 1 = 1\n1 XOR 0 = 1\n1 XOR 1 = 0',desc:'Inputs must differ'},
      {name:'NAND',truth:'0 NAND 0 = 1\n0 NAND 1 = 1\n1 NAND 0 = 1\n1 NAND 1 = 0',desc:'NOT of AND — universal gate'},
    ],
    insight:'Everything a computer does — arithmetic, comparison, memory access, network communication — decomposes into logic gates. And every logic gate is made of transistors. And every transistor is a switch — either on or off. This is why "0 and 1" is not an oversimplification. It is the complete foundation. There is nothing beneath it except physics.'
  },
  hardware:{
    concepts:[
      {label:'PROCESSOR',term:'CPU (Central Processing Unit)',def:'The brain of the computer. Executes instructions: fetches an instruction from memory, decodes what it means, executes it, stores the result. Modern CPUs execute billions of instructions per second across multiple cores.',analogy:'The CPU is a chef: it reads a recipe (program), fetches ingredients (data from memory), performs operations (cooking), and produces output.'},
      {label:'MEMORY',term:'RAM (Random Access Memory)',def:'Fast, temporary storage that holds data the CPU is actively working with. RAM is volatile — it loses everything when power is cut. Accessing RAM takes ~100 nanoseconds. When RAM is full, the OS swaps to disk — which is 1,000x slower.',analogy:'RAM is your desk. Your hard drive is a filing cabinet. You work on your desk; you store in the cabinet. A small desk = constant trips to the cabinet = slow work.'},
      {label:'CACHE',term:'CPU Cache (L1/L2/L3)',def:'Tiny, extremely fast memory built directly into the CPU chip. L1 cache: ~32KB per core, ~1ns access. L2: ~256KB, ~4ns. L3: ~8MB, ~40ns. RAM: ~100ns. Cache stores recently accessed data so the CPU doesn\'t wait for slow RAM.',analogy:'Cache is the chef\'s hand — the ingredients already in their grasp, ready to use immediately. RAM is the counter, disk is the pantry.'},
      {label:'STORAGE',term:'SSD vs HDD',def:'HDD (Hard Disk Drive): magnetic platters that spin at 5,400-7,200 RPM. Access time ~5ms. SSD (Solid State Drive): flash memory chips with no moving parts. Access time ~0.1ms — 50x faster. NVMe SSDs: ~0.02ms.',analogy:'HDD is a vinyl record (spinning, needle finds position). SSD is a USB drive — instant access, no moving parts.'},
      {label:'PROCESSOR',term:'Clock Speed & Cores',def:'Clock speed (GHz) measures how many cycles per second a CPU executes. 3.5 GHz = 3.5 billion cycles/second. Multiple cores allow parallel execution. 8 cores can run 8 tasks simultaneously.',analogy:'Clock speed is how fast a single chef works. Cores are how many chefs are in the kitchen simultaneously.'},
      {label:'GPU',term:'GPU (Graphics Processing Unit)',def:'Originally for rendering graphics, GPUs excel at running thousands of simple calculations simultaneously (parallel processing). Modern GPUs have 10,000+ cores vs CPU\'s 16-64. This makes them ideal for AI training, video encoding, and scientific computing.',analogy:'CPU: a few expert chefs doing complex tasks. GPU: thousands of line cooks doing the same simple task in parallel.'}
    ],
    stack:[
      {name:'Applications',desc:'What users interact with — browsers, apps, games',color:'#00FF41'},
      {name:'Operating System',desc:'Manages hardware access, memory, processes',color:'#00F5FF'},
      {name:'Device Drivers',desc:'Software interfaces to specific hardware',color:'#FFB800'},
      {name:'Firmware / BIOS',desc:'Low-level hardware initialization code',color:'#FF6B6B'},
      {name:'CPU / RAM / Storage',desc:'Physical silicon — executes instructions',color:'#BF5AF2'},
      {name:'Transistors',desc:'Billions of electronic switches in silicon',color:'#FF3B30'},
    ],
    insight:'Modern CPUs contain 15–80 billion transistors on a chip the size of a thumbnail. Each transistor is ~5 nanometers wide — smaller than most viruses. The manufacturing process requires lasers, vacuum chambers, and tolerances measured in atoms. It is simultaneously the most complex manufacturing process humans have ever developed and the most mass-produced artifact in history: more transistors are produced each year than grains of rice.'
  },
  os:{
    concepts:[
      {label:'CORE FUNCTION',term:'Process Management',def:'The OS creates, schedules, and terminates processes (running programs). Time-sharing allows multiple processes to share a single CPU — each gets milliseconds of CPU time in rapid rotation, creating the illusion of simultaneous execution.',analogy:'Like a traffic controller giving each car (process) a short turn at the green light (CPU). Switch fast enough and everything seems to move at once.'},
      {label:'CORE FUNCTION',term:'Memory Management',def:'The OS allocates RAM to processes, ensures they don\'t access each other\'s memory (isolation), and implements virtual memory — using disk space to extend apparent RAM capacity. Each process sees its own "virtual" address space.',analogy:'The OS is a hotel manager assigning rooms (RAM) to guests (processes), ensuring privacy between rooms, and using storage rooms (disk) as overflow.'},
      {label:'ABSTRACTION',term:'File System',def:'Organizes data into files and directories on storage devices. Tracks where each file\'s data is physically stored. Common file systems: NTFS (Windows), ext4 (Linux), APFS (macOS). The "file" is an abstraction — physically, data is scattered across storage blocks.',analogy:'A filing system that knows every document\'s physical location in the drawer, even if they\'re spread across multiple drawers.'},
      {label:'INTERFACE',term:'System Calls',def:'The API between user programs and the OS kernel. To read a file, create a network connection, or allocate memory, a program makes a system call — asking the OS (which has hardware access) to perform the operation.',analogy:'System calls are requests to the hotel concierge — you (the program) can\'t access the storage room directly; you ask the concierge (OS) to get what you need.'},
      {label:'CONCEPT',term:'Kernel vs User Space',def:'The kernel is the OS core — runs with full hardware access. User space is where applications run — isolated, with limited hardware access. This separation prevents buggy apps from crashing the entire system.',analogy:'Kernel = the building\'s electrical system (powerful, dangerous, restricted). User space = apartments (comfortable, but you can\'t touch the wiring).'},
      {label:'CONCEPT',term:'Threads & Concurrency',def:'A thread is a unit of execution within a process. Multiple threads share the same memory space and can run in parallel on multi-core CPUs. Concurrency bugs (race conditions, deadlocks) are among the hardest bugs to debug.',analogy:'A process is a restaurant. Threads are waiters — they share the same kitchen (memory) and work simultaneously, but must coordinate to avoid chaos.'}
    ],
    insight:'The invention of the time-sharing operating system in the 1960s was as revolutionary as the invention of the computer itself. Before time-sharing, a computer ran one program at a time — you submitted a punch card deck and waited hours for output. Time-sharing created the interactive computer: the machine that responds in real time. Every modern computing experience — mobile, web, desktop — descends from that 1960s insight.'
  },
  algorithms:{
    concepts:[
      {label:'CONCEPT',term:'Algorithm',def:'A finite, precise sequence of steps that solves a defined problem. An algorithm must terminate, produce the correct output for all valid inputs, and be unambiguous. "Sort this list" is a problem. "Compare pairs, swap if out of order, repeat" is an algorithm.',analogy:'A recipe is an algorithm: finite steps, precise instructions, guaranteed output if followed correctly.'},
      {label:'CONCEPT',term:'Big O Notation',def:'Describes how an algorithm\'s performance scales with input size. O(1) = constant time. O(log n) = logarithmic. O(n) = linear. O(n²) = quadratic. O(2ⁿ) = exponential. The difference between O(n) and O(n²) is the difference between instant and impossible at scale.',analogy:'O(1) = finding your name on a card in your wallet. O(log n) = binary search in a phonebook. O(n) = reading the whole phonebook. O(n²) = comparing everyone in a room to everyone else.'},
      {label:'STRUCTURE',term:'Array',def:'A sequence of elements stored at contiguous memory locations. Access by index is O(1). Searching unsorted: O(n). Inserting in middle: O(n) — everything shifts. Best for: random access, fixed-size collections.',analogy:'Like numbered seats in a theater — find seat 47 instantly, but adding a seat in row 3 requires moving everyone behind it.'},
      {label:'STRUCTURE',term:'Hash Table',def:'Maps keys to values using a hash function. Average O(1) for insert, lookup, delete — nearly instant regardless of size. Powers dictionaries, databases indexes, and caching. Python\'s dict, JavaScript\'s Object, Java\'s HashMap.',analogy:'Like a magic filing cabinet: tell it "find invoice #4829" and it goes directly to the right drawer instantly, regardless of how many invoices there are.'},
      {label:'STRUCTURE',term:'Tree & Graph',def:'Tree: hierarchical structure with a root, branches, and leaves. Used in file systems, HTML DOM, decision trees. Binary Search Tree: O(log n) search. Graph: nodes connected by edges — models networks, social connections, routing.',analogy:'Tree: a family tree or org chart. Graph: a map of cities connected by roads — find the shortest path between any two.'},
      {label:'CONCEPT',term:'Recursion',def:'A function that calls itself with a smaller version of the problem until reaching a base case. Elegant for problems with self-similar structure: tree traversal, sorting (merge sort), parsing. Risk: stack overflow if base case is wrong or recursion is too deep.',analogy:'Matryoshka dolls: open the doll, find a smaller doll, open that, find a smaller one — until you find the smallest (base case).'}
    ],
    complexity:[
      {notation:'O(1)',name:'Constant',example:'Array access by index',speed:'good'},
      {notation:'O(log n)',name:'Logarithmic',example:'Binary search, balanced BST',speed:'good'},
      {notation:'O(n)',name:'Linear',example:'Linear search, single loop',speed:'ok'},
      {notation:'O(n log n)',name:'Linearithmic',example:'Merge sort, heap sort',speed:'ok'},
      {notation:'O(n²)',name:'Quadratic',example:'Bubble sort, nested loops',speed:'bad'},
      {notation:'O(2ⁿ)',name:'Exponential',example:'Recursive Fibonacci (naive)',speed:'bad'},
      {notation:'O(n!)',name:'Factorial',example:'Traveling salesman (brute force)',speed:'bad'},
    ],
    insight:'The difference between O(n) and O(n²) is not academic. For n=1,000: O(n) = 1,000 operations. O(n²) = 1,000,000 operations. For n=1,000,000: O(n) = 1 million operations (fast). O(n²) = 1 trillion operations (impossible in real time). Google processes 8.5 billion searches per day because their algorithms are O(log n) not O(n). Algorithm choice is not an optimization — it\'s the difference between a product that works and one that doesn\'t.'
  },
  networks:{
    concepts:[
      {label:'FOUNDATION',term:'Packet Switching',def:'Data is broken into small packets (~1,500 bytes each), each independently routed across the network, and reassembled at the destination. Packets from the same message may take different routes. Invented by Paul Baran in 1964 to create a nuclear-survivable communication network.',analogy:'Like mailing a book one page at a time — each page (packet) travels independently, possibly by different routes, and the recipient reassembles the book.'},
      {label:'PROTOCOL',term:'TCP/IP',def:'TCP (Transmission Control Protocol): ensures reliable, ordered delivery — detects lost packets and retransmits. IP (Internet Protocol): handles addressing and routing — every device has an IP address. Together, they are the foundation of the internet.',analogy:'IP is the postal address system. TCP is a delivery service that calls you if a package is lost and sends a replacement.'},
      {label:'ARCHITECTURE',term:'OSI Model (7 Layers)',def:'Physical → Data Link → Network → Transport → Session → Presentation → Application. Each layer abstracts the one below. Your browser (Application) doesn\'t know or care how Ethernet (Physical) moves bits — the layers handle it.',analogy:'Like sending a letter: you write content (Application), put it in an envelope (Presentation/Session), address it (Network), hand to post office (Transport), which uses trucks and planes (Physical) — each layer has one job.'},
      {label:'PROTOCOL',term:'DNS (Domain Name System)',def:'Translates human-readable domain names (google.com) to IP addresses (142.250.80.46). A distributed, hierarchical database queried billions of times per day. Often called "the phone book of the internet."',analogy:'DNS is a contact list: you store "Mom" (google.com) and your phone translates it to her number (IP address) when you call.'},
      {label:'SECURITY',term:'TLS/HTTPS',def:'TLS (Transport Layer Security) encrypts internet traffic. HTTPS = HTTP over TLS. Your browser and the server perform a "handshake" — exchanging cryptographic keys — before sending any data. This prevents eavesdropping and tampering.',analogy:'Like speaking in a code only you and the bank know — even if someone intercepts the conversation, they can\'t understand it.'},
      {label:'ARCHITECTURE',term:'Client-Server vs P2P',def:'Client-server: clients request, servers respond. Central authority, easier to manage, single point of failure. Peer-to-peer (P2P): every node is both client and server. Decentralized, resilient, harder to control. BitTorrent and Bitcoin are P2P.',analogy:'Client-server = restaurant (chefs in kitchen, waiters serve customers). P2P = potluck dinner (everyone brings food, everyone eats).'}
    ],
    insight:'The internet was designed to be decentralized — to route around damage, including nuclear damage. This is why it has no center, no single point of failure, and no single authority. This architecture also makes it extraordinarily difficult to censor or control. Every government that has tried to "turn off the internet" has discovered that packet switching, by design, finds a way around blockages. The politics of the internet are embedded in its architecture.'
  },
  software:{
    concepts:[
      {label:'PATTERN',term:'Abstraction & Separation of Concerns',def:'The most powerful principle in software design: hide complexity behind simple interfaces. Each layer of a system should do one thing and expose only what others need to know. The goal: change one component without breaking others.',analogy:'You don\'t need to know how a car\'s engine works to drive it. The steering wheel is the abstraction — a simple interface to complex mechanics.'},
      {label:'PATTERN',term:'MVC (Model-View-Controller)',def:'Separates application into three parts: Model (data and business logic), View (user interface), Controller (handles input, updates model and view). Used by Rails, Django, Angular, and most web frameworks.',analogy:'A restaurant: Model = kitchen (prepares food), View = dining room (what customers see), Controller = waiter (takes orders, delivers food, communicates between kitchen and diner).'},
      {label:'CONCEPT',term:'APIs (Application Programming Interfaces)',def:'Defined interfaces that allow systems to communicate without knowing each other\'s internals. REST APIs use HTTP verbs (GET, POST, PUT, DELETE) and JSON. The economic value of APIs: Stripe, Twilio, and AWS are multi-billion-dollar businesses selling nothing but well-designed APIs.',analogy:'APIs are electrical outlets — a standardized interface that lets any compatible device plug in, regardless of what\'s inside the wall.'},
      {label:'PRACTICE',term:'Version Control (Git)',def:'Tracks changes to code over time, allows multiple people to collaborate, enables rolling back to any previous state. Git\'s branching model allows parallel development without conflicts. GitHub hosts 100M+ repositories.',analogy:'Like Google Docs with unlimited undo history and the ability to create alternate versions of the document simultaneously, then merge them.'},
      {label:'PATTERN',term:'Microservices vs Monolith',def:'Monolith: entire application is one codebase — simple to develop, harder to scale. Microservices: application split into small independent services (user service, payment service, notification service) — each deployable independently. Netflix uses 700+ microservices.',analogy:'Monolith = Swiss Army knife (one tool, many functions). Microservices = a toolbox of specialized tools (each does one thing excellently, works with others).'},
      {label:'PRACTICE',term:'Testing & CI/CD',def:'Unit tests verify individual functions. Integration tests verify system components together. CI (Continuous Integration) automatically runs tests on every code change. CD (Continuous Deployment) automatically deploys passing code. Google deploys to production ~5,000 times per day.',analogy:'CI/CD is like a car assembly line with quality checks at every station — problems caught immediately, not at the end.'}
    ],
    insight:'The most important software engineering insight is that code is read far more often than it\'s written. The target audience for your code is not the computer — it\'s the next programmer who has to maintain it (often, future you). Programs must be written for people to read, and only incidentally for machines to execute. This insight, from Abelson and Sussman\'s SICP, changes how every serious programmer thinks about their craft.'
  }
};

const wrap=document.getElementById('mainWrap');
const nav=document.getElementById('topicNav');

topics.forEach((topic,idx)=>{
  const btn=document.createElement('button');
  btn.className='topic-btn';
  btn.textContent=topic.label;
  btn.style.color=topic.color;
  btn.onclick=()=>document.getElementById('t-'+topic.id).scrollIntoView({behavior:'smooth'});
  nav.appendChild(btn);

  const c=topicContent[topic.content];
  const sec=document.createElement('section');
  sec.className='topic-section';
  sec.id='t-'+topic.id;
  sec.setAttribute('style','scroll-margin-top:120px');

  let inner=`
    <div class="topic-header reveal">
      <div class="topic-num">${String(idx+1).padStart(2,'0')}</div>
      <div class="topic-info">
        <span class="topic-badge" style="background:${topic.color}14;color:${topic.color}">${topic.badge}</span>
        <h2 class="topic-title" style="color:${topic.color}">${topic.title}</h2>
        <p class="topic-intro">${topic.intro}</p>
      </div>
    </div>
    <div class="concepts-grid">
      ${c.concepts.map(cc=>`<div class="concept-card reveal" style="border-left-color:${topic.color}50">
        <p class="cc-label" style="color:${topic.color}">${cc.label}</p>
        <h3 class="cc-term">${cc.term}</h3>
        <p class="cc-def">${cc.def}</p>
        <p class="cc-analogy">${cc.analogy}</p>
      </div>`).join('')}
    </div>`;

  if(topic.content==='binary'){
    inner+=`
    <div class="viz-block reveal">
      <p class="viz-label">// BINARY CONVERTER — TYPE ANY NUMBER OR TEXT</p>
      <div class="binary-display" id="binDisplay">01000001 01001001</div>
      <div class="viz-controls">
        <input type="text" class="viz-input" id="binInput" placeholder="type a number or word..." oninput="updateBinary()"/>
        <button class="viz-btn" onclick="randomBin()">RANDOM</button>
      </div>
      <p class="viz-result" id="binResult">Showing: "AI" in ASCII binary</p>
    </div>
    <div class="viz-block reveal">
      <p class="viz-label">// LOGIC GATES</p>
      <div class="gate-row">${c.gates.map(g=>`<div class="gate-card"><p class="gate-name">${g.name}</p><pre class="gate-truth">${g.truth}</pre><p class="gate-desc">${g.desc}</p></div>`).join('')}</div>
    </div>`;
  }

  if(topic.content==='hardware'){
    inner+=`<div class="viz-block reveal">
      <p class="viz-label">// THE COMPUTING STACK</p>
      <div class="stack-viz">${c.stack.map(l=>`<div class="stack-layer" style="border-color:${l.color}30;background:${l.color}06">
        <p class="sl-name" style="color:${l.color}">${l.name}</p>
        <p class="sl-desc">${l.desc}</p>
      </div>`).join('')}</div>
    </div>`;
  }

  if(topic.content==='algorithms'){
    inner+=`<div class="viz-block reveal">
      <p class="viz-label">// ALGORITHM COMPLEXITY CHART</p>
      <table class="complexity-table">
        <thead><tr><th>NOTATION</th><th>NAME</th><th>EXAMPLE</th><th>AT N=1M</th></tr></thead>
        <tbody>${c.complexity.map(r=>{
          const ops=r.notation==='O(1)'?'1 op':r.notation==='O(log n)'?'~20 ops':r.notation==='O(n)'?'1M ops':r.notation==='O(n log n)'?'~20M ops':r.notation==='O(n²)'?'1 TRILLION':r.notation==='O(2ⁿ)'?'IMPOSSIBLE':'IMPOSSIBLE';
          return`<tr><td class="${r.speed}">${r.notation}</td><td>${r.name}</td><td>${r.example}</td><td class="${r.speed}">${ops}</td></tr>`;
        }).join('')}</tbody>
      </table>
    </div>`;
  }

  inner+=`<div class="insight-box reveal">
    <p class="ib-label">// KEY INSIGHT</p>
    <p class="ib-text">${c.insight}</p>
  </div>`;

  sec.innerHTML=inner;
  wrap.appendChild(sec);
});

// Reveal
const revEls=document.querySelectorAll('.reveal');
const ro=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*40);ro.unobserve(e.target);}});},{threshold:0.05});
revEls.forEach(el=>ro.observe(el));

// Binary converter
function updateBinary(){
  const val=document.getElementById('binInput').value;
  if(!val){document.getElementById('binDisplay').innerHTML='01000001 01001001';document.getElementById('binResult').textContent='Showing: "AI" in ASCII binary';return;}
  const num=parseInt(val);
  let bits,label;
  if(!isNaN(num)&&val.trim()===String(num)){
    bits=num.toString(2).padStart(8,'0').match(/.{1,8}/g).join(' ');
    label=`Number ${num} in binary = ${bits}`;
  } else {
    bits=val.slice(0,12).split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
    label=`"${val.slice(0,12)}" in ASCII binary`;
  }
  document.getElementById('binDisplay').innerHTML=bits.split('').map(b=>b===' '?'&nbsp;':b==='1'?`<span class="bit-1">1</span>`:`<span class="bit-0">0</span>`).join('');
  document.getElementById('binResult').textContent=label;
}
function randomBin(){
  const words=['HELLO','CODE','TECH','AI','DATA','BIT'];
  document.getElementById('binInput').value=words[Math.floor(Math.random()*words.length)];
  updateBinary();
}
// Init
document.getElementById('binDisplay').innerHTML='01000001 01001001'.split('').map(b=>b===' '?'&nbsp;':b==='1'?`<span class="bit-1">1</span>`:`<span class="bit-0">0</span>`).join('');

// CHAT
const msgs=document.getElementById('chatMsgs');
const inp=document.getElementById('chatInput');
const sendBtn=document.getElementById('chatSend');
let history=[];
function ask(q){inp.value=q;sendMsg();document.getElementById('chatMsgs').scrollIntoView({behavior:'smooth'});}
function addMsg(role,html){const d=document.createElement('div');d.className='cmsg '+role;const av=document.createElement('div');av.className='cmsg-av';av.textContent=role==='user'?'>_':'AI';const b=document.createElement('div');b.className='cmsg-bubble';b.innerHTML=html;d.appendChild(av);d.appendChild(b);msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function showTyping(){const d=document.createElement('div');d.className='cmsg assistant';d.id='typing';d.innerHTML='<div class="cmsg-av">AI</div><div class="cmsg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
async function sendMsg(){
  const q=inp.value.trim();if(!q)return;
  inp.value='';sendBtn.disabled=true;
  addMsg('user',q);history.push({role:'user',content:q});showTyping();
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:900,system:'You are a brilliant computer science educator who explains complex technical concepts with perfect clarity using concrete analogies, simple language, and real examples. Use **bold** for key terms. Use `code` for code/commands. Write in clear paragraphs — no bullet lists. Always build from first principles and connect concepts to real-world use.',messages:history})});
    const data=await r.json();
    document.getElementById('typing')?.remove();
    const txt=data.content?.[0]?.text||'Offline.';
    history.push({role:'assistant',content:txt});
    addMsg('assistant',txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\n\n/g,'<br><br>'));
  }catch(e){document.getElementById('typing')?.remove();addMsg('assistant','Connection error.');}
  sendBtn.disabled=false;inp.focus();
}