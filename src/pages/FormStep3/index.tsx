import { ChangeEvent, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import Theme from "../../components/Theme";
import "./styles.css";

const FormStep3 = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.name == "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      navigate("/finished");
    } else {
      alert("Preencha os dados");
    }
  };

  const HandleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  const HandleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };
  return (
    <Theme>
      <div className="container-step3">
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato</p>

        <hr />

        <label>
          Qual seu email
          <input
            type="email"
            value={state.email}
            onChange={(e) => HandleEmailChange(e)}
          />
        </label>
        <label>
          Qual seu github
          <input
            type="url"
            value={state.github}
            onChange={(e) => HandleGithubChange(e)}
          />
        </label>
        <div className="buttons">
          <Link to="/step2">Voltar</Link>
          <button onClick={handleNextStep}>Finalizar cadastro</button>
        </div>
      </div>
    </Theme>
  );
};

export default FormStep3;
