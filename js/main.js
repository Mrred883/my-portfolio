/* ============================================================
   Chris O. Agudosi, Portfolio interactions
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------------------------------------------------
     DATA
  --------------------------------------------------------- */
  const skills = [
    {
      icon: '💻', name: 'Programming & Automation',
      tags: ['Python', 'Bash', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Web Scraping', 'Automation Scripting']
    },
    {
      icon: '🛡️', name: 'Security Engineering',
      tags: ['AppSec', 'Threat Hunting', 'VAPT', 'Penetration Testing', 'Detection Engineering', 'Incident Response', 'DFIR', 'OWASP Top 10', 'MITRE ATT&CK', 'NIST', 'Zero Trust', 'Threat Modeling']
    },
    {
      icon: '🤖', name: 'AI Security & Testing',
      tags: ['AI Red Teaming', 'Prompt Injection Defense', 'LLM Integration', 'OpenAI APIs', 'Pinecone', 'AI Governance', 'Adversarial Testing', 'Security Guardrails', 'Playwright', 'Pytest']
    },
    {
      icon: '☁️', name: 'Cloud & DevSecOps',
      tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'OpenShift', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Secure SDLC']
    },
    {
      icon: '🔬', name: 'Reverse Engineering & Malware',
      tags: ['IDA Pro', 'Frida', 'MobSF', 'JADX', 'Static Analysis', 'Malware Triage', 'APK Decompilation', 'Binary Analysis']
    },
    {
      icon: '📊', name: 'Platforms & Observability',
      tags: ['Microsoft Sentinel', 'Splunk', 'Burp Suite', 'OWASP ZAP', 'Nessus', 'Metasploit', 'Nmap', 'Wireshark', 'Prometheus', 'Grafana', 'ELK Stack']
    }
  ];

  const experience = [
    {
      role: 'Cyber Security Analyst', date: 'Aug 2024 – Present',
      company: 'Manappuram Comptech & Consultants Ltd. · Remote',
      points: [
        'Conduct <strong>penetration testing</strong> across web, Android, API & thick-client apps using OWASP Top 10, PTES & CVSS, delivering remediation for auth, session & input-validation flaws.',
        'Architected an <strong>AI-assisted VAPT platform</strong> integrating network scanning, web testing, Android analysis & automated vulnerability classification.',
        'Execute internal & external network VAPT, host discovery, enumeration, controlled exploitation & attack-surface analysis with Nmap, Metasploit, Python & Bash.',
        'Perform Android pentesting, APK decompilation, SSL pinning bypass & runtime hooking using MobSF, Frida, JADX & ADB.',
        'Lead enterprise phishing simulations and validate DAST/SAST findings with secure code review aligned to Secure SDLC.'
      ]
    },
    {
      role: 'AI Security & DevSecOps Engineer (Contract)', date: 'Jan 2023 – Present',
      company: 'Global · Remote',
      points: [
        'Designed <strong>AI-assisted Secure SDLC orchestration</strong> with OpenAI APIs, GitHub Actions & Azure DevOps across 12+ repos, cutting manual QA prep 15–18 hrs/sprint.',
        'Built Prometheus, Grafana, ELK & New Relic dashboards for Kubernetes supporting 40+ microservices & 300+ daily container events, recovery time 2h → ~75min.',
        'Constructed an <strong>LLM-powered knowledge platform</strong> with OpenAI embeddings & Pinecone, centralizing 2,500+ docs with AI governance & secure access controls.',
        'Orchestrated Jenkins, Selenium & Pytest pipelines on AWS staging, regression coverage 45% → 92%.',
        'Provisioned Terraform AWS/Azure multi-region infra, environment setup ~4h → under 45min.'
      ]
    },
    {
      role: 'Security Engineer · AI Defense & Threat Detection', date: 'Mar 2021 – Dec 2023',
      company: 'Global Consulting Firm · Dallas, TX (Remote)',
      points: [
        'Built <strong>LLM-assisted triage</strong> & Microsoft Sentinel SOAR automations processing 1,200+ monthly alerts, response time 45min → under 10min.',
        'Deployed Logic Apps playbooks for phishing, endpoint & suspicious-login response, cutting repetitive SOC workload ~60 hrs/month.',
        'Conducted threat detection & incident analysis across cloud using Sentinel, Splunk & MITRE ATT&CK frameworks.',
        'Engineered Python security scripts for log parsing, IOC extraction & event correlation, investigation time ~20min → under 13min.'
      ]
    },
    {
      role: 'Founder · AI Security, Recon & Automation', date: 'Jan 2017 – Present',
      company: 'NovusAegis AI · ReconPro · God’s Eye · Remote',
      points: [
        'Maintain <strong>10+ GitHub repositories</strong> spanning OSINT, DFIR tooling, malware analysis, VAPT research & AI-security experimentation.',
        'Built a custom <strong>TAK (Tactical Assault Kit) server</strong> for secure situational awareness, real-time mapping & unit tracking.',
        'Developed custom <strong>IDA Pro plugins</strong> & static-analysis utilities accelerating malware triage and executable inspection.',
        'Support AI systems & automation for government-sector environments, secure workflow orchestration & operational security.'
      ]
    }
  ];

  const projects = [
    {
      icon: '🧬', tag: 'Reverse Engineering',
      title: 'FLARE-ON RE Research',
      desc: 'Curated reverse-engineering archive covering 10+ years of FLARE-ON challenges, 80+ write-ups analyzing packed executables, obfuscated binaries & malicious scripts.',
      stack: ['IDA Pro', 'Python', 'Static Analysis']
    },
    {
      icon: '🔓', tag: 'AppSec',
      title: 'Application Security & API Assessment',
      desc: 'OWASP Top 10 & API penetration testing across auth, session management & input validation, surfacing insecure configs and exposed endpoints.',
      stack: ['Burp Suite', 'OWASP ZAP', 'Manual Testing']
    },
    {
      icon: '🛰️', tag: 'Recon Automation',
      title: 'Offensive Recon Automation',
      desc: 'Python recon & web-automation tooling using Requests, BeautifulSoup4 & CSV pipelines, processing hundreds of records for OSINT and attack-surface mapping.',
      stack: ['Python', 'Requests', 'BeautifulSoup4']
    },
    {
      icon: '🎯', tag: 'Detection Engineering',
      title: 'Threat Hunting & Detection',
      desc: 'Investigated suspicious auth patterns & endpoint anomalies, tuning alert-correlation logic across environments handling 1,200+ monthly alerts.',
      stack: ['Sentinel', 'Splunk', 'MITRE ATT&CK']
    },
    {
      icon: '🧠', tag: 'AI Security',
      title: 'AI Security & Adversarial Testing',
      desc: 'Adversarial testing & prompt-injection assessments across LLM-integrated platforms, validating prompt handling, access controls & model safety.',
      stack: ['LLM Red Team', 'Prompt Injection', 'AI Governance']
    },
    {
      icon: '🗺️', tag: 'Tactical Systems',
      title: 'Custom TAK Server',
      desc: 'Built a Tactical Assault Kit server enabling secure situational awareness, real-time mapping & unit tracking across tactical comms environments.',
      stack: ['TAK', 'Infra Security', 'Real-time']
    },
    {
      icon: '🔗', tag: 'Digital Forensics',
      title: 'Evidence Chain of Custody',
      desc: 'Tamper-evident system for documenting digital-evidence acquisition, transfer & verification using an append-only hash-chain ledger, file-integrity checks & a full forensic audit trail exposed over a REST API.',
      stack: ['Python', 'Flask', 'Hash-Chain Ledger'],
      url: 'https://github.com/Mrred883/evidence-chain-of-custody'
    },
    {
      icon: '🔎', tag: 'Browser Extension',
      title: 'AI Fact Checker',
      desc: 'Chrome extension for real-time, web-grounded fact-checking. Highlight text, scan whole articles or check live audio; claims are verified against live web sources via Claude AI, returning five verdict levels with cited sources.',
      stack: ['React', 'TypeScript', 'Manifest V3'],
      url: 'https://github.com/Mrred883/ai-fact-checker',
      demo: '#' // replace # with Chrome Web Store / install link after deploy
    }
  ];

  const labs = [
    {
      icon: '🧪', tag: 'TryHackMe',
      title: 'TryHackMe Journal',
      desc: 'Hands-on offensive & defensive lab journal, room walkthroughs, methodology, and key takeaways across the TryHackMe platform.',
      url: 'https://docs.google.com/document/d/109X6dA24WOrVagjm7TuPsqU5JAKi-HVywlWP6ICRT4I/edit?usp=sharing'
    },
    {
      icon: '🐞', tag: 'Vuln Assessment',
      title: 'Vulnerable System Analysis',
      desc: 'Assessment of a deliberately vulnerable system, enumeration, exploitation paths, and prioritized remediation guidance.',
      url: 'https://docs.google.com/document/d/1IF2t38BsQt6YRvJru8_VKC6Kjp7-YMAjhWNYhRnUDWg/edit?usp=sharing'
    },
    {
      icon: '🚨', tag: 'Incident Response',
      title: "Incident Handler's Report",
      desc: 'Structured incident-handling report covering detection, containment, eradication, recovery, and post-incident lessons.',
      url: 'https://docs.google.com/document/d/1itD3-cEj19Fl30f2lw1GIA--V9HaFTRzD1Qzdmtyjt8/edit?usp=sharing'
    },
    {
      icon: '📑', tag: 'DFIR',
      title: 'Cyber Incident Report',
      desc: 'Full cyber incident analysis documenting the timeline, business impact, root cause, and corrective actions.',
      url: 'https://docs.google.com/document/d/17YOeq0DoncjduYqqJIJFdGxuVDkEEUgIEDosoXPoY_U/edit?usp=sharing'
    },
    {
      icon: '🛡️', tag: 'Audit',
      title: 'Security Audit',
      desc: 'Security audit applying controls review, gap analysis, and compliance-aligned recommendations against best practice.',
      url: 'https://docs.google.com/document/d/1aUwDNPgdSygworUXLP2rFBE41OVUBwwO1REWjMoP6jw/edit?usp=sharing'
    },
    {
      icon: '🗄️', tag: 'Data Forensics',
      title: 'SQL Query Analysis',
      desc: 'Database investigation using SQL queries for log analysis, filtering, and security event correlation.',
      url: 'https://docs.google.com/document/d/1uXju1Rd76Ttb0NyBjGikEyREuv5tZ75uJ9npMgqzrNQ/edit?usp=sharing'
    }
  ];

  const certs = [
    { abbr: 'OSCP', name: 'Offensive Security Certified Professional', issuer: 'OffSec' },
    { abbr: 'OSWE', name: 'Offensive Security Web Expert', issuer: 'OffSec' },
    { abbr: 'CEH', name: 'Certified Ethical Hacker', issuer: 'EC-Council' },
    { abbr: 'CISA', name: 'Certified Information Systems Auditor', issuer: 'ISACA' },
    { abbr: 'PMP', name: 'Project Management Professional', issuer: 'PMI' },
    { abbr: 'SEC+', name: 'CompTIA Security+', issuer: 'CompTIA' },
    { abbr: 'CKA', name: 'Certified Kubernetes Administrator', issuer: 'CNCF' },
    { abbr: 'AWS', name: 'Solutions Architect – Associate', issuer: 'AWS' },
    { abbr: 'ISTQB', name: 'Certified Tester – Advanced Level', issuer: 'ISTQB' },
    { abbr: 'GCC', name: 'Google Cybersecurity Certificate', issuer: 'Google' },
    { abbr: 'PE', name: 'Prompt Engineering Specialization', issuer: 'OpenAI' }
  ];

  /* ---------------------------------------------------------
     RENDER
  --------------------------------------------------------- */
  function render() {
    // Skills
    const sg = $('#skills-grid');
    if (sg) {
      sg.innerHTML = skills.map(s => `
        <article class="skill-card reveal">
          <div class="skill-head">
            <span class="skill-emoji">${s.icon}</span>
            <h3 class="skill-name">${s.name}</h3>
          </div>
          <div class="skill-tags">
            ${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
          </div>
        </article>`).join('');
    }

    // Experience
    const tl = $('#timeline');
    if (tl) {
      tl.innerHTML = experience.map(e => `
        <div class="tl-item reveal">
          <div class="tl-card">
            <div class="tl-top">
              <h3 class="tl-role">${e.role}</h3>
              <span class="tl-date">${e.date}</span>
            </div>
            <p class="tl-company">${e.company}</p>
            <ul class="tl-list">
              ${e.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        </div>`).join('');
    }

    // Projects
    const pg = $('#projects-grid');
    if (pg) {
      pg.innerHTML = projects.map(p => `
        <article class="project-card reveal">
          <div class="project-top">
            <span class="project-icon">${p.icon}</span>
            <span class="project-tag">${p.tag}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-stack">
            ${p.stack.map(s => `<span>${s}</span>`).join('')}
          </div>
          ${(p.url || p.demo) ? `<div class="project-links">
            ${p.url ? `<a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>
            </a>` : ''}
            ${p.demo ? `<a class="project-link" href="${p.demo}" target="_blank" rel="noopener noreferrer">
              Install extension
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>` : ''}
          </div>` : ''}
        </article>`).join('');
    }

    // Labs
    const lg = $('#labs-grid');
    if (lg) {
      lg.innerHTML = labs.map(l => `
        <a class="lab-card reveal" href="${l.url}" target="_blank" rel="noopener noreferrer">
          <div class="lab-top">
            <span class="lab-icon">${l.icon}</span>
            <span class="lab-tag">${l.tag}</span>
          </div>
          <h3 class="lab-title">${l.title}</h3>
          <p class="lab-desc">${l.desc}</p>
          <span class="lab-link">
            Open document
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </span>
        </a>`).join('');
    }

    // Certs
    const cg = $('#certs-grid');
    if (cg) {
      cg.innerHTML = certs.map(c => `
        <div class="cert-card reveal">
          <span class="cert-badge">${c.abbr}</span>
          <div>
            <div class="cert-name">${c.name}</div>
            <div class="cert-issuer">${c.issuer}</div>
          </div>
        </div>`).join('');
    }
  }

  /* ---------------------------------------------------------
     LOADER (boot sequence)
  --------------------------------------------------------- */
  function loader() {
    const loaderEl = $('#loader');
    const textEl = $('#loader-text');
    if (!loaderEl || !textEl) return;

    const cmd = 'initializing secure session...';
    if (prefersReduced) {
      textEl.textContent = cmd;
      finish();
      return;
    }

    let i = 0;
    const tick = () => {
      if (i <= cmd.length) {
        textEl.textContent = cmd.slice(0, i);
        i++;
        setTimeout(tick, 28);
      } else {
        setTimeout(finish, 350);
      }
    };
    tick();

    function finish() {
      loaderEl.classList.add('done');
      document.body.style.overflow = '';
      startTyping();
      runCounters();
    }
    // Safety: never trap the page
    setTimeout(() => { loaderEl.classList.add('done'); document.body.style.overflow = ''; }, 2500);
  }

  /* ---------------------------------------------------------
     TYPING effect (hero role)
  --------------------------------------------------------- */
  const roles = [
    'AI Security Engineer',
    'Penetration Tester · OSCP',
    'Web Exploit Specialist · OSWE',
    'AI Red Team Operator',
    'DevSecOps Engineer',
    'Threat Hunter & DFIR Analyst'
  ];
  let typingStarted = false;
  function startTyping() {
    if (typingStarted) return;
    typingStarted = true;
    const el = $('#typed-role');
    if (!el) return;

    if (prefersReduced) { el.textContent = roles[0]; return; }

    let r = 0, c = 0, deleting = false;
    const loop = () => {
      const word = roles[r];
      el.textContent = word.slice(0, c);
      if (!deleting) {
        if (c < word.length) { c++; setTimeout(loop, 65); }
        else { deleting = true; setTimeout(loop, 1600); }
      } else {
        if (c > 0) { c--; setTimeout(loop, 30); }
        else { deleting = false; r = (r + 1) % roles.length; setTimeout(loop, 350); }
      }
    };
    loop();
  }

  /* ---------------------------------------------------------
     COUNTERS
  --------------------------------------------------------- */
  let countersRun = false;
  function runCounters() {
    if (countersRun) return;
    countersRun = true;
    $$('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.count, 10) || 0;
      if (prefersReduced) { el.textContent = target.toLocaleString(); return; }
      const dur = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(step);
    });
  }

  /* ---------------------------------------------------------
     REVEAL on scroll
  --------------------------------------------------------- */
  function reveals() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, idx) => {
        if (e.isIntersecting) {
          // small stagger for grouped items
          const delay = e.target.dataset.delay || 0;
          setTimeout(() => e.target.classList.add('in'), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(i => io.observe(i));
  }

  /* ---------------------------------------------------------
     NAV: scroll state, active link, mobile toggle, progress
  --------------------------------------------------------- */
  function nav() {
    const navbar = $('#navbar');
    const toggle = $('#nav-toggle');
    const links = $('#nav-links');
    const progress = $('#scroll-progress');
    const backTop = $('#back-top');
    const navLinks = $$('.nav-link');
    const sections = $$('main section[id]');

    const onScroll = () => {
      const y = window.scrollY;
      navbar.classList.toggle('scrolled', y > 30);
      backTop.classList.toggle('show', y > 600);

      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';

      // active section
      let current = '';
      sections.forEach(s => {
        if (y >= s.offsetTop - 140) current = s.id;
      });
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // mobile
    const closeMenu = () => { links.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------------------------------------------------------
     Skill card spotlight (mouse-follow glow)
  --------------------------------------------------------- */
  function spotlight() {
    if (prefersReduced) return;
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.skill-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  /* ---------------------------------------------------------
     Contact form (Netlify-friendly, graceful fallback)
  --------------------------------------------------------- */
  function contactForm() {
    const form = $('#contact-form');
    const note = $('#form-note');
    if (!form) return;
    const btn = form.querySelector('button[type="submit"]');
    const btnHTML = btn ? btn.innerHTML : '';

    const setNote = (msg, kind) => { note.innerHTML = msg; note.className = 'form-note' + (kind ? ' ' + kind : ''); };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setNote('', '');

      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const email = (fd.get('email') || '').toString().trim();
      const message = (fd.get('message') || '').toString().trim();

      // Honeypot, silently drop bots
      if (fd.get('botcheck')) return;

      // Validation
      if (!name || !email || !message) {
        setNote('✖ Please fill in all fields.', 'err');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setNote('✖ Please enter a valid email address.', 'err');
        return;
      }

      // Build JSON payload for Web3Forms
      const data = {};
      fd.forEach((v, k) => { data[k] = v.toString(); });

      if (btn) { btn.disabled = true; btn.classList.add('loading'); }
      setNote('<span class="dots">Sending message</span>', '');

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json().catch(() => ({}));
        if (!res.ok || !result.success) throw new Error(result.message || ('HTTP ' + res.status));
        setNote("✔ Message sent, I'll get back to you within 24 hours.", 'ok');
        form.reset();
      } catch (err) {
        // Network/host can't accept the POST (e.g. local preview or Forms not enabled).
        // Never lose the message, hand off to the user's email client.
        const subject = encodeURIComponent('Portfolio inquiry from ' + name);
        const body = encodeURIComponent(message + '\n\n- ' + name + ' (' + email + ')');
        const mailto = 'mailto:o.agudosi88@gmail.com?subject=' + subject + '&body=' + body;
        setNote('⚠ Couldn\'t submit here. <a href="' + mailto + '">Click to email me directly</a> instead.', 'err');
      } finally {
        if (btn) { btn.disabled = false; btn.classList.remove('loading'); btn.innerHTML = btnHTML; }
      }
    });
  }

  /* ---------------------------------------------------------
     MATRIX background (digital rain, subtle)
  --------------------------------------------------------- */
  function matrix() {
    const canvas = $('#matrix-bg');
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext('2d');
    let w, h, cols, drops, fontSize;
    const chars = '01ｱｲｳｴｵｶｷｸ<>{}[]/\\=+*#$%&アゴ01101'.split('');

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      fontSize = Math.max(12, Math.floor(w / 110));
      cols = Math.floor(w / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.floor(Math.random() * -50));
    }
    resize();
    window.addEventListener('resize', resize);

    let last = 0;
    const fps = 20;
    function draw(now) {
      requestAnimationFrame(draw);
      if (now - last < 1000 / fps) return;
      last = now;

      ctx.fillStyle = 'rgba(7, 10, 16, 0.09)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = fontSize + 'px JetBrains Mono, monospace';

      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // head brighter, trail dim
        ctx.fillStyle = Math.random() > 0.97 ? 'rgba(120, 255, 230, 0.85)' : 'rgba(46, 230, 197, 0.28)';
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = Math.floor(Math.random() * -20);
        drops[i]++;
      }
    }
    requestAnimationFrame(draw);

    // pause when tab hidden
    document.addEventListener('visibilitychange', () => { if (!document.hidden) last = 0; });
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */
  function init() {
    $('#year').textContent = new Date().getFullYear();
    document.body.style.overflow = 'hidden'; // during loader
    render();
    reveals();
    nav();
    spotlight();
    contactForm();
    matrix();
    loader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
