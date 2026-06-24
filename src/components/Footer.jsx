import { useState } from "react";

function Footer() {
  const githubIconSrc = "/src/assets/github-icon.svg";
  const [hover, setHover] = useState(false);

  const styles = {
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      fontSize: "1.3em",
      bottom: 0,
      width: "100%",
      position: "fixed",
      padding: "8px 0",
      backgroundColor: "transparent",
    },
    img: {
      width: "30px",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "transform 0.3s ease-in-out",
      display: "block",
    },
    link: {
      display: "inline-flex",
      alignItems: "center",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>&copy; Omar Babic 2025</p>
      <a
        href="https://www.github.com/omarbabic071-coder"
        target="_blank"
        rel="noreferrer"
        style={styles.link}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={githubIconSrc} style={styles.img} alt="github" />
      </a>
    </footer>
  );
}

export default Footer;
