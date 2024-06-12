import { User } from "./user.model";

const createUser = (payload: any) => {
    const result = User.create(payload);

    return result;
};
const getUsers = () => {
    const result = User.find();

    return result;
};

export const userServices = {
    createUser,
    getUsers
}
