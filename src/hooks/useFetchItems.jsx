import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

function useFetchItems() {
  const [resp, setResp] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://api-products-crud.onrender.com/api/products";

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setResp(response.data);
    } catch (error) {
      console.error("Error fetching data", error.message);
      toast.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const reload = () => {
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { resp, loading, reload };
}

export default useFetchItems;
