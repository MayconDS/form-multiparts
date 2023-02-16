import { ChangeEvent, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import Theme from "../../components/Theme";
import "./styles.css";
import SelectOption from "../../components/SelectOption";

const FormStep2 = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.name == "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Preencha os dados");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };
  return (
    <Theme>
      <div className="container-step2">
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente
        </p>

        <hr />
        <SelectOption
          title="Sou iniciante"
          description="Começei a programar a menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou programador"
          description="Já programo a mais de 2 anos"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <div className="buttons">
          <Link to="/">Voltar</Link>
          <button onClick={handleNextStep}>Proximo</button>
        </div>
      </div>
    </Theme>
  );
};

export default FormStep2;
