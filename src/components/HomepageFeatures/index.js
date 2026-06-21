import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Support Our Community",
    Svg: require("@site/static/img/community.svg").default,
    description: (
      <>
        Create an inclusive home for U of T Industrial Engineering students to
        connect, share experiences, and support one another.
      </>
    ),
  },
  {
    title: "Build Career Readiness",
    Svg: require("@site/static/img/career.svg").default,
    description: (
      <>
        Help students explore career paths, meet industry professionals, and
        develop practical skills for meaningful work after graduation.
      </>
    ),
  },
  {
    title: "Grow Leaders & Innovators",
    Svg: require("@site/static/img/learn.svg").default,
    description: (
      <>
        Offer events, projects, and opportunities that empower students to lead,
        collaborate, and make a positive impact on campus and beyond.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
