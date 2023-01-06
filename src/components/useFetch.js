import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const header = {Authorization: "Token 36ac7a495ee10b4d6749d6dac7db40d540100bff",};
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal, headers: header })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted...");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 500);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
