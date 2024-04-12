import { app } from "./app";

app.listen({
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 3333,
}).then(() => {
  console.log('HTTP Server Running! ✌️😎')
})