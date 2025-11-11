import ProjectCard from "@/components/ProjectCard";
import { RoutesEnum } from "@/router/routes";
import clsx from "clsx";
import { useState } from "react";

const projects = [
  {
    title: "Task List",
    description: "This project represents a simple task list.",
    href: RoutesEnum.TODO,
  },
  {
    title: "Weather App",
    description:
      "Here you can check simple or detailed weather in chosen city.",
    href: RoutesEnum.WEATHER,
  },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="p-8 items-grid">
        {projects.map(({ title, description, href }) => (
          <ProjectCard
            key={href}
            title={title}
            description={description}
            href={href}
          />
        ))}
      </section>
    </>
  );
};

export default HomePage;

const Header = () => {
  const [easterEggClicked, setEasterEggClicked] = useState(false);

  return (
    <div className="bg-white border-b-[4px] border-gray-200 p-4 relative overflow-hidden">
      <h1 className="text-4xl font-[700]">Projects</h1>
      <div
        onClick={() =>
          easterEggClicked
            ? window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "_blank"
              )
            : setEasterEggClicked(true)
        }
        className={clsx(
          "absolute font-bold text-4xl !size-10 text-center select-none !transition-all duration-500",
          easterEggClicked
            ? "top-5 right-5 rotate-0 opacity-100 cursor-pointer icon-button animate-bounce"
            : "-top-3 -right-4 -rotate-115 opacity-50 cursor-help"
        )}
      >
        ?
      </div>
    </div>
  );
};
