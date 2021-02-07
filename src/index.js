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
