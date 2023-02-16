import { ChangeEvent, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import Theme from "../../components/Theme";
import "./styles.css";

const FormStep1 = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha os dados");
    }
  };

  const HandleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  return (
    <Theme>
      <div className="container-step1">
        <p>Passo 1/3 - {state.name}</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={(e) => HandleNameChange(e)}
          />
        </label>

        <button onClick={handleNextStep}>Proximo</button>
      </div>
    </Theme>
  );
};

export default FormStep1;
