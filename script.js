/* =========================================================
   NITHISH PORTFOLIO - EASY UPDATE AREA
   Change your personal information and project links here.
========================================================= */

const portfolioData = {
  name: "Nithish Kumar",
  title: "Business Intelligence & Data Analytics | Banking & FinTech Operations",
  description:
    "I turn transaction and operational data into executive dashboards and decision-support reporting — spanning banking alliances, merchant onboarding, payment operations, KYC/AML and investment operations, backed by Power BI, DAX and Advanced Excel/VBA automation. Also available for freelance dashboard and automation projects.",
  email: "Nithish.ibops@gmail.com",
  phone: "+971 54 164 3097",
  linkedin: "https://www.linkedin.com/in/nithish-kumar-s-5a0574338/",
  github: "https://github.com/nithishibops",
  location: "Dubai, UAE",
  resume: "assets/Resume.pdf",
  profileImage: "assets/profile.jpg.jpg"
};


/* =========================================================
   SKILLS
========================================================= */

const skills = [
  { icon: "BI", title: "Power BI & DAX", description: "Interactive dashboards, DAX measures, KPI development and time intelligence." },
  { icon: "PQ", title: "Power Query & Data Modeling", description: "Star schema design, data transformation and analytical data models." },
  { icon: "EX", title: "Advanced Excel & VBA", description: "Pivot tables, VLOOKUP, macros and automation of recurring reporting workflows." },
  { icon: "BO", title: "Banking & FinTech Operations", description: "Banking alliances, merchant onboarding, PSP/TSP coordination and payment gateway operations." },
  { icon: "KY", title: "KYC, AML & Compliance", description: "Customer due diligence, documentation review, regulatory checks and FATCA awareness." },
  { icon: "IO", title: "Investment & RTA Operations", description: "IPO, Rights Issues, Buybacks, Corporate Actions, settlement and reconciliation." },
  { icon: "MI", title: "MIS & KPI Reporting", description: "Management reporting, variance analysis, quality control and performance monitoring." },
  { icon: "M365", title: "Microsoft 365 Automation", description: "Freelance-ready automation across Excel, Word and PowerPoint workflows." }
];


/* =========================================================
   FREELANCE / BUSINESS SERVICES
   Shown in the "Freelance & Business" section so potential
   clients can see what work is available to hire for.
========================================================= */

const services = [
  {
    icon: "01",
    title: "Power BI Dashboard Development",
    description: "End-to-end interactive dashboards — data modelling, DAX measures, star schema design and executive-ready visuals."
  },
  {
    icon: "02",
    title: "Excel & VBA Automation",
    description: "Automate recurring reports, consolidate files and eliminate repetitive manual work with VBA macros and templates."
  },
  {
    icon: "03",
    title: "MIS & KPI Reporting Systems",
    description: "Build recurring management reports and KPI trackers tailored to how your business actually operates."
  },
  {
    icon: "04",
    title: "Microsoft 365 Solutions",
    description: "Automation and template work across Excel, Word and PowerPoint for teams and individuals."
  },
  {
    icon: "05",
    title: "Data Cleaning & Transformation",
    description: "Power Query-based data prep — cleaning, merging and structuring raw data before it reaches a dashboard."
  },
  {
    icon: "06",
    title: "Banking & FinTech Ops Consulting",
    description: "Process documentation and workflow advisory for merchant onboarding, KYC and reconciliation, drawn from real banking-ops experience."
  }
];


/* =========================================================
   PROJECTS
   Each project can have either a single "image", or an
   "images" array (for multi-page dashboards). Each entry in
   "images" is { src, label } and renders as a page tab in
   the gallery lightbox — e.g. Page 1, Page 2, Page 3...
========================================================= */

