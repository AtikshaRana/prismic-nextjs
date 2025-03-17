import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import clsx from "clsx";

const getComponents = (variation: string): JSXMapSerializer => ({
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-8 mb-4 mt-12 first-mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className={clsx(
      "text-lg md:text-xl text-slate-600 font-normal font-display mt-4 max-w-lg mx-auto",
      variation === "horizontal" ? "text-left md:text-left" : "text-center"
    )}>
      {children}
    </p>
  ),
});


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {slice.variation === "horizontal" ? (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <PrismicRichText field={slice.primary.heading} components={getComponents(slice.variation)} />
            <PrismicRichText field={slice.primary.body} components={getComponents(slice.variation)} />
            {slice.primary.button_link && slice.primary.button_text && (
              <Button field={slice.primary.button_link} className="mt-6">
                {slice.primary.button_text}
              </Button>
            )}
          </div>

          {/* Image */}
          {slice.primary.image && (
            <div className="flex-1">
              <PrismicNextImage
                field={slice.primary.image}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <PrismicRichText field={slice.primary.heading} components={getComponents(slice.variation)} />
          <PrismicRichText field={slice.primary.body} components={getComponents(slice.variation)} />
          {slice.primary.button_link && slice.primary.button_text && (
            <Button field={slice.primary.button_link} className="mt-6">
              {slice.primary.button_text}
            </Button>
          )}

          {/* Image */}
          {slice.primary.image && (
            <div className="mt-10 w-full max-w-4xl mx-auto">
              <PrismicNextImage
                field={slice.primary.image}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Hero;
