
  // Email popup 
  let popupTimer;
  function toggleEmail() {
    const popup = document.getElementById("email-popup");
    popup.classList.toggle("show");
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => popup.classList.remove("show"), 3000);
  }
  function copyEmail() {
    const email = document.getElementById("email-text").innerText;
    const popup = document.getElementById("email-popup");
    navigator.clipboard.writeText(email);
    const btn = document.querySelector(".copy-btn");
    btn.innerText = "copiado!";
    setTimeout(() => { btn.innerText = "copiar"; }, 1500);
    setTimeout(() => { popup.classList.remove("show"); }, 3000);
  }
  document.addEventListener("click", function (event) {
    const popup = document.getElementById("email-popup");
    const button = document.querySelector(".email-btn");
    if (!popup.contains(event.target) && !button.contains(event.target))
      popup.classList.remove("show");
  });

  // ── Year ─────────────────────────────────────────────────────────
  document.getElementById('year').textContent = new Date().getFullYear();


// Language translations

const translations = {
  "pt-BR": {
    // NAV
    nav_about: "Sobre mim",
    nav_projects: "Projetos",
    nav_stacks: "Tecnologias",
    nav_contact: "Contato",
    // About
    about_title: "Olá, sou",
    about_text: "Tenho cerca de 1 ano e meio de experiência profissional atuando com C#, .NET e SQL Server, desenvolvendo soluções eficientes e escaláveis. <br>Atualmente estou no último semestre de Ciência da Computação, sempre buscando evoluir tecnicamente e acompanhar as melhores práticas do mercado. <br>Tenho trabalhado no desenvolvimento de aplicações utilizando C#, .NET, integrações com APIs e conteinerização, com foco em deploy e operação em ambientes de nuvem.",
    // Stats
    stat_exp: "Anos de experiência",
    stat_cert: "Certificado AWS",
    stat_projects: "Projetos publicados em 2026",
    // Projects
    projects_label: "Portfólio",
    projects_desc: "Sinta-se livre para explorar alguns dos projetos acadêmicos e pessoais que trabalhei para desenvolver minhas habilidades técnicas.",
    projects_soon: "✦ Mais em breve…",
    project_link: "Ver no GitHub →",
    //1
    project1_title: "Sistema de Alertas de alagamentos - TCC",
    project1_desc: "Meu projeto de conclusão de curso onde foi desenvolvido um sistema de alertas automatizados para alagamentos na cidade com a visão de realizar uma melhoria na mobilidade urbana eficiente.",
    //2
    project2_title: "Web Portfolio",
    project2_desc: "Este portfólio pessoal, construído do zero com HTML, CSS e JavaScript.",
    //3
    project3_title: "Face Recognition",
    project3_desc: "Aplicação de reconhecimento facial multifator, desenvolvida para um projeto de aula na faculdade.",
    // Stacks
    stacks_title: "Stacks",
    stacks_label: "Tecnologias",
    stacks_desc: "Algumas das ferramentas e tecnologias com as quais trabalho no dia a dia e busco desenvolver com projetos pessoais.",
    // Contact
    contact_label: "Fale comigo",
    contact_desc: "Aberto a novas oportunidades e colaborações. Sinta-se à vontade para me encontrar nas redes sociais ou entrar em contato clicando no e-mail.",
    contact_title: "Contato",
    contact_copy: "Copiar",
    contact_copied: "Copiado!",
    // Footer
    footer_rights: "Todos os direitos reservados"
  },

  "en-US": {
     // NAV
    nav_about: "About me",
    nav_projects: "Projects",
    nav_stacks: "Stacks",
    nav_contact: "Contact",
    // About
    about_title: "Hello, I'm",
    about_text: "I have around 1.5 years of professional experience working with C#, .NET, and SQL Server, building efficient and scalable solutions.I am currently in the final semester of my Computer Science degree, continuously improving my skills and staying aligned with industry best practices.I have been working on application development using C#, .NET, API integrations, and containerization, with a focus on cloud deployment and operations.",
    // Stats
    stat_exp: "Years of experience",
    stat_cert: "AWS Certificate",
    stat_projects: "Projects published in 2026",
    // Projects
    projects_label: "Portfolio",
    projects_desc: "Feel free to explore some of the academic and personal projects I have worked on to develop my technical skills.",
    projects_soon: "✦ More coming soon…",
    project_link: "View on GitHub →",
    //1
    project1_title: "Flood Alert System - Thesis",
    project1_desc: "My thesis project where an automated alert system for floods in the city was developed with the vision of improving urban mobility efficiency.",
    //2
    project2_title: "Web Portfolio",
    project2_desc: "This is my personal portfolio, built with HTML, CSS and JavaScript.",
    //3
    project3_title: "Face Recognition",
    project3_desc: "Multi-factor facial recognition application, developed for a university class project.",
    // Stacks
    stacks_title: "Stacks",
    stacks_label: "Technologies",
    stacks_desc: "Some of the tools and technologies I work with daily and seek to develop with personal projects.",
    // Contact
    contact_label: "Contact me",
    contact_desc: "Open to new opportunities and collaborations. Feel free to find me on social media or get in touch by clicking the email.",
    contact_title: "Contact",
    contact_copy: "Copy",
    contact_copied: "Copied!",
    // Footer
    footer_rights: "All rights reserved"
  }
};



// Detect user language
function getUserLanguage() {
  const savedLang = localStorage.getItem("lang");

  if (savedLang) return savedLang;

  const browserLang = navigator.language || navigator.userLanguage;

  if (browserLang.startsWith("pt")) {
    return "pt-BR";
  }

  return "en-US";
}
// Translate a single element (break line bio)
element.innerHTML = translations[selectedLang][key];
// Apply translations
function applyTranslations(lang) {
  const selectedLang = translations[lang] ? lang : "en-US";

  // salva escolha
  localStorage.setItem("lang", selectedLang);

  // percorre elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (translations[selectedLang][key]) {
      element.innerText = translations[selectedLang][key];
    }
  });
}



// Starter
document.addEventListener("DOMContentLoaded", () => {
  const lang = getUserLanguage();
  applyTranslations(lang);
});


// Manual change language
function setLanguage(lang) {
  applyTranslations(lang);
}