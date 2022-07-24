import style from "./AlertFailed.module.css";

const AlertFailed = (props) => {
  return (
    <div className={style.alertContainer}>
      <p>{props.text}</p>
    </div>
  );
};

AlertFailed.defaultProps = {
  text: "add title here",
};

export default AlertFailed;
