import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row items-center justify-center text-center lg:text-center"
          >
            {/* University Logo */}
            <div className="w-full lg:w-1/4 flex justify-center mb-4 lg:mb-0">
              <img
                src={education.logo}
                alt={education.institution}
                className="max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[150px]" // Adjusted for both mobile and desktop
              />
            </div>

            {/* Education Details */}
            <div className="w-full lg:w-2/4 lg:pl-8 text-center">
              <h6 className="mb-1 font-semibold text-lg">{education.degree}</h6>
              <p className="mb-1 text-neutral-400">{education.institution}</p>
              <p className="mb-1 text-neutral-400">{education.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
