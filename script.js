/* =========================================================
   NITHISH PORTFOLIO - EASY UPDATE AREA
   Change your personal information and project links here.
========================================================= */

const portfolioData = {
  name: "Nithish Kumar",
  title: "Data Analytics & Investment Banking Operations Professional",
  description:
    "I transform business and operational data into meaningful insights using Power BI, DAX, Excel, VBA automation and data analysis.",
  email: "Nithish.ibops@gmail.com",
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
  {
    icon: "BI",
    title: "Power BI",
    description: "Interactive dashboards, data modelling, Power Query and business intelligence."
  },
  {
    icon: "DX",
    title: "DAX",
    description: "Measures, KPIs, time intelligence, CALCULATE and analytical calculations."
  },
  {
    icon: "EX",
    title: "Microsoft Excel",
    description: "Advanced Excel, reporting, reconciliation, data cleaning and analysis."
  },
  {
    icon: "VB",
    title: "VBA Automation",
    description: "Automated reporting, file conversion, consolidation and repetitive workflows."
  },
  {
    icon: "DA",
    title: "Data Analysis",
    description: "Data cleaning, KPI development, trend analysis and business insights."
  },
  {
    icon: "BO",
    title: "Banking Operations",
    description: "Payment operations, reconciliation, merchant onboarding and reporting."
  },
  {
    icon: "KY",
    title: "KYC & Compliance",
    description: "Merchant documentation, due diligence, KYC and operational compliance processes."
  },
  {
    icon: "MI",
    title: "MIS Reporting",
    description: "Operational reporting, management information and performance tracking."
  }
];


/* =========================================================
   PROJECTS
   Replace YOUR-GITHUB-PROJECT-URL, dashboard links, and
   image paths (assets/projects/xxx.png) with your own files.
========================================================= */

const projects = [
  {
    title: "E-Commerce Analytics Dashboard",
    image: "assets/projects/E - Commerce Analytics Dashbooards.png",
    category: "Power BI",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "End-to-end e-commerce dashboard covering sales & profit trends, orders, customer response, payment method distribution and sales by city.",
    github: "https://github.com/nithishibops/YOUR-GITHUB-USERNAME/ecommerce-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Hotel Analytics Dashboard",
    image: "assets/projects/Hotel Analytics (1).png",
    category: "Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Data Analysis"],
    description:
      "4-page hotel performance suite: Executive Overview, Booking Analytics, Revenue & Operations and Guest Experience, covering bookings, occupancy, revenue and guest ratings.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/hotel-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Healthcare Analytics Dashboard",
    image: "assets/projects/imagehealthcare_dashboard.png",
    category: "Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "Hospital operations dashboard tracking patients, appointments, revenue, satisfaction scores and department-wise performance across multiple hospitals.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/healthcare-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Retail Sales Analytics Dashboard",
    image: "assets/projects/imageretailsales_dashboard.png",
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Retail performance dashboard covering sales, profit, quantity and margin KPIs with regional breakdowns and product-level trend analysis.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/retail-sales-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Banking Operations Dashboard",
    image: "assets/projects/imagesbanking_dashboard.png",
    category: "Banking Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "Interactive banking analytics dashboard covering customers, deposits, loans, branches and financial KPIs.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/banking-operations-dashboard",
    dashboard: "#"
  },
  {
    title: "HR Analytics Dashboard",
    image: "assets/projects/imageshranalytics_dashboard.png",
    category: "HR Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Workforce analytics dashboard covering employee demographics, attrition, departments and performance.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/hr-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Payment Gateway Operations Dashboard",
    image: "assets/projects/imagespaymentgatway_dashboard.png",
    category: "Power BI",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Dashboard for monitoring payment transactions, success rates, failures, settlements and operational KPIs.",
    github: "https://github.com/nithishibops/YOUR-GITHUB-USERNAME/payment-gateway-dashboard",
    dashboard: "#"
  },
  {
    title: "Supply Chain Analytics Dashboard",
    image: "assets/projects/imageSupplychainalytics_dashboard.png",
    category: "Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "Supply chain performance dashboard tracking sales, profit, inventory by warehouse, shipping status and supplier-level delivery metrics.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/supply-chain-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Manufacturing Operations Dashboard",
    image: "assets/projects/Page1-Executiveoverview.png",
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Data Modelling"],
    description:
      "4-page manufacturing dashboard (Falcon Manufacturing LLC) covering executive overview, production analytics, quality analytics and inventory & cost across plants and product lines.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/manufacturing-operations-dashboard",
    dashboard: "#"
  },
  {
    title: "Finance & Investment Analytics Dashboard",
    image: "assets/projects/PAGE1-ExecutiveDashboard.png",
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Financial Modelling"],
    description:
      "4-page finance dashboard covering executive overview, revenue & profit intelligence, cost/budget control and business driver deep-dives across regions and investment products.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/finance-investment-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Government of India — People Analytics Dashboard",
    image: "assets/projects/Population Analytics 1.png",
    category: "Data Analytics",
    filter: ["powerbi", "analytics"],
    tools: ["Power BI", "DAX", "Visualization"],
    description:
      "5-page national analytics dashboard covering population, government welfare, income & performance, demographics and taxation across states and districts.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/population-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Sales Performance Dashboard",
    image: "assets/projects/imagessales_dashboard.png",
    category: "Business Analytics",
    filter: ["powerbi", "business"],
    tools: ["Power BI", "DAX", "Excel"],
    description:
      "Sales performance dashboard covering revenue, products, customers, regions and growth KPIs.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/sales-analytics-dashboard",
    dashboard: "#"
  },
  {
    title: "Productivity Dashboard (Excel)",
    image: "assets/projects/Productivity Dashboard.png",
    category: "Excel Analytics",
    filter: ["excel", "business"],
    tools: ["Excel", "Pivot Tables", "VBA"],
    description:
      "Excel-based sales productivity dashboard with slicers for product and salesperson, tracking total sales, units sold, profit and regional performance.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/productivity-dashboard-excel",
    dashboard: "#"
  },
  {
    title: "Team Analytics Dashboard (Excel)",
    image: "assets/projects/Dashboard For Addendence.png",
    category: "Excel Analytics",
    filter: ["excel", "analytics"],
    tools: ["Excel", "Pivot Tables", "VBA"],
    description:
      "HR/team analytics workbook tracking headcount, attrition, diversity, department distribution and employee stability, filterable by department and reporting manager.",
    github: "https://github.com/YOUR-GITHUB-USERNAME/team-analytics-dashboard-excel",
    dashboard: "#"
  }
];


