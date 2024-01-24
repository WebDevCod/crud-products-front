/* eslint-disable react/prop-types */
import { useState } from "react";
import useUpdateItem from "../hooks/useUpdateItem";

function UpdateModal({ product, onClose, reload }) {
  const [formData, setFormData] = useState({
    idProduct: product.idProduct,
    name: product.name,
    value: product.value,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "value" ? parseFloat(value) : value,
    }));
  };

  const { handleUpdateItem } = useUpdateItem();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateItem(formData, reload);
    onClose();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <>
      <dialog open>
        <article>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            onClick={handleCloseClick}
          ></a>
          <h3>Update product</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="grid">
              <label htmlFor="name">
                Product name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Product name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label htmlFor="value">
                Price
                <input
                  type="number"
                  id="value"
                  name="value"
                  placeholder="Price"
                  value={formData.value}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </article>
      </dialog>
    </>
  );
}

export default UpdateModal;
