// ========================================
// NAVBAR MODULE - MAIN ENTRY POINT
// Initializes all navbar modules
// ========================================

import { hamburgerModule } from './modules/hamburger.js';
import { activeStateModule } from './modules/activeState.js';
import { dropdownModule } from './modules/dropdown.js';
import { mobilePrimaryMenuModule } from './modules/mobilePrimaryMenu.js';

/**
 * Initialize all navbar functionality
 */
function initNavbar() {
    hamburgerModule.init();
    activeStateModule.init();
    dropdownModule.init();
    mobilePrimaryMenuModule.init();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initNavbar);
