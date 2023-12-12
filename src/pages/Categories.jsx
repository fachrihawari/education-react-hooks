import { useState, useEffect } from "react";

import CategoryItem from "../components/CategoryItem";
import CategoryModal from "../components/CategoryModal";
import useToggle from "../hooks/useToggle";
import useFetch from "../hooks/useFetch";

function Categories() {
  const {isOpen, toggleOff, toggleOn} = useToggle(false);
  const { data, loading, error } = useFetch('http://localhost:3000/categories')

  return (
    <>
      <div className="container">
        <header className="is-flex is-flex-direction-row is-justify-content-space-between mb-4">
          <h1 className="is-size-3">List of categories</h1>
          <button onClick={toggleOn} className="button is-primary">Add Category</button>
          <CategoryModal open={isOpen} onClose={toggleOff} />
        </header>
        <main>
          {/* Jika nilai loading true, tampilkan pesan loading */}
          {loading ? (
            <h1 className="title">Sedang memuat data...</h1>
          ) : (
            <table className="table is-striped" width="100%">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => <CategoryItem key={item.id} {...item} />)}
              </tbody>
            </table>
          )}
        </main>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Categories;
