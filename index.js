'use strict';

/**
 * Adds commas to a number
 * @param {numer} number
 * @return {string}
 */

module.exports = function (number, local) {
    return number.toLocaleString(local);
};