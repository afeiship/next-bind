(function () {

  var global = global || window || self || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.bind = function (inContext, inArray) {
    nx.each(inArray, function (_, name) {
      this[name] = this[name].bind(this);
    }, inContext);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.bind;
  }

}());
