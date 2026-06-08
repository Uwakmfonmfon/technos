
window.addEventListener('scroll',()=>{const p=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;document.getElementById('progressBar').style.width=p+'%';});

const domains=[
  {
    id:'ai',icon:'🤖',color:'#FF3B30',label:'AI & ML',title:'Artificial Intelligence & Machine Learning',
    badge:'DOMAIN_01 // THE DEFINING TECHNOLOGY OF OUR TIME',
    intro:'AI is not a single technology — it\'s a family of approaches for building systems that learn from data rather than being explicitly programmed. Machine Learning is AI\'s most powerful current form: algorithms that improve through experience.',
    why:'WHY IT MATTERS NOW: Every major company is rebuilding around AI. Every domain — medicine, law, science, art, engineering — is being transformed. Understanding AI is the most important technical literacy of the 21st century.',
    whyColor:'rgba(255,59,48,0.08)',
    meta:[
      {num:'$185K',label:'Avg ML Engineer Salary (US)'},
      {num:'40%',label:'YoY Job Growth'},
      {num:'$1T+',label:'Global AI Investment'},
      {num:'2025',label:'GPT-5 era begins'},
    ],
    subfields:[
      {title:'Machine Learning',desc:'Algorithms that learn patterns from data. Supervised (labeled data), unsupervised (unlabeled), reinforcement (rewards).'},
      {title:'Deep Learning',desc:'Neural networks with many layers. Powers image recognition, language models, speech synthesis, and most modern AI.'},
      {title:'Natural Language Processing',desc:'AI that understands and generates text. ChatGPT, search engines, translation, sentiment analysis.'},
      {title:'Computer Vision',desc:'AI that sees and understands images and video. Self-driving cars, medical imaging, facial recognition.'},
      {title:'Reinforcement Learning',desc:'AI that learns by trial and error, optimizing for rewards. Used in game AI (AlphaGo), robotics, recommendation systems.'},
      {title:'Generative AI',desc:'Models that create new content: text, images, code, music, video. GPT-4, Midjourney, Stable Diffusion, Sora.'},
    ],
    tools:['Python','TensorFlow','PyTorch','scikit-learn','Hugging Face','LangChain','CUDA','JAX','OpenAI API','Weights & Biases'],
    insight:'The most important insight about AI: it is not magic. It is statistics, linear algebra, and optimization running on very fast hardware trained on very large datasets. Understanding the math — gradient descent, backpropagation, transformer attention — removes the mysticism and reveals an engineering discipline. The engineers who understand it deeply will build the future. The ones who use it as a black box will be replaced by it.'
  },
  {
    id:'web',icon:'🌐',color:'#0A84FF',label:'WEB DEV',title:'Web Development',
    badge:'DOMAIN_02 // THE WORLD\'S LARGEST SOFTWARE PLATFORM',
    intro:'Web development builds everything that runs in a browser — from simple sites to complex applications used by billions. It splits into frontend (what users see), backend (servers and data), and fullstack (both). The web is the most universal software platform ever created.',
    why:'WHY IT MATTERS: The web is where most software runs, where most businesses operate, and where most people access information. Web developers are among the most in-demand professionals in the world.',
    whyColor:'rgba(10,132,255,0.08)',
    meta:[
      {num:'$120K',label:'Avg Frontend Salary (US)'},
      {num:'$140K',label:'Avg Backend Salary (US)'},
      {num:'1.7B',label:'Websites on the internet'},
      {num:'25%',label:'Job growth rate'},
    ],
    subfields:[
      {title:'Frontend Development',desc:'HTML, CSS, JavaScript — the languages of the browser. React, Vue, Angular frameworks. What users actually see and interact with.'},
      {title:'Backend Development',desc:'Servers, databases, APIs. Node.js, Python/Django, Ruby on Rails, Go. Handles logic, data storage, authentication.'},
      {title:'Full Stack',desc:'Both frontend and backend. The most versatile web developer. Can build complete applications independently.'},
      {title:'DevOps / Platform Engineering',desc:'Deploying, scaling, monitoring web applications. Docker, Kubernetes, CI/CD pipelines, cloud infrastructure.'},
      {title:'Web Performance',desc:'Making applications fast. Core Web Vitals, caching, CDNs, code splitting. 1-second delay = 7% conversion drop.'},
      {title:'Web Security',desc:'OWASP Top 10, HTTPS, authentication, SQL injection prevention, XSS protection. Every web developer must understand security basics.'},
    ],
    tools:['HTML/CSS/JS','React','Node.js','Python','PostgreSQL','Redis','Docker','AWS/Vercel','TypeScript','GraphQL'],
    insight:'The web is deceptively simple on the surface — HTML was designed in a weekend, CSS is easy to start with — but building production-quality web applications requires deep knowledge of performance, security, accessibility, and architecture. The best web developers don\'t just know the frameworks; they understand the HTTP protocol, the browser rendering pipeline, and the distributed systems their code runs on.'
  },
  {
    id:'data',icon:'📊',color:'#FFB800',label:'DATA SCIENCE',title:'Data Science & Analytics',
    badge:'DOMAIN_03 // TURNING DATA INTO DECISIONS',
    intro:'Data science extracts insight from data — finding patterns, building predictive models, visualizing trends, and helping organizations make better decisions. It sits at the intersection of statistics, programming, and domain expertise.',
    why:'WHY IT MATTERS: Every organization generates enormous amounts of data and most can\'t use it. Data scientists and analysts are among the highest-paid and most in-demand professionals across every industry.',
    whyColor:'rgba(255,184,0,0.08)',
    meta:[
      {num:'$130K',label:'Avg Data Scientist Salary'},
      {num:'36%',label:'Job growth (10-year)'},
      {num:'120ZB',label:'Data created in 2023'},
      {num:'#1',label:'Best US job (Glassdoor)'},
    ],
    subfields:[
      {title:'Data Analysis',desc:'Exploring and summarizing data. SQL, Python/Pandas, Excel. Finding patterns and answering specific business questions.'},
      {title:'Statistical Modeling',desc:'Regression, hypothesis testing, A/B testing. Using statistics to make reliable inferences from noisy data.'},
      {title:'Machine Learning Engineering',desc:'Building ML models that run in production — not just in notebooks. Model deployment, monitoring, feature engineering.'},
      {title:'Data Engineering',desc:'Building the pipelines that collect, clean, and store data. ETL/ELT pipelines, data warehouses, Spark, Airflow.'},
      {title:'Business Intelligence',desc:'Dashboards, reporting, KPI tracking. Tableau, Power BI, Looker. Making data accessible to non-technical decision makers.'},
      {title:'Data Visualization',desc:'Communicating insights visually. D3.js, matplotlib, ggplot. The art of making complex data immediately understandable.'},
    ],
    tools:['Python','SQL','Pandas','NumPy','scikit-learn','Tableau','Spark','dbt','Airflow','Snowflake'],
    insight:'Data science\'s dirty secret: 80% of the job is data cleaning. Real-world data is messy, incomplete, inconsistent, and often misleading. The most valuable skill is not building complex models — it\'s the judgment to know which data to trust, which questions are worth asking, and how to communicate uncertainty honestly to decision-makers who want certainty.'
  },
  {
    id:'security',icon:'🔐',color:'#BF5AF2',label:'CYBERSECURITY',title:'Cybersecurity',
    badge:'DOMAIN_04 // DEFENDING THE DIGITAL WORLD',
    intro:'Cybersecurity protects systems, networks, and data from attacks, theft, and damage. It\'s a cat-and-mouse game between defenders and attackers — requiring both deep technical knowledge and adversarial thinking.',
    why:'WHY IT MATTERS: Cyberattacks cost the global economy $8 trillion in 2023. The cybersecurity workforce shortage is 3.5 million professionals. Every digitized system needs protection.',
    whyColor:'rgba(191,90,242,0.08)',
    meta:[
      {num:'$150K',label:'Avg CISO Salary (US)'},
      {num:'3.5M',label:'Unfilled Security Jobs Globally'},
      {num:'$8T',label:'Annual Cybercrime Cost'},
      {num:'0%',label:'Unemployment in Cybersecurity'},
    ],
    subfields:[
      {title:'Network Security',desc:'Firewalls, VPNs, intrusion detection, network monitoring. Protecting the pipes data travels through.'},
      {title:'Application Security (AppSec)',desc:'Identifying vulnerabilities in software before attackers do. Penetration testing, code review, OWASP Top 10.'},
      {title:'Cloud Security',desc:'Securing AWS/Azure/GCP environments, IAM policies, container security, zero-trust architecture.'},
      {title:'Incident Response',desc:'When breaches happen — detect, contain, eradicate, recover, document. Forensics and threat hunting.'},
      {title:'Cryptography',desc:'Encryption, public key infrastructure, TLS, hashing. The mathematical foundation of digital security.'},
      {title:'Ethical Hacking / Red Team',desc:'Simulating attacks to find weaknesses before real attackers do. Penetration testing, social engineering, CTF competitions.'},
    ],
    tools:['Kali Linux','Wireshark','Metasploit','Burp Suite','Nmap','Splunk','CrowdStrike','OpenSSL','Snort','YARA'],
    insight:'The best cybersecurity professionals think like attackers. "Security through obscurity" — hiding vulnerabilities rather than fixing them — is the deadliest mistake in security. The principle is "assume breach": design systems as if attackers will eventually get in, and ensure the damage is minimized, detected, and contained quickly. Every security failure is ultimately a failure of assumptions — someone assumed an attacker wouldn\'t try that.'
  },
  {
    id:'cloud',icon:'☁️',color:'#00F5FF',label:'CLOUD',title:'Cloud Computing',
    badge:'DOMAIN_05 // THE INFRASTRUCTURE OF EVERYTHING',
    intro:'Cloud computing delivers computing resources — servers, storage, databases, networking, AI — over the internet, on demand, at any scale. It has transformed software development from buying hardware to renting capability.',
    why:'WHY IT MATTERS: 94% of enterprises use cloud services. Cloud is not the future — it\'s the present infrastructure of virtually every software company. Cloud skills are the most in-demand infrastructure skills in the world.',
    whyColor:'rgba(0,245,255,0.06)',
    meta:[
      {num:'$650B',label:'Cloud Market Size 2024'},
      {num:'94%',label:'Enterprises Using Cloud'},
      {num:'$140K',label:'Avg Cloud Architect Salary'},
      {num:'30%',label:'Annual Market Growth'},
    ],
    subfields:[
      {title:'AWS / Azure / GCP',desc:'The three major cloud platforms. AWS leads with 32% market share, Azure 23%, GCP 12%. Each offers 200+ services.'},
      {title:'Infrastructure as Code',desc:'Terraform, CloudFormation, Pulumi. Define infrastructure in code — version it, reproduce it, automate it.'},
      {title:'Containers & Kubernetes',desc:'Docker packages applications. Kubernetes orchestrates thousands of containers across clusters. The backbone of cloud-native apps.'},
      {title:'Serverless',desc:'AWS Lambda, Azure Functions. Run code without managing servers — pay per execution. Revolutionary for event-driven architectures.'},
      {title:'Cloud Architecture',desc:'Designing scalable, resilient, cost-effective cloud systems. Availability zones, auto-scaling, load balancing, disaster recovery.'},
      {title:'FinOps',desc:'Cloud cost optimization — a growing specialty. Cloud bills can spiral to millions if unmanaged. Tagging, rightsizing, reserved instances.'},
    ],
    tools:['AWS','Azure','GCP','Terraform','Docker','Kubernetes','Ansible','Helm','Prometheus','Grafana'],
    insight:'Cloud computing inverted the economics of software infrastructure. Before cloud, a startup needed $500K+ in servers to launch. After cloud, you pay $50/month until you have customers, then scale instantly when you do. This democratization of infrastructure is why more software companies have been founded since 2006 (AWS launch year) than in the entire previous history of the industry combined.'
  },
  {
    id:'robotics',icon:'🦾',color:'#00FF41',label:'ROBOTICS',title:'Robotics & Embedded Systems',
    badge:'DOMAIN_06 // SOFTWARE MEETS THE PHYSICAL WORLD',
    intro:'Robotics combines mechanical engineering, electronics, and software to build machines that interact with the physical world. Embedded systems are the software running in hardware — from microcontrollers in your microwave to the computers in satellites.',
    why:'WHY IT MATTERS: Automation is reshaping manufacturing, logistics, surgery, exploration, and agriculture. The robots building and deploying these systems are among the most technically complex and well-compensated engineers.',
    whyColor:'rgba(0,255,65,0.06)',
    meta:[
      {num:'$135K',label:'Avg Robotics Engineer Salary'},
      {num:'$70B',label:'Global Robotics Market 2024'},
      {num:'4M+',label:'Industrial Robots Operational'},
      {num:'2X',label:'Market growth by 2030'},
    ],
    subfields:[
      {title:'Robot Operating System (ROS)',desc:'The open-source middleware that most professional robots run. Handles sensor data, actuator control, inter-process communication.'},
      {title:'Computer Vision & Perception',desc:'How robots see and understand their environment. SLAM (simultaneous localization and mapping), point clouds, object detection.'},
      {title:'Motion Planning & Control',desc:'How robots move safely and efficiently. Inverse kinematics, trajectory planning, PID control.'},
      {title:'Embedded Systems',desc:'Programming microcontrollers (Arduino, STM32) and single-board computers (Raspberry Pi). C/C++, real-time operating systems.'},
      {title:'Autonomous Vehicles',desc:'Self-driving cars and drones. Sensor fusion, path planning, LiDAR, radar. Tesla, Waymo, and startups building the future.'},
      {title:'Human-Robot Interaction',desc:'Designing robots that work safely alongside humans. Collaborative robots (cobots), safety systems, intuitive interfaces.'},
    ],
    tools:['ROS','Python','C++','MATLAB','Arduino','Raspberry Pi','OpenCV','Gazebo','PyBullet','TensorFlow Lite'],
    insight:'Robotics is the domain where software confronts physical reality and loses — at first. A sorting algorithm that has a bug just returns wrong results. A robot with a bug crashes into a wall, drops a surgical instrument, or causes an accident. This demand for reliability in physical systems produces a different kind of engineer: one who must think about failure modes, edge cases, and safety with a rigor that purely software-focused engineers rarely develop.'
  },
  {
    id:'blockchain',icon:'⛓️',color:'#FF6B00',label:'BLOCKCHAIN',title:'Blockchain & Distributed Systems',
    badge:'DOMAIN_07 // TRUSTLESS CONSENSUS AT SCALE',
    intro:'Blockchain technology provides decentralized, tamper-resistant record-keeping without requiring a trusted central authority. Bitcoin proved the concept. Ethereum extended it to programmable contracts. The underlying distributed systems engineering is applicable far beyond cryptocurrency.',
    why:'WHY IT MATTERS: Distributed consensus — how to reach agreement among parties who don\'t trust each other — is a fundamental computer science problem with applications in finance, supply chain, identity, governance, and anywhere trust is currently provided by institutions.',
    whyColor:'rgba(255,107,0,0.07)',
    meta:[
      {num:'$140K',label:'Avg Blockchain Dev Salary'},
      {num:'$2.5T',label:'Total Crypto Market Cap (peak)'},
      {num:'100+',label:'Active blockchain networks'},
      {num:'$67B',label:'DeFi total value locked'},
    ],
    subfields:[
      {title:'Smart Contracts',desc:'Self-executing code stored on a blockchain. Ethereum, Solana. Programs that run exactly as coded, without possibility of fraud, censorship, or third-party interference.'},
      {title:'DeFi (Decentralized Finance)',desc:'Financial instruments — lending, trading, derivatives — without banks or brokers. Runs on smart contracts. $67B+ locked in protocols.'},
      {title:'NFTs & Digital Ownership',desc:'Cryptographic proof of ownership for digital assets. More interesting as a property rights primitive than as JPEGs.'},
      {title:'Distributed Systems',desc:'The underlying CS behind blockchain: consensus algorithms (PoW, PoS, BFT), distributed databases, P2P networking.'},
      {title:'Cryptography',desc:'Zero-knowledge proofs, elliptic curve cryptography, Merkle trees. The math that makes blockchain work.'},
      {title:'Web3',desc:'The vision of a decentralized internet where users own their data and identity. Still largely theoretical in practice.'},
    ],
    tools:['Solidity','Ethereum','Hardhat','Web3.js','Rust','Solana SDK','IPFS','MetaMask','Foundry','Chainlink'],
    insight:'The signal beneath the noise: blockchain\'s actual technical contribution is solving the Byzantine Generals Problem at internet scale — how to reach consensus among distrustful parties without a central coordinator. This is a genuinely hard and important computer science problem. The speculative asset bubbles that have surrounded crypto are separate from the engineering insight. Whether blockchain applications succeed commercially, the distributed systems techniques they developed will be used for decades.'
  },
  {
    id:'iot',icon:'📡',color:'#FF6B6B',label:'IoT',title:'Internet of Things & Edge Computing',
    badge:'DOMAIN_08 // CONNECTING THE PHYSICAL WORLD',
    intro:'IoT connects physical devices — sensors, appliances, vehicles, industrial equipment — to the internet. Edge computing processes data on the device rather than the cloud. Together, they create intelligent physical environments that sense, respond, and adapt.',
    why:'WHY IT MATTERS: 75 billion IoT devices will be connected by 2025. Smart factories, precision agriculture, smart cities, connected healthcare — every physical industry is being instrumented. The engineers who can build reliable, secure, low-power embedded systems are among the most specialized and valuable in tech.',
    whyColor:'rgba(255,107,107,0.07)',
    meta:[
      {num:'75B',label:'Connected IoT Devices by 2025'},
      {num:'$1.1T',label:'IoT Market Size 2028'},
      {num:'$125K',label:'Avg IoT Engineer Salary'},
      {num:'80%',label:'Enterprises adopting IoT'},
    ],
    subfields:[
      {title:'Embedded Programming',desc:'C/C++ on microcontrollers with kilobytes of memory and milliwatts of power. Extremely tight constraints requiring precise, efficient code.'},
      {title:'Wireless Protocols',desc:'WiFi, Bluetooth, Zigbee, LoRaWAN, NB-IoT, 5G. Choosing the right protocol means trading off range, power, bandwidth, and cost.'},
      {title:'Edge AI',desc:'Running machine learning models on constrained hardware — TensorFlow Lite, ONNX Runtime, neural network accelerators. Inference at the edge.'},
      {title:'Industrial IoT (IIoT)',desc:'IoT in manufacturing, energy, and logistics. SCADA systems, OPC-UA protocols, predictive maintenance, digital twins.'},
      {title:'IoT Security',desc:'Securing devices with limited compute, no user interface, and often 10-year lifespans. Firmware updates, secure boot, certificate management.'},
      {title:'Data Pipelines',desc:'Ingesting, processing, and storing time-series data from millions of sensors. MQTT, Apache Kafka, InfluxDB, TimescaleDB.'},
    ],
    tools:['C/C++','Arduino','ESP32','Raspberry Pi','MQTT','AWS IoT','Azure IoT Hub','TensorFlow Lite','FreeRTOS','Zigbee'],
    insight:'IoT\'s hardest problem is not connectivity — it\'s reliability and security at scale. A web app that fails affects users temporarily. An IoT failure in a power grid, hospital device, or autonomous vehicle can kill people. The engineering discipline required for safety-critical embedded systems — formal verification, redundancy, fail-safe design, field update mechanisms — is among the most rigorous in software engineering, and among the least taught in typical curricula.'
  }
];

