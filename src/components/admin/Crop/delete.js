import React from "react";
import { Modal } from "antd";

function DeleteUser({ showModal, setShowModal }) {
  const handleOk = () => {
    setShowModal(false);
  };
  return (
    <Modal
      title="Xóa người dùng"
      visible={showModal}
      onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      <h2>Bạn có chắc chắn xóa người dùng này?</h2>
    </Modal>
  );
}

export default DeleteUser;
