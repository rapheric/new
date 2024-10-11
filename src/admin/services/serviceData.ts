  
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
  
  export const serviceData: Service[] = [
    {
      id:1,
      key: '1',
      name: "Haircuts",
      subCategories: ["Men"],
      totalProviders: 15,
      totalUsers: 120,
      serviceId: "SVC001",
      totalRevenue: 5000,
      dateCreated: "2023-01-10",
      createdBy: "John Doe",
      dateUpdated: "2023-05-15",
      updatedBy: "Jane Smith",
    },
    {
      id:2,
      key: '2',
      name: "Facial Treatments",
      subCategories: ["Acne"],
      totalProviders: 10,
      totalUsers: 80,
      serviceId: "SVC002",
      totalRevenue: 4000,
      dateCreated: "2023-02-12",
      createdBy: "John Doe",
      dateUpdated: "2023-06-20",
      updatedBy: "Jane Smith",
    },
    {
      id:3,
      key: '3',
      name: "Cleaning",
      subCategories: ["Deep Tissue"],
      totalProviders: 20,
      totalUsers: 200,
      serviceId: "SVC003",
      totalRevenue: 7500,
      dateCreated: "2023-03-15",
      createdBy: "Jane Doe",
      dateUpdated: "2023-07-25",
      updatedBy: "John Smith",
  
    },
  ];
  