const projects = [
  {
    title: "E-Commerce Analytics Dashboard",
    images: [{ src: "assets/projects/E - Commerce Analytics Dashbooards.png", label: "Overview" }],
    category: "Power BI",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "End-to-end e-commerce dashboard covering sales & profit trends, orders, customer response, payment method distribution and sales by city."
  },
  {
    title: "Hotel Analytics Dashboard",
    images: [
      { src: "assets/projects/Hotel Analytics (1).png", label: "Page 1" },
      { src: "assets/projects/Hotel Analytics (2).png", label: "Page 2" },
      { src: "assets/projects/Hotel Analytics (3).png", label: "Page 3" },
      { src: "assets/projects/Hotel Analytics (4).png", label: "Page 4" }
    ],
    category: "Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Data Analysis"],
    description:
      "4-page hotel performance suite: Executive Overview, Booking Analytics, Revenue & Operations and Guest Experience, covering bookings, occupancy, revenue and guest ratings."
  },
  {
    title: "Healthcare Analytics Dashboard",
    images: [{ src: "assets/projects/imagehealthcare_dashboard.png", label: "Overview" }],
    category: "Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "Hospital operations dashboard tracking patients, appointments, revenue, satisfaction scores and department-wise performance across multiple hospitals."
  },
  {
    title: "Retail Sales Analytics Dashboard",
    images: [{ src: "assets/projects/imageretailsales_dashboard.png", label: "Overview" }],
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Retail performance dashboard covering sales, profit, quantity and margin KPIs with regional breakdowns and product-level trend analysis."
  },
  {
    title: "Banking Operations Dashboard",
    images: [{ src: "assets/projects/imagesbanking_dashboard.png", label: "Overview" }],
    category: "Banking Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "Interactive banking analytics dashboard covering customers, deposits, loans, branches and financial KPIs."
  },
  {
    title: "HR Analytics Dashboard",
    images: [{ src: "assets/projects/imageshranalytics_dashboard.png", label: "Overview" }],
    category: "HR Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Workforce analytics dashboard covering employee demographics, attrition, departments and performance."
  },
  {
    title: "Payment Gateway Operations Dashboard",
    images: [{ src: "assets/projects/imagespaymentgatway_dashboard.png", label: "Overview" }],
    category: "Power BI",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Dashboard for monitoring payment transactions, success rates, failures, settlements and operational KPIs."
  },
  {
    title: "Supply Chain Analytics Dashboard",
    images: [{ src: "assets/projects/imageSupplychainalytics_dashboard.png", label: "Overview" }],
    category: "Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "Supply chain performance dashboard tracking sales, profit, inventory by warehouse, shipping status and supplier-level delivery metrics."
  },
  {
    title: "Manufacturing Operations Dashboard",
    images: [
      { src: "assets/projects/Page1-Executiveoverview.png", label: "Page 1" },
      { src: "assets/projects/Page2-Productionanalytics.png", label: "Page 2" },
      { src: "assets/projects/Page3-Qualityanalytics.png", label: "Page 3" },
      { src: "assets/projects/Page4-inventorycost.png", label: "Page 4" }
    ],
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "4-page manufacturing dashboard (Falcon Manufacturing LLC) covering executive overview, production analytics, quality analytics and inventory & cost across plants and product lines."
  },
  {
    title: "Finance & Investment Analytics Dashboard",
    images: [
      { src: "assets/projects/PAGE1-ExecutiveDashboard.png", label: "Page 1" },
      { src: "assets/projects/PAGE2-RevenueProfit.png", label: "Page 2" },
      { src: "assets/projects/PAGE3-CostMangment.png", label: "Page 3" },
      { src: "assets/projects/PAGE4-Business drivers.png", label: "Page 4" }
    ],
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Financial Modelling"],
    description:
      "4-page finance dashboard covering executive overview, revenue & profit intelligence, cost/budget control and business driver deep-dives across regions and investment products."
  },
  {
    title: "Government of India — People Analytics Dashboard",
    images: [
      { src: "assets/projects/Population Analytics 1.png", label: "Page 1" },
      { src: "assets/projects/Population Analytics 2.png", label: "Page 2" },
      { src: "assets/projects/Population Analytics 3.png", label: "Page 3" },
      { src: "assets/projects/Population Analytics 4.png", label: "Page 4" },
      { src: "assets/projects/Population Analytics 5.png", label: "Page 5" }
    ],
    category: "Data Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Visualization"],
    description:
      "5-page national analytics dashboard covering population, government welfare, income & performance, demographics and taxation across states and districts."
  },
  {
    title: "Sales Performance Dashboard",
    images: [{ src: "assets/projects/imagessales_dashboard.png", label: "Overview" }],
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Sales performance dashboard covering revenue, products, customers, regions and growth KPIs."
  },
  {
    title: "Productivity Dashboard (Excel)",
    images: [{ src: "assets/projects/Productivity Dashboard.png", label: "Overview" }],
    category: "Excel Analytics",
    filter: ["excel", "business"],
    tools: ["Excel", "Pivot Tables", "VBA"],
    description:
      "Excel-based sales productivity dashboard with slicers for product and salesperson, tracking total sales, units sold, profit and regional performance."
  },
  {
    title: "Team Analytics Dashboard (Excel)",
    images: [{ src: "assets/projects/Dashboard For Addendence.png", label: "Overview" }],
    category: "Excel Analytics",
    filter: ["excel", "analytics"],
    tools: ["Excel", "Pivot Tables", "VBA"],
    description:
      "HR/team analytics workbook tracking headcount, attrition, diversity, department distribution and employee stability, filterable by department and reporting manager."
  }
];


