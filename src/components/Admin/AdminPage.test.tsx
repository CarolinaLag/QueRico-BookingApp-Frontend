import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import AdminPage, { IReservation } from "./AdminPage";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;
const mockData: IReservation[] = [
  {
    _id: "1",
    amountOfGuests: 2,
    amountOfTables: 4,
    timeSlot: "17.00",
    date: "20210908",
    ContactInfo: {
      firstname: "Carlos",
      lastname: "Rodriguez",
      email: "carlos.rodriguez@email.com",
      phoneNumber: parseInt("0707383858"),
    },
  },
];

test("Reservations should have correct amount of reservations", async () => {
  mockAxios.get.mockResolvedValue({ data: mockData });
  render(<AdminPage />);
  await waitFor(() => {
    const reservations = screen.getAllByRole("div");
    expect(reservations.length).toBe(mockData.length);
  });
});
