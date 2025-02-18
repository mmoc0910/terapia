import {
  TAccount,
  TAuthResponse,
  TMyAppointmentResponse,
  TService,
  TServiceResponse,
} from "../types";
import api from "./api-config";

export const Apis = {
  register: "/auth/local/signup",
  login: "/auth/local/login",
  getServices: "/users/services",
  getExperts: "/users/experts",
  booking: "/users/appointments",
  getMyAppointment: "/users/appointments",
};

export const FetchApi = {
  register: async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    const res = await api.post<TAuthResponse>(Apis.register, data);
    return res.data;
  },
  login: async (data: { email: string; password: string }) => {
    const res = await api.post<TAuthResponse>(Apis.login, data);
    return res.data;
  },
  forgotPassword: async (data: { email: string }) => {
    const res = await api.post<{ message: string }>(
      "/auth/forgot-password",
      data
    );
    return res.data;
  },
  resetPassword: async (data: {
    resetToken: string;
    newPassword: string;
  }) => {
    const res = await api.post("/auth/reset-password", data);
    return res.data;
  },
  getServices: async () => {
    const res = await api.get<TServiceResponse>(Apis.getServices);
    return res.data;
  },
  getExperts: async () => {
    const res = await api.get<TAccount[]>(Apis.getExperts);
    return res.data;
  },
  getServiceDetail: async (serviceId: string) => {
    const res = await api.get<TService>(`${Apis.getServices}/${serviceId}`);
    return res.data;
  },
  booking: async (data: {
    appointmentTime: string;
    expertId: string;
    serviceId: string;
  }) => {
    const res = await api.post(Apis.booking, data);
    return res.data;
  },
  getMyAppointment: async () => {
    const res = await api.get<TMyAppointmentResponse>(Apis.getMyAppointment);
    return res.data;
  },
};
