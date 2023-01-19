import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    host: process.env.HOST,
    port: process.env.PORT,
  })
  .then(() => {
    const logs = [
      "🚀 HTTP Server running!",
      `👋 ${process.env.PREFIX}://${process.env.HOST}:${process.env.PORT}/`,
    ];

    logs.map((log) => console.log(log));
  });
