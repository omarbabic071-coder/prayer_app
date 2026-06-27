import { useState } from "react";

function Header({ setLocation }) {
  let [enteredLocation, setEnteredLocation] = useState(77);
  function handleLocationChange(event) {
    setEnteredLocation(event.target.value);
  }

  return (
    <header className="my-0 mx-0 fixed  flex justify-evenly items-center z-10  gap-3 bg-black/20 top-0 w-dvw h-fit p-2 ">
      <p className="font-bold text-2xl mx-0 my-0">Vaktiya App Project</p>
      <div className="flex gap-2 justify-center">
        <label>City: </label>
        <input
          type="text"
          placeholder="Sarajevo"
          value={enteredLocation}
          onChange={handleLocationChange}
        />
        <button type="button" onClick={() => setLocation(enteredLocation)}>
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
