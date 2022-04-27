import { NewMessage } from "telegram/events/index.js";
import { clientAddEventHandler } from "../index";
import limit from "./limit";
import ping from "./ping";

function loadModules() {
  clientAddEventHandler(limit, new NewMessage({}));
  clientAddEventHandler(ping, new NewMessage({}));
}

export default loadModules;
