import React from "react";
import { Modal } from "antd";

function DetailUser({ showModal, setShowModal }) {
  const handleOk = () => {
    setShowModal(false);
  };
  return (
    <Modal
      title="Chi tiết người dùng"
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

export default DetailUser;
