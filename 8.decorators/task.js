function cachingDecoratorNew(func) {
  let cashe = {};
  let count = 0;

  function wrapper(...args) {
    const hash = args.join(',');
    if (hash in cashe) {
      return 'Из кэша: ' + cashe[hash];
    }
    if (count >= 5) {
      delete cashe[Object.keys(cashe)[0]];
    }
    count++;
    cashe[hash] = func(...args);
    return 'Вычисляем: ' + cashe[hash];
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  let flag = false;

  return function (...args) {
    if (flag) {
      return;
    }
    func.apply(this, args);
    flag = true;
    setTimeout(() => {
      flag = false;
      func.apply(this, args);
    }, timeout);
  };
}

function debounceDecorator2(func) {
  let flag = false;

  function wrapper(...args) {
    if (flag) {
      return;
    }
    wrapper.count++;
    func.apply(this, args);
    flag = true;
    setTimeout(() => {
      flag = false;
      func.apply(this, args);
    }, timeout);
  }
  wrapper.count = 0;
  return wrapper;
}
