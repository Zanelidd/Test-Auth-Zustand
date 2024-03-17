import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();

server.register(cors, {
  origin: true,
  credentials: true,
});

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

server.post(
  "/login",
  {
    preValidation: (request, reply, done) => {
      console.log(request.body);

      done();
    },
  },
  function (request, reply) {
    reply.send("hello");
  }
);

server.post(
  "/register",
  {
    preValidation: (request, reply, done) => {
      console.log(request.body);
      done();
    },
  },
  function (request, reply) {
    reply.send("register");
  }
);
