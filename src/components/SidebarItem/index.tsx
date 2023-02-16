import { Link } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

import "./styles.css";

type Props = {
  title: string;
  description: string;
  path: string;
  icon: string;
  active: boolean;
};

const SidebarItem = ({ title, description, path, icon, active }: Props) => {
  return (
    <div className="container-sidebar">
      <Link to={path}>
        <div className="info">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div
          className="iconArea"
          style={{
            backgroundColor: active == true ? "#25cd89" : "",
          }}
        >
          {icon === "profile" && (
            <FaUserAlt fill="white" style={{ width: "24px", height: "24px" }} />
          )}
          {icon === "book" && (
            <GiNotebook
              fill="white"
              style={{ width: "24px", height: "24px" }}
            />
          )}
          {icon === "mail" && (
            <MdEmail fill="white" style={{ width: "24px", height: "24px" }} />
          )}
        </div>
        <div
          className="point"
          style={{
            backgroundColor: active == true ? "#25cd89" : "",
          }}
        ></div>
      </Link>
    </div>
  );
};

export default SidebarItem;
