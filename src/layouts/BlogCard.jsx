import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 roundenlg cursor-pointer hover:scale-105 transition duration-300 ease-in-out ">
      <img
        className="h-64 md:h-96 lg:h-40 w-full rounded-lg"
        src={img}
        alt=""
      />
      <h1 className="text-lg text-center font-semibold">{headlines}</h1>
      <p className="text-center text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        exercitationem consequuntur dolor consectetur maiores voluptate ut sit
        molestiae mollitia aspernatur?
      </p>
    </div>
  );
};

export default BlogCard;
