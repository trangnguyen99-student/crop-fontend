import React, { useState } from "react";
import { Table, Tag, Space } from "antd";
import CreateUser from "./create";
import EditUser from "./edit";
import DeleteUser from "./delete";
import { EyeOutline, PencilOutline, CloseOutline } from "react-ionicons";
import DetailUser from "./detail";
import Crops from "./index";

function MangageListCrops() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const columns = [
    {
      title: "stt",
      dataIndex: "stt",
      key: "stt",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
          <a onClick={() => setShowModalDetail(true)}>
            <EyeOutline
              color={"#00000"}
              title="detail"
              height="18px"
              width="18px"
            />
          </a>
          <a onClick={() => setShowModalEdit(true)}>
            <PencilOutline
              color={"#00000"}
              title="edit"
              height="15px"
              width="15px"
            />
          </a>
          <a style={{ color: "red" }} onClick={() => setShowModalDelete(true)}>
            <CloseOutline
              color={"#00000"}
              title="delete"
              height="20px"
              width="20px"
            />
          </a>
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

  return (
    <Crops url="Crops">
      <div>
        <h2>Quản lý danh sách cây trồng</h2>
      </div>
      <Table columns={columns} dataSource={data} />
      <DetailUser
        showModal={showModalDetail}
        setShowModal={(value) => setShowModalDetail(value)}
      />
      <CreateUser
        showModal={showModalCreate}
        setShowModal={(value) => setShowModalCreate(value)}
      />
      <EditUser
        showModal={showModalEdit}
        setShowModal={(value) => setShowModalEdit(value)}
      />
      <DeleteUser
        showModal={showModalDelete}
        setShowModal={(value) => setShowModalDelete(value)}
      />
    </Crops>
  );
}

export default MangageListCrops;
