const path = require('path')
const Mock = require('mockjs')

const mockDir = path.join(process.cwd(), 'mock')

function registerRoutes (app) {
  let mockLastIndex
  const { mocks } = require('./index.js')
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response(req, res) {
      console.log('request invoke: ' + req.path)
      res.join(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

module.exports = app => {

}