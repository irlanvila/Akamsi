import { NewMessage } from "telegram/events/index.js";
import { clientAddEventHandler } from "../index";
import ping from "./ping";

async function loadModules() {
  clientAddEventHandler(ping, new NewMessage({}));
}

export default loadModules;
