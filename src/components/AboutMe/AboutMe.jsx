import React from 'react';

const AboutMe = () => {
  return (
    <div className="w-4/5 md:w-3/5 mx-auto">
      <h1 className="text-3xl text-center font-bold border-b-2">
        Hello My Name is
        <br />
        <span className="text-blue-500">Md Hasibul Alam Miraz</span>
      </h1>
      <h3 className="text-lg text-center mt-6">
        My goals to become a web developer
      </h3>
      <p className="text-lg text-gray-700 my-5">
        My goal is to become a successful web developer. I am working hard to
        achieve my goal with the help of Programming Hero team. I have been
        consistent with my learning and with my assignments. Hope I'll be able
        to achieve my goal soon.
      </p>
      <hr />

      <h3 className="text-lg text-center mt-6">
        How I am going to achieve my goal?
      </h3>
      <p className="text-lg text-gray-700 my-5">
        I've been working hard to achieve my goal. I have been learning to code
        efficiently and trying to improve my workflow. I'll try to increase my
        work hour as much as possible. I have been trying to learn to code by
        reading the documentation which is very helpful. Inn Shaa Allah I'll
        achieve my goal one day.
      </p>
      <hr />
    </div>
  );
};

export default AboutMe;
