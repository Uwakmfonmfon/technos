window.addEventListener('scroll',()=>{const p=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;document.getElementById('progressBar').style.width=p+'%';});

function switchTab(name){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  const idx=['roadmaps','books','courses','projects','mentor'].indexOf(name);
  document.querySelectorAll('.tab-btn')[idx].classList.add('active');
  window.scrollTo({top:document.querySelector('.tab-nav').offsetTop-60,behavior:'smooth'});
}

// ROADMAPS DATA
const roadmaps=[
  {id:'beginner',label:'ABSOLUTE BEGINNER',color:'#00FF41',
   intro:'Zero programming experience. This path takes you from "what is code?" to building real projects in 6 months.',
   phases:[
     {num:'PHASE 01',title:'Think Like a Computer',skills:['Binary logic','Algorithms thinking','How computers work','Command line basics'],desc:'Before writing code, learn to think computationally. Understand that computers are deterministic — they do exactly what you tell them, no more. Study how a CPU processes instructions. Learn to use the terminal.',time:'2–3 weeks'},
     {num:'PHASE 02',title:'First Language: Python',skills:['Variables & types','Functions','Loops & conditions','Lists & dicts','File I/O'],desc:'Python has the cleanest syntax for beginners. Write simple programs immediately. Build: a calculator, a word counter, a simple quiz game. Focus on understanding, not memorizing syntax.',time:'4–6 weeks'},
     {num:'PHASE 03',title:'Data Structures & Algorithms Basics',skills:['Arrays & lists','Dictionaries/hash maps','Basic sorting','Simple recursion','Big O intuition'],desc:'Not deep CS theory — practical understanding. Why is a dict lookup O(1)? Why does sorting matter? Solve 30 easy problems on LeetCode or HackerRank.',time:'4–6 weeks'},
     {num:'PHASE 04',title:'Build Something Real',skills:['Project planning','Git & GitHub','Reading documentation','Debugging','Deployment basics'],desc:'Pick a project that interests you personally. A simple web scraper, a personal finance tracker, a text-based game, a weather app. The project must be real enough that you care if it works.',time:'6–8 weeks'},
     {num:'PHASE 05',title:'Choose Your Specialization',skills:['Web Dev?','Data Science?','AI/ML?','Cybersecurity?','Mobile?'],desc:'After understanding fundamentals, choose a domain. Don\'t try to learn everything. Pick based on what genuinely interests you and what the job market in your area demands.',time:'Ongoing'},
   ]},
  {id:'webdev',label:'WEB DEVELOPMENT',color:'#0A84FF',
   intro:'From HTML basics to full-stack development. This is the most direct path to employment for most people — web skills are universally in demand.',
   phases:[
     {num:'PHASE 01',title:'HTML & CSS',skills:['HTML semantics','CSS Box Model','Flexbox & Grid','Responsive design','Chrome DevTools'],desc:'HTML is the structure, CSS is the presentation. Build 5 static web pages from scratch. Learn to look at websites and understand how they\'re built. Master Flexbox — it\'s the foundation of modern layouts.',time:'3–4 weeks'},
     {num:'PHASE 02',title:'JavaScript',skills:['DOM manipulation','Events','Fetch API','Async/Await','ES6+ features'],desc:'The language of the web. Start with DOM manipulation — making things happen when users click, type, scroll. Build: a to-do list, a weather app using a real API, a quiz game. Understand promises before frameworks.',time:'6–8 weeks'},
     {num:'PHASE 03',title:'React (or Vue)',skills:['Components','State & Props','Hooks','React Router','API integration'],desc:'React is the dominant frontend framework. 70%+ of frontend job ads mention it. Learn why components exist, how state management works, how to think in React. Build a full CRUD app.',time:'6–8 weeks'},
     {num:'PHASE 04',title:'Backend: Node.js + Express',skills:['REST APIs','Express routing','Authentication (JWT)','PostgreSQL','CRUD operations'],desc:'Build the server that your frontend talks to. Learn HTTP deeply — methods, headers, status codes. Build a REST API. Add authentication. Connect to a real database. Deploy it.',time:'6–8 weeks'},
     {num:'PHASE 05',title:'Full Stack Project + Deployment',skills:['Docker basics','Vercel/Railway/Render','Environment variables','Error monitoring','GitHub CI/CD'],desc:'Build one complete, polished full-stack application. Use everything you\'ve learned. Deploy it publicly. Share the GitHub repo. This is your portfolio centerpiece.',time:'6–8 weeks'},
   ]},
  {id:'ai',label:'AI / ML',color:'#FF3B30',
   intro:'From Python basics to building and deploying ML models. The hottest and most lucrative specialization in tech right now.',
   phases:[
     {num:'PHASE 01',title:'Math Foundations',skills:['Linear algebra basics','Calculus intuition','Probability & statistics','NumPy','Matplotlib'],desc:'You don\'t need a math PhD, but you need to understand vectors, matrices, derivatives, and probability distributions intuitively. Work through 3Blue1Brown\'s Essence of Linear Algebra and Calculus series.',time:'4–6 weeks'},
     {num:'PHASE 02',title:'Python for Data Science',skills:['NumPy','Pandas','Matplotlib','Seaborn','Jupyter Notebooks'],desc:'Learn the Python scientific stack. Be able to: load any dataset, clean it, explore it visually, and extract insights. Work through at least 3 real datasets end-to-end.',time:'4–6 weeks'},
     {num:'PHASE 03',title:'Classical Machine Learning',skills:['Regression','Classification','Clustering','scikit-learn','Cross-validation'],desc:'Linear regression, logistic regression, random forests, SVMs, k-means clustering. Understand when to use each, what the math is doing, how to evaluate models properly. Kaggle is your gym.',time:'6–8 weeks'},
     {num:'PHASE 04',title:'Deep Learning',skills:['Neural networks','Backpropagation','CNNs','PyTorch or TensorFlow','Transfer learning'],desc:'Start with Andrej Karpathy\'s neural networks from scratch. Then build image classifiers, text classifiers, and simple language models. Understand what training actually does.',time:'8–10 weeks'},
     {num:'PHASE 05',title:'LLMs & Modern AI',skills:['Transformers architecture','Hugging Face','Fine-tuning','RAG systems','LangChain','Prompt engineering'],desc:'The frontier. Learn the transformer architecture. Fine-tune open-source models. Build RAG (Retrieval Augmented Generation) systems. Deploy a model to production.',time:'8–12 weeks'},
   ]},
  {id:'security',label:'CYBERSECURITY',color:'#BF5AF2',
   intro:'One of the highest-paying, lowest-unemployment tech fields. Requires deep curiosity, adversarial thinking, and comfort with ambiguity.',
   phases:[
     {num:'PHASE 01',title:'Networking & OS Foundations',skills:['TCP/IP deep dive','Linux command line','Networking protocols','Wireshark','Bash scripting'],desc:'Security professionals live in terminals and packet captures. Master Linux. Understand every layer of TCP/IP. Capture and analyze real network traffic with Wireshark.',time:'4–6 weeks'},
     {num:'PHASE 02',title:'Security Fundamentals',skills:['CIA triad','Cryptography basics','Authentication & authorization','OWASP Top 10','Security tools'],desc:'The core concepts: confidentiality, integrity, availability. How encryption works. Common vulnerabilities and how they\'re exploited. Study the OWASP Top 10 in depth.',time:'4–6 weeks'},
     {num:'PHASE 03',title:'Ethical Hacking',skills:['Kali Linux','Metasploit','Vulnerability scanning','CTF competitions','Penetration testing methodology'],desc:'Learn to attack systems legally. Set up a home lab with VMs. Do CTF (Capture the Flag) competitions on HackTheBox and TryHackMe. Practice the full penetration testing methodology.',time:'8–12 weeks'},
     {num:'PHASE 04',title:'Specialization + Certification',skills:['CompTIA Security+','CEH or OSCP','SOC analyst skills','Cloud security','Incident response'],desc:'Choose: blue team (defense, SOC, incident response) or red team (offensive security, pentesting). Get certified: Security+ for entry, OSCP for respect in the industry.',time:'8–12 weeks'},
   ]},
];

