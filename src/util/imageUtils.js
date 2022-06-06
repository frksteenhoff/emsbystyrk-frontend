import { client } from '../routes/index.js' 

const projectId = client.config().projectId;
const dataset = client.config().dataset;

// Derived from Sanity docs: https://www.sanity.io/docs/image-urls
const getImageFromRef = (ref) => {
	const baseString = ref.split('image-')[1]
	return baseString.replace("-jpg", ".jpg");
}

const buildSanityImageUrl = (imageRef) => {
	return `https://cdn.sanity.io/images/${projectId}/${dataset}/${getImageFromRef(imageRef)}`;
}

export default buildSanityImageUrl;