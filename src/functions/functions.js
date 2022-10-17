import axios from "axios";

const info = async (state) => {
  const req = await axios.get("https://rickandmortyapi.com/api/character");
  state(req.data.results);
};

const oneCharacter = async (id, state) => {
  const req = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(req.data);
};

export { info, oneCharacter };
