import http from 'node:http'

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method == 'GET' && url == '/users') {
    return response.end('Listagem de usuarios')
  }

  if (method == 'POST' && url == '/users') {
    return response.end('Criando novo usuario')
  }

  return response.end('hello world')
})

server.listen(3333)
