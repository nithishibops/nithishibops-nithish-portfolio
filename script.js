const projects = [
  {title:'Payment Gateway Operations Dashboard', category:'FinTech', type:'FINTECH / PAYMENTS', desc:'Transaction success/failure monitoring, PSP and bank performance, merchant analytics and failure-reason analysis.', tags:['Power BI','DAX','Payments'], url:'https://payment-gateway-analysis.vercel.app/', accent:'sky'},
  {title:'Banking Operations Dashboard', category:'Banking', type:'BANKING ANALYTICS', desc:'Customer, deposits, loans, account balances, branch performance and loan-to-deposit analytics.', tags:['Power BI','Banking','Operations'], url:'https://banking-operations-dashboard-ashen.vercel.app/', accent:'gold'},
  {title:'Finance & Investment Analytics Dashboard', category:'Finance', type:'FINANCE / INVESTMENT', desc:'Multi-page finance intelligence covering revenue, profit, cost, budget control, business drivers and investment products.', tags:['Power BI','DAX','Financial Modeling'], url:'https://finance-budget-analytics-dashboard.vercel.app/', accent:'violet'},
  {title:'Business Budget & Performance Dashboard', category:'Finance', type:'BUSINESS ANALYTICS', desc:'Executive business-performance reporting with revenue, profit, budget, cost control and departmental performance.', tags:['Power BI','Budget','Performance'], url:'https://business-budget-five.vercel.app/', accent:'green'},
  {title:'E-Commerce Analytics Dashboard', category:'Sales', type:'E-COMMERCE', desc:'Sales, profit, orders, customers, delivery performance, payment method and category/city analytics.', tags:['Power BI','Sales','Customers'], url:'https://e-comerce-analytics-dashboard.vercel.app/', accent:'sky'},
  {title:'Retail Sales Analytics Dashboard', category:'Sales', type:'RETAIL ANALYTICS', desc:'Retail sales, product, customer, regional and commercial performance analysis.', tags:['Power BI','Retail','Sales'], url:'https://retail-sales-analytics-dashboard-nine.vercel.app/', accent:'gold'},
  {title:'Sales Performance Dashboard', category:'Sales', type:'BUSINESS ANALYTICS', desc:'Sales-performance reporting covering revenue, products, customers, regions and growth KPIs.', tags:['Power BI','DAX','Excel'], url:'https://sales-analytics-dashboard-snowy.vercel.app/', accent:'violet'},
  {title:'Hotel Analytics Dashboard', category:'Operations', type:'HOSPITALITY ANALYTICS', desc:'Four-page hotel analytics covering executive overview, booking analytics, revenue & operations and guest experience.', tags:['Power BI','Hospitality','Operations'], url:'https://hotel-analytics-tau.vercel.app/', accent:'green'},
  {title:'Manufacturing Operations Dashboard', category:'Operations', type:'MANUFACTURING ANALYTICS', desc:'Production, quality, inventory, operational efficiency, cost and regional plant performance.', tags:['Power BI','Operations','Quality'], url:'https://manufacturing-operations-dashboard.vercel.app/', accent:'sky'},
  {title:'Supply Chain Analytics Dashboard', category:'Operations', type:'SUPPLY CHAIN', desc:'Inventory, logistics, procurement and supply-chain operational performance analysis.', tags:['Power BI','Supply Chain','Inventory'], url:'https://supply-chain-analytics-dashboard-pi.vercel.app/', accent:'gold'},
  {title:'HR Analytics Dashboard', category:'People', type:'PEOPLE ANALYTICS', desc:'Workforce, HR KPIs and employee-performance analytics for management reporting.', tags:['Power BI','HR','People'], url:'https://hr-analytics-dashboard-weld.vercel.app/', accent:'violet'},
  {title:'Hospital Analytics Dashboard', category:'Healthcare', type:'HEALTHCARE ANALYTICS', desc:'Patient, appointment, revenue, satisfaction and hospital performance analytics.', tags:['Power BI','Healthcare','Operations'], url:'https://hospital-analytics-dashboard.vercel.app/', accent:'green'},
  {title:'Government of India — People Analytics Dashboard', category:'Government', type:'DATA ANALYTICS', desc:'Five-page national analytics covering population, welfare, income, demographics and taxation across states and districts.', tags:['Power BI','DAX','Visualization'], url:'https://population-analytics-dashboard.vercel.app/', accent:'sky'},
  {title:'Citi Executive Analytics Dashboard', category:'Banking', type:'BANKING / EXECUTIVE ANALYTICS', desc:'Executive banking dashboard covering total assets, deposits, revenue, profitability, balance-sheet trends, asset composition and operating indicators.', tags:['Banking','Financial Analytics','Interactive Web'], url:'https://citi-executive-dashboard.vercel.app/', accent:'gold'},
  {title:'World Analytics — Global Outlook', category:'Global', type:'GLOBAL ANALYTICS', desc:'Interactive global dashboard covering population, demographics, economy, employment, human development, markets, companies, sports and country-level outlook analysis.', tags:['Global Data','Analytics','Interactive Web'], url:'https://world-analytics.vercel.app/#overview', accent:'violet'},
  {title:'India 2027 Estimated Analytics', category:'Government', type:'INDIA / DEVELOPMENT ANALYTICS', desc:'Interactive India analytics dashboard covering population, welfare, jobs, income, demographics, taxation and district-level exploration using clearly labelled estimated data.', tags:['India','Population','Development'], url:'https://india-2027-estimated.vercel.app/', accent:'green'}
];

const projectFilters = document.getElementById('projectFilters');
const projectsGrid = document.getElementById('projectsGrid');
const categories = ['All', ...new Set(projects.map(p => p.category))];

function renderFilters(){
  projectFilters.innerHTML = categories.map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" data-category="${c}">${c}</button>`).join('');
  projectFilters.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
    projectFilters.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.category);
  }));
}

function renderProjects(category='All'){
  const filtered = category==='All' ? projects : projects.filter(p=>p.category===category);
  projectsGrid.innerHTML = filtered.map((p,i)=>`
    <article class="project-card reveal visible" data-accent="${p.accent}">
      <span class="project-type">${p.type}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="project-footer">
        <a class="project-link" href="${p.url}" target="_blank" rel="noopener">View live dashboard →</a>
        <span class="project-number">${String(i+1).padStart(2,'0')}</span>
      </div>
    </article>
  `).join('');
}

renderFilters();
renderProjects();

const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');

function setMenu(open){
  navMenu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuToggle.textContent = open ? '×' : '☰';
}

menuToggle.addEventListener('click',()=>setMenu(!navMenu.classList.contains('open')));
document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

document.addEventListener('keydown',e=>{
  if(e.key === 'Escape' && navMenu.classList.contains('open')){
    setMenu(false);
    menuToggle.focus();
  }
});

window.addEventListener('resize',()=>{
  if(window.innerWidth > 1020 && navMenu.classList.contains('open')) setMenu(false);
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.10});
revealEls.forEach(el=>observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-link')];
window.addEventListener('scroll',()=>{
  let current='home';
  sections.forEach(s=>{ if(window.scrollY >= s.offsetTop - 140) current=s.id; });
  links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')===`#${current}`));
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 600);
});

document.getElementById('backToTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('currentYear').textContent = new Date().getFullYear();
