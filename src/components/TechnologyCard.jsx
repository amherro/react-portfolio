const TechnologyCard = ({ techName, imgSrc, altText }) => {
  return (
    <div className="flex-col-reverse justify-center card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
      {/* <div className="card-title p-3 pl-4 self-center">{techName}</div> */}
      <div className="image-container pr-5 self-center">
        <img
          src={imgSrc}
          alt={altText}
          className="logo w-[3rem] h-[3rem] md:w-[80px] md:h-[80px]"
        />
      </div>
    </div>
  );
};

export default TechnologyCard;
