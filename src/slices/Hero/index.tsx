import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";


const components : JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-8 mb-4 mt-12 first-mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg md:text-xl text-slate-600 text-center font-normal font-display mt-4 max-w-lg mx-auto ">
      {children}
    </p>
  ),
}




/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
     
    >
   

    
      {/* Heading */}
      <PrismicRichText
        field={slice.primary.heading}
        components={components}
      />

      {/* Paragraph */}
      <PrismicRichText
        field={slice.primary.body}
        components={components}
      />

      {/* CTA Button */}
      {slice.primary.button_link && slice.primary.button_text && (
          <Button
            field={slice.primary.button_link}
            className="mt-6"
          >
            {slice.primary.button_text}
        </Button>
      )}

      {/* Image at the Bottom */}
      {slice.primary.image && (
        <div className="mt-10 w-full max-w-4xl">
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </Bounded>
  );
};

export default Hero;
