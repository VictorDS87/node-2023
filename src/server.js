import http from 'node:http'
import { Database } from './database'

const users = []

const database = new Database()

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method == 'GET' && url == '/users') {
    return response.end(JSON.stringify(users))
  }

  if (method == 'POST' && url == '/users') {
    const user = {
      id: 1,
      name: 'Generic Name',
      email: 'genericemail@generic.com'
    }

    database.insert('users', user)

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3333)
