const Modal = props => {
  return (
    <div className="modal2">
      <div className="modal2__bg">
        <div className="modal2__content">
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default Modal;