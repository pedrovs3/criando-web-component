//https://testeleonid.herokuapp.com/alunos
const fetchApi = async () => {
  const response = await fetch('https://testeleonid.herokuapp.com/alunos');
  const data = await response.json();

  return await data;
}

export default await fetchApi();