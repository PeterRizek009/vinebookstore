import Hero from "../component/homepage/Hero";
import Categories from "../component/homepage/Categories";
import NewBooks from "../component/homepage/NewBooks";
import Featured from "../component/homepage/Featured";
import Offer from "../component/homepage/Offer";
import Newsletter from "../component/homepage/Newsletter";
import Ebook from "../component/homepage/Ebook";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewBooks />
      <Ebook />
      <Featured />
      <Offer />
      <Newsletter />
    </>
  );
};

export default Home;
