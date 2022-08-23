import React from "react";

function Hero(props) {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="uppercase text-green-600 text-xl font-semibold ">
          KARIBU PYCON TANZANIA
        </h1>
        <h2 className=" text-7xl font-bold text-zinc-700">
          The <span className=" text-green-600">3rd </span> annual python language
          conference.
        </h2>
        <p>
          For professionals, entrepreneurs, scientists and students in Tanzania,
          organized by the tech-community to foster collaboration and
          advancement of technology.
        </p>
        <button>Become A Sponsor</button>
        <div className="flex">
          <p>1ST - 4TH December 2021</p>
          <a href="">VENUE → Institute of Accountancy Arusha</a>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
