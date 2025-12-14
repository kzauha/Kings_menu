// ========================================
// ACTIVE STATE MODULE
// Manages active/underline state for menu items
// ========================================

import { hamburgerModule } from './hamburger.js';

export const activeStateModule = {
    navItems: null,
    navLinks: null,
    dropdownLink: null,

    init() {
        this.navItems = document.querySelectorAll('.nav-item');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.dropdownLink = document.querySelector('.nav-item-dropdown .nav-link');

        if (!this.navLinks || this.navLinks.length === 0) return;

        this.setupEventListeners();
    },

    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavLinkClick(e, link));
        });
    },

    handleNavLinkClick(event, link) {
        const isDropdownLink = link.closest('.nav-item-dropdown');

        // Prevent default for dropdown links in desktop view
        if (isDropdownLink && window.innerWidth > 768) {
            event.preventDefault();
        }

        // Set active state for non-dropdown items
        if (!isDropdownLink) {
            this.setActive(link.closest('.nav-item'));

            // Close mobile menu on click
            if (window.innerWidth <= 768) {
                hamburgerModule.closeMenu();
            }
        }
    },

    setActive(navItem) {
        // Remove active class from all items
        this.navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked item
        if (navItem) {
            navItem.classList.add('active');
        }
    },

    clearActive() {
        this.navItems.forEach(item => {
            item.classList.remove('active');
        });
    }
};
