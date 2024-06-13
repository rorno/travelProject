import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/singUp/SignUp";
import SignIn from "./Components/signIn/signIn";
import Bus from "./Components/busLyout/bus";
import AppDashboard from "./Components/dashbord/appDashbord";
import Team from "./Components/dashbord/pages/team/Team";
import Dashboard from "./Components/dashbord/pages/dashboard/Dashboard";
import Contacts from "./Components/dashbord/pages/contacts/Contacts";
import Employees from "./Components/dashbord/pages/employees/employees";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import SearchTrip from "./Components/SearchTrip/SearchTrip";
import TravelerInfo from "./Components/TravelerInfo/TravelerInfo";
import MyTrips from "./Components/MyTrips/MyTrips";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let fakeSeatsData = [
  { number: 1, selected: false, reserved: false },
  { number: 2, selected: false, reserved: false },
  { number: 3, selected: false, reserved: true },
  { number: 4, selected: false, reserved: false },
  { number: 5, selected: false, reserved: false },
  { number: 6, selected: false, reserved: false },
  { number: 7, selected: false, reserved: false },
  { number: 8, selected: false, reserved: false },
  { number: 9, selected: false, reserved: false },
  { number: 10, selected: false, reserved: false },
  { number: 11, selected: false, reserved: false },
  { number: 12, selected: false, reserved: false },
  { number: 13, selected: false, reserved: true },
  { number: 14, selected: false, reserved: false },
  { number: 15, selected: false, reserved: false },
  { number: 16, selected: false, reserved: false },
  { number: 17, selected: false, reserved: false },
  { number: 18, selected: false, reserved: false },
  { number: 19, selected: false, reserved: false },
  { number: 20, selected: false, reserved: false },
  { number: 21, selected: false, reserved: false },
  { number: 22, selected: false, reserved: false },
  { number: 23, selected: false, reserved: true },
  { number: 24, selected: false, reserved: false },
  { number: 25, selected: false, reserved: false },
  { number: 26, selected: false, reserved: false },
  { number: 27, selected: false, reserved: false },
  { number: 28, selected: false, reserved: false },
  { number: 29, selected: false, reserved: false },
  { number: 30, selected: false, reserved: false },
  { number: 31, selected: false, reserved: false },
  { number: 32, selected: false, reserved: false },
  { number: 33, selected: false, reserved: true },
  { number: 34, selected: false, reserved: false },
  { number: 35, selected: false, reserved: false },
  { number: 36, selected: false, reserved: false },
  { number: 37, selected: false, reserved: false },
  { number: 38, selected: false, reserved: false },
  { number: 39, selected: false, reserved: false },
  { number: 40, selected: false, reserved: false },
];
const App = () => {
  const [clickSubmitting, setClickSubmitting] = useState(false);
  const [numReservedSeats, setNumReservedSeats] = useState(0);
  const [hideMain, setHideMain] = useState(false);

  const handleBusSubmit = (numSeats) => {
    setNumReservedSeats(numSeats);
  };

  const handleSearchClick = () => {
    setClickSubmitting(true);
    setHideMain(true);
  };

  // just memorizing the updated data
  const handleUpdateFakeData = (seatNumber) => {
    fakeSeatsData[seatNumber - 1].selected = true;
    console.log(fakeSeatsData);
  };
  console.log(fakeSeatsData);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home setClickSubmitting={handleSearchClick} />
          <SearchTrip clickSubmitting={clickSubmitting} />
          {!hideMain && <Main />}
          <Footer />
        </>
      ),
      errorElement: <SignUp />,
    },
    {
      path: "SignUp",
      element: (
        <>
          {" "}
          <SignUp /> <Footer />{" "}
        </>
      ),
    },
    {
      path: "SignIn",
      element: (
        <>
          {" "}
          <SignIn /> <Footer />{" "}
        </>
      ),
    },
    {
      path: "Bus",
      element: (
        <Bus
          seatsData={fakeSeatsData}
          handleBusSubmit={handleBusSubmit}
          handleUpdateFakeData={handleUpdateFakeData}
        />
      ),
    },
    {
      path: "MyTrips",
      element: <MyTrips />,
    },
    {
      path: "TravelerInfo",
      element: <TravelerInfo numReservedSeats={numReservedSeats} />,
    },
    {
      path: "check-in",
      element: (
        <>
          {" "}
          <div>Fuck you</div> <Footer />{" "}
        </>
      ),
    },
    {
      path: "dashboard",
      element: <AppDashboard />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<></>} />;
};

export default App;
