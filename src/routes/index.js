
  import sanityClient from "@sanity/client";

  const client = sanityClient({
	projectId: "kmzqjgmb",
	dataset: "production",
	apiVersion: "2022-06-22",
	useCdn: true
  });

  export { client }
