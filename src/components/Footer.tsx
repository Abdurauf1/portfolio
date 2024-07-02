import { github, instagram, telegram, linkedin } from "../assets";

const Footer = () => {
  return (
    <div>
      <div>
        <a
          href="https://github.com/Abdurauf1/"
          className="relative z-10 before:content-[' '] before:w-full before:h-full before:absolute before:bg-white before:-z-1 before:animate-ping before:rounded-full"
        >
          <img src={github} alt="github_icon" />
        </a>
        <a
          href="https://www.instagram.com/abdurauf_a_/"
          className="relative z-10 before:content-[' '] before:w-full before:h-full before:absolute before:bg-white before:-z-1 before:animate-ping before:rounded-full"
        >
          <img src={instagram} alt="instagram_icon" />
        </a>
        <a
          href="https://t.me/aabdurauf004"
          className="relative z-10 before:content-[' '] before:w-full before:h-full before:absolute before:bg-white before:-z-1 before:animate-ping before:rounded-full"
        >
          <img src={telegram} alt="telegram_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdurauf-ashurov-656415213/"
          className="relative z-10 before:content-[' '] before:w-full before:h-full before:absolute before:bg-white before:-z-1 before:animate-ping before:rounded-full"
        >
          <img src={linkedin} alt="linkedin_icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
