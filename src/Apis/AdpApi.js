import React from "react";
import { useQuery } from "react-query";

const apiUrl =
  "http://openapi.seoul.go.kr:8088/616f616e726e61733430546e784944/xml/TbAdpWaitAnimalView/1/5/";

function AnimalList() {
  const { isLoading, error, data } = useQuery("animals", () =>
    fetch(apiUrl).then((res) => res.json())
  );

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <div>ERROR!!!</div>;

  return (
    <div>
      <h1>Animal List</h1>
      <ul>
        {data.TbAdpWaitAnimalView.row.map((animal) => (
          <li key={animal.aniCd}>{animal.kindCd}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
