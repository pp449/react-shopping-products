import SERVER_URL from "@/config/serverUrl";

export const basicToken = `Basic ${btoa(`${SERVER_URL.userId}:${SERVER_URL.userPassword}`)}`;
