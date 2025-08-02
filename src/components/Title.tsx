import type { PropsWithChildren } from "react"

type TitleProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6,
    className?: string
} & PropsWithChildren

export default function Title({ level, children, className }: TitleProps) {
    const classNames = "mb-0 lh-1".concat(className ? ` ${className}` : "")
    let selectedTitle = <></>
    switch (level) {
        case 1:
            selectedTitle = <h1 className={`${classNames} display-1`}>{children}</h1>
            break;
        case 2:
            selectedTitle = <h2 className={`${classNames} display-2`}>{children}</h2>
            break;
        case 3:
            selectedTitle = <h3 className={`${classNames}`}>{children}</h3>
            break;
        case 4:
            selectedTitle = <h4 className={`${classNames}`}>{children}</h4>
            break;
        case 5:
            selectedTitle = <h5 className={`${classNames}`}>{children}</h5>
            break;
        case 6: 
            selectedTitle = <h6 className={`${classNames}`}>{children}</h6>
            break;
        default:
            throw new Error("Unkown level!");
    }

    return <>
        { selectedTitle }
        { level > 1 && <hr className="m-0 mb-3"/> }
    </>
}