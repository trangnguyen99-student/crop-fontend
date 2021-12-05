import React, { useState } from "react";
import User from "./index";
import { Table, Tag, Space } from "antd";
import { Modal } from "antd";

function MangageListUser() {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a onClick={() => setShowModalEdit(true)}>Detail</a>
          <a onClick={() => setShowModalEdit(true)}>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const handleOk = () => {
    setShowModalEdit(false);
  };
  return (
    <User url="Manage">
      <h2>Quản lý danh sách người dùng</h2>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Chỉnh sửa người dùng"
        visible={showModalEdit}
        onOk={handleOk}
        onCancel={() => setShowModalEdit(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </User>
  );
}

export default MangageListUser;
