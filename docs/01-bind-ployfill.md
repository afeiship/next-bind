# bind ployfill

```js
//solution1:
Function.prototype.bind = function(inContext){
  var fn = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function(){
    return fn.apply(inContext,args);
  };
};

//solution2
Function.prototype.bind = function(inContext){
  var fn = this;
  var args = arguments;
  return function(){
    return fn.call.apply(fn,args);
  };
};
```
