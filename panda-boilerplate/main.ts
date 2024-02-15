/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

// run deno task codegen

const command1 = new Deno.Command("deno", {
  args: [
    "run -A --unstable-fs --node-modules-dir npm:@pandacss/dev@0.31.0 codegen",
  ],
});

const { success: success1, stdout: stdout1 } = await command1.output();
console.log(success1);
console.log(new TextDecoder().decode(stdout1));

const command2 = new Deno.Command("deno", {
  args: [
    "run -A --unstable-fs  --node-modules-dir npm:@pandacss/dev@0.31.0 cssgen --outfile static/panda.css",
  ],
});

const { success: success2, stdout: stdout2 } = await command2.output();
console.log(success2);
console.log(new TextDecoder().decode(stdout2));

await start(manifest, config);
