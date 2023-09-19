//import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";
//import SanityClient from "@sanity/client";
import createClient from "@sanity/client";

const client = createClient({
  projectId: "5y871dmc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-08-11",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
