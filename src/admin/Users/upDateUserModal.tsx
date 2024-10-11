import React from 'react';
import { Modal, Form, Input } from "antd";

interface UpDateUserModalProps {
    selectedUser: any;
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
}

const UpDateUserModal: React.FC<UpDateUserModalProps> = ({
    selectedUser,
    isVisible,
    setIsVisible,
}) => {
    const [form] =Form.useForm();

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
      <Modal title="Update User"
      visible={isVisible}
      onOk={handleOk}
          onCancel={handleCancel} >
          <Form form={form} layout="vertical" name="update_user_form">
          <Form.Item
          name="Name"
          label="User Name"
          initialValue={selectedUser?.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          initialValue={selectedUser?.type}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          initialValue={selectedUser?.email}
        >
          <Input />
              </Form.Item>
              <Form.Item
          name="phone"
          label="Phone"
          initialValue={selectedUser?.phone}
        >
          <Input />
              </Form.Item>
          </Form>
      </Modal>
  )
}

export default UpDateUserModal;
