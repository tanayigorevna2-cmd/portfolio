document.addEventListener("DOMContentLoaded", () => {

  /////////////////////////////////////////
  // Показ куба та контенту
  const showBtn = document.getElementById('showCubeBtn');
  const cubeScene = document.getElementById('cubeScene');
  const cube = document.getElementById('cube');
  const contents = document.querySelectorAll('.content, .section');

  if (showBtn && cubeScene && cube) {
    showBtn.addEventListener('click', () => {
      showBtn.style.display = 'none';
      cubeScene.style.display = 'block';

      setTimeout(() => cube.classList.add('fly'), 3000);

      setTimeout(() => {
        cubeScene.style.display = 'none';
        // Показ всіх секцій
        contents.forEach(block => {
          block.style.display = 'block';
          block.classList.add('show');
        });

        // Спостерігач для карток проектів та навичок
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });

        document.querySelectorAll(".project-card, .skill-card")
                .forEach(card => observer.observe(card));

      }, 6000);
    });
  }

  //////////////////////////////////////////
  // Анімація секції "about" при скролі
  const about = document.querySelector('.about');
  if (about) {
    window.addEventListener('scroll', () => {
      const rect = about.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        about.classList.add('visible');
      }
    });
  }

  //////////////////////////////////////////
  // 🌐 ПЕРЕКЛАД (вбудований JSON)
  const translations = {
    uk: {
      pageTitle: "Моє портфоліо",
      langBtn: "🌐 Мова",
      showBtn: "Показати портфоліо",
      title: "Від ідеї — до працюючого сайту",
      desc: "Ідея стає дизайном, дизайн — сайтом, а сайт починає працювати на вас. Створюю сучасні лендінги з акцентом на стиль і функціональність.",
      aboutTitle: "Про мене",
      aboutText: "Привіт! Мене звати Таня. Я захоплююся веб-розробкою та дизайном і люблю створювати сайти, які не лише працюють бездоганно, а й виглядають красиво та сучасно. Мені цікаво експериментувати з кольорами, анімаціями та структурою сторінок, щоб кожен проект був унікальним.\nЛюблю вчитися новому — для мене важливо постійно розвиватися і вдосконалювати свої навички. Моя мета — поєднувати творчість і технології, щоб створювати сайти, які надихають та приносять користь користувачам.\nЯ відкритa до нових проєктів і завжди роблю все з душею та увагою до деталей.",
      projectsTitle: "Мої роботи",
      proj1Title: "Сайт для дайвінг-клубу",
      proj1Desc: "Адаптивний сайт з авторським дизайном, де кожна прокрутка ніби опускає користувача у глибини океану, відчуття повного занурення забезпечене.",
      proj2Title: "Сайт для діджитал-агентства",
      proj2Desc: "Адаптивний сайт креативного діджитал-агентства з моїм авторським дизайном у сучасному мінімалістичному стилі, що підкреслює креативність і професійність.",
      proj3Title: "Промо‑лендінг для цифрового інструменту Growth",
      proj3Desc: "Адаптивний сайт Growth‑інструменту. Стиль сучасний і мінімалістичний: чіткі блоки, лаконічна типографіка та структуровані секції підкреслюють функціональність продукту та роблять взаємодію простою й зрозумілою.",
      proj4Title: "Сайт-реклама для служби евакуатора",
      proj4Desc: "Адаптивний сайт служби евакуатора в Полтаві з чіткою структурою та зручними контактами для термінового виклику спецтранспорту.",
      projBtn: "Переглянути",
      skillsTitle: "Мої навички",
      skillHTML: "HTML",
      skillHTMLDesc: "Створюю чисту структуру сайту та зручну семантику.",
      skillCSS: "CSS",
      skillCSSDesc: "Працюю з адаптивністю, анімаціями та стильними інтерфейсами.",
      skillJS: "JavaScript",
      skillJSDesc: "Додаю інтерактив, логіку, фільтри та анімації на сайти.",
      contactTitle: "Зв’язатися зі мною",
      formTitle: "Напиши мені",
      formName: "Ім'я",
      formEmail: "Електронна пошта",
      formMessage: "Повідомлення",
      formSubmit: "Відправити",
      formSuccess: "Дякую! Ваше повідомлення надіслано."
    },
    en: {
      pageTitle: "My Portfolio",
      langBtn: "🌐 Language",
      showBtn: "Show portfolio",
      title: "From idea to a working website",
      desc: "The idea becomes a design, design becomes a website, and the website starts working for you. I create modern landing pages with an emphasis on style and functionality.",
      aboutTitle: "About me",
      aboutText: "Hello! My name is Tanya. I create modern and functional websites that combine design and technology. I enjoy experimenting with colors, animations, and page structures to make each project unique.My goal is to show that design can be stylish while the website s functionality remains flawless. I am open to new projects and always approach my work with passion and attention to detail. ",
      projectsTitle: "My Projects",
      proj1Title: "Website for Diving Club",
      proj1Desc: "Responsive site with custom design, where each scroll immerses the user into the depths of the ocean, providing a full sense of immersion.",
      proj2Title: "Website for Digital Agency",
      proj2Desc: "Responsive site of a creative digital agency with my custom design in a modern minimalist style, highlighting creativity and professionalism.",
      proj3Title: "Promo Landing for Growth Tool",
      proj3Desc: "Responsive site for Growth tool. Modern minimalist style: clear blocks, concise typography, and structured sections highlight functionality and make interaction simple and intuitive.",
      proj4Title: "Evacuator Service Promo Website",
      proj4Desc: "Responsive site of the Poltava evacuator service with clear structure and convenient contacts for urgent calls.",
      projBtn: "View",
      skillsTitle: "My Skills",
      skillHTML: "HTML",
      skillHTMLDesc: "I create a clean website structure and semantic markup.",
      skillCSS: "CSS",
      skillCSSDesc: "I work with responsiveness, animations, and stylish interfaces.",
      skillJS: "JavaScript",
      skillJSDesc: "I add interactivity, logic, filters, and animations to websites.",
      contactTitle: "Contact Me",
      formTitle: "Write to Me",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send",
      formSuccess: "Thank you! Your message has been sent."
    }
  };

  const translateWrapper = document.querySelector(".translate-wrapper");
  if (translateWrapper) {
    const translateBtn = translateWrapper.querySelector(".translate-btn");
    const languageMenu = translateWrapper.querySelector(".language-menu");
    const langButtons = languageMenu.querySelectorAll("button");

    function loadLang(lang) {
      const data = translations[lang];
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (!data[key]) return;
        if (el.tagName.toLowerCase() === "title") {
          document.title = data[key];
        } else {
          el.textContent = data[key];
        }
      });
    }

    translateBtn.addEventListener("click", e => {
      e.stopPropagation();
      languageMenu.classList.toggle("active");
    });

    langButtons.forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        loadLang(btn.dataset.lang);
        languageMenu.classList.remove("active");
      });
    });

    document.addEventListener("click", () => {
      languageMenu.classList.remove("active");
    });
  }

});

