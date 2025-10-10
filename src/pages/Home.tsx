import ProjectCard from "@/components/ProjectCard";
import { RoutesEnum } from "@/router/routes";

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
    <div className="flex h-screen">
      <Sidebar />
      <div>
        <Header />
        <section className="p-8 items-grid">
          {projects.map(({ title, description, href }) => (
            <ProjectCard title={title} description={description} href={href} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomePage;

const Header = () => (
  <div className="bg-white border-b-[4px] border-gray-200 p-4">
    <h1 className="text-4xl font-[700]">Projects</h1>
  </div>
);

const Sidebar = () => (
  <aside className="bg-white w-16 p-4 border-r-[4px] border-gray-200">
    <nav>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </nav>
  </aside>
);
