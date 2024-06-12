export type TUserRole = "admin" | "user";

export type TUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: TUserRole;
    address: string;
};
