
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById("themeIcon").src = "https://img.icons8.com/ios-filled/50/ffffff/toggle-off.png";
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById("themeIcon").src = "https://img.icons8.com/ios-filled/50/000000/toggle-on.png";
    }

    function toggleTheme() {
      const body = document.body;
      const themeIcon = document.getElementById("themeIcon");

      body.classList.toggle("dark-mode");

      const isDark = body.classList.contains("dark-mode");

      themeIcon.src = isDark
        ? "https://img.icons8.com/ios-filled/50/ffffff/toggle-off.png"
        : "https://img.icons8.com/ios-filled/50/000000/toggle-on.png";

      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll("main section");
      const navLinks = document.querySelectorAll("nav ul li a");

      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
