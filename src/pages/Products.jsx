import ProductItem from "../components/ProductItem";
import Navbar from "../components/Navbar";
import ProductModal from "../components/ProductModal";
import useToggle from "../hooks/useToggle";
import useFetch from '../hooks/useFetch'

function Products() {
  const { isOpen, toggleOn, toggleOff } = useToggle(false)
  const { data, loading, error } = useFetch(`http://localhost:3000/items`)

  console.log({ data, loading, error })

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="is-flex is-flex-direction-row is-justify-content-space-between mb-4">
          <h1 className="is-size-3">List of menu</h1>
          <button onClick={toggleOn} className="button is-primary">Add Item</button>
          <ProductModal open={isOpen} onClose={toggleOff} />
        </header>
        <main className="columns is-multiline">
          {/* Jika nilai loading true, tampilkan pesan loading */}
          {loading ? (
            <h1 className="column title">Sedang memuat data...</h1>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="column is-one-quarter-tablet is-one-fifth-desktop"
              >
                <ProductItem {...item} />
              </div>
            ))
          )}
        </main>
      </div>
    </>
  );
}

export default Products;
