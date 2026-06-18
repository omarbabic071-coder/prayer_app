import "./Header.module.css";

function Header() {
  return (
    <header>
      <p>Vaktiya App Project</p>
      <div>
        <label>City: </label>
        <input type="text" placeholder="Sarajevo" value="Sarajevo" />
        <button>Search</button>
      </div>
    </header>
  );
}
export default Header;
