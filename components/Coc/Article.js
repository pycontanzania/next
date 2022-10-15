function Article(props) {
  return (
    <article className="md:col-span-2 font-base text-gray-600 dark:text-gray-200">
      <p className="text-lg">
        Participants are expected to contribute to an environment that is open,
        welcoming, considerate and respectful. We require that all attendees -
        delegates, speakers, volunteers, sponsors and organisers to have an
        enjoyable experience during the PyCon event. All attendees are expected
        to show respect and courtesy to one another throughout the conference
        and all related events. This includes social events whether officially
        sponsored by PyCon Tanzania or not.
      </p>

      <h1 className="mt-8 mb-4 font-bold text-2xl">Communication</h1>
      <p className="text-lg">
        All communication should be appropriate for a general audience, which
        will include people from many different religions, cultures and nations.
      </p>
      <p className="text-lg my-8">
        Sexual language and imagery are not welcome. Please be thoughtful when
        making jokes or discussing sensitive topics or issues that are likely to
        have a strong personal effect on some people. If in doubt, ask for
        advice or simply moderate your expression.
      </p>

      <h1 className="mt-8 mb-4 font-bold text-2xl">Harassment</h1>
      <p className="text-lg">
        Harassment can include any unwelcome behaviour directed at another
        person. As such PyCon Tanzania will not tolerate behaviour that are:
      </p>
      <ul className="list-disc list-inside text-lg ml-4 my-8">
        <li>Harassment in any form, or language</li>
        <li>Sexist, racist or exclusionary</li>
        <li>Intimidating or threatening</li>
        <li>Insulting or unpleasant</li>
      </ul>

      <h1 className="mt-8 mb-4 font-bold text-2xl">Report a misconduct</h1>
      <p className="text-lg">
        If you are troubled by the conduct of another attendee at the
        conference, or are concerned that another attendee may be in distress,
        please speak immediately to any member of conference secretariate. Your
        concern will be heard in confidence and taken seriously and the
        secretariate, volunteers and organisers - will be on hand throughout the
        conference. Any concern, whatever it may be, will be immediately passed
        on to a member of the conference secretariate.
      </p>
      <p className="text-lg my-8">
        Any concern, whatever it is, will be immediately investigated promptly
        and if necessary appropriate action will be taken. This could include:
      </p>
      <ul className="list-disc list-outside text-lg ml-4 my-8">
        <li>Asking a violator of the CoC to leave the event immediately</li>
        <li>Informing the Python Software Foundation about the incident</li>
        <li>Informing the law enforcing authority about the incident</li>
      </ul>

      <p className="text-lg">
        To ensure transparecy, we will publish a report after the conference,
        containing an anonymised reports of any incidents that violated the CoC.
      </p>
      <p className="text-lg mt-4 mb-16">
        Report any incidents to secretariat(at)pycon.or.tz. Thank you for
        helping to make PyCon Tanzania a welcoming and friendly event for all.
      </p>
    </article>
  );
}

export default Article;
