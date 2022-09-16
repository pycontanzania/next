function Programme(props) {
  return (
    <section>
      <h1 className="text-4xl font-bold font-base text-center">The Programme</h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="my-20 grid lg:grid-cols-2 gap-16">
        <div className="aspect-w-16 aspect-h-9 mb-16">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4Elmrr3P_vo"
            title="YouTube video player"
            style={{border: 0}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-4">
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">Workshop Day</h1>
            <p className="font-base text-xl">
              Curated hands-on workshops exploring the fundamentals of the
              Python language where participants learn from mentors.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">Conference Day</h1>
            <p className="font-base text-xl">
              Various 25min long, technical presentations selected through a CfP
              process that&apos;re related to projects using Python Language
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">Lightning Talks</h1>
            <p className="font-base text-xl">
              Sessions where the folks engage in informal discussions to
              encourage collaboration on various Python related projects.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">Python Meetups</h1>
            <p className="font-base text-xl">
              Occasional events to bring together Python Users so as to increase
              collaboration among the Python language community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programme;
