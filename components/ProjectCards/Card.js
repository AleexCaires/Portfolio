import React, {useState, useEffect} from "react"
import clsx from "clsx";
import useMeasure from 'react-use-measure'
import { 
    FiGithub,
} from "react-icons/fi";
import {
    FaArrowRight,
} from 'react-icons/fa'
import {
    StyledCard,
    FeaturedImg,
    CardInner,
    CardHeader,
    StyledTitle,
    GitLink,
    StyledDescription,
    CardFooter,
    StyledTag,
    LiveLink
} from './ProjectCards.styles'

export function Card({
    Title, 
    FeaturedImage,
    Description,
    Tags,
    LiveUrl,
    GitUrl
}) {

    const [ref, bounds] = useMeasure()
    const [active, setActive] = useState(false);
    const [descriptionHeight, setDescriptionHeight] = useState();

    console.log(descriptionHeight);

    const handleMouseIn = (e) => {
        setActive(true);
    }

    const handleMouseOut = (e) => {
        setActive(false);
    }

    useEffect(()=>{
        setDescriptionHeight(bounds.height);
        console.log(bounds.height);
        console.log(descriptionHeight);
    }, []);

    return(
        <StyledCard onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <FeaturedImg className={clsx(active ? 'hover' : '')} style={{backgroundImage: FeaturedImage }} />
            <CardInner>
                <CardHeader>
                    <StyledTitle>{Title}</StyledTitle>
                    {GitUrl &&
                        <GitLink target="_blank" href={GitUrl} rel="noopener noreferrer"><FiGithub /></GitLink>
                    }
                </CardHeader>
                {Description &&
                    <StyledDescription ref={ref} className={clsx(active ? 'hover' : '')} containerHeight={clsx(descriptionHeight ? descriptionHeight+'px' : '')}>
                        {Description}
                    </StyledDescription>
                }
                <CardFooter>
                    {Tags && Tags.map(Tag =>
                        <StyledTag key={Tag}>{Tag}</StyledTag>
                    )}
                    <LiveLink>View Live <FaArrowRight /></LiveLink>
                </CardFooter>
            </CardInner>
        </StyledCard>
    )
}