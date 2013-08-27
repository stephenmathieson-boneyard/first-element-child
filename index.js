
/**
 * Get the first element child of the given element
 *
 * @api public
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */

module.exports = function (element) {
  return element.firstElementChild || fallback(element) || null;
};

/**
 * IE-safe fallback
 *
 * @api private
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */

function fallback(element) {
  for (var node = element.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 1) {
      return node;
    }
  }
}
