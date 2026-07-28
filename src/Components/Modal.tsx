interface ModalProps {
  open: boolean;
  message: string;
  messageTwo:string;
  classModal: string;
  dataSend:boolean;
}

export default function Modal({ open, message, classModal, dataSend, messageTwo}: ModalProps) {
  if (!open) return null;

  return (
    <div className={classModal}>
      <div className="modal">
        { 
          dataSend? 
            <p className="message">{message}  
              <span className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </p>

          :
            <p className="message">{messageTwo}</p>
        }
      </div>
    </div>
  );
}