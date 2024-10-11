import React, { useState } from "react";
import { Table, Modal } from "antd";
import { serviceData } from "../../admin/services/serviceData";
import UpDateServiceModal from "./upDateServiceModal";
import ServiceActions from "./serviceActions";

interface Service {
  id:number;
  key: React.Key;
  name: string;
  subCategories: string[];
  totalProviders: number;
  totalUsers: number;
  serviceId: string;
  totalRevenue: number;
  dateCreated: string;
  createdBy: string;
  dateUpdated: string;
  updatedBy: string;
}
const ServicesPage: React.FC = () => {
  const [filteredServices, setFilteredServices] = useState<Service[]>(serviceData);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleUpdate = (record: Service) => {
    setSelectedService(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id: number) => {

    Modal.confirm({
      title: 'Confirm deletion',
      content: 'Are you sure you want to delete this user?',
      onOk: () => {
        setFilteredServices((prevServ) => prevServ.filter(service => service.id !== id));
      },
      onCancel() {
        console.log('Cancel');
      },
      centered: true,
    })
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ServiceID",
      dataIndex: "serviceId",
      key: "serviceId",
    },
    {
      title: "Sub Category",
      dataIndex: "subCategories",
      key: "subCategories",
    },
    {
      title: "Total Providers",
      dataIndex: "totalProviders",
      key: "totalProviders",
    },
    {
      title: "Total Users",
      dataIndex: "totalUsers",
      key: "totalUsers",
    },
    {
      title: "Total Revenue",
      dataIndex: "totalRevenue",
      key: "totalRevenue",
    },
    {
      title: "Date Updated",
      dataIndex: "dateUpdated",
      key: "dateUpdated",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_text: any, record: Service) => (
        <ServiceActions
          record={record}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ),
    },
  ];

  return (
    <div className="mx-auto p-5">
      <Table
        columns={columns} dataSource={filteredServices} rowKey="id" pagination={false}
      />
      <UpDateServiceModal selectedService={selectedService} isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </div>
  );
};

export default ServicesPage;