/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  {
    date: "Ongoing",
    role: "Freelance Power BI & Microsoft Automation Consultant",
    company: "Self-Employed / Independent Consulting",
    description:
      "Available for freelance and contract work building Power BI dashboards, Excel/VBA automation and Microsoft 365-based reporting solutions for businesses and individuals.",
    points: [
      "Design and build end-to-end Power BI dashboards with DAX measures, Power Query transformations and interactive reporting.",
      "Automate recurring Excel reports and workflows using VBA macros to save manual reporting time.",
      "Build MIS and KPI reporting systems tailored to specific business needs.",
      "Open to new freelance engagements — dashboards, automation, and Microsoft Office-based data consulting."
    ]
  },
  {
    date: "Oct 2025 — Present",
    role: "Senior Banking Alliance Executive",
    company: "Primasoft Technology EST, Dubai, UAE",
    description:
      "Managing strategic relationships with banking partners, PSPs, TSPs and merchants, supporting onboarding, activation and ongoing operational coordination across banking alliances.",
    points: [
      "Lead end-to-end merchant onboarding, reviewing KYC documentation, corporate records and compliance requirements to improve process visibility and turnaround time.",
      "Coordinate with banks, PSPs, TSPs and internal stakeholders to validate information and support payment gateway integration and merchant go-live activities.",
      "Review merchant and partner documentation for completeness, accuracy and regulatory alignment, reducing onboarding errors and compliance exceptions.",
      "Build Power BI dashboards and Advanced Excel/VBA-based MIS reports, automating recurring reports and reducing manual reporting effort.",
      "Monitor FinTech and payment-industry developments to inform stakeholder communication and continuous process improvement."
    ]
  },
  {
    date: "Oct 2023 — Aug 2025",
    role: "Senior Assistant / Executive — Registry & RTA",
    company: "Cameo Corporate Services Ltd, Chennai, India",
    description:
      "Supported investment banking and capital markets operations within a Registrar and Transfer Agent (RTA) environment.",
    points: [
      "Supported IPO processing, Rights Issues, Buybacks, Listing Offers and Corporate Actions within an RTA environment.",
      "Processed investor fund transactions and executed settlement and reconciliation activities, maintaining data accuracy across high-volume processing.",
      "Developed MIS reports and operational summaries supporting performance monitoring, exception tracking and management decision-making.",
      "Validated transaction records and resolved discrepancies by coordinating with internal teams, customers, banks and financial institutions."
    ]
  },
  {
    date: "Apr 2022 — Sep 2023",
    role: "Executive — Operations (Repository)",
    company: "Computer Age Management Services Ltd, Chennai, India",
    description:
      "Handled KYC, repository operations and MIS reporting, with day-to-day coordination for an operations team.",
    points: [
      "Performed KYC checks, customer record updates, bank-detail verification and penny-drop validation across repository operations.",
      "Prepared and maintained MIS reports, campaign reports and operational dashboards for performance monitoring.",
      "Led day-to-day coordination for an operations team and conducted quality checks to maintain processing accuracy.",
      "Reviewed operational data and documentation, identified discrepancies and coordinated corrections to strengthen reporting reliability."
    ]
  }
];


/* =========================================================
   EDUCATION & CERTIFICATIONS
========================================================= */

const education = [
  {
    year: "2020 — 2023",
    title: "Bachelor of Commerce",
    subtitle: "Computer Applications (B.Com CA) — 79.01%",
    institution: "Alagappa University (Syed Ammal Arts and Science College)"
  },
  {
    year: "2018 — 2020",
    title: "Higher Secondary Certificate (H.S.C.)",
    subtitle: "76.16%",
    institution: "De Britto Hr. Sec. School, Devakottai"
  },
  {
    year: "Certification · 2025",
    title: "Certified Investment Banking Operations Professional",
    subtitle: "Financial Markets & Banking Operations",
    institution: "Imarticus Learning, Chennai",
    certImage: "assets/certificates/investment-banking-certificate.png",
    certPdf: "assets/certificates/investment-banking-certificate.pdf"
  },
  {
    year: "Certification · 2021",
    title: "Diploma in Office Automation",
    subtitle: "Certificate of Proficiency — Grade A",
    institution: "SRM Infotech Computer Education",
    certImage: "assets/certificates/office-automation-certificate.png",
    certPdf: "assets/certificates/office-automation-certificate.pdf"
  },
  {
    year: "Certification · 2021",
    title: "Tally Academy Fundamental Program",
    subtitle: "Certificate of Excellence — Grade A",
    institution: "Tally Academy, InfinityPMC Pvt. Ltd.",
    certImage: "assets/certificates/tally-certificate.png",
    certPdf: "assets/certificates/tally-certificate.pdf"
  }
];


