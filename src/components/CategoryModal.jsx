function CategoryModal(props) {
  const { open, onClose } = props;

  const classActive = open ? "is-active" : "";

  return (
    <div className={"modal " + classActive}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Category</p>
          <button className="delete" aria-label="close" onClick={onClose} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Input name" />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button onClick={onClose} className="button is-success">
            Save changes
          </button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}

export default CategoryModal;
