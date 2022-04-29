import { Api, TelegramClient } from "telegram";
import "dotenv/config"; // https://github.com/motdotla/dotenv/#how-do-i-use-dotenv-with-import
import { StringSession } from "telegram/sessions/index.js";
import loadModules from "./modules";

const API_ID = +process.env.API_ID;
const API_HASH = process.env.API_HASH;
const STRING_SESSION = new StringSession(process.env.STRING_SESSION);
const PREFIX = process.env.PREFIX;
const CHAT_LOG = process.env.CHAT_LOG;

let clientAddEventHandler: any;
console.log("Loading interactive example...");
const client = new TelegramClient(STRING_SESSION, API_ID, API_HASH, {
  connectionRetries: 5,
});

(async () => {
  await client.connect();
  console.log("You should now be connected.");
  await client.sendMessage(CHAT_LOG, {
    message: "`Akamsi Userbot has been activated!`",
  });

  // Prevent "Property 'addEventHandler' does not exist inside modules directory"
  clientAddEventHandler = (moduleName: any, hh: any) => {
    client.addEventHandler(moduleName, hh);
  };

  // Create Supergroup for the first time user activate their bot
  const chatLog: Api.Updates = await client.invoke(
    new Api.channels.CreateChannel({
      megagroup: true,
      title: "AKAMSI USERBOT LOGS",
      about: "A group to save your bot logs",
    })
  );

  loadModules();
})();

export { PREFIX, clientAddEventHandler };
export default client;
