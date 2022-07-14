import style from "./Alert.module.css";

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