// Render roadmaps
const rmSel=document.getElementById('rmSelector');
const rmContent=document.getElementById('rmContent');
roadmaps.forEach((rm,i)=>{
  const btn=document.createElement('button');
  btn.className='rm-btn'+(i===0?' active':'');
  btn.textContent=rm.label;
  btn.onclick=()=>{
    document.querySelectorAll('.rm-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.roadmap-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('rm-'+rm.id).classList.add('active');
  };
  rmSel.appendChild(btn);
  const div=document.createElement('div');
  div.className='roadmap-content'+(i===0?' active':'');
  div.id='rm-'+rm.id;
  div.innerHTML=`<p class="roadmap-intro">${rm.intro}</p>`+rm.phases.map(ph=>`<div class="phase-card reveal"><p class="phase-num">${ph.num}</p><h3 class="phase-title">${ph.title}</h3><div class="phase-skills">${ph.skills.map(s=>`<span class="phase-skill">${s}</span>`).join('')}</div><p class="phase-desc">${ph.desc}</p><p class="phase-time">⏱ ESTIMATED TIME: ${ph.time}</p></div>`).join('');
  rmContent.appendChild(div);
});

// BOOKS DATA
const books=[
  {n:'01',cat:'FOUNDATIONS',title:'The Pragmatic Programmer',author:'Hunt & Thomas',desc:'The definitive guide to thinking about software craftsmanship. Every professional developer should read this.',level:'BEGINNER',lc:'#00FF41'},
  {n:'02',cat:'FOUNDATIONS',title:'Clean Code',author:'Robert C. Martin',desc:'How to write code that humans can understand. The most-assigned book in software engineering.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'03',cat:'FOUNDATIONS',title:'Structure and Interpretation of Computer Programs',author:'Abelson & Sussman (MIT)',desc:'"SICP" — the deepest book on what programming fundamentally is. Challenging. Life-changing.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'04',cat:'ALGORITHMS',title:'Introduction to Algorithms',author:'Cormen, Leiserson, Rivest, Stein (CLRS)',desc:'The algorithms bible. Dense but comprehensive. Used in CS programs worldwide.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'05',cat:'ALGORITHMS',title:'Grokking Algorithms',author:'Aditya Bhargava',desc:'The most approachable intro to algorithms. Visual, friendly, and genuinely fun.',level:'BEGINNER',lc:'#00FF41'},
  {n:'06',cat:'SYSTEMS',title:'Operating Systems: Three Easy Pieces',author:'Arpaci-Dusseau',desc:'Free online. The clearest explanation of how operating systems work. Essential.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'07',cat:'SYSTEMS',title:'Computer Networking: A Top-Down Approach',author:'Kurose & Ross',desc:'How the internet actually works. Comprehensive, accessible, industry standard.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'08',cat:'SYSTEMS',title:'Designing Data-Intensive Applications',author:'Martin Kleppmann',desc:'"DDIA" — the bible of modern backend and data systems. Must-read for senior engineers.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'09',cat:'SYSTEMS',title:'The Unix Programming Environment',author:'Kernighan & Pike',desc:'Written by Unix creators. Explains the philosophy that shaped all of software.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'10',cat:'AI/ML',title:'Hands-On Machine Learning',author:'Aurélien Géron',desc:'The best practical introduction to ML with scikit-learn and TensorFlow. Widely used.',level:'BEGINNER',lc:'#00FF41'},
  {n:'11',cat:'AI/ML',title:'Deep Learning',author:'Goodfellow, Bengio & Courville',desc:'The authoritative academic treatment of deep learning. Challenging but definitive.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'12',cat:'AI/ML',title:'Pattern Recognition and Machine Learning',author:'Christopher Bishop',desc:'Statistical ML from first principles. The mathematical foundations of modern AI.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'13',cat:'AI/ML',title:'The Hundred-Page Machine Learning Book',author:'Andriy Burkov',desc:'Exactly what it says. Dense, precise, surprisingly complete. 100 pages.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'14',cat:'SOFTWARE DESIGN',title:'Design Patterns',author:'Gang of Four',desc:'The 23 classic OOP design patterns. Every software engineer should know these.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'15',cat:'SOFTWARE DESIGN',title:'A Philosophy of Software Design',author:'John Ousterhout',desc:'Ousterhout\'s alternative to Clean Code — deeper on complexity management.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'16',cat:'SOFTWARE DESIGN',title:'Refactoring',author:'Martin Fowler',desc:'How to improve existing code systematically. The catalog of refactoring patterns.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'17',cat:'SECURITY',title:'The Web Application Hacker\'s Handbook',author:'Stuttard & Pinto',desc:'Comprehensive web application security. How attacks work and how to stop them.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'18',cat:'SECURITY',title:'Hacking: The Art of Exploitation',author:'Jon Erickson',desc:'Low-level exploitation. Assembly, buffer overflows, shellcode. Respect the depth.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'19',cat:'HISTORY',title:'The Innovators',author:'Walter Isaacson',desc:'The human story behind computing — from Ada Lovelace to the internet. Essential reading.',level:'BEGINNER',lc:'#00FF41'},
  {n:'20',cat:'HISTORY',title:'Hackers: Heroes of the Computer Revolution',author:'Steven Levy',desc:'The culture that built modern computing. Inspiring, important, and often forgotten.',level:'BEGINNER',lc:'#00FF41'},
  {n:'21',cat:'HISTORY',title:'The Dream Machine',author:'M. Mitchell Waldrop',desc:'The story of JCR Licklider and the personal computer revolution. Deeply researched.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'22',cat:'HISTORY',title:'Soul of a New Machine',author:'Tracy Kidder',desc:'Pulitzer-winning account of building a minicomputer. The human cost of shipping great hardware.',level:'BEGINNER',lc:'#00FF41'},
  {n:'23',cat:'CAREER',title:'The Manager\'s Path',author:'Camille Fournier',desc:'From engineer to tech lead to CTO. The career map for technical people.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'24',cat:'CAREER',title:'Staff Engineer',author:'Will Larson',desc:'What senior technical leadership actually looks like beyond the management track.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'25',cat:'CAREER',title:'A Mind for Numbers',author:'Barbara Oakley',desc:'How to learn technical subjects effectively. Based on neuroscience. More useful than it sounds.',level:'BEGINNER',lc:'#00FF41'},
  {n:'26',cat:'DATABASES',title:'Learning SQL',author:'Alan Beaulieu',desc:'SQL from basics to advanced queries. SQL is the most durably valuable database skill.',level:'BEGINNER',lc:'#00FF41'},
  {n:'27',cat:'DATABASES',title:'Database Internals',author:'Alex Petrov',desc:'How databases work internally — storage engines, query execution, distributed consensus.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'28',cat:'WEB',title:'JavaScript: The Good Parts',author:'Douglas Crockford',desc:'Short, sharp, and still essential. Which parts of JS to use and which to avoid.',level:'BEGINNER',lc:'#00FF41'},
  {n:'29',cat:'WEB',title:'You Don\'t Know JS',author:'Kyle Simpson',desc:'Deep dive into JavaScript\'s actual behavior — scope, closures, prototypes, async.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'30',cat:'WEB',title:'HTTP: The Definitive Guide',author:'Gourley & Totty',desc:'Everything about the protocol that powers the web. More useful than most web dev books.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'31',cat:'PYTHON',title:'Fluent Python',author:'Luciano Ramalho',desc:'Advanced Python — data structures, protocols, metaclasses. For serious Python developers.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'32',cat:'PYTHON',title:'Python Crash Course',author:'Eric Matthes',desc:'The best beginner Python book. Projects-based, practical, well-written.',level:'BEGINNER',lc:'#00FF41'},
  {n:'33',cat:'MATH',title:'Mathematics for Machine Learning',author:'Deisenroth, Faisal, Ong',desc:'Free online. Linear algebra, probability, optimization — the math under all of ML.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'34',cat:'MATH',title:'Concrete Mathematics',author:'Knuth, Graham, Patashnik',desc:'Mathematical foundations of computer science. Discrete math for programmers.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'35',cat:'CLOUD',title:'Cloud Native Patterns',author:'Cornelia Davis',desc:'Designing applications for the cloud. Resilience, scalability, microservices.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'36',cat:'CLOUD',title:'Kubernetes in Action',author:'Marko Luksa',desc:'Comprehensive Kubernetes guide. The standard reference for container orchestration.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'37',cat:'LEADERSHIP',title:'The Mythical Man-Month',author:'Fred Brooks',desc:'Why adding people to a late software project makes it later. The classic on software project management.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'38',cat:'LEADERSHIP',title:'Accelerate',author:'Forsgren, Humble, Kim',desc:'Data-driven findings on what makes software teams high-performing. Essential for technical leaders.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'39',cat:'THINKING',title:'The Art of Problem Solving Vol. 1',author:'Sandor Lehoczky',desc:'How to think about hard problems. Develops the problem-solving mindset behind great engineering.',level:'BEGINNER',lc:'#00FF41'},
  {n:'40',cat:'THINKING',title:'How to Solve It',author:'George Polya',desc:'The classic problem-solving methodology. Mathematically focused but universally applicable.',level:'BEGINNER',lc:'#00FF41'},
  {n:'41',cat:'COMPILERS',title:'Crafting Interpreters',author:'Robert Nystrom',desc:'Build two complete interpreters from scratch. The best way to deeply understand how languages work.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'42',cat:'COMPILERS',title:'Writing a Compiler in Go',author:'Thorsten Ball',desc:'Build a real compiler. Understand parsing, bytecode, virtual machines.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'43',cat:'CRYPTO',title:'Applied Cryptography',author:'Bruce Schneier',desc:'The comprehensive guide to cryptographic protocols and systems. Essential for security engineers.',level:'ADVANCED',lc:'#FF3B30'},
  {n:'44',cat:'EMBEDDED',title:'Programming Embedded Systems',author:'Michael Barr',desc:'Writing C for microcontrollers. Memory constraints, real-time requirements, hardware interfaces.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'45',cat:'AI ETHICS',title:'Weapons of Math Destruction',author:'Cathy O\'Neil',desc:'How algorithms cause harm — in hiring, lending, criminal justice. Essential ethical reading.',level:'BEGINNER',lc:'#00FF41'},
  {n:'46',cat:'AI ETHICS',title:'The Alignment Problem',author:'Brian Christian',desc:'The deep challenge of making AI systems do what we want. Well-researched, readable.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'47',cat:'ENTREPRENEURSHIP',title:'Zero to One',author:'Peter Thiel',desc:'How to build companies that create genuinely new value. Dense with contrarian insight.',level:'BEGINNER',lc:'#00FF41'},
  {n:'48',cat:'ENTREPRENEURSHIP',title:'The Hard Thing About Hard Things',author:'Ben Horowitz',desc:'The brutal reality of leading a tech company. More honest than most business books.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'49',cat:'FUTURE',title:'The Age of Surveillance Capitalism',author:'Shoshana Zuboff',desc:'How the internet economy works — and why you are the product. Important, if frightening.',level:'INTERMEDIATE',lc:'#FFB800'},
  {n:'50',cat:'FUTURE',title:'Life 3.0',author:'Max Tegmark',desc:'What AI means for humanity\'s future. Rigorous, balanced, essential.',level:'BEGINNER',lc:'#00FF41'},
];

const booksGrid=document.getElementById('booksGrid');
books.forEach(b=>{
  const card=document.createElement('div');
  card.className='book-card';
  card.style.borderLeftColor=b.lc+'60';
  card.innerHTML=`<p class="book-num">#${b.n}</p><p class="book-category" style="color:${b.lc}">${b.cat}</p><h3 class="book-title">${b.title}</h3><p class="book-author">${b.author}</p><p class="book-desc">${b.desc}</p><span class="book-level" style="background:${b.lc}15;color:${b.lc}">${b.level}</span>`;
  booksGrid.appendChild(card);
});

// COURSES DATA
const courses=[
  {cat:'all beginner',platform:'MIT OpenCourseWare',title:'6.0001 Introduction to Computer Science',instructor:'Prof. Grimson',desc:'The gold standard intro CS course. Python-based, rigorous, completely free.',free:true,level:'BEGINNER'},
  {cat:'all ai beginner',platform:'fast.ai',title:'Practical Deep Learning for Coders',instructor:'Jeremy Howard',desc:'Top-down deep learning. Build real models first, understand theory later. Revolutionary pedagogy.',free:true,level:'BEGINNER'},
  {cat:'all web beginner',platform:'The Odin Project',title:'Full Stack Web Development',instructor:'Community',desc:'Comprehensive, free, project-based web curriculum. The best free web dev education.',free:true,level:'BEGINNER'},
  {cat:'all foundations intermediate',platform:'CS50 (Harvard)',title:'CS50x: Introduction to Computer Science',instructor:'David Malan',desc:'The most-enrolled CS course in history. Legendary quality. C → Python → SQL → Web.',free:true,level:'BEGINNER'},
  {cat:'all ai intermediate',platform:'deeplearning.ai',title:'Deep Learning Specialization',instructor:'Andrew Ng',desc:'The definitive ML education. 5-course series covering neural networks, CNNs, RNNs, and tuning.',free:false,level:'INTERMEDIATE'},
  {cat:'all web intermediate',platform:'Udemy',title:'The Complete React Developer Course',instructor:'Andrew Mead',desc:'Project-based React mastery. Well-maintained, practical, affordable.',free:false,level:'INTERMEDIATE'},
  {cat:'all security beginner',platform:'TryHackMe',title:'Pre-Security & SOC Level 1',instructor:'Platform',desc:'Guided cybersecurity learning paths with hands-on labs. Best entry point for security.',free:true,level:'BEGINNER'},
  {cat:'all security advanced',platform:'Offensive Security',title:'PEN-200 (OSCP Prep)',instructor:'OffSec',desc:'The most respected pentesting certification. Grueling, hands-on, worth it.',free:false,level:'ADVANCED'},
  {cat:'all cloud intermediate',platform:'A Cloud Guru / AWS',title:'AWS Solutions Architect Associate',instructor:'Various',desc:'The most valuable cloud certification. Opens doors to well-paying cloud roles.',free:false,level:'INTERMEDIATE'},
  {cat:'all ai advanced',platform:'Stanford CS229',title:'Machine Learning (CS229)',instructor:'Andrew Ng',desc:'The mathematical foundations of ML. Harder than the Coursera version — the real course.',free:true,level:'ADVANCED'},
  {cat:'all foundations advanced',platform:'MIT',title:'6.828 Operating System Engineering',instructor:'MIT Faculty',desc:'Build a real operating system from scratch. One of the hardest and most educational courses.',free:true,level:'ADVANCED'},
  {cat:'all web advanced',platform:'Frontend Masters',title:'Complete Intro to Computers',instructor:'Brian Holt',desc:'Deep web development — performance, architecture, advanced patterns.',free:false,level:'ADVANCED'},
  {cat:'all ai intermediate',platform:'Hugging Face',title:'NLP Course',instructor:'Hugging Face Team',desc:'Modern NLP with transformers. The curriculum for working with LLMs and fine-tuning models.',free:true,level:'INTERMEDIATE'},
  {cat:'all foundations intermediate',platform:'Coursera/Princeton',title:'Algorithms I & II',instructor:'Robert Sedgewick',desc:'Rigorous algorithms course using Java. The classic Sedgewick treatment.',free:true,level:'INTERMEDIATE'},
  {cat:'all security intermediate',platform:'HackTheBox',title:'Certified Penetration Testing Specialist',instructor:'HTB Academy',desc:'Hands-on, scenario-based pentesting. Respected by the industry.',free:false,level:'INTERMEDIATE'},
];

const cfTypes=['all','beginner','intermediate','advanced','ai','web','security','cloud','foundations'];
const cfEl=document.getElementById('coursesFilter');
const cgEl=document.getElementById('coursesGrid');
let activeFilter='all';
cfTypes.forEach(f=>{
  const btn=document.createElement('button');
  btn.className='cf-btn'+(f==='all'?' active':'');
  btn.textContent=f.toUpperCase();
  btn.onclick=()=>{
    activeFilter=f;
    document.querySelectorAll('.cf-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses();
  };
  cfEl.appendChild(btn);
});
function renderCourses(){
  cgEl.innerHTML='';
  courses.filter(c=>activeFilter==='all'||c.cat.includes(activeFilter)).forEach(c=>{
    const card=document.createElement('div');
    card.className='course-card';
    const lc=c.level==='BEGINNER'?'#00FF41':c.level==='INTERMEDIATE'?'#FFB800':'#FF3B30';
    card.innerHTML=`<p class="course-platform">${c.platform}</p><h3 class="course-title">${c.title}</h3><p class="course-instructor">by ${c.instructor}</p><p class="course-desc">${c.desc}</p><div class="course-meta"><span class="course-tag" style="background:${lc}15;color:${lc}">${c.level}</span><span class="course-tag" style="background:${c.free?'rgba(0,255,65,0.1)':'rgba(255,184,0,0.1)'};color:${c.free?'#00C832':'#FFB800'}">${c.free?'FREE':'PAID'}</span></div>`;
    cgEl.appendChild(card);
  });
}
renderCourses();

// PROJECTS DATA
const projects=[
  {level:'BEGINNER',color:'#00FF41',title:'Personal Budget Tracker',desc:'A web app or Python script that tracks income and expenses, categorizes spending, and shows monthly summaries.',skills:['Python or JS','File I/O or localStorage','Basic data manipulation'],why:'TEACHES: Reading/writing data, user input handling, basic logic — the fundamentals of every real application.'},
  {level:'BEGINNER',color:'#00FF41',title:'Weather App',desc:'Fetch real weather data from an API. Display current conditions and a 5-day forecast. Responsive design.',skills:['HTML/CSS/JS','Fetch API','JSON parsing'],why:'TEACHES: API integration, asynchronous code, rendering dynamic data — core full-stack skills.'},
  {level:'BEGINNER',color:'#00FF41',title:'Terminal Text Adventure Game',desc:'A text-based RPG in Python with rooms, inventory, enemies, and combat. Fully playable from the command line.',skills:['Python','OOP basics','Data structures'],why:'TEACHES: Object-oriented design, state management, game loops — fun way to learn fundamentals.'},
  {level:'BEGINNER',color:'#00FF41',title:'Markdown Blog',desc:'A static site that renders Markdown files as blog posts. Includes tags, search, and an RSS feed.',skills:['Python or Node.js','File system','Markdown parsing'],why:'TEACHES: File processing, templating, string manipulation, building a complete system with inputs and outputs.'},
  {level:'INTERMEDIATE',color:'#FFB800',title:'Full-Stack Task Manager',desc:'React frontend + Node/Express backend + PostgreSQL. Authentication, real-time updates, team collaboration features.',skills:['React','Node.js','PostgreSQL','JWT auth'],why:'TEACHES: The complete web stack. Every senior developer has built something like this — because it teaches everything.'},
  {level:'INTERMEDIATE',color:'#FFB800',title:'ML Classifier Web App',desc:'Train a model on a real dataset, expose it as a REST API, and build a frontend to make predictions. Deploy it.',skills:['scikit-learn or PyTorch','Flask or FastAPI','React','Deployment'],why:'TEACHES: The full ML pipeline — from data to deployed product. The gap most ML learners never cross.'},
  {level:'INTERMEDIATE',color:'#FFB800',title:'URL Shortener with Analytics',desc:'Clone Bit.ly with custom domains, click tracking, geographic analytics, and a dashboard.',skills:['Node.js','Redis','PostgreSQL','Charts'],why:'TEACHES: Database design, caching, analytics, URL routing — real-world backend architecture.'},
  {level:'INTERMEDIATE',color:'#FFB800',title:'Network Port Scanner',desc:'A Python tool that scans a network range, identifies open ports, fingerprints services, and outputs a report.',skills:['Python','Sockets','Threading','Networking'],why:'TEACHES: Low-level networking, concurrency, the basics of security scanning — how tools like Nmap work.'},
  {level:'INTERMEDIATE',color:'#FFB800',title:'Distributed Key-Value Store',desc:'Build a simple Redis-like in-memory database with persistence, replication, and a custom TCP protocol.',skills:['Any language','Networking','Concurrency','File I/O'],why:'TEACHES: Systems programming, the challenges of distributed systems, how databases actually work internally.'},
  {level:'ADVANCED',color:'#FF3B30',title:'RAG (Retrieval Augmented Generation) System',desc:'Build a system that lets you query your own documents with an LLM. Vector database, embeddings, chat interface.',skills:['LangChain or LlamaIndex','OpenAI/Anthropic API','Vector DB (Chroma/Pinecone)','React'],why:'TEACHES: Modern AI application architecture — the skill most in demand in AI engineering right now.'},
  {level:'ADVANCED',color:'#FF3B30',title:'Real-Time Collaborative Editor',desc:'A Google Docs clone with operational transformation or CRDTs for conflict-free concurrent editing.',skills:['WebSockets','OT or CRDTs','React','Node.js'],why:'TEACHES: Real-time distributed systems — one of the hardest engineering problems at scale. Deeply educational.'},
  {level:'ADVANCED',color:'#FF3B30',title:'Interpreter from Scratch',desc:'Build a complete programming language interpreter: lexer, parser, AST, evaluator. Follow Crafting Interpreters.',skills:['Any language','Compilers theory','Data structures','Recursion'],why:'TEACHES: How all programming languages work. Will change how you think about code permanently.'},
  {level:'ADVANCED',color:'#FF3B30',title:'Kubernetes Operator',desc:'Build a custom Kubernetes operator that manages a stateful application lifecycle — deployment, scaling, backup.',skills:['Go','Kubernetes API','Operator SDK','Docker'],why:'TEACHES: Cloud-native engineering at the infrastructure level. Rare, valuable, and deeply respected.'},
];

const pgEl=document.getElementById('projectsGrid');
projects.forEach(p=>{
  const card=document.createElement('div');
  card.className='project-card reveal';
  card.style.borderTopColor=p.color;
  card.innerHTML=`<p class="proj-level" style="color:${p.color}">${p.level}</p><h3 class="proj-title">${p.title}</h3><p class="proj-desc">${p.desc}</p><div class="proj-skills">${p.skills.map(s=>`<span class="proj-skill">${s}</span>`).join('')}</div><p class="proj-why" style="color:${p.color}">${p.why}</p>`;
  pgEl.appendChild(card);
});

// Reveal
const revEls=document.querySelectorAll('.reveal');
const ro=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*40);ro.unobserve(e.target);}});},{threshold:0.05});
revEls.forEach(el=>ro.observe(el));

// CHAT
const msgs=document.getElementById('chatMsgs');
const inp=document.getElementById('chatInput');
const sendBtn=document.getElementById('chatSend');
let history=[];
function ask(q){inp.value=q;sendMsg();}
function addMsg(role,html){const d=document.createElement('div');d.className='cmsg '+role;const av=document.createElement('div');av.className='cmsg-av';av.textContent=role==='user'?'>_':'AI';const b=document.createElement('div');b.className='cmsg-bubble';b.innerHTML=html;d.appendChild(av);d.appendChild(b);msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function showTyping(){const d=document.createElement('div');d.className='cmsg assistant';d.id='typing';d.innerHTML='<div class="cmsg-av">AI</div><div class="cmsg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
async function sendMsg(){
  const q=inp.value.trim();if(!q)return;
  inp.value='';sendBtn.disabled=true;
  addMsg('user',q);history.push({role:'user',content:q});showTyping();
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:900,system:'You are an expert technical career mentor and educator. Give specific, honest, actionable advice about learning technology and building a career in tech. When someone tells you their situation, give them a concrete plan: what to learn first, specific resources, realistic timelines, and what to build. Use **bold** for key points. Use `code` for technologies. Be direct and practical — no generic advice.',messages:history})});
    const data=await r.json();
    document.getElementById('typing')?.remove();
    const txt=data.content?.[0]?.text||'Offline.';
    history.push({role:'assistant',content:txt});
    addMsg('assistant',txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\n\n/g,'<br><br>'));
  }catch(e){document.getElementById('typing')?.remove();addMsg('assistant','Connection error.');}
  sendBtn.disabled=false;inp.focus();
}