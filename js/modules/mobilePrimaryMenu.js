// ========================================
// MOBILE PRIMARY MENU MODULE
// Manages the expandable menu items in mobile view
// ========================================

export const mobilePrimaryMenuModule = {
    mobileNavLinks: null,
    mobileDropdownLinks: null,
    mobileDropdownMenus: null,

    init() {
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.mobileDropdownLinks = document.querySelectorAll('.mobile-nav-item-dropdown .mobile-nav-link');
        this.mobileDropdownMenus = document.querySelectorAll('.mobile-dropdown-menu');

        if (!this.mobileNavLinks || this.mobileNavLinks.length === 0) return;

        this.setupEventListeners();
    },

    setupEventListeners() {
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleMobileNavClick(e, link));
        });
    },

    handleMobileNavClick(event, link) {
        event.preventDefault();

        const parentItem = link.closest('.mobile-nav-item');
        const isDropdownItem = parentItem.classList.contains('mobile-nav-item-dropdown');

        if (isDropdownItem) {
            // Toggle dropdown
            const dropdownMenu = parentItem.querySelector('.mobile-dropdown-menu');
            this.toggleDropdown(parentItem, dropdownMenu);
        } else {
            // Regular menu item - close all dropdowns
            this.closeAllDropdowns();
        }
    },

    toggleDropdown(item, menu) {
        const isOpen = item.classList.contains('open');

        if (isOpen) {
            this.closeDropdown(item, menu);
        } else {
            this.closeAllDropdowns();
            this.openDropdown(item, menu);
        }
    },

    openDropdown(item, menu) {
        item.classList.add('open');
        menu.classList.add('active');
    },

    closeDropdown(item, menu) {
        item.classList.remove('open');
        menu.classList.remove('active');
    },

    closeAllDropdowns() {
        document.querySelectorAll('.mobile-nav-item.open').forEach(item => {
            item.classList.remove('open');
            const menu = item.querySelector('.mobile-dropdown-menu');
            if (menu) {
                menu.classList.remove('active');
            }
        });
    }
};
