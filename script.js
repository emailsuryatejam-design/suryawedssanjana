/* ============================================
   SURYA & SANJANA — Love Story Scripts
   ============================================ */

// --- Floating Hearts ---
(function createFloatingHearts() {
  const container = document.getElementById('heartsBg');
  const hearts = ['\u2665', '\u2764', '\u2661', '\u2763'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (12 + Math.random() * 16) + 'px';
    heart.style.animationDuration = (12 + Math.random() * 18) + 's';
    heart.style.animationDelay = Math.random() * 15 + 's';
    container.appendChild(heart);
  }
})();

// --- Scroll Fade-In Animations ---
(function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation for siblings
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll('.fade-in'));
        const siblingIndex = siblings.indexOf(entry.target);
        const delay = siblingIndex * 100;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

// --- Parallax on Hero ---
(function initParallax() {
  const hero = document.querySelector('.hero-content');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
    }
  }, { passive: true });
})();

// --- Typewriter effect on hero subtitle ---
(function typewriter() {
  const el = document.querySelector('.hero-subtitle');
  if (!el) return;

  const text = el.textContent;
  el.textContent = '';
  el.style.opacity = '1';
  el.style.visibility = 'visible';

  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(timer);
    }
  }, 60);

  // Wait for initial animation
  setTimeout(() => {
    el.textContent = '';
    i = 0;
  }, 900);

  setTimeout(() => {
    const t = setInterval(() => {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
      } else {
        clearInterval(t);
      }
    }, 60);
  }, 1000);
})();

// --- Smooth section reveals with title animation ---
(function initSectionReveals() {
  const titles = document.querySelectorAll('.section-title');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  titles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
    observer.observe(title);
  });
})();

// --- Image lazy loading with fade ---
(function initImageFade() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';

    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    }
  });
})();

// --- Ring sparkle effect ---
(function initRingSparkle() {
  const ring = document.querySelector('.ring-svg');
  if (!ring) return;

  ring.addEventListener('mouseenter', () => {
    ring.style.filter = 'drop-shadow(0 0 12px rgba(212, 165, 116, 0.8))';
  });
  ring.addEventListener('mouseleave', () => {
    ring.style.filter = 'none';
  });
})();

// --- Background Music with Play Overlay ---
(function initMusic() {
  const audio = document.getElementById('bgMusic');
  const overlay = document.getElementById('playOverlay');
  const toggle = document.getElementById('musicToggle');
  const icon = document.getElementById('musicIcon');
  const label = document.getElementById('musicLabel');
  let isPlaying = false;

  function startMusic() {
    audio.volume = 0.4;
    audio.play().then(() => {
      isPlaying = true;
      overlay.classList.add('hidden');
      toggle.classList.add('visible');
      icon.className = 'music-icon playing';
      label.textContent = 'Aaj Se Teri';
    }).catch(() => {
      // Autoplay blocked, keep overlay visible
    });
  }

  // Start on first tap/click anywhere on overlay
  overlay.addEventListener('click', startMusic);
  overlay.addEventListener('touchstart', startMusic, { once: true });

  // Toggle button
  toggle.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      icon.className = 'music-icon paused';
      label.textContent = 'Play';
    } else {
      audio.play();
      isPlaying = true;
      icon.className = 'music-icon playing';
      label.textContent = 'Aaj Se Teri';
    }
  });

  // Try autoplay immediately (works if user has interacted with site before)
  audio.volume = 0.4;
  const autoplayPromise = audio.play();
  if (autoplayPromise !== undefined) {
    autoplayPromise.then(() => {
      isPlaying = true;
      overlay.classList.add('hidden');
      toggle.classList.add('visible');
      icon.className = 'music-icon playing';
    }).catch(() => {
      // Autoplay blocked — overlay stays visible for user tap
    });
  }
})();

// --- Console love note ---
console.log('%c\u2764 Surya & Sanjana \u2764', 'font-size: 24px; color: #e8a0bf; font-family: cursive;');
console.log('%cFrom a Christmas message to forever.', 'font-size: 14px; color: #d4a574;');
