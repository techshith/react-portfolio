import { ABOUT_TEXT } from "../constants";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">
        About <span className="text-neutral-400">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center w-full">
          <p className="px-6 lg:px-40">{ABOUT_TEXT}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="https://drive.google.com/file/d/1JQhlBgQX1kmNuY-HaZ0qBdB5ImJdYFZM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border-2 border-neutral-500 text-white-500 rounded-lg transition-colors"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
