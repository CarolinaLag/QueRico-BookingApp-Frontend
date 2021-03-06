import { render, waitFor, screen, getByText } from "@testing-library/react";
import axios from "axios";
import { IReservation } from "../../interface/interface";
import AdminPage from "./AdminPage";

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
      email: "rodriguez@email.com",
      phoneNumber: parseInt("0707383858"),
    },
  },
];

test("Reservations should render on screeen", async () => {
  mockAxios.get.mockResolvedValue({ data: mockData });
  const { getByText } = render(<AdminPage />);
  await waitFor(() => {
    const paragraph = getByText(/Carlos/i);
    expect(paragraph).toBeInTheDocument();
  });
});
