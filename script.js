const projects = [
  {
    id:'payment-gateway', featured:true, title:'Payment Gateway Operations Dashboard',
    category:'Payments / FinTech', domain:'Payments / FinTech', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Create one operational view for transaction performance, PSP/bank performance, merchant monitoring and recurring failure reasons.',
    kpis:['Total Transactions','Successful Transactions','Failed Transactions','Success Rate','Daily Transaction Trends','PSP Performance','Bank Performance','Failure-Reason Analysis'],
    tools:['Power BI','DAX','Power Query','Excel'],
    analysed:'Transaction volumes, success/failure patterns, PSP and bank performance, merchant performance and recurring failure reasons.',
    prep:'Power Query / Excel preparation and dashboard modelling, as listed in the resume project stack.',
    insight:'Designed to surface operational failure patterns and performance differences across PSPs, banks and merchants.',
    outcome:'Portfolio Analytics Project demonstrating payments-domain KPI design, operational monitoring and management reporting.',
    url:'https://payment-gateway-analysis.vercel.app/', image:null, accent:'teal'
  },
  {
    id:'nasdaq-dubai', featured:true, title:'NASDAQ Dubai — UAE Capital Markets Analytics',
    category:'Banking & Finance', domain:'Capital Markets / Exchange Operations', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Present exchange-workflow activity across capital raising, operations, service levels, exceptions, reconciliation and settlement in a management-ready view.',
    kpis:['Deals & Capital Raising','Operations & SLA','Exceptions & Risk','Reconciliation','Settlement','Budget vs Actual'],
    tools:['Capital Markets Analytics','Excel','Interactive Web Dashboard'],
    analysed:'Deal book activity, operational SLA, exceptions, reconciliation, settlement and budget performance across exchange workflows.',
    insight:'Designed to make operational control points and capital-markets workflow performance easier to review in one place.',
    outcome:'Portfolio Analytics Project demonstrating capital-markets process understanding and analytical presentation.',
    url:'https://nithishibops.github.io/NASDAQ_Dubai_UAE_Capital_Markets_Analytics/', image:null, accent:'gold'
  },
  {
    id:'banking-operations', featured:true, title:'Banking Operations Analytics Dashboard',
    category:'Banking & Finance', domain:'Banking Operations', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Consolidate customer, deposit, loan, account and branch information for portfolio and regional performance monitoring.',
    kpis:['Customer Analysis','Deposits','Loan Portfolio','Account Balances','Loan-to-Deposit Ratio','Branch Performance','Regional Performance','Account-Type Analysis'],
    tools:['Power BI','DAX','Power Query','Excel'],
    analysed:'Customer, deposit, loan, account-balance, branch and regional performance across a consolidated banking-operations view.',
    prep:'Power Query / Excel preparation and data modelling, as listed in the resume project stack.',
    insight:'Designed to connect balance-sheet style banking measures with branch, regional and customer analysis.',
    outcome:'Portfolio Analytics Project demonstrating banking KPI development and multi-dimensional operational reporting.',
    url:'https://banking-operations-dashboard-ashen.vercel.app/', image:null, accent:'blue'
  },
  {
    id:'emirates', featured:true, title:'Emirates Analytics Dashboard',
    category:'Aviation', domain:'Airline Operations & Commercial Analytics', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Organize airline executive, operational, revenue and network information into a multi-page analytics experience.',
    kpis:['Executive Performance','Flight Operations','Revenue','Profitability','Routes','Network Insights'],
    tools:['Excel','Interactive Web Dashboard','Aviation Analytics'],
    analysed:'Executive performance, flight operations, revenue, profitability, route performance and network views.',
    insight:'Designed to connect operational and commercial airline performance in one navigable reporting experience.',
    outcome:'Portfolio Analytics Project demonstrating cross-functional airline analytics and dashboard storytelling.',
    url:'https://emirates-dashboard-one.vercel.app/', image:null, accent:'red'
  },
  {
    id:'supply-chain', featured:true, title:'Supply Chain Analytics Dashboard',
    category:'Supply Chain', domain:'Supply Chain / Operations', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Bring inventory, logistics, procurement and supply-chain performance into a clearer operational reporting view.',
    kpis:['Inventory Levels','Order Fulfilment','Delivery Performance','Supplier Efficiency','Logistics KPIs'],
    tools:['Power BI','Excel','Supply Chain Analytics'],
    analysed:'Inventory, order fulfilment, delivery performance, supplier efficiency and logistics KPIs.',
    insight:'Designed to make inventory and fulfilment performance easier to monitor across the supply-chain workflow.',
    outcome:'Portfolio Analytics Project demonstrating operations reporting and supply-chain KPI presentation.',
    url:'https://nithishibops.github.io/supply-chain-analytics-dashboard/', image:null, accent:'teal'
  },
  {
    id:'manufacturing', featured:true, title:'Manufacturing Operations Dashboard',
    category:'Manufacturing', domain:'Manufacturing Operations', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Create an executive view across production, quality, inventory and cost performance using time-intelligence measures.',
    kpis:['Production Volume vs Target','Operational Efficiency','Defect Analysis','Inventory Value','Production Cost','Scrap Cost','Quality Cost','Gross Profit','Plant / Regional Performance'],
    tools:['Power BI','DAX','Power Query','Excel'],
    analysed:'Production, quality, inventory, operational efficiency, cost and plant/regional performance.',
    prep:'Power Query / Excel preparation and dashboard modelling, as listed in the resume project stack.',
    insight:'Designed to connect production outcomes with quality, inventory and cost control in one operations view.',
    outcome:'Portfolio Analytics Project demonstrating manufacturing KPI design and operational performance analysis.',
    url:'https://manufacturing-operations-dashboard.vercel.app/', image:null, accent:'gold'
  },
  {
    id:'ecommerce', featured:true, title:'E-Commerce Analytics Dashboard',
    category:'Sales & Retail', domain:'E-Commerce / Commercial Analytics', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Monitor commercial performance across sales, profitability, customers, fulfilment, payments and product/city performance.',
    kpis:['Total Sales','Profit','Orders','Customers','Profit Margin','Delivery Performance','Monthly Sales / Profit Trends','Order Status','Payment Method Distribution'],
    tools:['Power BI','DAX','Power Query','Excel'],
    analysed:'Sales, profitability, customers, fulfilment, payment methods and product/city performance.',
    prep:'Power Query / Excel preparation and dashboard modelling, as listed in the resume project stack.',
    insight:'Designed to combine commercial, customer, payment and fulfilment performance in a single reporting layer.',
    outcome:'Portfolio Analytics Project demonstrating end-to-end commercial analytics and KPI reporting.',
    url:'https://e-comerce-analytics-dashboard.vercel.app/', image:null, accent:'blue'
  },
  {
    id:'finance-investment', featured:true, title:'Corporate Finance, Budget & Business Intelligence Dashboard',
    category:'Banking & Finance', domain:'Corporate Finance / Business Intelligence', type:'PORTFOLIO ANALYTICS PROJECT',
    problem:'Create a multi-page finance intelligence solution covering revenue, profitability, cost control and budget variance.',
    kpis:['Revenue','Profit','Expenses','Budget Utilization','ROI','Revenue / Profit Growth','Budget vs Actual','Variance Analysis','Department / Regional Performance'],
    tools:['Power BI','DAX','Power Query','Excel'],
    analysed:'Revenue, profitability, departmental performance, cost control and budget variance using a star-schema model.',
    prep:'Power Query / Excel preparation with a star-schema model, as documented in the resume project description.',
    insight:'Designed to link finance performance, budget control and departmental/regional analysis for management review.',
    outcome:'Portfolio Analytics Project demonstrating financial KPI design, modelling and management reporting.',
    url:'https://finance-budget-analytics-dashboard.vercel.app/', image:null, accent:'gold'
  },

  {id:'airlines',title:'Airlines Analytics Dashboard',category:'Aviation',domain:'Airline Analytics',type:'PORTFOLIO PROJECT',problem:'Present airline operations, commercial KPIs, routes, passengers and executive aviation insights.',kpis:['Operations','Commercial KPIs','Routes','Passengers','Executive Insights'],tools:['Interactive Web Dashboard','Airline Analytics'],analysed:'Operational and commercial airline performance across a compact executive view.',insight:'Designed as an accessible airline-performance overview.',outcome:'Portfolio Analytics Project.',url:'https://emirates-one-page-dashboard.vercel.app/',image:null,accent:'blue'},
  {id:'retail',title:'Retail Sales Analytics Dashboard',category:'Sales & Retail',domain:'Retail Analytics',type:'PORTFOLIO PROJECT',problem:'Review retail sales, product, customer, regional and commercial performance.',kpis:['Sales','Products','Customers','Regions','Commercial Performance'],tools:['Power BI','Retail Analytics'],analysed:'Retail sales, product, customer and regional performance.',insight:'Designed for concise retail-performance monitoring.',outcome:'Portfolio Analytics Project.',url:'https://retail-sales-analytics-dashboard-nine.vercel.app/',image:null,accent:'blue'},
  {id:'sales',title:'Sales Performance Dashboard',category:'Sales & Retail',domain:'Sales Analytics',type:'PORTFOLIO PROJECT',problem:'Organize sales-performance reporting across revenue, products, customers, regions and growth measures.',kpis:['Revenue','Products','Customers','Regions','Growth KPIs'],tools:['Power BI','DAX','Excel'],analysed:'Sales-performance reporting across revenue, products, customers and regions.',insight:'Designed for management-level sales review.',outcome:'Portfolio Analytics Project.',url:'https://sales-analytics-dashboard-snowy.vercel.app/',image:null,accent:'teal'},
  {id:'hotel',title:'Hotel Revenue & Operations Analytics',category:'Hospitality',domain:'Hospitality Analytics',type:'PORTFOLIO PROJECT',problem:'Present hotel performance across executive, booking, revenue/operations and guest-experience views.',kpis:['Executive Overview','Booking Analytics','Revenue & Operations','Guest Experience'],tools:['Power BI','Hospitality Analytics'],analysed:'Booking, revenue, operations and guest-experience performance across a multi-page hotel dashboard.',insight:'Designed to connect commercial and operational hospitality performance.',outcome:'Portfolio Analytics Project.',url:'https://hotel-analytics-tau.vercel.app/',image:null,accent:'gold'},
  {id:'uniglobe',title:'Uniglobe Holdings — Group Business Analytics',category:'Operations',domain:'Group Business / Commercial Analytics',type:'PORTFOLIO PROJECT',problem:'Create a group-level view across executive performance, sales, inventory/supply chain and customer/marketing/hospitality operations.',kpis:['Executive Performance','Sales & Commercial','Inventory & Supply Chain','Customer / Marketing / Hospitality'],tools:['Commercial Analytics','Operations Analytics'],analysed:'Cross-domain executive and operations performance using a clearly labelled synthetic portfolio dataset.',insight:'Designed to demonstrate multi-domain management reporting.',outcome:'Portfolio Analytics Project using a clearly labelled synthetic dataset.',url:'https://unique-global.vercel.app/executive',image:null,accent:'red'},
  {id:'hr',title:'HR Analytics Dashboard',category:'HR Analytics',domain:'People Analytics',type:'PORTFOLIO PROJECT',problem:'Provide management reporting across workforce, HR KPIs and employee performance.',kpis:['Workforce','HR KPIs','Employee Performance'],tools:['Power BI','HR Analytics'],analysed:'Workforce and employee-performance indicators for management reporting.',insight:'Designed for concise people-analytics monitoring.',outcome:'Portfolio Analytics Project.',url:'https://hr-analytics-dashboard-weld.vercel.app/',image:null,accent:'teal'},
  {id:'healthcare',title:'Hospital Analytics Dashboard',category:'Healthcare',domain:'Healthcare Analytics',type:'PORTFOLIO PROJECT',problem:'Organize patient, appointment, revenue, satisfaction and hospital-performance information.',kpis:['Patients','Appointments','Revenue','Satisfaction','Hospital Performance'],tools:['Power BI','Healthcare Analytics'],analysed:'Patient, appointment, revenue and satisfaction performance.',insight:'Designed for healthcare operations reporting.',outcome:'Portfolio Analytics Project.',url:'https://hospital-analytics-dashboard.vercel.app/',image:null,accent:'blue'},
  {id:'population-india',title:'Government of India — People Analytics Dashboard',category:'Population / Public Data',domain:'Public Data Analytics',type:'PORTFOLIO PROJECT',problem:'Present national and sub-national views across population, welfare, income, demographics and taxation.',kpis:['Population','Welfare','Income','Demographics','Taxation','State / District Views'],tools:['Power BI','DAX','Data Visualization'],analysed:'Population, welfare, income, demographics and taxation across states and districts.',insight:'Designed for multi-level public-data exploration.',outcome:'Portfolio Analytics Project.',url:'https://population-analytics-dashboard.vercel.app/',image:null,accent:'teal'},
  {id:'citi',title:'Citi Executive Analytics Dashboard',category:'Banking & Finance',domain:'Banking / Executive Analytics',type:'PORTFOLIO PROJECT',problem:'Present an executive banking view across balance-sheet and profitability indicators.',kpis:['Total Assets','Deposits','Revenue','Profitability','Balance-Sheet Trends','Asset Composition','Operating Indicators'],tools:['Banking Analytics','Interactive Web Dashboard'],analysed:'Assets, deposits, revenue, profitability, balance-sheet trends and operating indicators.',insight:'Designed for executive-level banking performance review.',outcome:'Portfolio Analytics Project.',url:'https://citi-executive-dashboard.vercel.app/',image:null,accent:'blue'},
  {id:'nova-bank', featured:true, title:'Nova Bank UAE — Banking Analytics Dashboard',category:'Banking & Finance',domain:'UAE Banking Analytics',type:'PORTFOLIO PROJECT',problem:'Create a professional UAE banking analytics experience that brings core banking performance indicators into a clear management-ready dashboard.',kpis:['Executive Overview','Banking Performance','Customer & Account Analysis','Deposits & Lending','Operational Trends'],tools:['Banking Analytics','Interactive Web Dashboard'],analysed:'Core UAE banking performance through executive, customer, account, deposit, lending and operational views.',insight:'Designed to provide a clean management-level view of banking performance and trends.',outcome:'Portfolio Analytics Project demonstrating UAE banking-domain analytics and dashboard presentation.',url:'https://nova-bank-analystics-dashboard.vercel.app/',image:null,accent:'gold'},
  {id:'world',title:'World Analytics — Global Outlook',category:'Population / Public Data',domain:'Global Analytics',type:'PORTFOLIO PROJECT',problem:'Create a broad global-data exploration experience across economic, demographic and human-development themes.',kpis:['Population','Demographics','Economy','Employment','Human Development','Markets','Companies','Country Outlook'],tools:['Global Data','Interactive Web Dashboard'],analysed:'Population, demographics, economy, employment, human development, markets and country-level outlook.',insight:'Designed as a multi-domain global-data exploration project.',outcome:'Portfolio Analytics Project.',url:'https://world-analytics.vercel.app/#overview',image:null,accent:'teal'},
  {id:'india-2027',title:'India 2027 Estimated Analytics',category:'Population / Public Data',domain:'India / Development Analytics',type:'PORTFOLIO PROJECT',problem:'Explore India-focused development indicators using clearly labelled estimated data.',kpis:['Population','Welfare','Jobs','Income','Demographics','Taxation','District Exploration'],tools:['Development Analytics','Interactive Web Dashboard'],analysed:'Population, welfare, jobs, income, demographics, taxation and district-level views using estimated data.',insight:'Designed to demonstrate public-data and development analytics with estimates clearly labelled.',outcome:'Portfolio Analytics Project using estimated data.',url:'https://india-2027-estimated.vercel.app/',image:null,accent:'gold'}
];

