import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit
          laudantium dolore accusantium. Velit similique impedit sequi sapiente
          a molestiae eligendi quibusdam. Unde, blanditiis. Odit, nihil deserunt
          vero iusto fuga pariatur harum amet illum odio qui facilis adipisci
          quaerat, aut doloremque voluptate eius numquam tempore. Dolorem totam
          at nobis nesciunt rem! Voluptatem nostrum assumenda aspernatur eum
          quas enim optio hic animi similique laudantium aliquid ipsum, eos
          omnis consequatur, ullam totam facilis delectus voluptas veniam
          doloribus possimus autem dolore, reprehenderit reiciendis? Cumque,
          debitis provident, atque consequatur alias incidunt ipsa impedit
          accusamus, temporibus ratione nobis mollitia omnis quisquam hic rem
          adipisci neque.
        </p>

        <Button title="see services" />
      </div>
    </div>
  );
};

export default Home;
