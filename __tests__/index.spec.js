(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.bind should bind cmds to ctx.', function () {
      var obj = {
        id: 'bold',
        type: 'plugin',
        commands: {
          is: function (inMode) {
            return this.id === inMode;
          },
          get: function () {
            return this.type;
          }
        }
      };

      nx.bind(obj, obj.commands);
      expect(obj.commands.is('bold')).toBe(true);
      expect(obj.commands.is('italic')).toBe(false);
      expect(obj.commands.get()).toBe('plugin');
    });
  });
})();
