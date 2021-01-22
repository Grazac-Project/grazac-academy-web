import { Link } from "react-router-dom";
import Modal from "./Modal"

const SchoolList = props => {
  return (
    <Modal>
      <div onClick={() => props.onOpen(false)}>
        <h1 className="modal2__header">List of Institutions</h1>

        <table className="modal2__table">
            <tr>
              <th>S/N</th>
              <th>Name of Institution</th> 
              <th>State</th>
            </tr>

            <tr>
              <td>01</td>
              <td>Federal Univeristy of Agriculture, Abeokuta</td>
              <td>Ogun</td>
            </tr>

            <tr>
              <td>02</td>
              <td>Federal Univeristy of Agriculture, Abeokuta</td>
              <td>Ogun</td>
            </tr>

            <tr>
              <td>03</td>
              <td>Federal Univeristy of Agriculture, Abeokuta</td>
              <td>Ogun</td>
            </tr>

            <tr>
              <td>04</td>
              <td>Federal Univeristy of Agriculture, Abeokuta</td>
              <td>Ogun</td>
            </tr>

            <tr>
              <td>05</td>
              <td>Federal Univeristy of Agriculture, Abeokuta</td>
              <td>Ogun</td>
            </tr>

            <tr>
              <td>06</td>
              <td>Federal Univeristy of Agriculture, Abeokuta</td>
              <td>Ogun</td>
            </tr>
        </table>

        <div className="modal2__footer">
          If your school is not listed, <Link to="/contact">click here to provide school information</Link> so we can work on it.
        </div>
      </div>
    </Modal>
  )
}

export default SchoolList;