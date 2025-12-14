// ========================================
// MOBILE MENU OVERLAY MODULE
// Manages the dark overlay menu (secondary items, search)
// ========================================

export const mobileMenuOverlayModule = {
    overlay: null,
    closeBtn: null,

    init() {
        this.overlay = document.querySelector('.mobile-menu-overlay');
        this.closeBtn = document.querySelector('.mobile-menu-close');

        if (!this.overlay || !this.closeBtn) return;

        this.setupEventListeners();
    },

    setupEventListeners() {
        this.closeBtn.addEventListener('click', () => this.closeMenu());
        
        // Close overlay when clicking on the overlay background itself
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.closeMenu();
            }
        });
    },

    openMenu() {
        if (this.overlay) {
            this.overlay.classList.add('active');
        }
    },

    closeMenu() {
        if (this.overlay) {
            this.overlay.classList.remove('active');
        }
    },

    isOpen() {
        return this.overlay && this.overlay.classList.contains('active');
    }
};
