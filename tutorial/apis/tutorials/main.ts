import { Application } from "@oak/oak/application";
import { Router, RouterContext } from "@oak/oak/router";
import { products } from "./products.ts";

const router = new Router();
router.get("/products/:type", (context: RouterContext<"/products/:type">) => {
  const type = context.params.type;
  if (!Object.keys(products).includes(type)) {
    context.throw(404, "Invalid product type");
  }
  context.response.body = products[type as keyof typeof products];
});

const app = new Application();

// avoid cors error
app.use(async (context, next) => {
  context.response.headers.set("Access-Control-Allow-Origin", "*");
  context.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  context.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
