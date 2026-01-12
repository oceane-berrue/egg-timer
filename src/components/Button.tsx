import { type PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    name?: string,
    onClick: () => void
}>

export function Button({name, onClick}: Props) {
    return (
        <button className="border-3 border-darkorange hover:scale-125" onClick={onClick}>{name}</button>
    )
}