import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onAcercaContainerClick = useCallback(() => {
    navigate("/pag2");
  }, [navigate]);

  return (
    <div className={styles.pag1}>
      <div className={styles.frame}>
        <div className={styles.frame}>
          <img className={styles.icon} alt="" src="/content-block@2x.png" />
          <div className={styles.explorandoElUniverso}>
            "Explorando el universo del desarrollo de software, donde la
            innovación y la creatividad convergen para dar forma al mañana
            digital."
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.cv}>CV</div>
              <div className={styles.acerca} onClick={onAcercaContainerClick}>
                <div className={styles.acercaDeMi}>ACERCA DE MI</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.exoticdevParent}>
            <i className={styles.exoticdev}>ExoticDev</i>
            <div className={styles.holaSoyMiguelContainer}>
              <p
                className={styles.holaSoyMiguel}
              >{`¡Hola! Soy Miguel Ángel, `}</p>
              <p
                className={styles.holaSoyMiguel}
              >{`un apasionado por la tecnología `}</p>
              <p className={styles.holaSoyMiguel}>desde muy joven.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <img
            className={styles.avatarpng1Icon}
            alt=""
            src="/avatarpng-1@2x.png"
          />
        </div>
        <div className={styles.frame4}>
          <div className={styles.avatar2} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
