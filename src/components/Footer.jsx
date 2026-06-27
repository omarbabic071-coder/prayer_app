import { useState } from "react";

function Footer() {
  const githubIconSrc = "/src/assets/github-icon.svg";
  const [hover, setHover] = useState(false);

  const styles = {
    img: {
      transform: hover ? "translateY(-3px)" : "none",
      transition: "transform 0.3s ease-in-out",
    },
  };

  return (
    <footer
      style={styles.footer}
      className="flex justify-center items-center gap-2.5 text-2xl w-dvw fixed p-2 bg-transparent bottom-0"
    >
      <p style={{ margin: 0 }}>&copy; Omar Babic 2025</p>
      <a
        href="https://www.github.com/omarbabic071-coder"
        target="_blank"
        rel="noreferrer"
        style={styles.link}
        className="block w-8"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={githubIconSrc}
          style={styles.img}
          className="items-center inline-flex"
          alt="github"
        />
      </a>
    </footer>
  );
}

export default Footer;
