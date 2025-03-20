import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

 
/**
 * Props for `ImageTextComponent`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageWithTextSlice>;


const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg text-gray-600">{children}</p>
  ),
};

/**
 * Component for "Image and Text" Slices.
 */
const ImageText: FC<ImageTextProps> = ({ slice }) => {
  // Determine layout based on variation
  const isTextWithImage = slice.variation === "textWithImage";
console.log(slice.variation);

  return (
    <Bounded className="py-16">
      <div
        className={clsx(
          "flex flex-col md:flex-row items-center gap-8",
          isTextWithImage ? "md:flex-row-reverse" : ""
        )}
      >
        {/* Image Section */}
        {slice.primary.image && (
          <div className="w-full md:w-1/2">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <PrismicRichText components={components} field={slice.primary.heading} />
          <PrismicRichText components={components} field={slice.primary.blurb} />
        </div>
      </div>
    </Bounded>
  );
};

export default ImageText;
