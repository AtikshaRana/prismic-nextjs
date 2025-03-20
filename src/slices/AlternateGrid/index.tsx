import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
export type GridSectionProps = SliceComponentProps<Content.AlternateGridSlice>;

const GridSection: FC<GridSectionProps> = ({ slice }) => {
  return (
    <Bounded
      data-type={slice.slice_type}
      data-variation={slice.variation}
      className="grid-section-wrapper"
    >
      <div
        className={`
          grid-section-content
          ${isFilled.image(slice.primary.image) ? "grid-with-image" : ""}
        `}
      >
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            className={`
              grid-section-image
              ${slice.variation === "imageRight" ? "img-right" : "img-left"}
            `}
          />
        )}

        <div className="grid-text-content">
          <div className="grid-text-intro">
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <p className="grid-eyebrow">{slice.primary.eyebrowHeadline}</p>
            )}
            {isFilled.richText(slice.primary.title) && (
              <div className="grid-title">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className="grid-description">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>

          {slice.primary.items.length > 0 && (
            <div className="grid-items">
              {slice.primary.items.map((item, i) => (
                <div key={`item-${i + 1}`} className="grid-item">
                  {isFilled.richText(item.title) && (
                    <div className="grid-item-title">
                      <PrismicRichText field={item.title} />
                    </div>
                  )}
                  {isFilled.richText(item.description) && (
                    <div className="grid-item-description">
                      <PrismicRichText field={item.description} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .grid-section-wrapper {
            padding: 6vw 1.5rem;
            font-family: Arial, sans-serif;
            color: #222;
          }

          .grid-section-content {
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .grid-with-image {
              grid-template-columns: 1fr 1fr;
              align-items: center;
            }
          }

          .grid-section-image {
            max-width: 100%;
            height: auto;
            object-fit: cover;
          }

          .img-left {
            order: -1;
          }

          .grid-text-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .grid-text-intro {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .grid-eyebrow {
            color: #5c67f2;
            font-size: 1.2rem;
            font-weight: 500;
          }

          .grid-title {
            font-size: 2rem;
            font-weight: bold;
          }

          .grid-description {
            font-size: 1.1rem;
            max-width: 40rem;
          }

          .grid-items {
            display: grid;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .grid-items {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .grid-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .grid-item-title {
            font-weight: bold;
            font-size: 1.2rem;
          }

          .grid-item-description {
            font-size: 1rem;
          }
        `}
      </style>
    </Bounded>
  );
};

export default GridSection;
