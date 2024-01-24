import axios from "axios";
import { toast } from "sonner";

function useDeleteItem() {
  const handleDeleteItem = async (itemId, reload) => {
    const URL = `https://api-products-crud.onrender.com/api/products/${itemId}`;

    try {
      const response = await axios.delete(URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("The product was deleted");
        reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("The product was not deleted");
    }
  };

  return { handleDeleteItem };
}

export default useDeleteItem;
