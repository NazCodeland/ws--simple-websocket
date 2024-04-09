import { WebSocketServer } from "ws";

const PORT = 8080
const ws = new WebSocketServer({
  port: PORT
})

ws.on("connection", socket => {

  socket.on("upgrade", () => { })
  socket.on("open", () => { })

  socket.on("message", message => {
    // broadcast message to each connected user
    ws.clients.forEach(client => {
      client.send(message)
    })
  })

  socket.on("error", () => { })
  socket.on("close", () => { })
  socket.on("ping", () => { })
  socket.on("pong", () => { })
  socket.on("unexpected-response", () => { })
})

