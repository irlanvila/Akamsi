import { NewMessage, NewMessageEvent } from "telegram/events/index.js";
import client, { PREFIX } from "../index";

async function limit(event: NewMessageEvent) {
  const message = event.message;
  if (message.message === `${PREFIX}limit`) {
    await client.sendMessage("SpamBot", {
      message: "/start",
    });
    client.addEventHandler((spamBotResponse) => {
      // 178220800 is @SpamBot id
      if (spamBotResponse.chatId.valueOf() === 178220800) {
        (async () => {
          event.client.editMessage(message.peerId, {
            message: message.id,
            text: `\`${spamBotResponse.message.message}\``,
          });
        })();
      }
    }, new NewMessage({}));
  }

  if (message.message === `${PREFIX}help limit`) {
    await message.edit({ text: `\`Check your current limit\`` });
  }
}

export default limit;
