package.json的script配置test: cross-env NODE_ENV=test jest --verbose --runInBand
运行所有测试的命令： npm test
运行单个测试文件的命令： npm test -- tests/xxx.js
运行特定名称的用例 npm test -- -t 'a specific note is within the returned notes'
运行名称中包含notes 的所有测试: npm test -- -t 'notes'