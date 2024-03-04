import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <section className="section-home">
        <div className="container">
          <h1>Home</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
