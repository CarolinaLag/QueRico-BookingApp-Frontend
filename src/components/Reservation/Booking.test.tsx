import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import moment from "moment";
import Booking from "./Booking";
import axios from "axios";

interface IReservationResponse {
  tablesAvailableAtFive: boolean;
  tablesAvailableAtSeven: boolean;
}

jest.mock("axios");

const mockAsync = axios as jest.Mocked<typeof axios>;

const mockData: IReservationResponse = {
  tablesAvailableAtFive: true,
  tablesAvailableAtSeven: false,
};

test("bookingDate should have the current day as its value prior to 3PM, the next day as its value if after 3PM", () => {
  const { container } = render(<Booking />);

  const buttons = container.getElementsByClassName(
    "react-calendar__tile--active"
  );

  const button = buttons[0].firstElementChild;

  const date = button?.getAttribute("aria-label");

  let expectedValue = moment().format("LL");

  if (moment().hours() > 15) {
    expectedValue = moment().add(1, "days").format("LL");
  }

  expect(moment(date).format("LL")).toBe(expectedValue);
});

test("render button for 5PM but not for 7PM when the response from backend sends true for tablesAvailableAtFive but false for tablesAvailableAtSeven", async () => {
  mockAsync.get.mockResolvedValue({ data: mockData });

  const { getByText } = render(<Booking />);

  fireEvent.change(screen.getByTestId("select"), { target: { value: "2" } });

  await waitFor(() => {
    let button = getByText(/17:00/i);

    expect(button).toBeInTheDocument();
  });
});

test("Component contactform should render when pressing a timeslot", () => {});
