// ========================================
// DROPDOWN MENU MODULE
// Manages dropdown menu interactions
// ========================================

import { hamburgerModule } from './hamburger.js';
import { activeStateModule } from './activeState.js';

export const dropdownModule = {
    navItemDropdown: null,
    dropdownLink: null,
    dropdownMenu: null,
    dropdownItems: null,

    init() {
        this.navItemDropdown = document.querySelector('.nav-item-dropdown');
        this.dropdownLink = document.querySelector('.nav-item-dropdown .nav-link');
        this.dropdownMenu = document.querySelector('.dropdown-menu');
        this.dropdownItems = document.querySelectorAll('.dropdown-menu li a');

        if (!this.dropdownMenu || !this.dropdownItems) return;

        this.setupEventListeners();
    },

    setupEventListeners() {
        // Toggle dropdown on mobile
        this.dropdownLink.addEventListener('click', (e) => this.handleDropdownToggle(e));

        // Handle submenu item clicks
        this.dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => this.handleDropdownItemClick(e, item));
        });
    },

    handleDropdownToggle(event) {
        const isMobileView = window.innerWidth <= 768;

        if (isMobileView) {
            event.preventDefault();
            this.toggleDropdown();
        }
    },

    toggleDropdown() {
        this.dropdownMenu.classList.toggle('active');
    },

    openDropdown() {
        this.dropdownMenu.classList.add('active');
    },

    closeDropdown() {
        this.dropdownMenu.classList.remove('active');
    },

    handleDropdownItemClick(event, item) {
        event.preventDefault();

        // Set dropdown parent as active
        activeStateModule.setActive(this.navItemDropdown);

        // Close mobile menu
        const isMobileView = window.innerWidth <= 768;
        if (isMobileView) {
            hamburgerModule.closeMenu();
            this.closeDropdown();
        }
    },

    reset() {
        this.closeDropdown();
    }
};