const wrap=document.getElementById('mainWrap');
const dsGrid=document.getElementById('dsGrid');

domains.forEach((d,idx)=>{
  // Selector button
  const btn=document.createElement('button');
  btn.className='ds-btn';
  btn.innerHTML=`${d.icon} ${d.label}`;
  btn.style.color=d.color;
  btn.onclick=()=>document.getElementById('d-'+d.id).scrollIntoView({behavior:'smooth'});
  dsGrid.appendChild(btn);

  // Section
  const sec=document.createElement('section');
  sec.className='domain-section';
  sec.id='d-'+d.id;
  sec.innerHTML=`
    <div class="domain-head reveal">
      <div class="domain-icon-wrap reveal" style="background:${d.color}10;border-color:${d.color}25;color:${d.color}">${d.icon}</div>
      <div class="domain-info">
        <span class="domain-badge" style="background:${d.color}12;color:${d.color}">${d.badge}</span>
        <h2 class="domain-title" style="color:${d.color}">${d.title}</h2>
        <p class="domain-intro">${d.intro}</p>
        <p class="domain-why" style="background:${d.whyColor};color:${d.color};border-left:2px solid ${d.color};border-radius:0 3px 3px 0">${d.why}</p>
      </div>
    </div>
    <div class="domain-meta reveal">
      ${d.meta.map(m=>`<div class="meta-box"><span class="meta-num" style="color:${d.color}">${m.num}</span><span class="meta-label">${m.label}</span></div>`).join('')}
    </div>
    <div class="domain-body reveal">
      <div class="domain-card" style="border-left-color:${d.color}50">
        <p class="dc-label" style="color:${d.color}">// SUBFIELDS & SPECIALIZATIONS</p>
        <div class="dc-items">
          ${d.subfields.slice(0,3).map(sf=>`<div class="dc-item"><p class="dc-item-title">${sf.title}</p><p class="dc-item-desc">${sf.desc}</p></div>`).join('')}
        </div>
      </div>
      <div class="domain-card" style="border-left-color:${d.color}50">
        <p class="dc-label" style="color:${d.color}">// MORE SPECIALIZATIONS</p>
        <div class="dc-items">
          ${d.subfields.slice(3).map(sf=>`<div class="dc-item"><p class="dc-item-title">${sf.title}</p><p class="dc-item-desc">${sf.desc}</p></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="tools-row reveal">
      <p class="tools-label">// KEY TOOLS & TECHNOLOGIES</p>
      <div class="tools-chips">${d.tools.map(t=>`<span class="tool-chip" style="color:${d.color};border-color:${d.color}25">${t}</span>`).join('')}</div>
    </div>
    <div class="domain-insight reveal" style="border-left-color:${d.color};background:${d.color}06;color:${d.color}90">${d.insight}</div>
  `;
  wrap.appendChild(sec);
});

// Reveal
const revEls=document.querySelectorAll('.reveal');
const ro=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*40);ro.unobserve(e.target);}});},{threshold:0.04});
revEls.forEach(el=>ro.observe(el));

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
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:800,system:'You are a senior technologist and career advisor who knows every tech domain deeply. Give honest, specific, actionable advice. Use **bold** for key points. Be direct — no fluff. Speak to someone who wants to understand and build a career in tech.',messages:history})});
    const data=await r.json();
    document.getElementById('typing')?.remove();
    const txt=data.content?.[0]?.text||'Offline.';
    history.push({role:'assistant',content:txt});
    addMsg('assistant',txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n\n/g,'<br><br>'));
  }catch(e){document.getElementById('typing')?.remove();addMsg('assistant','Connection error.');}
  sendBtn.disabled=false;inp.focus();
};