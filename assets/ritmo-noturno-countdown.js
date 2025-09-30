/**
 * Ritmo Noturno Product Page - Countdown Timer
 * Creates urgency with a countdown timer for the limited offer
 */

document.addEventListener('DOMContentLoaded', function () {
  // Find countdown element by looking for text containing countdown pattern
  const countdownElement = Array.from(document.querySelectorAll('.product__text')).find(
    (el) => el.textContent.includes('⏰ Oferta expira') || el.textContent.includes('23:59:45')
  );

  if (!countdownElement) return;

  // Set countdown duration (24 hours from now)
  const countdownDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Check if we have a stored end time, otherwise create one
  let endTime = localStorage.getItem('ritmo-noturno-countdown-end');

  if (!endTime) {
    endTime = new Date().getTime() + countdownDuration;
    localStorage.setItem('ritmo-noturno-countdown-end', endTime);
  } else {
    endTime = parseInt(endTime);

    // If the countdown has expired, reset it
    if (endTime <= new Date().getTime()) {
      endTime = new Date().getTime() + countdownDuration;
      localStorage.setItem('ritmo-noturno-countdown-end', endTime);
    }
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      // Reset countdown when it expires
      endTime = new Date().getTime() + countdownDuration;
      localStorage.setItem('ritmo-noturno-countdown-end', endTime);
      return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Format with leading zeros
    const formattedTime =
      String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');

    // Update the countdown in the text content
    const originalText = countdownElement.textContent;
    const updatedText = originalText.replace(/\d{2}:\d{2}:\d{2}/, formattedTime);
    countdownElement.textContent = updatedText;
  }

  // Update countdown immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

/**
 * Smooth scroll to product form when CTA buttons are clicked
 */
document.addEventListener('DOMContentLoaded', function () {
  const ctaButtons = document.querySelectorAll('a[href="#MainProduct"]');

  ctaButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.getElementById('MainProduct');
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Focus on the add to cart button after scrolling
        setTimeout(() => {
          const addToCartButton = targetElement.querySelector('.product-form__cart-submit');
          if (addToCartButton) {
            addToCartButton.focus();
          }
        }, 500);
      }
    });
  });
});

/**
 * Enhanced product image navigation
 * Adds keyboard navigation and touch gestures
 */
document.addEventListener('DOMContentLoaded', function () {
  const productMedia = document.querySelector('.product__media-wrapper');

  if (!productMedia) return;

  // Add keyboard navigation for product images
  const mediaItems = productMedia.querySelectorAll('.product__media img, .product__media video');

  mediaItems.forEach((item, index) => {
    item.setAttribute('tabindex', '0');

    item.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && index > 0) {
        mediaItems[index - 1].focus();
      } else if (e.key === 'ArrowRight' && index < mediaItems.length - 1) {
        mediaItems[index + 1].focus();
      }
    });
  });
});

/**
 * Trust badge animations
 * Adds subtle animations when trust badges come into view
 */
document.addEventListener('DOMContentLoaded', function () {
  const trustBadges = document.querySelectorAll('.trust-badges-enhanced .badge');

  if (!trustBadges.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100); // Stagger the animations
      }
    });
  }, observerOptions);

  trustBadges.forEach((badge) => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(20px)';
    badge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(badge);
  });
});

/**
 * FAQ section enhancements
 * Adds smooth transitions and analytics tracking
 */
document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('.collapsible-row__heading button');

  faqButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const question = this.textContent.trim();

      // Track FAQ interactions (if analytics is available)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_interaction', {
          event_category: 'Product Page',
          event_label: question,
          value: 1,
        });
      }
    });
  });
});

/**
 * Product benefits highlight on scroll
 * Highlights benefits as user scrolls through them
 */
document.addEventListener('DOMContentLoaded', function () {
  const benefitItems = document.querySelectorAll('.benefits-list li');

  if (!benefitItems.length) return;

  const observerOptions = {
    threshold: 0.8,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.backgroundColor = 'rgba(126, 146, 120, 0.1)';
        entry.target.style.transform = 'scale(1.02)';
        entry.target.style.transition = 'all 0.3s ease';

        setTimeout(() => {
          entry.target.style.backgroundColor = '';
          entry.target.style.transform = '';
        }, 2000);
      }
    });
  }, observerOptions);

  benefitItems.forEach((item) => {
    observer.observe(item);
  });
});
