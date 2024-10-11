import React, { useState } from "react";
// FaUserAlt
// FaUserTie,
// FaUsers
import { FaUserShield,  } from "react-icons/fa";
import { Table, Modal } from "antd"; 
import "antd/dist/reset.css"; 
import { userData } from "./usersData";
import UserActions from "./userActions";
import UpDateUserModal from "./upDateUserModal";
import UserNavButton from "./userNavButton"

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: "client" | "provider" | "admin";
}

const UsersPage: React.FC = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(userData);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState<String>("Users")

  const userTypes = [
    {
      title: "all", icon: FaUserShield, btnColor: "bg-orange-500"
    },
    {

      title: "provider", icon: FaUserShield, btnColor: "bg-green-500"
    },
    {

      title: "admin", icon: FaUserShield, btnColor: "bg-purple-500"
    },
    {

      title: "client", icon: FaUserShield, btnColor: "bg-blue"
    },
  ]
  const handleUpdate = (record: User) => {
    setSelectedUser(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id: number) => {

    Modal.confirm({
      title: 'Confirm deletion',
      content: 'Are you sure you want to delete this user?',
      onOk: () => {
        setFilteredUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
      },
      onCancel() {
        console.log('Cancel');
      },
      centered: true,
    })
  };

  const handleFilter = (type: any) => {
    if (type === "all") {
      setFilteredUsers(userData);
    } else {
      setFilteredUsers(userData.filter((user) => user.type === type));
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type: string) => <span className="capitalize">{type}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_text: any, record: User) => (
        <UserActions
          record={record}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ),
    },
  ];

  return (
    <div className="mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">{title}</h1>

      <div className="flex space-x-4 mb-8">
        {
          userTypes.map((userType, index) => <UserNavButton
            key={index}
            btnColor={userType.btnColor}
            icon={<userType.icon />}
            title={userType.title}
            callBack={() => { setTitle(userType.title); handleFilter(userType.title) }} />
          )
        }
      </div>
      <Table
        columns={columns} dataSource={filteredUsers} rowKey="id" pagination={false}
      />
      <UpDateUserModal selectedUser={selectedUser} isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </div>
  );
};

export default UsersPage;
