import { useCallback } from "react";
import styles from "./PageStructure.module.css";

const PageStructure = () => {
  const onAContainerClick = useCallback(() => {
    window.location.href = "https://github.com/Exoticdevelopment";
  }, []);

  const onAContainer2Click = useCallback(() => {
    window.location.href =
      "https://drive.google.com/drive/folders/11mNEV1_DJhj5UlAbe570s_niRDvHBbke?usp=sharing";
  }, []);

  return (
    <div className={styles.pag2}>
      <div className={styles.fondoParent}>
        <div className={styles.fondo}>
          <div className={styles.div}>
            <div className={styles.child} />
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group.svg"
            />
            <div className={styles.div1}>
              <div className={styles.python}>Python</div>
              <div className={styles.div2}>
                <div className={styles.div3} />
              </div>
            </div>
            <div className={styles.a} onClick={onAContainerClick}>
              <div className={styles.github}>github</div>
            </div>
          </div>
        </div>
        <div className={styles.holaSoyMiguelContainer}>
          <p className={styles.holaSoyMiguel}>
            ¡Hola! Soy Miguel Ángel, un apasionado por la tecnología desde muy
            joven. Mi fascinación por la forma en que la tecnología puede
            transformar nuestras vidas me llevó a estudiar Ingeniería de
            Sistemas.
          </p>
          <p className={styles.holaSoyMiguel}>
            Desde entonces, he estado inmerso en un viaje de aprendizaje
            continuo, explorando las infinitas posibilidades que la tecnología
            ofrece. Mi objetivo es utilizar mis habilidades y conocimientos para
            crear soluciones innovadoras que simplifiquen la vida de las
            personas y impulsen el progreso en nuestra sociedad.
          </p>
        </div>
        <img
          className={styles.avatar2png1Icon}
          alt=""
          src="/avatar2png-1@2x.png"
        />
      </div>
      <div className={styles.exoticdevParent}>
        <i className={styles.exoticdev}>ExoticDev</i>
        <div className={styles.aboutMe}>About me!</div>
      </div>
      <div className={styles.skills}>Skills</div>
      <div className={styles.a1} onClick={onAContainer2Click}>
        <div className={styles.github}>CERTIFICACIONES</div>
      </div>
    </div>
  );
};

export default PageStructure;