/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  {
    date: "2023 — Present",
    role: "Senior Assistant / Executive",
    company: "Banking & Operations",
    description:
      "Managing operational processes involving banking services, corporate actions, reporting, reconciliation and operational documentation.",
    points: [
      "Prepared operational and management reports.",
      "Worked on reconciliation and transaction reporting activities.",
      "Supported banking and payment operations.",
      "Worked with Excel-based operational workflows."
    ]
  },
  {
    date: "Analytics Journey",
    role: "Power BI & Data Analytics",
    company: "Self-Directed Projects",
    description:
      "Developed multiple portfolio projects focused on business intelligence, dashboard development, DAX and data analysis.",
    points: [
      "Developed interactive Power BI dashboards.",
      "Created DAX measures and KPI calculations.",
      "Built analytical data models.",
      "Automated Excel workflows using VBA."
    ]
  }
];


/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    year: "2021",
    title: "Bachelor of Commerce",
    subtitle: "Computer Applications",
    institution: "Syed Ammal Arts and Science College"
  },
  {
    year: "Certification",
    title: "Investment Banking Operations",
    subtitle: "Financial Markets & Banking Operations",
    institution: "Imarticus Learning"
  }
];


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


/* =========================================================
   PROFILE IMAGE FALLBACK
========================================================= */

const profileImage = document.getElementById("profileImage");
const profileFallback = document.getElementById("profileFallback");

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
    <button
      class="filter-btn ${index === 0 ? "active" : ""}"
      data-filter="${filter.key}">
      ${filter.label}
    </button>
  `;
});


/* =========================================================
   RENDER PROJECTS
========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach(project => {
  const tech = project.tools
    .map(tool => `<span>${tool}</span>`)
    .join("");

  const hasImage = project.image && project.image.trim() !== "";

  projectsGrid.innerHTML += `
    <article class="project-card" data-category="${project.filter.join(" ")}">

      <div class="project-image">
        ${
          hasImage
            ? `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
            : ""
        }

        <div
          class="project-image-placeholder"
          style="${hasImage ? "display:none;" : "display:flex;"}">
          Add your dashboard screenshot here
        </div>

        <div class="project-overlay">
          <a href="${project.dashboard}" class="project-view" target="_blank" rel="noopener">
            View Project
          </a>
        </div>
      </div>

      <div class="project-content">
        <span class="project-tag">${project.category}</span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="project-tech">
          ${tech}
        </div>

        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener">
            GitHub →
          </a>

          <a href="${project.dashboard}" target="_blank" rel="noopener">
            Dashboard →
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

education.forEach(item => {
  educationGrid.innerHTML += `
    <div class="education-card">
      <span class="education-year">${item.year}</span>
      <h3>${item.title}</h3>
      <p>${item.subtitle}</p>
      <span>${item.institution}</span>
    </div>
  `;
});


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
   DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☾" : "☀";
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

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("currentYear").textContent =
  new Date().getFullYear();


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
  .querySelectorAll(
    ".skill-card, .project-card, .stat-card, .education-card, .timeline-item"
  )
  .forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
      "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
