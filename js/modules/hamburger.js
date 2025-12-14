// ========================================
// HAMBURGER MENU MODULE
// Handles mobile menu toggle and closing
// ========================================

export const hamburgerModule = {
    hamburger: null,
    primaryMenu: null,

    init() {
        this.hamburger = document.querySelector('.hamburger');
        this.primaryMenu = document.querySelector('.mobile-primary-menu');

        if (!this.hamburger) return;

        this.setupEventListeners();
    },

    setupEventListeners() {
        // Toggle menu on hamburger click
        this.hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Close menu when clicking outside (but not on the menus themselves)
        document.addEventListener('click', (event) => this.handleOutsideClick(event));

        // Reset on resize
        window.addEventListener('resize', () => this.handleResize());
    },

    toggleMenu() {
        const isClosed = !this.hamburger.classList.contains('active');
        
        if (isClosed) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    },

    closeMenu() {
        this.hamburger.classList.remove('active');
        
        if (this.primaryMenu) {
            this.primaryMenu.classList.remove('active');
        }
    },

    openMenu() {
        this.hamburger.classList.add('active');
        
        if (this.primaryMenu) {
            this.primaryMenu.classList.add('active');
        }
    },

    isOpen() {
        return this.hamburger.classList.contains('active');
    },

    handleOutsideClick(event) {
        const isClickInsideHamburger = this.hamburger.contains(event.target);
        const isClickInsidePrimaryMenu = this.primaryMenu?.contains(event.target);

        if (!isClickInsideHamburger && !isClickInsidePrimaryMenu && this.isOpen()) {
            this.closeMenu();
        }
    },

    handleResize() {
        const isMobileView = window.innerWidth <= 768;

        if (!isMobileView && this.isOpen()) {
            this.closeMenu();
        }
    }
};
