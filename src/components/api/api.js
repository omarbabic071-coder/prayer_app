async function fetchData(location = "77") {
  try {
    const response = await fetch(
      `https://api.vaktija.ba/vaktija/v1/${location}`,
    );
    if (!response.ok) {
      throw new Error("Could not fetch data.");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
