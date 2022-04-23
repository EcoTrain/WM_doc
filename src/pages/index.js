import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import MobileStoreButton from "react-mobile-store-button";
import * as RDD from "react-device-detect";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ flexFlow: "wrap" }}>
          <Link style={{ margin: 12 }} className="button button--secondary button--lg" to="https://wellness.a2rd.com">
            Web App 💊
          </Link>
          <Link className="button button--primary button--lg" to="/docs/presentation">
            Get started ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description of implemented functionality and plans for future releases"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div className="storeBtns">
        {RDD.isAndroid && <MobileStoreButton store="ios" url={""} linkProps={{ title: "iOS Store Button" }} />}
        {RDD.isIOS && <MobileStoreButton store="android" url={""} linkProps={{ title: "Android Store Button" }} />}
        {/* {RDD.isBrowser && (
          <Link style={{ margin: 12 }} className="button button--secondary button--lg" to="https://wellness.a2rd.com">
            Web App 💊
          </Link>
        )} */}
      </div>
    </Layout>
  );
}
