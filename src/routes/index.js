
  import sanityClient from "@sanity/client";

  const client = sanityClient({
	projectId: "kmzqjgmb",
	dataset: "production",
	apiVersion: "2022-05-14",
	useCdn: false
  });

  export { client }
