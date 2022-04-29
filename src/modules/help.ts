import { modules } from ".";
import { NewMessageEvent } from "telegram/events";
import { PREFIX } from "../index";

async function help(event: NewMessageEvent) {
  const message = event.message;
  if (message.message === `${PREFIX}help`) {
    let listModule = "";
    modules.forEach((module) => {
      if (module.name === "help") return;
      return (listModule += module.name + " ");
    });
    await message.edit({
      text: `**AVAILABLE COMMANDS**

\`${listModule}\`
    
Type "${PREFIX}help <command>" to see the details

Example: **${PREFIX}help limit**`,
    });
  }
}

export default help;
