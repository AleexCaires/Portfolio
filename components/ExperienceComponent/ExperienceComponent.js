import React, { useState } from "react";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";

import { ExperienceContainer, Tabs, ContentContainer, Content } from "./ExperienceComponent.styles";

export function ExperienceMobile({ data }) {
  const [expanded, setExpanded] = useState("");
  const expandedCompany = expanded || data[0]?.company;

  const handleExpandClick = (company) => {
    setExpanded(expandedCompany === company ? "" : company);
  };

  return (
    <ExperienceContainer className="mobile-experience">
      <ul className="mobile-list">
        {data.map((item, index) => (
          <li key={index} className="mobile-company">
            <button type="button" className="mobile-trigger" onClick={() => handleExpandClick(item.company)}>
              <span>{item.company}</span>
              <FaAngleDown className={clsx("mobile-chevron", item.company === expandedCompany ? "open" : "")} />
            </button>
            <div className={clsx("mobile-content", item.company === expandedCompany ? "open" : "closed")}>
              <h1>
                {item.position} @ <span>{item.company}</span>
              </h1>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </ExperienceContainer>
  );
}

export function ExperienceDesktop({ data }) {
  const [selected, setSelected] = useState(data[0]?.company || "");
  const selectedItem = data.find((item) => item.company === selected) || data[0];

  const handleSelector = (company) => {
    setSelected(company);
  };

  return (
    <ExperienceContainer className="desktop-experience">
      <Tabs>
        {data.map((item, index) => (
          <li key={index} className={clsx(item.company === selected ? "active" : "")} onClick={() => handleSelector(item.company)}>
            {item.company}
          </li>
        ))}
      </Tabs>
      <ContentContainer>
        <ContentComponent key={selectedItem.company} position={selectedItem.position} company={selectedItem.company} date={selectedItem.date} description={selectedItem.description} active />
      </ContentContainer>
    </ExperienceContainer>
  );
}

function ContentComponent({ position, company, date, description, active }) {
  return (
    <Content className={clsx(active ? "active" : "inactive")}>
      <h1>
        {position} @ <span>{company}</span>
      </h1>
      <p>{date}</p>
      <p>{description}</p>
    </Content>
  );
}
