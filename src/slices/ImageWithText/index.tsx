import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageWithText`.
 */
export type ImageWithTextProps =
  SliceComponentProps<Content.ImageWithTextSlice>;

/**
 * Component for "ImageWithText" Slices.
 */
const ImageWithText: FC<ImageWithTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_with_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageWithText;
