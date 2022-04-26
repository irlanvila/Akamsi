import { NewMessageEvent } from "telegram/events";
import { PREFIX } from "../index";

async function ping(event: NewMessageEvent) {
  const start: number = new Date().getTime();
  const message = event.message;
  if (message.message === `${PREFIX}ping`) {
    await message.reply({ message: `\`Terminal Running...\`` }).then((h) => {
      event.client.editMessage(h.peerId, {
        message: h.id,
        text: `\`${(new Date().getTime() - start) / 1000} ms\``,
      });
    });
  }
}

export default ping;
