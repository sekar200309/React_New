
import React, { useState } from 'react';
import './Reporting.css'; 

const Reporting = () => {
  const [alerts, setAlerts] = useState([]);

  // Function to handle sending alert messages
  const sendAlertMessage = () => {
    // Replace this logic with your actual alert sending mechanism
    const newAlert = {
      sender: 'Sender A',
      senderEmail: 'mharshini2025@gmail.com',
      receiver: 'Receiver b',
      receiverEmail: '2k21cse048@kiot.ac.in',
      regarding: 'leakage',
      process: 'ongoing'
    };

    // Update alerts state with the new alert
    setAlerts(prevAlerts => [...prevAlerts, newAlert]);
  };

  return (
    <div className="reporting-container">
      <h2>Sender-Receiver Process Table</h2>
      <button onClick={sendAlertMessage}>Send Alert</button> {/* Button to simulate sending an alert */}
      <table className="reporting-table">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Sender Email</th>
            <th>Receiver</th>
            <th>Receiver Email</th>
            <th>Regarding</th>
            <th>Process</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index}>
              <td className="sender">{alert.sender}</td>
              <td>{alert.senderEmail}</td>
              <td className="receiver">{alert.receiver}</td>
              <td>{alert.receiverEmail}</td>
              <td>{alert.regarding}</td>
              <td>{alert.process}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reporting;
