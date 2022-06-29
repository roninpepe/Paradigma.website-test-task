function About(props) {
  return (
    <div className={`about ${props.className}`}>
      <span className="about__p">
        <span className="_semibold">Кровельные и фасадные материалы</span> в
        Тюмени и области.
      </span>
      <span className="about__p"> </span>
      <span className="about__p">Профессиональный монтаж с 2010 года.</span>
    </div>
  );
}

export default About;
