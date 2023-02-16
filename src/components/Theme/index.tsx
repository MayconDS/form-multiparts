import { ReactNode } from "react";
import "./styles.css";
import Header from "../Header";
import SidebarItem from "../SidebarItem";

import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <div className="container">
      <div className="area">
        <Header />

        <div className="steps">
          <div className="sidebar">
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </div>
          <div className="page">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
