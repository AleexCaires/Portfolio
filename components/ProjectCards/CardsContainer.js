import react from "react"
import {
    Cards,
} from './ProjectCards.styles'

export function CardsContainer({children}) {
    return(
        <Cards>
            {children}
        </Cards>
    )
}