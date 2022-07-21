import style from "./AlertSuccess.module.css";

const AlertSuccess = (props) => {
  return (
    <div className={style.alertContainer}>
      <p>{props.text}</p>
    </div>
  );
};

AlertSuccess.defaultProps = {
  text: "add title here",
};

export default AlertSuccess;
