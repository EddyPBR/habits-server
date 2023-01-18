import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

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
