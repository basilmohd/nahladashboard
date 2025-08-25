// import React, { useState } from 'react';
// import Tabs from '../components/Tabs';


// const FileUpload = () => {

//   const [activeTab, setActiveTab] = useState('excel');

//   return (
//     <div style={{ }}>


//       <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center" }}>
//         <div style={{ marginTop: '20px', display: "flex", backgroundColor: "#EEEEEE", width: "80%", borderRadius: "7px", height: "60px" }}>
//           <div onClick={() => setActiveTab('excel')} style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", margin: '3px', width: "33%", borderRadius: "7px", height: "55px", border: "none", fontSize: "20px", backgroundColor: activeTab === 'excel' ? 'white' : '' }}><b>Excel</b></div>
//           <div onClick={() => setActiveTab('premative')} style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", margin: '3px', width: "33%", borderRadius: "7px", height: "55px", border: "none", fontSize: "20px", backgroundColor: activeTab === 'premative' ? 'white' : '' }}><b>Premative P6</b></div>
//           <div onClick={() => setActiveTab('prompt')} style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center", margin: '3px', width: "33%", borderRadius: "7px", height: "55px", border: "none", fontSize: "20px", backgroundColor: activeTab === 'prompt' ? 'white' : '' }}><b>Prompt</b></div>

//         </div>
//       </div>

//       <Tabs activeTab={activeTab} />


//     </div>
//   );
// };

// export default FileUpload;



import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import './FileUpload.css'; 

const FileUpload = () => {
  const [activeTab, setActiveTab] = useState('excel');

  return (
    <div className="file-upload-container">
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 'excel' ? 'active' : ''}`}
          onClick={() => setActiveTab('excel')}
        >
          <b>Excel</b>
        </div>
        <div
          className={`tab ${activeTab === 'premative' ? 'active' : ''}`}
          onClick={() => setActiveTab('premative')}
        >
          <b>Premative P6</b>
        </div>
        <div
          className={`tab ${activeTab === 'prompt' ? 'active' : ''}`}
          onClick={() => setActiveTab('prompt')}
        >
          <b>Prompt</b>
        </div>
      </div>

      <Tabs activeTab={activeTab} />
    </div>
  );
};

export default FileUpload;
