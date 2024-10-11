import React from 'react';
import { Modal, Form, Input } from "antd";

interface UpDateUserModalProps {
  selectedService: any;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const UpDateServiceModal: React.FC<UpDateUserModalProps> = ({
  selectedService,
  isVisible,
  setIsVisible,
}) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
    } catch (error) {
      console.error("Failed to update user: ", error);
    }
  };
  const handleCancel = () => {
    setIsVisible(false);
    form.resetFields();
  };

  return (
    <Modal title="Update Service"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel} >
      <Form form={form} layout="vertical" name="update_service_form">
        <div className='flex gap-3 items-center justify-between'>
          <div>
        <Form.Item
          name="Name"
          label="Name"
          initialValue={selectedService?.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subCategories"
          label="Sub Category"
          initialValue={selectedService?.subCategories}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="totalProviders"
          label="Total Providers"
          initialValue={selectedService?.totalProviders}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="totalUsers"
          label="Total Users"
          initialValue={selectedService?.totalUsers}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="serviceId"
          label="Service Id"
          initialValue={selectedService?.serviceId}
        >
          
         
          <Input />
        </Form.Item>
        </div>
        <div> 
        <Form.Item
          name="totalRevenue"
          label="Total Revenue"
          initialValue={selectedService?.totalRevenue}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="dateCreated"
          label="Date Created"
          initialValue={selectedService?.dateCreated}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="createdBy"
          label="Created By"
          initialValue={selectedService?.createdBy}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="dateUpdated"
          label="Date Updated"
          initialValue={selectedService?.dateUpdated}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="updatedBy"
          label="Updated By"
          initialValue={selectedService?.updatedBy}
        >
          <Input />
        </Form.Item>
        </div>
        </div>
      </Form>
    </Modal>
  )
}

export default UpDateServiceModal;

