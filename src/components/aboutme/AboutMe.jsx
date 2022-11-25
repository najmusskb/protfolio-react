import { t } from "i18next";
import { img } from "../../assets";
import styles from "./AboutMe.module.css";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
    >
      <section className={`aboutme ${styles.aboutme}`}>
        <img src={img.aboutme} alt="aboutme" />
        <p>{t("aboutmeTwo")}</p>

        <div className={styles.sl}>
          <section className={styles.skills}>
            <article className="title">
              <h4>{t("mySkills")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <div>
              <span>HTML</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

              </ul>
            </div>

            <div>
              <span>CSS</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>Bootstrap</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>


              </ul>
            </div>


            <div>
              <span>Tailwind</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>

              </ul>
            </div>

            <div>
              <span>Responsive</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>JavaScript</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>

              </ul>
            </div>

            <div>
              <span>React</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>

              </ul>
            </div>

            <div>
              <span>Redux</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>React Native</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>Node js</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>Express Js</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>MongoDB</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Git</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Latex</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

              </ul>

            </div>
          </section>
          <section className={styles.languages}>
            <article className="title">
              <h4>{t("languages")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <div>
              <span>{t("Bangla")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>{t("english")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>{t("english")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <article className="title">
              <h4>{t("Tools")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>
            <div>
              <span>1. VS Code</span>
            </div>
            <div>
              <span>2. Github</span>
            </div>
            <div>
              <span>3. Netlify</span>
            </div>
            <div>
              <span>5. Adobe XD</span>
            </div>
            <div>
              <span>6. Figma,</span>
            </div>
            <div>
              <span>7. MS Offices</span>
            </div>

          </section>

        </div>



      </section>

    </motion.div>
  );
};

export default AboutMe;
