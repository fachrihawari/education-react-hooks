import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong!");
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch(err => {
        setError("Opps, something wrong!")
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error }
}
