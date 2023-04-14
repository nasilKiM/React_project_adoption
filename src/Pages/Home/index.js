import { useEffect } from "react";
import { getAnimals } from "../../Apis/AdoptApi";
import { useNavigate } from "react-router-dom";

const HomePage = ({ id }) => {
  const navigate = useNavigate();
  useEffect(() => {
    async function getList() {
      const result = await getAnimals();
      console.log(result);
    }
    getList();
  }, []);

  return (
    <>
      <div>home</div>
      <button onClick={() => navigate(`/detailPage/${id}`)}>more &gt;</button>
    </>
  );
};

export default HomePage;
