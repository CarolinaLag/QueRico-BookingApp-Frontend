export interface IAddReservation {
  date: string;
  timeslot: string;
  guests: number;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
}

export interface IReservation {
  _id: string;
  amountOfGuests: number;
  amountOfTables: number;
  timeSlot: string;
  date: string;
  ContactInfo: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: number;
  };
}
