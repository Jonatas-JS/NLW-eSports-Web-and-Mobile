import express from 'express'

const app = express()

// no app.get('/', () => {}) => estou informando a ROTA e o que ela irá FAZER quando essa rota for acessada
// request => aquilo que irei "pegar" da página
// response => a resposta que enviarei
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1'},
    { id: 2, name: 'Anúncio 2'},
    { id: 3, name: 'Anúncio 3'},
    { id: 4, name: 'Anúncio 4'},
  ])
})

// defino qual porta o app será rodado
app.listen(3333)