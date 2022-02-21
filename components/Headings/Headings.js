import React from 'react'
import {
    HeadingContainer,
    Index
} from './Headings.styles'

export function Headings({heading, number, position="left"}) {

    return(
        <HeadingContainer className={`position-${position}`}>
            <Index>{number}.</Index> {heading}
        </HeadingContainer>
    )

}