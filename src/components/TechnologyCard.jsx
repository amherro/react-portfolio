const TechnologyCard = ({ techName, imgSrc, altText }) => {
  return (
    <div className="card shrink-0 w-[7rem] md:w-80 mx-2 my-5">
      {/* <div className="card-title p-3 pl-4 self-center">{techName}</div> */}
      <div className="image-container pr-5 flex justify-center items-center">
        <img
          src={imgSrc}
          alt={altText}
          className="logo w-[3rem] h-[3rem] pt-[10px] pr-5"
        />
        <h3 className="tech-name">{techName}</h3>
      </div>
    </div>
  );
};

export default TechnologyCard;
