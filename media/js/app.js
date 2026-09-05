/**
 * ROAST FOODS - INTERACTIVE APPLICATION ENGINE
 * Authentic D2C Food Brand Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 0. LENIS SMOOTH SCROLL INITIALIZATION
  // ==========================================
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth navigation anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#' && targetId.startsWith('#')) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -70 });
          }
        }
      });
    });

    window.lenis = lenis;
  }

  // ==========================================
  // 1. HERO FULL-IMAGE BANNER SLIDER (AUTOSCROLL + PAGINATION)
  // ==========================================
  const bannerSlides = document.querySelectorAll('.banner-slide');
  const paginationDots = document.querySelectorAll('.pagination-dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const bannerSection = document.querySelector('.hero-banner-section');

  let currentSlide = 0;
  let bannerTimer = null;
  const slideIntervalTime = 4000; // 4 seconds auto-scroll

  function showBannerSlide(index) {
    if (!bannerSlides.length) return;
    currentSlide = (index + bannerSlides.length) % bannerSlides.length;

    bannerSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    paginationDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextBannerSlide() {
    showBannerSlide(currentSlide + 1);
  }

  function prevBannerSlide() {
    showBannerSlide(currentSlide - 1);
  }

  function startBannerAutoscroll() {
    stopBannerAutoscroll();
    bannerTimer = setInterval(nextBannerSlide, slideIntervalTime);
  }

  function stopBannerAutoscroll() {
    if (bannerTimer) {
      clearInterval(bannerTimer);
      bannerTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextBannerSlide();
      startBannerAutoscroll();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevBannerSlide();
      startBannerAutoscroll();
    });
  }

  paginationDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const slideIndex = parseInt(dot.dataset.slide, 10);
      showBannerSlide(slideIndex);
      startBannerAutoscroll();
    });
  });

  if (bannerSection) {
    bannerSection.addEventListener('mouseenter', stopBannerAutoscroll);
    bannerSection.addEventListener('mouseleave', startBannerAutoscroll);
    bannerSection.addEventListener('touchstart', stopBannerAutoscroll, { passive: true });
    bannerSection.addEventListener('touchend', startBannerAutoscroll, { passive: true });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevBannerSlide();
      startBannerAutoscroll();
    } else if (e.key === 'ArrowRight') {
      nextBannerSlide();
      startBannerAutoscroll();
    }
  });

  // Initialize first slide and start autoscroll
  showBannerSlide(0);
  startBannerAutoscroll();

  // ==========================================
  // 2. PRODUCT CATALOG & FILTER SYSTEM
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      productCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 3. CART DRAWER & STATE MANAGEMENT
  // ==========================================
  let cart = [
    { id: 'makhana-salt', name: 'Himalayan Salt Makhana', price: 149, qty: 1, img: 'media/Images/Product Image/10.png' },
    { id: 'jowar-tomato', name: 'Tangy Tomato Jowar Puffs', price: 90, qty: 2, img: 'media/Images/Product Image/5.png' }
  ];

  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartToggleBtns = document.querySelectorAll('[data-cart-toggle]');
  const cartItemsContainer = document.getElementById('cartItemsList');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartSubtotalEl = document.getElementById('cartSubtotal');

  function openCart() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('open');
      if (lenis) lenis.stop();
      renderCart();
    }
  }

  function closeCart() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('open');
      if (lenis) lenis.start();
    }
  }

  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartDrawer && cartDrawer.classList.contains('open')) {
        closeCart();
      } else {
        openCart();
      }
    });
  });

  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', closeCart);
  }

  const closeCartBtn = document.getElementById('closeCartBtn');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }

  function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(badge => {
      badge.textContent = totalQty;
      badge.style.transform = 'scale(1.25)';
      setTimeout(() => badge.style.transform = 'scale(1)', 200);
    });
  }

  function renderCart() {
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🍿</div>
          <h4 style="color: var(--text-primary); font-weight: 800;">Your snack box is empty!</h4>
          <p style="font-size: 0.88rem; margin-top: 6px;">Add delicious roasted snacks to satisfy your healthy cravings.</p>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
      updateCartCount();
      return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = cart.map((item, idx) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      return `
        <div class="cart-item-row">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <h5>${item.name}</h5>
            <span>₹${item.price} each</span>
          </div>
          <div class="cart-qty-ctrls">
            <button class="qty-btn" onclick="modifyCartQty(${idx}, -1)">-</button>
            <span style="font-size: 0.9rem; font-weight: 800; min-width: 18px; text-align: center;">${item.qty}</span>
            <button class="qty-btn" onclick="modifyCartQty(${idx}, 1)">+</button>
          </div>
          <button onclick="removeCartItem(${idx})" style="color: #DC2626; font-size: 1.1rem; margin-left: 6px; padding: 4px;" title="Remove">✕</button>
        </div>
      `;
    }).join('');

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `₹${subtotal}`;
    }
    updateCartCount();
  }

  window.modifyCartQty = (index, delta) => {
    if (cart[index]) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      renderCart();
    }
  };

  window.removeCartItem = (index) => {
    cart.splice(index, 1);
    renderCart();
    showToast('Item removed from cart');
  };

  // Add to cart buttons
  const addCartBtns = document.querySelectorAll('.btn-add-cart, .btn-quick-add');
  addCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id || 'snack-' + Date.now();
      const name = btn.dataset.name || 'Gourmet Roasted Snack';
      const price = parseInt(btn.dataset.price, 10) || 149;
      const img = btn.dataset.img || 'media/Images/Product Image/1.png';

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id, name, price, qty: 1, img });
      }

      renderCart();
      showToast(`Added "${name}" to your cart! 🍿`);
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Wishlist heart button toggle
  const wishlistBtns = document.querySelectorAll('.card-wishlist-btn');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('active');
      const icon = btn.querySelector('i');
      if (btn.classList.contains('active')) {
        icon.className = 'fa-solid fa-heart';
        showToast('Saved to your favourites! ❤️');
      } else {
        icon.className = 'fa-regular fa-heart';
        showToast('Removed from favourites');
      }
    });
  });

  // ==========================================
  // 4. CUSTOM 4-PACK SNACK BOX BUILDER
  // ==========================================
  const maxBoxSlots = 4;
  let customBox = [];

  const boxSlotsContainer = document.getElementById('boxSlots');
  const boxCountDisplay = document.getElementById('boxCountDisplay');
  const addCustomBoxBtn = document.getElementById('addCustomBoxBtn');
  const flavorPickers = document.querySelectorAll('.flavor-picker-card');

  function renderCustomBox() {
    if (!boxSlotsContainer) return;
    boxSlotsContainer.innerHTML = '';

    for (let i = 0; i < maxBoxSlots; i++) {
      const item = customBox[i];
      if (item) {
        const slotEl = document.createElement('div');
        slotEl.className = 'box-slot filled';
        slotEl.innerHTML = `
          <button class="remove-slot" onclick="removeBoxSlot(${i})">✕</button>
          <img src="${item.img}" alt="${item.name}">
          <span class="slot-title">${item.name}</span>
        `;
        boxSlotsContainer.appendChild(slotEl);
      } else {
        const slotEl = document.createElement('div');
        slotEl.className = 'box-slot';
        slotEl.innerHTML = `
          <div class="slot-placeholder">
            <span style="font-size: 1.5rem; font-weight: 700; color: #A8A29E;">+</span>
            <span>Slot ${i + 1}</span>
          </div>
        `;
        boxSlotsContainer.appendChild(slotEl);
      }
    }

    if (boxCountDisplay) {
      boxCountDisplay.textContent = `${customBox.length} / ${maxBoxSlots} Flavours Selected`;
    }

    if (addCustomBoxBtn) {
      if (customBox.length === maxBoxSlots) {
        addCustomBoxBtn.removeAttribute('disabled');
        addCustomBoxBtn.style.opacity = '1';
        addCustomBoxBtn.textContent = 'Add Custom Box to Cart (₹499)';
      } else {
        addCustomBoxBtn.setAttribute('disabled', 'true');
        addCustomBoxBtn.style.opacity = '0.6';
        addCustomBoxBtn.textContent = `Select ${maxBoxSlots - customBox.length} More Flavours`;
      }
    }
  }

  window.removeBoxSlot = (index) => {
    customBox.splice(index, 1);
    renderCustomBox();
  };

  flavorPickers.forEach(picker => {
    picker.addEventListener('click', () => {
      if (customBox.length >= maxBoxSlots) {
        showToast('Your 4-pack box is full! Remove an item to swap.');
        return;
      }
      const name = picker.dataset.name;
      const img = picker.dataset.img;
      customBox.push({ name, img });
      renderCustomBox();
      showToast(`Added ${name} to custom box!`);
    });
  });

  if (addCustomBoxBtn) {
    addCustomBoxBtn.addEventListener('click', () => {
      if (customBox.length === maxBoxSlots) {
        cart.push({
          id: 'custom-box-' + Date.now(),
          name: 'Custom 4-Pack Gourmet Box',
          price: 499,
          qty: 1,
          img: customBox[0].img
        });
        renderCart();
        openCart();
        showToast('🎉 Custom Snack Box added to cart!');
        customBox = [];
        renderCustomBox();
      }
    });
  }

  renderCustomBox();

  // ==========================================
  // 5. INTERACTIVE 3-STEP SNACK QUIZ
  // ==========================================
  let quizAnswers = {};
  const quizSteps = document.querySelectorAll('.quiz-step-content');
  const stepIndicators = document.querySelectorAll('.step-indicator');
  const quizResultBox = document.getElementById('quizResultBox');
  const quizCardsContainer = document.getElementById('quizQuestionsWrapper');

  const quizOptionBtns = document.querySelectorAll('.quiz-option-btn');
  quizOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.dataset.step, 10);
      const answer = btn.dataset.answer;

      quizAnswers[`step${step}`] = answer;

      if (step < 3) {
        // Go to next step
        quizSteps.forEach(s => s.style.display = 'none');
        document.getElementById(`quizStep${step + 1}`).style.display = 'block';

        stepIndicators.forEach((ind, i) => {
          ind.classList.toggle('active', i <= step);
        });
      } else {
        // Show result
        if (quizCardsContainer) quizCardsContainer.style.display = 'none';
        if (quizResultBox) {
          quizResultBox.style.display = 'block';
          renderQuizResult();
        }
      }
    });
  });

  function renderQuizResult() {
    const resultTitle = document.getElementById('quizMatchTitle');
    const resultDesc = document.getElementById('quizMatchDesc');
    const resultImg = document.getElementById('quizMatchImg');
    const resultBtn = document.getElementById('quizMatchAddBtn');

    // Matching logic
    let match = {
      title: 'Thai Sweet Chilli & Himalayan Salt Makhana',
      desc: 'Based on your cravings for a spicy, high-protein snack that is roasted without extra oil!',
      img: 'media/Images/banner/img1.jpg',
      price: 149
    };

    if (quizAnswers.step1 === 'cheesy') {
      match = {
        title: 'Cheese & Herbs Jowar Puffs Duo',
        desc: 'Velvety cheddar blend with high dietary fibre and irresistible crispiness.',
        img: 'media/Images/banner/img5.jpg',
        price: 139
      };
    } else if (quizAnswers.step1 === 'tangy') {
      match = {
        title: 'Tangy Tomato & Indian Spices Puffs',
        desc: 'Rich in whole grain fibre with the signature zesty punch of sun-dried tomatoes.',
        img: 'media/Images/banner/img2.jpg',
        price: 129
      };
    } else if (quizAnswers.step2 === 'protein') {
      match = {
        title: 'Cheesy Jalapeno & BBQ Plant Protein Makhana',
        desc: '3g+ natural plant protein to fuel your workouts and active lifestyle.',
        img: 'media/Images/banner/img4.jpg',
        price: 159
      };
    }

    if (resultTitle) resultTitle.textContent = match.title;
    if (resultDesc) resultDesc.textContent = match.desc;
    if (resultImg) resultImg.src = match.img;
    if (resultBtn) {
      resultBtn.onclick = () => {
        cart.push({
          id: 'quiz-match-' + Date.now(),
          name: match.title,
          price: match.price,
          qty: 1,
          img: match.img
        });
        renderCart();
        openCart();
        showToast(`Added ${match.title} to your cart!`);
      };
    }
  }

  window.restartQuiz = () => {
    quizAnswers = {};
    if (quizCardsContainer) quizCardsContainer.style.display = 'block';
    if (quizResultBox) quizResultBox.style.display = 'none';
    quizSteps.forEach((s, idx) => s.style.display = idx === 0 ? 'block' : 'none');
    stepIndicators.forEach((ind, i) => ind.classList.toggle('active', i === 0));
  };

  // ==========================================
  // 6. TOAST NOTIFICATION UTILITY
  // ==========================================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🍿</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Smooth Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#FFFFFF';
      navLinks.style.padding = '20px 24px';
      navLinks.style.borderBottom = '1px solid var(--border-light)';
      navLinks.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
    });
  }

  // ==========================================================================
  // 7. MAKHANA SIMPLE SPOTLIGHT TILT EFFECT
  // ==========================================================================
  function initMakhanaSimpleTilt() {
    const wrapper = document.querySelector('.simple-img-wrapper');
    const img = document.querySelector('.simple-product-img');

    if (!wrapper || !img) return;

    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.04) translate3d(${x * -10}px, ${y * -10}px, 0)`;
    });

    wrapper.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  }

  initMakhanaSimpleTilt();
});



