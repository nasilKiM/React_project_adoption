import { useEffect } from "react";
import { getAnimals } from "../../Apis/AdoptApi";

const HomePage = () => {
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
    </>
  );
};

export default HomePage;
