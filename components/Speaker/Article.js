

function Article(props) {
  return (
    <article className="md:col-span-2 font-base text-gray-600 dark:text-gray-200">
      <h1 className="font-bold text-2xl">
        Speak at the 2022 Python Conference
      </h1>
      <p className="my-4 md:my-8 text-lg md:text-xl ">Call for Presentation and Tutorials</p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        PyCon Tanzania, is seeking for speakers of all experience levels and
        backgrounds to contribute to the Python Conference program! If you use
        the Python programming language professionally, as a hobbyist or are
        just excited about Python or programming and open source communities,
        we&apos;d love to hear from you. We want you and your ideas at the upcoming
        Python Conference!
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        The Python Tanzania Conference Programme consists of two parts, these
        being the Talks/Presentations and Tutorials Tracks.
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Talks:</strong> These are the traditional talk sessions given
        during the main conference day which. PyCon Tanzania is dedicated to
        featuring a diverse and inclusive mix of speakers in the lineup.
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Tutorials:</strong> As with the talks, we are looking for
        tutorials that can grow this community at any level. We aim for
        tutorials that will advance Python, advance this community, and shape
        the future of Tanzania through open source software. Each tutorial
        session runs for 3 full hours plus a break for coffee.
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Lightning Talks:</strong> Lightning Talks are fun, short,
        five-minute (or less) talks. Ideally each talk should make a single
        point, often in a fun, quirky or over-the-top way. Slides are optional
        but often a good image can help get a point across quickly.
      </p>
      <p className="my-4 md:my-8 text-xl font-bold">
        SUBMIT YOUR PRESENTATION / TUTORIAL TO: speak@pycon.or.tz
      </p>

      <h1 className="font-bold text-xl mt-16 uppercase">
        Best Practices for Speakers
      </h1>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Apply:</strong> Even if you have a vague idea, submit a
        proposal. We&apos;re available for help with ideas and feedback (contact
        information is in the section below). Don&apos;t worry about
        communication skills or English - we are there to help with that too.
        And our focus is more on the content.
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Diversity:</strong> We in the Python community believe in making
        our community more diverse. This means we are encouraging content from
        diverse walks of life. This also means we want to improve participation
        from under-represented groups.
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Make it detailed:</strong> Add as much detail as possible to the
        proposal. Add the presentation slides if you already have one. Add a
        short minute video giving a summary of the proposal. More detail helps
        reviewers make better judgement.
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>Propose early:</strong> We will start the review process as the
        proposals come in, and not at the end. Proposals submitted early will
        get more attention and feedback
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>The code of conduct:</strong> All speakers are expected to have
        read and adhere to the conference Code of Conduct. Take a look at the
        code of conduct, and be mindful of it. The gist is, avoid using sexist
        language.
      </p>

      <h1 className="font-bold text-xl mt-16 uppercase">
        Presentations and Tutorials
      </h1>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        Topics must be relevant to Python Language and Open Source Software:
      </p>
      <ul className="list-disc list-inside text-lg md:text-xl mx-auto">
        <li>Python language usage in a project</li>
        <li>Education and Open Source Software</li>
        <li>Web & Cloud applications using Python frameworks</li>
        <li>Ideas on improving diversity and inclusiveness</li>
      </ul>
    </article>
  );
}

export default Article;
