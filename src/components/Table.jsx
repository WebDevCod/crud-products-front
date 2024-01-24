/* eslint-disable react/prop-types */
import "boxicons";
import useDeleteproduct from "../hooks/useDeleteItem";
import UpdateModal from "../components/UpdateModal";
import { useState } from "react";

function Table({ data, reload }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(null);

  const { handleDeleteItem } = useDeleteproduct();

  const handleUpdate = (product) => {
    setShowUpdateModal(true);
    setUpdateProduct(product);
  };

  const handleDelete = async (id) => {
    await handleDeleteItem(id, reload);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };

  return (
    <>
      <div>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.idProduct}>
                <td>{product.name}</td>
                <td>{product.value}</td>
                <td>
                  <box-icon
                    onClick={() => handleUpdate(product)}
                    style={{ cursor: "pointer" }}
                    name="edit-alt"
                    color="#f2f3f6"
                  ></box-icon>
                </td>
                <td>
                  <box-icon
                    onClick={() => handleDelete(product.idProduct)}
                    style={{ cursor: "pointer" }}
                    name="trash-alt"
                    color="#f64848"
                  ></box-icon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUpdateModal && (
          <UpdateModal
            product={updateProduct}
            onClose={handleCloseUpdateModal}
            reload={reload}
          />
        )}
      </div>
    </>
  );
}

export default Table;
