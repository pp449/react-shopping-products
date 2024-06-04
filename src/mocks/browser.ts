import { setupWorker } from "msw/browser";
import { productsHandler } from "./handler/productsHandler";
import { cartItemsHandler } from "@/mocks/handler/cartItemsHandler";

export const worker = setupWorker(...productsHandler, ...cartItemsHandler);
