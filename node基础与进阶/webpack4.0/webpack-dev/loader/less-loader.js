let less = require('less');
function loader(source) { // 将less源码转换为css
  let css = '';
  less.render(source, function(err, c) {
    css = c.css;
  })
  css = css.replace(/\n/g, '\\n');
  return css
}

module.exports = loader