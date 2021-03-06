/*!
 * name: @jswork/next-bind
 * description: Bind all for next.
 * homepage: https://github.com/afeiship/next-bind
 * version: 1.0.2
 * date: 2021-02-07 11:02:09
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.bind = function (inContext) {
    var args = nx.slice(arguments, 1);
    args.forEach(function (obj) {
      nx.forIn(obj, function (key, value) {
        if (typeof value === 'function') {
          obj[key] = value.bind(inContext);
        }
      });
    });
    return inContext;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.bind;
  }
})();
