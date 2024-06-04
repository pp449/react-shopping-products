import SERVER_URL from "@/config/serverUrl";

const urlFormatter = (path: string, queryParameter: string) => {
  return SERVER_URL.apiUrl + path + "?" + queryParameter;
};

export default urlFormatter;
