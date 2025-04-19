import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const Room = ({ room }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      key={room._id}
      className="border row mb-3 rounded-1 border-primary  rounded-lg bx "
    >
      <img
        src={room.images[0]}
        alt={room.name}
        className="col-4 rounded-2 pt-3 h-48 rounded-1 mb-4"
      />
      <div className="col-8 py-2">
        <h2 className="text-xl font-semibold">{room.name}</h2>
        <p className="text-xl font-semibold">Room Number : {room.roomNumber}</p>
        <p className="">Type : {room.type}</p>
        <p className="text-lg font-bold">
          Price Per Night : ${room.pricePerNight}
        </p>
        <div className="d-flex w-100 justify-content-end gap-3">
          <buttons className="btn btn-primary " onClick={handleShow}>
            View Details
          </buttons>
          <buttons className="btn btn-secondary ">Book Now</buttons>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {room.images.map((image) => {
              return (
                <Carousel.Item>
                  <Image src={image} alt="" className="w-100"/>

                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
            <p>{room.description}</p>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
