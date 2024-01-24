/* eslint-disable react/prop-types */
import { useState } from "react";
import useCreateItem from "../hooks/useCreateItem";

function CreateButton({ reload }) {
  const [showModal, setshowModal] = useState();
  const [formData, setFormData] = useState({
    name: "",
    value: 0,
  });

  const handleCreateProduct = () => {
    setshowModal(true);
  };
  const handleCloseModal = () => {
    setshowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "value" ? parseFloat(value) : value,
    }));
  };

  const { handleCreateItem } = useCreateItem();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCreateItem(formData, reload);
    handleCloseModal(true);
    setFormData({
      name: "",
      value: 0,
    });
  };

  return (
    <>
      <div
        style={{
          width: "15rem",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleCreateProduct}>Create new product</button>
      </div>

      <dialog open={showModal}>
        <article>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            onClick={handleCloseModal}
          ></a>
          <h3>Create new product</h3>
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

export default CreateButton;
