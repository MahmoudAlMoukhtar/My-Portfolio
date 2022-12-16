const ItemProjcets = ({p}) => {
  const {title, description, category, image, demoLink, githubLink} = p;
  return (
    <div className="flex flex-col justify-center gap-2 w-[300px] sm:w-[400px] shadow-lg p-2 z-40 bg-slate-800  hover:scale-105 transtion duration-200 itemProjects">
      <img src={image} alt="" className="w-[100%] itemProjects" />
      <div className="flex flex-col gap-2 w-[100%] items-center">
        <h2 className="text-gray-400">{title}</h2>
        <p className="text-xs">{description}</p>

        <a
          href={demoLink}
          className=" bg-slate-600 text-center itemProjects"
          target="_blank"
        >
          Demo
        </a>
        <button className=" bg-slate-600 itemProjects" target="_blank">
          Github
        </button>
      </div>
    </div>
  );
};

export default ItemProjcets;

/*
 */
