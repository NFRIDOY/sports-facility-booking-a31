export type TIsBooked = "confirmed" | "unconfirmed" | "canceled"

export type TBooking = {
    date: Date;
    startTime: string;
    endTime: string;
    user: string;
    facility: string;
    payableAmount: number;
    isBooked: TIsBooked;
};
