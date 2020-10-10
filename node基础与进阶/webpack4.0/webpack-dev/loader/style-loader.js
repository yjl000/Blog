function loader(source) { // 将css代码放入style并且插入到头部
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style);
  `
  return style;
}

module.exports = loader;