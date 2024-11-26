import "@std/dotenv/load";
import { Bot } from "grammy";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

bot.chatType("channel").on("channel_post:text", async (ctx) => {
  const zov_text = ctx.msg.text
    .replace(/з/ig, "Z")
    .replace(/о/ig, "O")
    .replace(/в/ig, "V");
  await ctx.editMessageText(zov_text);
});

bot.catch((e) => console.error(e.message));
