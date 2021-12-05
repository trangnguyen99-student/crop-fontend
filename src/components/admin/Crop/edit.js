import React from "react";
import { Modal } from "antd";

function EditUser({ showModal, setShowModal }) {
  const handleOk = () => {
    setShowModal(false);
  };
  return (
    <Modal
      title="Chỉnh sửa người dùng"
      visible={showModal}
      onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default EditUser;
