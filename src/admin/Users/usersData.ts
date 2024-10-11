
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    type: "client" | "provider" | "admin";
  }

export const userData: User[] = [
    {
      id: 1,
      name: "Alice",
      type: "client",
      email: "example@gmail.com",
      phone: "0712345678",
    },
    {
      id: 2,
      name: "Bob",
      type: "provider",
      email: "example@gmail.com",
      phone: "0712345678",
    },
    {
      id: 3,
      name: "Charlie",
      type: "admin",
      email: "example@gmail.com",
      phone: "0712345678",
    },
    {
      id: 4,
      name: "David",
      type: "client",
      email: "example@gmail.com",
      phone: "0712345678",
    },
    {
      id: 5,
      name: "Eve",
      type: "provider",
      email: "example@gmail.com",
      phone: "0712345678",
    },
];
  
