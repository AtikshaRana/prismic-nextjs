
import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";



export default function Button({
    className,
    ...restProps
}: PrismicNextLinkProps){
    return (
        <PrismicNextLink
        className={clsx("inline-block px-6 py-3 bg-[#0E7490] text-white text-lg font-medium rounded-lg transition hover:bg-[#0C637A]" ,  className)}
        { ...restProps}
      />
    )
}