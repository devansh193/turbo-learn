import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });
server.on("connection", async (socket) => {
  const d = await client.user.create({
    data: {
      name: "Devansh",
      password: "ThisIsPassword",
    },
  });
  socket.send(`Hi there you are connected to the server ${d.name}`);
});
