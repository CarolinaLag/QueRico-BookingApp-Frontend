interface IModalProps {
  showModal: boolean;
}

export const Modal = (props: IModalProps) => {
  return (
    <>
      {props.showModal ? <div>Är du säker på att du vill radera?</div> : null}
    </>
  );
};
