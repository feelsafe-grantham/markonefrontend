type Environment = "dev" | "prod";
let MODE: Environment = "dev";

export type Endpoint = "seo" | "development" | "testimonial";
export let BASE_URL: string;
if (MODE === "dev") {
  BASE_URL = "http://markprodenv.eba-kpftbw52.ap-south-1.elasticbeanstalk.com/";
} else if (MODE === "prod") {
  BASE_URL = "https://domainapi.store/";
}
