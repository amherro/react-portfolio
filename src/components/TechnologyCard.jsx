const TechnologyCard = ({ techName, imgSrc, altText }) => {
  return (
    <div className="flex-row justify-center card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
      <div className="card-title p-3 pl-4 ">{techName}</div>
      <div className="image-container pr-5">
        <img src={imgSrc} alt={altText} className="logo" />
      </div>
    </div>
  );
};

export default TechnologyCard;
