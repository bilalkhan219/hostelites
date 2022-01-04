import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const Rooms = () => {
  // const list = [
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Luxury",
  //     noOdBeds: 2,
  //     Availablity: "Avaiable",
  //   },
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Luxury",
  //     noOdBeds: 2,
  //     Availablity: "Available",
  //   },
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Regular",
  //     noOdBeds: 2,
  //     Availablity: "Unvailable",
  //   },
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Luxury",
  //     noOdBeds: 2,
  //     Availablity: "Available",
  //   },
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Luxury",
  //     noOdBeds: 2,
  //     Availablity: "Unvailable",
  //   },
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Luxury",
  //     noOdBeds: 2,
  //     Availablity: "Available",
  //   },
  //   {
  //     imageURL: "./room1.jpg",
  //     roomType: "Luxury",
  //     noOdBeds: 2,
  //     Availablity: "Unvailable",
  //   },
  // ];
  const RoomTemplate = () => {
    return (
      <Grid item container xs={12} className="mb-3">
        <Grid item xs={3}>
          <img
            alt=""
            src={require("./room1.jpg")}
            width="300px"
            height="300px"
            className="d-inline-block align-top mx-3"
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <Typography variant="h5"> Luxury</Typography>
          <Typography variant="h6">2 beds</Typography>
          <Typography variant="button">Available</Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container item xs={12}>
      {/* {list.map((room) => (
        <RoomTemplate
          imageURL={room.imageURL}
          roomType={room.roomType}
          noOdBeds={room.noOdBeds}
          availability={room.availability}
        />
      ))} */}
      <RoomTemplate />
      <RoomTemplate />
      <RoomTemplate />
      <RoomTemplate />
      <RoomTemplate />
    </Grid>
  );
};
export default Rooms;
