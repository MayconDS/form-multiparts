import "./styles.css";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
};

const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`container-select ${selected && "selected"}`}
    >
      <div className="icon">{icon}</div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default SelectOption;
