import { Modal as CustomModal } from "reactstrap";
import styled from "styled-components";

export const Modal = styled(CustomModal)`
  & .modal-header {
    & h5 {
      font: normal 500 16px Jost;
    }
    background: #7b67de;
    color: #fff;
  }
  & .modal-body {
    font: normal 500 16px Jost;
  }
`;
