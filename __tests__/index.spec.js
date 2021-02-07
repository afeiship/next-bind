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

    test('multiple object bind', () => {
      var obj = {
        id: 'bold',
        type: 'plugin',
        events: {
          name: function () {
            return [this.id, this.type].join('-');
          }
        },
        commands: {
          is: function (inMode) {
            return this.id === inMode;
          },
          get: function () {
            return this.type;
          }
        }
      };

      nx.bind(obj, obj.commands, obj.events);
      expect(obj.commands.is('bold')).toBe(true);
      expect(obj.commands.is('italic')).toBe(false);
      expect(obj.events.name()).toBe('bold-plugin');
    });
  });
})();
