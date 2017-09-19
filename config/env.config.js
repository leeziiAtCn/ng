module.exports = {
  dev: {
    NODE_ENV: 'development',
    buildTime: +new Date(),
    http: {
      root: 'http://192.168.1.80:9001'
    }
  },
  test: {
    NODE_ENV: 'test',
    buildTime: +new Date(),
    http: {
      root: 'http://192.168.1.203:9002'
    }
  }
}