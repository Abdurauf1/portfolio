import { Tilt } from "react-tilt";
import { github2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type Props = {
  index: number;
  image: string;
  name: string;
  source_code_link: string;
  description: string;
  tags: any;
  deploy: string;
};

type TagProps = {
  name: string;
  color: string;
};

const ProjectCard = ({
  index,
  image,
  name,
  source_code_link,
  description,
  tags,
  deploy,
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github2} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <a href={deploy} target="blank" className="hover:text-secondary">
              Deploy
            </a>
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: TagProps) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
