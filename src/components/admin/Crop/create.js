import React from "react";
import { Modal } from "antd";

function CreateUser({ showModal, setShowModal }) {
  const handleOk = () => {
    setShowModal(false);
  };
  return (
    <Modal
      title="Tạo mới người dùng"
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

export default CreateUser;
