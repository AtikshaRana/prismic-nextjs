
import clsx from "clsx"

type BoundedProps = {
    as? : React.ElementType;
    className? : String;
    children? : React.ReactNode;
}



export default function Bounded( {
    as : Comp = 'section' ,
    className,
    children,
    ...restProps
}: BoundedProps ) {

    return (
        <Comp  className={clsx("flex flex-col items-center text-center px-6 py-12 md:py-16 lg:py-24 max-w-5xl mx-auto" , className) }  {...restProps}>
              <div className="container">
                {children}
              </div>

        </Comp>
    )

}