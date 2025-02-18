export type TAccount = {
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
  expertId: TAccount;
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
