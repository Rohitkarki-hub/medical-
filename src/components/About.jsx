import React from "react";
import img from "../assets/img/about.jpg";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          mollitia odio eaque pariatur! Veritatis vel itaque amet qui molestiae
          incidunt ea libero quisquam, officia optio, ipsam nam quidem cumque
          esse! Debitis voluptatibus ducimus nam dolores a alias labore magni
          laboriosam molestias. Architecto illum voluptate quos omnis hic!
          Exercitationem, doloremque culpa.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          inventore, ipsa facere eveniet sequi doloremque perferendis
          reprehenderit cumque illo explicabo consequatur, nobis officiis vitae
          reiciendis consectetur quidem mollitia, quibusdam non!
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          aut fugit quidem iure consequuntur impedit id molestiae nam nostrum
          iste.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={img} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
