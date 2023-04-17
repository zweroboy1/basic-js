const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  domains.forEach((domain) => {
    let parts = domain.split(".");
    let prev = "";
    for (let i = parts.length - 1; i >= 0; i--) {
      prev += "." + parts[i];
      stats[prev] = stats[prev] + 1 || 1;
    }
  });
  return stats;
}

module.exports = {
  getDNSStats,
};
