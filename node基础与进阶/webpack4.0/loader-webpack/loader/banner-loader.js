const loaderUtils = require('loader-utils');
const { validate } = require('schema-utils');
console.log(validate.validate)
const fs = require('fs');
function loader(source) {
    const options = loaderUtils.getOptions(this);
    const cb = this.async();
    const scheme = {
        type: 'object',
        properties: {
            text: {
                type: 'string'
            },
            filename: {
                type: 'string'
            }
        }
    }

    validate(scheme, options, 'banner-loader');
    if (options.filename) {
        this.addDependency(options.filename); // 自动添加文件依赖
        fs.readFile(options.filename, 'utf8', (err, data) => {
            cb(err, `/**${data}**/${source}`)
        })
    } else {
        cb(null, `/**${options.text}**/${source}`);
    }
}

module.exports = loader;