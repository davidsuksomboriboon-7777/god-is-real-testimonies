/**
 * Main Application Logic for New Wine Church Udonthani Testimonies
 * "พระเจ้ามีจริงและช่วยคุณได้"
 */

document.addEventListener('DOMContentLoaded', () => {
  // State management
  let currentCategory = 'all';
  let searchQuery = '';
  let activeVideoIndex = -1;
  let filteredVideos = [...TESTIMONIES_DATA];

  // DOM Elements
  const gridContainer = document.getElementById('testimonies-grid');
  const emptyState = document.getElementById('empty-state');
  const countDisplay = document.getElementById('result-count');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Modal Elements
  const videoModal = document.getElementById('video-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalPerson = document.getElementById('modal-person');
  const modalQuote = document.getElementById('modal-quote');
  const modalCategoryBadge = document.getElementById('modal-category-badge');
  const modalYtLink = document.getElementById('modal-yt-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');
  const modalShareBtn = document.getElementById('modal-share-btn');

  // Initialize Lucide Icons
  const refreshIcons = () => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // Category Icon Mapping
  const getCategoryIconSvg = (catId) => {
    switch (catId) {
      case 'business':
        return '<i data-lucide="trending-up" class="w-3.5 h-3.5 inline mr-1 text-amber-400"></i>';
      case 'deliverance':
        return '<i data-lucide="heart-handshake" class="w-3.5 h-3.5 inline mr-1 text-red-400"></i>';
      case 'healing':
        return '<i data-lucide="activity" class="w-3.5 h-3.5 inline mr-1 text-emerald-400"></i>';
      default:
        return '<i data-lucide="sparkles" class="w-3.5 h-3.5 inline mr-1 text-sky-400"></i>';
    }
  };

  const getCategoryBadgeClass = (catId) => {
    switch (catId) {
      case 'business':
        return 'bg-amber-500/15 text-amber-300 border border-amber-500/30';
      case 'deliverance':
        return 'bg-red-500/15 text-red-300 border border-red-500/30';
      case 'healing':
        return 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30';
      default:
        return 'bg-slate-700/50 text-slate-300 border border-slate-600/40';
    }
  };

  const getCategoryName = (catId) => {
    return TESTIMONY_CATEGORIES[catId]?.shortName || TESTIMONY_CATEGORIES[catId]?.name || 'คำพยานชีวิต';
  };

  // Render Video Card
  const createVideoCard = (video, index) => {
    const card = document.createElement('article');
    card.className = 'video-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer';
    card.setAttribute('data-id', video.id);
    card.setAttribute('data-index', index);

    // High Quality Thumbnail with fallback
    const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

    card.innerHTML = `
      <div class="thumbnail-wrapper aspect-video bg-slate-900 relative">
        <img 
          src="${thumbUrl}" 
          alt="${video.title} - ${video.person}" 
          class="w-full h-full object-cover"
          onerror="this.src='https://img.youtube.com/vi/${video.id}/mqdefault.jpg'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <!-- Category Badge -->
        <div class="absolute top-3 left-3 z-10">
          <span class="px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-md ${getCategoryBadgeClass(video.category)} flex items-center">
            ${getCategoryIconSvg(video.category)}
            <span>${getCategoryName(video.category)}</span>
          </span>
        </div>

        <!-- Church Branch Badge -->
        <div class="absolute top-3 right-3 z-10">
          <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
            ${video.branch || 'นิวไวน์'}
          </span>
        </div>

        <!-- Play Button Overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="play-button w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110">
            <svg class="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        <!-- Duration / Platform -->
        <div class="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/90 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
          <i data-lucide="play-circle" class="w-3 h-3 text-red-500"></i> ดูคลิปในเว็บ
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Speaker Info -->
          <div class="flex items-center gap-2 mb-2 text-xs font-medium text-red-400">
            <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
            <span>${video.person}</span>
            <span class="text-slate-600">•</span>
            <span class="text-slate-400">${video.highlight || 'คำพยานชีวิต'}</span>
          </div>

          <!-- Video Title -->
          <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 mb-2.5 leading-snug">
            ${video.title}
          </h3>

          <!-- Quote Excerpt -->
          <p class="text-xs sm:text-sm text-slate-400 line-clamp-2 italic leading-relaxed">
            "${video.keyQuote || 'พระเจ้าทรงสำแดงความรักและพระคุณอัศจรรย์ในชีวิต'}"
          </p>
        </div>

        <!-- Card Footer Actions -->
        <div class="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span class="inline-flex items-center gap-1 text-red-400 group-hover:translate-x-1 transition-transform font-semibold">
            คลิกเพื่อชมวิดีโอ <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </span>
          <button 
            type="button"
            class="share-btn p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="แชร์คลิปนี้"
            data-video-id="${video.id}"
            data-video-title="${video.title}"
            onclick="event.stopPropagation(); window.shareTestimony('${video.id}', '${video.title.replace(/'/g, "\\'")}')"
          >
            <i data-lucide="share-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openModalByIndex(index);
    });

    return card;
  };

  // Render All Filtered Videos
  const renderVideos = () => {
    gridContainer.innerHTML = '';

    if (filteredVideos.length === 0) {
      gridContainer.classList.add('hidden');
      emptyState.classList.remove('hidden');
      countDisplay.textContent = 'ไม่พบผลลัพธ์';
      refreshIcons();
      return;
    }

    gridContainer.classList.remove('hidden');
    emptyState.classList.add('hidden');
    countDisplay.textContent = `แสดง ${filteredVideos.length} เรื่องราว`;

    filteredVideos.forEach((video, index) => {
      const card = createVideoCard(video, index);
      gridContainer.appendChild(card);
    });

    refreshIcons();
  };

  // Filter Logic
  const filterData = () => {
    const query = searchQuery.trim().toLowerCase();

    filteredVideos = TESTIMONIES_DATA.filter((video) => {
      // Category match
      const matchesCategory = currentCategory === 'all' || video.category === currentCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      // Text search match
      const titleMatch = (video.title || '').toLowerCase().includes(query);
      const personMatch = (video.person || '').toLowerCase().includes(query);
      const branchMatch = (video.branch || '').toLowerCase().includes(query);
      const quoteMatch = (video.keyQuote || '').toLowerCase().includes(query);
      const highlightMatch = (video.highlight || '').toLowerCase().includes(query);

      return titleMatch || personMatch || branchMatch || quoteMatch || highlightMatch;
    });

    renderVideos();
  };

  // Category Tab Buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      filterData();
    });
  });

  // Search Input Handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    filterData();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    filterData();
    searchInput.focus();
  });

  // Modal Functions
  const openModalByIndex = (index) => {
    if (index < 0 || index >= filteredVideos.length) return;
    activeVideoIndex = index;
    const video = filteredVideos[index];

    modalIframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
    modalTitle.textContent = video.title;
    modalPerson.textContent = `${video.person} • ${video.branch || 'นิวไวน์'} (${video.highlight || 'คำพยานชีวิต'})`;
    modalQuote.textContent = `"${video.keyQuote || 'ขอบคุณพระเจ้าสำหรับการอวยพรและการเปลี่ยนแปลงชีวิต'}"`;
    modalCategoryBadge.className = `px-2.5 py-1 text-xs font-medium rounded-full ${getCategoryBadgeClass(video.category)}`;
    modalCategoryBadge.textContent = getCategoryName(video.category);
    modalYtLink.href = `https://www.youtube.com/watch?v=${video.id}`;

    // Prev / Next button states
    modalPrevBtn.disabled = activeVideoIndex === 0;
    modalNextBtn.disabled = activeVideoIndex === filteredVideos.length - 1;

    modalPrevBtn.classList.toggle('opacity-40', activeVideoIndex === 0);
    modalNextBtn.classList.toggle('opacity-40', activeVideoIndex === filteredVideos.length - 1);

    videoModal.classList.remove('opacity-0', 'pointer-events-none');
    videoModal.classList.add('active');
    document.body.classList.add('overflow-hidden');
    refreshIcons();
  };

  const closeModal = () => {
    videoModal.classList.add('opacity-0', 'pointer-events-none');
    videoModal.classList.remove('active');
    modalIframe.src = '';
    document.body.classList.remove('overflow-hidden');
    activeVideoIndex = -1;
  };

  modalCloseBtn.addEventListener('click', closeModal);

  // Close modal when clicking on backdrop
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });

  // Keyboard navigation (ESC to close, Left/Right for videos)
  document.addEventListener('keydown', (e) => {
    if (!videoModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft' && activeVideoIndex > 0) {
      openModalByIndex(activeVideoIndex - 1);
    } else if (e.key === 'ArrowRight' && activeVideoIndex < filteredVideos.length - 1) {
      openModalByIndex(activeVideoIndex + 1);
    }
  });

  modalPrevBtn.addEventListener('click', () => {
    if (activeVideoIndex > 0) {
      openModalByIndex(activeVideoIndex - 1);
    }
  });

  modalNextBtn.addEventListener('click', () => {
    if (activeVideoIndex < filteredVideos.length - 1) {
      openModalByIndex(activeVideoIndex + 1);
    }
  });

  // Share functionality
  window.shareTestimony = (videoId, title) => {
    const url = `https://youtu.be/${videoId}`;
    if (navigator.share) {
      navigator.share({
        title: `คำพยานชีวิต: ${title}`,
        text: `รับชมคำพยานชีวิต "พระเจ้ามีจริงและช่วยคุณได้" - ${title}`,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        showToast('คัดลอกลิงก์วิดีโอเรียบร้อยแล้ว');
      });
    }
  };

  modalShareBtn.addEventListener('click', () => {
    if (activeVideoIndex >= 0 && filteredVideos[activeVideoIndex]) {
      const v = filteredVideos[activeVideoIndex];
      window.shareTestimony(v.id, v.title);
    }
  });

  // Toast notification
  const showToast = (message) => {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2800);
  };
  window.showToast = showToast;

  // Category counts in filter buttons
  const updateCategoryCounts = () => {
    const counts = {
      all: TESTIMONIES_DATA.length,
      business: TESTIMONIES_DATA.filter(v => v.category === 'business').length,
      deliverance: TESTIMONIES_DATA.filter(v => v.category === 'deliverance').length,
      healing: TESTIMONIES_DATA.filter(v => v.category === 'healing').length
    };

    document.querySelectorAll('.cat-count').forEach(badge => {
      const cat = badge.getAttribute('data-cat');
      if (counts[cat] !== undefined) {
        badge.textContent = counts[cat];
      }
    });
  };

  // Initial Boot
  updateCategoryCounts();
  renderVideos();
});
