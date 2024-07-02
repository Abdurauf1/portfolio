import { github, instagram, telegram, linkedin } from "../assets";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-end gap-4">
        <a href="https://github.com/Abdurauf1/" className="w-10">
          <img src={github} alt="github_icon" />
        </a>
        <a href="https://www.instagram.com/abdurauf_a_/" className="w-10">
          <img src={instagram} alt="instagram_icon" />
        </a>
        <a href="https://t.me/aabdurauf004" className="w-10">
          <img src={telegram} alt="telegram_icon" />
        </a>
        <a href="https://www.linkedin.com/in/abdurauf-ashurov-656415213/" className="w-10">
          <img src={linkedin} alt="linkedin_icon" />
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Footer, "footer");
