import Loader from "../../components/Loader";
import { useState, useEffect } from "react";
import { BsShieldFillCheck } from "react-icons/bs";

import "./styles.css";
import { useForm } from "../../contexts/FormContext";
import { useNavigate } from "react-router-dom";

const Finished = () => {
  const navigate = useNavigate();

  const { state } = useForm();
  const [loadActive, setLoadActive] = useState(true);

  useEffect(() => {
    if (state.name == "" || state.email == "") {
      navigate("/");
    }
    setTimeout(() => {
      setLoadActive(false);
    }, 2000);
  }, []);

  return (
    <div className="container-finished">
      {loadActive == true ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="finished">
            <h1>
              Dados Cadastrados <BsShieldFillCheck />
            </h1>
          </div>
          <h1>Seus dados</h1>
          <div className="data">
            <h2>
              Nome: <span>{state.name}</span>
            </h2>
            <h2>
              Nível:{" "}
              <span>{state.level == 0 ? "Iniciante" : "Profissional"}</span>
            </h2>
            <h2>
              Email: <span>{state.email}</span>
            </h2>
            <h2>
              Github: <span>{state.github}</span>
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Finished;
