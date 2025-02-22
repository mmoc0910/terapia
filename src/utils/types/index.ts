export type TAccount = {
  avatar?: string | null;
  fullName: string;
  email: string;
  role: "user" | "admin";
  isBlocked?: boolean | null;
  _id: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export type TAuthResponse = {
  user: TAccount;
  accessToken: string;
};

//service
export type TService = {
  _id: string;
  imageUrl?: string;
  expertId: TAccount[];
  name: string;
  description: string;
  price: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TServiceResponse = TService[];

export type TMyAppointment = {
  _id: string;
  userId: string;
  expertId: TAccount;
  serviceId: TService;
  appointmentTime: string;
  status: "pending";
  createdAt: Date;
  updatedAt: Date;
};

export type TMyAppointmentResponse = TMyAppointment[];

//blog
export type TBlog = {
  _id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TBlogResponse = TBlog[];
