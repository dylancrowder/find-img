import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Images } from "../component/images";
import { Nav } from "../component/navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EmptyData } from "../component/emptyData";

export function GetImg() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAxios = useCallback(async (searchQuery) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://back-ing-find.vercel.app/get?query=${searchQuery}`,
        { withCredentials: true }
      );
      const images = response.data.hits;
      setData(images);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Error fetching data";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAxios();
  }, [fetchAxios]);

  const handleSearch = () => {
    fetchAxios(query);
  };

  return (
    <React.Fragment>
      <Nav
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      {error && (
        <div className="error">
          <ToastContainer
            className="alert"
            position="top-right"
            autoClose={1999}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      )}
      {!isLoading && data.length === 0 ? (
        <EmptyData
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          isLoading={isLoading}
        />
      ) : (
        <Images data={data} />
      )}
    </React.Fragment>
  );
}
