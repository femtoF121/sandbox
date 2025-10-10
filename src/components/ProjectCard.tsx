import { RoutesEnum } from "@/router/routes";
import { clsx } from "clsx";
import { ComponentProps, FC } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps extends ComponentProps<"div"> {
  title: string;
  description?: string;
  href: RoutesEnum;
}

const ProjectCard: FC<ProjectCardProps> = ({
  className,
  title,
  description,
  href,
  ...rest
}) => {
  const navigate = useNavigate();
  return (
    <div
      {...rest}
      className={clsx(
        "bg-white border-[2px] border-gray-200 rounded-xl shadow-lg p-4 pb-6 cursor-pointer hover:scale-[1.03] transition-all hover:bg-gray-100",
        className
      )}
      onClick={() => navigate(href)}
    >
      <h3 className="text-2xl font-[600] mb-2">{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};
export default ProjectCard;
