function ProductModal(props) {
  const { open, onClose } = props

  const classActive = open ? 'is-active' : ''

  return (
    <div className={`modal ${classActive}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Product</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Input name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input className="input" type="number" placeholder="Input price" />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button onClick={onClose} className="button is-success">
            Save changes
          </button>
          <button onClick={onClose} className="button">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ProductModal
