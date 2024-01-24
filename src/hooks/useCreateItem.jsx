import axios from "axios";
import { toast } from "sonner";

function useCreateItem() {
  const URL = "https://api-products-crud.onrender.com/api/products";
  const handleCreateItem = async (formData, reload) => {
    try {
      const { name, value } = formData;
      const response = await axios.post(
        URL,
        {
          name,
          value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("The product was created");
        reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("The product was not created");
    }
  };

  return { handleCreateItem };
}

export default useCreateItem;
