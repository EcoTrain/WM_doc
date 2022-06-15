import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Keep a diary",
    Svg: require("/img/main_diary.svg").default,
    description: <>Monitor health indicators.</>,
    link: "/WM_doc/docs/presentation/history",
  },
  {
    title: "Plan your events",
    Svg: require("/img/main_calendar.svg").default,
    description: <>Schedule events and receive notifications. Create a themed or custom reminder</>,
    link: "/WM_doc/docs/presentation/schedule",
  },
  {
    title: "Chat",
    Svg: require("/img/main_chat.svg").default,
    description: <>Chat with other users</>,
    link: "/WM_doc/docs/presentation/chat",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={link} style={{ textDecoration: "none" }}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
