import { createPortal } from "react-dom";

//Project Files
import { useModal } from "../state/ModalContext";

export default function Modal() {
  const { modal, setModal } = useModal();

  // Safeguard
  if (modal === null) return null;

  return createPortal(
    <div className="modal">
      <div className="background">{/* empty on purpose */}</div>
      <div className="content">{modal}</div>
    </div>,
    document.getElementById("portal")
  );
}
