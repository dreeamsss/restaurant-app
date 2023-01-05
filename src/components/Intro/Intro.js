import Container from "../UI/Container";
import introBgImage from "../../img/intro/intro-bg.jpg";
import classes from "./Intro.module.scss";

function Intro() {
  return (
    <div className={classes.intro}>
      <div className={classes.introImage}>
        <img src={introBgImage} alt="" />
      </div>
      <Container className={classes.introContainer}>
        <div className={classes.introContent}>
          <h1 className={classes.introTitle}>Онлайн суши ресторан</h1>
          <div className={classes.introText}>
            <p className={classes.introDescr}>
              Это онлайн суши ресторан, в котором суши и сашими, роллы и другие
              блюда национальной японской кухни делает команда профессиональных
              поваров.
            </p>
            <p className={classes.introBenefits}>
              Быстрая работа и качественная продукция, а также самые настоящие
              компоненты придают хороший вкус блюдам, дарят наслаждение от
              трапезы.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
