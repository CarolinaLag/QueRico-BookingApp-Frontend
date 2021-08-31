class Reservation {
  constructor(
    public date: string,
    public guests: number,
    public timeslot: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public phonenumber: number
  ) {}
}

export default Reservation;
