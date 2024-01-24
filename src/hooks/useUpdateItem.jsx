import axios from "axios";
import { toast } from "sonner";

function useUpdateItem() {
  const handleUpdateItem = async (formData, reload) => {
    const { idProduct, name, value } = formData;
    const URL = `https://api-products-crud.onrender.com/api/products/${idProduct}`;
    try {
      const response = await axios.put(
        URL,
        {
          name: name,
          value: value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("The product was updated");
        reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("The product was not updated");
    }
  };

  return { handleUpdateItem };
}

export default useUpdateItem;
