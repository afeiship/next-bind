/*!
 * name: @jswork/next-bind
 * description: Bind all for next.
 * homepage: https://github.com/afeiship/next-bind
 * version: 1.0.0
 * date: 2021-02-07 10:47:39
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.bind = function (inContext, inObject) {
    nx.forIn(
      inObject,
      function (key, value) {
        if (typeof value === 'function') {
          inObject[key] = value.bind(inContext);
        }
      },
      inContext
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.bind;
  }
})();
