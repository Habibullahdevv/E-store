import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Create a builder instance
const builder = imageUrlBuilder(client);

export function imageUrl(source: SanityImageSource) {
    return builder.image(source);
}


