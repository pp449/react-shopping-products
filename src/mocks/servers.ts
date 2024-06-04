import { setupServer } from "msw/node";
import { productsHandler } from "./handler/productsHandler";
import { cartItemsHandler } from "@/mocks/handler/cartItemsHandler";

export const server = setupServer(...productsHandler, ...cartItemsHandler);
