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
