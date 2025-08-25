import React, { useState } from 'react';
import Tabs from '../components/Tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('aiManualMode');

  return (
    <div >
            <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center" }}>


      {/* <div style={{ background:"url(./Welcome.png)", backgroundRepeat:"no-repeat",width:"1120px", height:"140px"}}>
        <h2>Welcome!</h2>
        <p style={{ fontSize: "18px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      </div> */}
      </div>



      <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center" }}>
        <div style={{ marginTop: '20px', display: "flex", backgroundColor: "#EEEEEE", width: "80%", borderRadius: "7px", height: "60px",justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center",padding:"10px" }}>
          {/* <div onClick={() => setActiveTab('aiMode')} style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", margin: '3px', width: "49.5%", borderRadius: "7px", height: "55px", border: "none",fontSize:"20px", backgroundColor: activeTab === 'aiMode' ? 'white' : '' }}><b>AI Mode</b></div> */}
          <div onClick={() => setActiveTab('aiManualMode')} style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", margin: '3px', width: "95%", borderRadius: "7px", height: "55px", border: "none",fontSize:"20px", backgroundColor: activeTab === 'aiManualMode' ? 'white' : '' }}><b>Manual Mode</b></div>
        </div>
      </div>

      <div style={{display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center"}}>
        <p style={{fontSize:"32px"}}><b>Describe Your Business</b></p>
      </div>


      <Tabs activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;