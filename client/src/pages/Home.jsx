import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = (await axios.get("/api/rooms/getallrooms")).data;
      setRooms(data);
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, []);

  return isLoading ? (
    <h1 className="text-text-danger text-center">Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <div className="container mx-auto  mt-5">
      <h1 className="text-center text-3xl  font-bold">Available Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {rooms.map((room) => (
          <Room room = {room}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
