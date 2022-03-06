import React, { useState, useEffect } from "react";
import useMeasure from 'react-use-measure'
import clsx from "clsx";
import {
  ExperienceContainer,
  Tabs,
  ContentContainer,
  Content,
} from './ExperienceComponent.styles';

export function ExperienceMobile({data}) {

  const [expanded, setExpanded] = useState('');

  const handleExpandClick = (company) => {
    setExpanded(expanded === company ? '' : company);
  }

  return(
    <ExperienceContainer position="right">
        <ul position="right">
        {data.map((item, index) =>
          <li key={index} className="company" onClick={() => handleExpandClick(item.company)}>
            {item.company}
            <div className={clsx('content', item.company === expanded ? 'open' : 'closed')}>
              <h1>{item.position} @ <span>{item.company}</span></h1>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </li>
        )}
      </ul>
    </ExperienceContainer>
  )
}

export function ExperienceDesktop({data}) {

  const [selected, setSelected] = useState('');

  const handleSelector = (company) => {
    setSelected(company);
  }

  useEffect(() => {
    setSelected(data[0].company);
  }, [data]);

  return(
    <ExperienceContainer>
      <ContentContainer>
        {data.map((item, index) =>
          <ContentComponent 
            key={index}
            position={item.position}
            company={item.company}
            date={item.date}
            description={item.description}
            active={item.company === selected ? true : false}
          />
        )}
      </ContentContainer>
      <Tabs>
        {data.map((item, index) =>
          <li key={index} className={clsx(item.company === selected ? 'active' : '')} onClick={() => handleSelector(item.company)}>{item.company}</li>
        )}
      </Tabs>
    </ExperienceContainer>
    )
}

function ContentComponent({position, company, date, description, active, }, ) {
  
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (active) {
      setHeight('auto');
    } else {
      setHeight('0px');
    }
  },[active]);

  return(
    <Content className={clsx(active ? 'active' : 'inactive')} style={{height : height}}>
      <h1>{position} @ <span>{company}</span></h1>
      <p>{date}</p>
      <p>{description}</p>
      
    </Content>

  )
}