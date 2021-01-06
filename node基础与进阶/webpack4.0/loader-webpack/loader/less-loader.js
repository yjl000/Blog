var less = require("less");  

function loader(source) {
    let css;
    less.render(source, function(err, css_output){  
        css = css_output.css
      });
    
    return css
}

module.exports = loader