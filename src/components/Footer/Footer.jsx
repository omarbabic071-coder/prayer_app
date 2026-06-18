import "./Footer.module.css";

function Footer() {
  const githubIconSrc = "/src/assets/github-icon.svg";

  return (
    <footer>
      <p>&copy; Omar Babic 2025</p>
      <a href="https://www.github.com/omarbabic071-coder" target="_blank">
        <img src={githubIconSrc}></img>
      </a>
    </footer>
  );
}
export default Footer;
