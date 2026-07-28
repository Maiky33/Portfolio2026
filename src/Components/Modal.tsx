interface ModalProps {
  open: boolean;
  message: string;
  classModal: string;
}

export default function Modal({ open, message, classModal}: ModalProps) {
  if (!open) return null;

  return (
    <div className={classModal}>
      <div className="modal">

        <p className="message">{message}  
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
}