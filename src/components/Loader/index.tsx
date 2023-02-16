import "./styles.css";

import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="container-loader">
      <h1>Cadastrando Dados</h1>
      <InfinitySpin width="200" color="#25cd89" />
    </div>
  );
};

export default Loader;