const featuredProjects = document.getElementById('featuredProjects');
const projectFilters = document.getElementById('projectFilters');
const projectsGrid = document.getElementById('projectsGrid');
const projectDialog = document.getElementById('projectDialog');
const projectDialogContent = document.getElementById('projectDialogContent');
const dialogClose = document.getElementById('dialogClose');

const priorityOrder = ['nova-bank','payment-gateway','nasdaq-dubai','banking-operations','finance-investment','emirates','supply-chain','manufacturing','ecommerce'];
const priorityIndex = id => { const i = priorityOrder.indexOf(id); return i === -1 ? 999 : i; };
const sortProjects = items => [...items].sort((a,b) => priorityIndex(a.id) - priorityIndex(b.id) || a.title.localeCompare(b.title));
const featured = sortProjects(projects.filter(p => p.featured));
const additional = sortProjects(projects.filter(p => !p.featured));
const categories = ['All','Banking & Finance','Payments / FinTech','Operations','HR Analytics','Sales & Retail','Supply Chain','Healthcare','Hospitality','Manufacturing','Population / Public Data','Aviation'];

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}


function projectIcon(p) {
  const key = `${p.category} ${p.domain}`.toLowerCase();
  if (key.includes('bank') || key.includes('finance') || key.includes('capital')) return 'landmark';
  if (key.includes('payment') || key.includes('fintech')) return 'credit-card';
  if (key.includes('supply') || key.includes('manufact')) return 'boxes';
  if (key.includes('health')) return 'heart-pulse';
  if (key.includes('hospital')) return 'hotel';
  if (key.includes('hr') || key.includes('people')) return 'users';
  if (key.includes('aviation') || key.includes('airline')) return 'plane';
  if (key.includes('retail') || key.includes('sales')) return 'shopping-bag';
  if (key.includes('population') || key.includes('global') || key.includes('public')) return 'globe-2';
  return 'chart-no-axes-combined';
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

function renderFeatured() {
  featuredProjects.innerHTML = featured.map((p,index) => {
    const spotlight = p.id === 'nova-bank';
    return `
    <article class="featured-card reveal visible" data-accent="${escapeHtml(p.accent)}" ${spotlight ? 'data-spotlight="true"' : ''}>
      ${spotlight ? '<span class="spotlight-badge"><i data-lucide="sparkles" aria-hidden="true"></i> Spotlight Project</span>' : ''}
      <div class="project-identity">
        <div class="project-icon"><i data-lucide="${projectIcon(p)}" aria-hidden="true"></i></div>
        <div><span class="project-number">${String(index+1).padStart(2,'0')}</span><strong>${escapeHtml(p.domain)}</strong></div>
      </div>
      <div class="featured-body">
        <div class="project-meta-row"><span class="project-status"><i aria-hidden="true"></i>Live</span><span>${escapeHtml(p.category)}</span></div>
        <h3>${escapeHtml(p.title)}</h3>
        <p class="project-analysis">${escapeHtml(p.analysed)}</p>
        <div class="project-tags">${p.tools.slice(0,3).map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        <div class="project-actions">
          <a class="btn btn-small btn-primary" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link" aria-hidden="true"></i>Live Dashboard</a>
          <button class="btn btn-small btn-secondary project-details-btn" type="button" data-project="${escapeHtml(p.id)}"><i data-lucide="eye" aria-hidden="true"></i>Project Details</button>
        </div>
      </div>
    </article>`;
  }).join('');
  refreshIcons();
}

function renderFilters() {
  projectFilters.innerHTML = categories.map((category,index) => `<button class="filter-btn ${index===0?'active':''}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join('');
  projectFilters.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilters.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      renderAdditional(btn.dataset.category);
    });
  });
}

function renderAdditional(category='All') {
  const filtered = category === 'All' ? additional : additional.filter(p => p.category === category);
  projectsGrid.innerHTML = filtered.length ? filtered.map(p => {
    const spotlight = p.id === 'nova-bank';
    return `
    <article class="project-card reveal visible" data-accent="${escapeHtml(p.accent)}" ${spotlight ? 'data-spotlight="true"' : ''}>
      ${spotlight ? '<span class="spotlight-badge"><i data-lucide="sparkles" aria-hidden="true"></i> Spotlight Project</span>' : ''}
      <div class="project-card-body">
        <div class="project-card-icon"><i data-lucide="${projectIcon(p)}" aria-hidden="true"></i></div>
        <div class="project-meta-row"><span class="project-status"><i aria-hidden="true"></i>Live</span><span>${escapeHtml(p.domain)}</span></div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.analysed)}</p>
        <div class="project-tags">${p.tools.slice(0,3).map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        <div class="project-actions compact">
          <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">Live Dashboard ↗</a>
          <button class="project-details-btn text-btn" type="button" data-project="${escapeHtml(p.id)}">Details</button>
        </div>
      </div>
    </article>`;
  }).join('') : `<div class="empty-projects">No additional projects in this category. Featured projects above may still belong to it.</div>`;
  refreshIcons();
}


function openProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;
  const list = items => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  projectDialogContent.innerHTML = `
    <p class="section-label">${escapeHtml(p.type)}</p>
    <h2 id="projectDialogTitle">${escapeHtml(p.title)}</h2>
    <p class="dialog-domain">${escapeHtml(p.domain)}</p>
    <div class="dialog-grid">
      <section><h3>Business Objective</h3><p>${escapeHtml(p.problem)}</p></section>
      <section><h3>Dataset</h3><p>Portfolio dashboard dataset used for this self-developed analytics project.</p></section>
      ${p.prep ? `<section><h3>Data Preparation</h3><p>${escapeHtml(p.prep)}</p></section>` : ''}
      <section><h3>KPIs / Key Areas</h3>${list(p.kpis)}</section>
      <section><h3>Analysis</h3><p>${escapeHtml(p.analysed)}</p></section>
      <section><h3>Insight Focus</h3><p>${escapeHtml(p.insight)}</p></section>
      <section><h3>Technologies</h3><p>${p.tools.map(escapeHtml).join(' • ')}</p></section>
      <section><h3>Outcome</h3><p>${escapeHtml(p.outcome)}</p></section>
    </div>
    <div class="dialog-actions"><a class="btn btn-primary" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">Open Live Dashboard ↗</a></div>
  `;
  if (typeof projectDialog.showModal === 'function') projectDialog.showModal();
}

function wireProjectDetailButtons() {
  document.addEventListener('click', event => {
    const button = event.target.closest('.project-details-btn');
    if (button) openProject(button.dataset.project);
  });
}

renderFeatured();
renderFilters();
renderAdditional();
wireProjectDetailButtons();
refreshIcons();

dialogClose.addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
  const rect = projectDialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) projectDialog.close();
});

const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');

function setMenu(open) {
  navMenu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));
document.querySelectorAll('#navMenu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (projectDialog.open) projectDialog.close();
    if (navMenu.classList.contains('open')) { setMenu(false); menuToggle.focus(); }
  }
});
window.addEventListener('resize', () => { if (window.innerWidth > 1020) setMenu(false); });

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold:.08, rootMargin:'0px 0px -30px 0px'});
revealEls.forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-link')];
const backToTop = document.getElementById('backToTop');

function updateScrollState() {
  let current = 'home';
  const y = window.scrollY + 150;
  sections.forEach(section => { if (y >= section.offsetTop) current = section.id; });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  backToTop.classList.toggle('show', window.scrollY > 700);
}
window.addEventListener('scroll', updateScrollState, {passive:true});
updateScrollState();
backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* =========================================================
   PORTFOLIO V3 — lightweight cinematic interactions
   No WebGL / no permanent requestAnimationFrame loops.
   ========================================================= */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Short opening loader. It runs on every fresh page load but never blocks for long.
  const loader = document.getElementById('portfolioLoader');
  const loaderPercent = document.getElementById('loaderPercent');
  const loaderBar = document.getElementById('loaderBar');
  if (loader) {
    if (reduceMotion) {
      loader.classList.add('is-done');
    } else {
      const start = performance.now();
      const duration = 980;
      const tick = now => {
        const raw = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - raw, 3);
        const value = Math.min(100, Math.round(eased * 100));
        if (loaderPercent) loaderPercent.textContent = `[${value}%]`;
        if (loaderBar) loaderBar.style.width = `${value}%`;
        if (raw < 1) requestAnimationFrame(tick);
        else setTimeout(() => loader.classList.add('is-done'), 110);
      };
      requestAnimationFrame(tick);
      // Failsafe in case the browser throttles animation frames.
      setTimeout(() => loader.classList.add('is-done'), 2200);
    }
  }

  // Scroll progress + very small skyline parallax, throttled to one frame per scroll burst.
  const progressBar = document.getElementById('scrollProgressBar');
  const skyline = document.querySelector('.hero-skyline');
  let scrollQueued = false;
  const updateCinematicScroll = () => {
    scrollQueued = false;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, Math.max(0, window.scrollY / max));
    if (progressBar) progressBar.style.width = `${ratio * 100}%`;
    if (skyline && !reduceMotion && window.innerWidth > 760) {
      skyline.style.setProperty('--hero-parallax', `${Math.min(24, window.scrollY * .035)}px`);
    }
  };
  window.addEventListener('scroll', () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(updateCinematicScroll);
    }
  }, { passive: true });
  updateCinematicScroll();

  // Small 3D hero portrait interaction on desktop only.
  const stage = document.getElementById('profileStage');
  if (stage && !reduceMotion && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    let stageFrame = 0;
    stage.addEventListener('pointermove', event => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      cancelAnimationFrame(stageFrame);
      stageFrame = requestAnimationFrame(() => {
        stage.style.setProperty('--stage-ry', `${x * 7}deg`);
        stage.style.setProperty('--stage-rx', `${y * -5}deg`);
      });
    });
    stage.addEventListener('pointerleave', () => {
      stage.style.setProperty('--stage-ry', '0deg');
      stage.style.setProperty('--stage-rx', '0deg');
    });
  }

  // Restrained 2.5D card tilt. Only the card under the cursor is updated.
  const tiltSelector = '.featured-card,.project-card,.skill-group,.workflow-step,.credential-card';
  if (!reduceMotion && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll(tiltSelector).forEach(card => {
      card.dataset.tiltReady = 'true';
      let frame = 0;
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - .5;
        const py = (event.clientY - rect.top) / rect.height - .5;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateX(${py * -2.6}deg) rotateY(${px * 3.2}deg) translateY(-3px)`;
        });
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  // Static-site message box: prepare a complete email addressed to the portfolio inbox.
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('contactName')?.value.trim() || '';
      const email = document.getElementById('contactEmail')?.value.trim() || '';
      const subject = document.getElementById('contactSubject')?.value.trim() || 'Portfolio enquiry';
      const message = document.getElementById('contactMessage')?.value.trim() || '';
      const mailSubject = `Portfolio enquiry — ${subject}`;
      const body = [
        `Hello Nithish,`,
        ``,
        message,
        ``,
        `From: ${name}`,
        `Email: ${email}`,
        `Sent from your portfolio website.`
      ].join('\n');
      window.location.href = `mailto:nithish.ibops@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // Re-run icons because V3 adds new Lucide placeholders after the original initialization.
  refreshIcons();
})();

/* =========================================================
   PORTFOLIO V4 — Morning/Night appearance + featured slider
   ========================================================= */
(() => {
  const root = document.documentElement;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];
  const savedTheme = localStorage.getItem('portfolio-theme');
  const initialTheme = savedTheme === 'morning' || savedTheme === 'night' ? savedTheme : 'night';

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.body.dataset.theme = theme;
    root.classList.toggle('theme-morning', theme === 'morning');
    root.classList.toggle('theme-night', theme === 'night');
    document.body.classList.toggle('theme-morning', theme === 'morning');
    document.body.classList.toggle('theme-night', theme === 'night');
    localStorage.setItem('portfolio-theme', theme);
    themeButtons.forEach(button => {
      const active = button.dataset.themeChoice === theme;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (metaTheme) metaTheme.setAttribute('content', theme === 'morning' ? '#f7f3ea' : '#07111f');
  }

  applyTheme(initialTheme);
  themeButtons.forEach(button => button.addEventListener('click', () => applyTheme(button.dataset.themeChoice)));

  const track = document.getElementById('featuredProjects');
  const prev = document.getElementById('featuredPrev');
  const next = document.getElementById('featuredNext');
  const count = document.getElementById('featuredCount');
  const dots = document.getElementById('featuredDots');

  if (track && prev && next && count && dots) {
    const cards = () => [...track.querySelectorAll('.featured-card')];
    let activeIndex = 0;
    let scrollTimer = 0;

    function formatCount(index, total) {
      return `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    }

    function buildDots() {
      const total = cards().length;
      dots.innerHTML = Array.from({ length: total }, (_, i) => `<button type="button" aria-label="Go to featured project ${i + 1}" data-slide="${i}" class="${i === 0 ? 'active' : ''}"></button>`).join('');
      count.textContent = total ? formatCount(0, total) : '00 / 00';
      dots.querySelectorAll('button').forEach(dot => dot.addEventListener('click', () => goTo(Number(dot.dataset.slide))));
    }

    function updateUI(index) {
      const total = cards().length;
      if (!total) return;
      activeIndex = Math.max(0, Math.min(total - 1, index));
      count.textContent = formatCount(activeIndex, total);
      dots.querySelectorAll('button').forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
      prev.disabled = activeIndex === 0;
      next.disabled = activeIndex === total - 1;
    }

    function goTo(index) {
      const items = cards();
      const target = items[Math.max(0, Math.min(items.length - 1, index))];
      if (!target) return;
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      updateUI(index);
    }

    function nearestCardIndex() {
      const items = cards();
      if (!items.length) return 0;
      const left = track.scrollLeft;
      let best = 0;
      let distance = Infinity;
      items.forEach((card, i) => {
        const d = Math.abs((card.offsetLeft - track.offsetLeft) - left);
        if (d < distance) { distance = d; best = i; }
      });
      return best;
    }

    buildDots();
    updateUI(0);
    prev.addEventListener('click', () => goTo(activeIndex - 1));
    next.addEventListener('click', () => goTo(activeIndex + 1));
    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); goTo(activeIndex + 1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(activeIndex - 1); }
    });
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => updateUI(nearestCardIndex()), 90);
    }, { passive: true });
    window.addEventListener('resize', () => updateUI(nearestCardIndex()));
  }

  refreshIcons();
})();
