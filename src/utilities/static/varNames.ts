type Environment = "dev" | "prod";
let MODE: Environment = "dev";

export let BASE_URL: string;
if (MODE === "dev") {
  BASE_URL = "http://192.168.1.16:8000/";
} else if (MODE === "prod") {
  BASE_URL = "https://domainapi.store/api/";
}
