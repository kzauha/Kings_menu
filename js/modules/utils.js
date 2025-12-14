// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Check if viewport is mobile size
 * @returns {boolean}
 */
export function isMobileView() {
    return window.innerWidth <= 768;
}

/**
 * Debounce a function call
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function}
 */
export function debounce(func, delay = 250) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