/* =========================================================
   ACHIEVEMENTS & LANGUAGES
========================================================= */

const achievements = [
  "First Class in all undergraduate semesters",
  "Inter-university football representative",
  "Hostel team captain"
];

const languages = ["English (Read, Write, Speak)", "Tamil (Read, Write, Speak)"];


/* =========================================================
   RENDER PERSONAL INFORMATION
========================================================= */

function setLink(elementId, url) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.href = url;
}

document.getElementById("heroName").textContent = portfolioData.name;
document.getElementById("cardName").textContent = portfolioData.name;
document.getElementById("footerName").textContent = portfolioData.name;
document.getElementById("heroTitle").textContent = portfolioData.title;
document.getElementById("heroDescription").textContent = portfolioData.description;
document.getElementById("contactLocation").textContent = portfolioData.location;

setLink("linkedinLink", portfolioData.linkedin);
setLink("githubLink", portfolioData.github);
setLink("resumeLink", portfolioData.resume);
setLink("contactLinkedIn", portfolioData.linkedin);
setLink("contactGitHub", portfolioData.github);

const emailHref = `mailto:${portfolioData.email}`;

document.getElementById("emailLink").href = emailHref;
document.getElementById("contactEmail").href = emailHref;
document.getElementById("contactEmail").textContent = portfolioData.email;
document.getElementById("contactEmailButton").href = emailHref;

const contactPhone = document.getElementById("contactPhone");
if (contactPhone) {
  contactPhone.href = `tel:${portfolioData.phone.replace(/\s+/g, "")}`;
  contactPhone.textContent = portfolioData.phone;
}


/* =========================================================
   PROFILE IMAGE FALLBACK
========================================================= */

const profileImage = document.getElementById("profileImage");
const profileFallback = document.getElementById("profileFallback");

profileImage.src = portfolioData.profileImage;

profileImage.addEventListener("error", () => {
  profileImage.style.display = "none";
  profileFallback.style.display = "flex";
});

profileFallback.style.display = "none";


/* =========================================================
   RENDER SKILLS
========================================================= */

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach(skill => {
  skillsGrid.innerHTML += `
    <div class="skill-card">
      <div class="skill-icon">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <p>${skill.description}</p>
    </div>
  `;
});


/* =========================================================
   RENDER FREELANCE / BUSINESS SERVICES
========================================================= */

const servicesGrid = document.getElementById("servicesGrid");

