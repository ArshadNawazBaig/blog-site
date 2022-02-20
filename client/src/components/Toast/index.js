import { ToastHeader, ToastBody } from "reactstrap";
import { Toast } from "./style";

export const ToastNotify = ({ handleShow, show, message, title, icon }) => {
    
  return (
    <Toast isOpen={show} fade>
      <ToastHeader icon={icon} toggle={() => handleShow(false)}>
        {title}
      </ToastHeader>
      <ToastBody>{message}</ToastBody>
    </Toast>
  );
};
