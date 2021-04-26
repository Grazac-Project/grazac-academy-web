import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import loader from "../images/loader.gif";

const SchoolList = (props) => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("https://grazacacademy.com//list/undergraduate")
      .then((resp) => resp.json())
      .then((resp) => {
        setSchools(resp.data);
      })
      .catch((error) => {
        alert(`An error occurred: ${error}`);
      });
  }, []);

  return (
    <Modal>
      <div onClick={() => props.onOpen(false)}>
        <h1 className="modal2__header">List of Institutions</h1>
        {schools.length ? (
          <table className="modal2__table">
            <tr>
              <th>S/N</th>
              <th>Name of Institution</th>
              <th>State</th>
            </tr>
            {schools.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.state}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div style={{ height: "150px" }}>
            <img src={loader} alt="loader" className="loader" />
          </div>
        )}
        <div className="modal2__footer">
          If your school is not listed,{" "}
          <Link to="/contact">click here to provide school information</Link> so
          we can work on it.
        </div>
      </div>
    </Modal>
  );
};

export default SchoolList;