if (servicesGrid) {
  services.forEach(service => {
    servicesGrid.innerHTML += `
      <div class="service-card">
        <span class="service-number">${service.icon}</span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;
  });
}


/* =========================================================
   RENDER PROJECT FILTERS
========================================================= */

const filterLabels = [
  { key: "all", label: "All" },
  { key: "powerbi", label: "Power BI" },
  { key: "excel", label: "Excel" },
  { key: "business", label: "Business" },
  { key: "analytics", label: "Analytics" }
];

const projectFilters = document.getElementById("projectFilters");

filterLabels.forEach((filter, index) => {
  projectFilters.innerHTML += `
    <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${filter.key}">
      ${filter.label}
    </button>
  `;
});


/* =========================================================
   RENDER PROJECTS
========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((project, projectIndex) => {
  const tech = project.tools.map(tool => `<span>${tool}</span>`).join("");
  const images = project.images || [];
  const hasImage = images.length > 0 && images[0].src && images[0].src.trim() !== "";
  const isMultiPage = images.length > 1;

  projectsGrid.innerHTML += `
    <article class="project-card" data-category="${project.filter.join(" ")}">

      <div class="project-image" data-project-index="${projectIndex}">
        ${
          hasImage
            ? `<img src="${images[0].src}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
            : ""
        }

        <div class="project-image-placeholder" style="${hasImage ? "display:none;" : "display:flex;"}">
          Dashboard screenshot coming soon
        </div>

        ${isMultiPage ? `<span class="page-badge">${images.length} Pages</span>` : ""}

        <div class="project-overlay">
          <span class="project-view">${isMultiPage ? "View All Pages" : "View Dashboard"}</span>
        </div>
      </div>

      <div class="project-content">
        <span class="project-tag">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="project-tech">${tech}</div>

        <div class="project-links">
          <a class="open-gallery" data-project-index="${projectIndex}">
            ${isMultiPage ? `Explore all ${images.length} pages →` : "View full dashboard →"}
          </a>
        </div>
      </div>

    </article>
  `;
});


/* =========================================================
   PROJECT FILTERING
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === "all" || category.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


/* =========================================================
   GALLERY LIGHTBOX (multi-page dashboard viewer)
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxPages = document.getElementById("lightboxPages");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let activeProject = null;
let activePage = 0;

function openLightbox(projectIndex) {
  const project = projects[projectIndex];
  if (!project || !project.images || project.images.length === 0) return;

  activeProject = project;
  activePage = 0;

  renderLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderLightbox() {
  const images = activeProject.images;
  const current = images[activePage];

  lightboxTitle.textContent = `${activeProject.title} — ${current.label}`;
  lightboxImage.src = current.src;
  lightboxImage.alt = `${activeProject.title} ${current.label}`;

  const showNav = images.length > 1;
  lightboxPrev.style.display = showNav ? "flex" : "none";
  lightboxNext.style.display = showNav ? "flex" : "none";

  lightboxPages.innerHTML = "";
  if (showNav) {
    images.forEach((img, index) => {
      const btn = document.createElement("button");
      btn.className = "lightbox-page-btn" + (index === activePage ? " active" : "");
      btn.textContent = img.label;
      btn.addEventListener("click", () => {
        activePage = index;
        renderLightbox();
      });
      lightboxPages.appendChild(btn);
    });
  }
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  activeProject = null;
}

document.querySelectorAll(".project-image, .open-gallery").forEach(el => {
  el.addEventListener("click", () => {
    const index = parseInt(el.dataset.projectIndex, 10);
    openLightbox(index);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

lightboxPrev.addEventListener("click", () => {
  if (!activeProject) return;
  activePage = (activePage - 1 + activeProject.images.length) % activeProject.images.length;
  renderLightbox();
});

lightboxNext.addEventListener("click", () => {
  if (!activeProject) return;
  activePage = (activePage + 1) % activeProject.images.length;
  renderLightbox();
});

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxPrev.click();
  if (e.key === "ArrowRight") lightboxNext.click();
});


/* =========================================================
   RENDER EXPERIENCE
========================================================= */

const experienceTimeline = document.getElementById("experienceTimeline");

experience.forEach(item => {
  const points = item.points.map(point => `<li>${point}</li>`).join("");

  experienceTimeline.innerHTML += `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.role}</h3>
        <h4>${item.company}</h4>
        <p>${item.description}</p>
        <ul>${points}</ul>
      </div>
    </div>
  `;
});


/* =========================================================
   RENDER EDUCATION
========================================================= */

const educationGrid = document.getElementById("educationGrid");

education.forEach((item, index) => {
  const hasCert = !!item.certImage;

  educationGrid.innerHTML += `
    <div class="education-card">
      <span class="education-year">${item.year}</span>
      <h3>${item.title}</h3>
      <p>${item.subtitle}</p>
      <span>${item.institution}</span>
      ${
        hasCert
          ? `<div class="cert-actions">
              <a class="cert-view" data-cert-index="${index}">View Certificate</a>
              <a class="cert-download" href="${item.certPdf}" download>Download PDF</a>
            </div>`
          : ""
      }
    </div>
  `;
});

/* Certificate lightbox openers (reuses the same lightbox as project galleries) */
document.querySelectorAll(".cert-view").forEach(el => {
  el.addEventListener("click", () => {
    const item = education[parseInt(el.dataset.certIndex, 10)];
    if (!item || !item.certImage) return;

    activeProject = {
      title: item.title,
      images: [{ src: item.certImage, label: "Certificate" }]
    };
    activePage = 0;
    renderLightbox();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});


/* =========================================================
   RENDER ACHIEVEMENTS & LANGUAGES
========================================================= */

const achievementsList = document.getElementById("achievementsList");
const languagesList = document.getElementById("languagesList");

if (achievementsList) {
  achievementsList.innerHTML = achievements.map(item => `<li>${item}</li>`).join("");
}

if (languagesList) {
  languagesList.innerHTML = languages.map(item => `<li>${item}</li>`).join("");
}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("currentYear").textContent = new Date().getFullYear();


/* =========================================================
   SIMPLE SCROLL ANIMATION
========================================================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".skill-card, .project-card, .stat-card, .education-card, .timeline-item")
  .forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
