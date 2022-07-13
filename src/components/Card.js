const Card = (props) => {
  const { id, name, date, desc, tech, func, github, demo } = props.data;
  return (
    <div className="cardWrapper">
      <h2 className="cardTitle">{name}</h2>
      <div className="projectDate">{date}</div>
      <div className="cardContent">
        <div className="projectPic">
          <img src={`${process.env.PUBLIC_URL}/images/project/${id}.webp`} alt={name}/>
        </div>
        <div className="cardDesc">
          <div className="description">{desc}</div>
          <div>사용 기술: {tech.map((v,i)=>
            <span key={i} className="tech">{v}</span>
          )}</div>
          <div>
            <h3>기능 설명</h3>
            {func.map(([t,d], i)=><div key={i}>{t}: {d}</div>)}
          </div>
          <div>Github: {github}</div>
          <div>Demo: {demo}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
