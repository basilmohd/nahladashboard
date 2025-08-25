import React from 'react'
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const AiMode = ({aiModeDataUSubmit,aiModeDataUpload,formData, setFormData}) => {
  return (
    // <Form onSubmit={aiModeDataUSubmit} style={{ width: '80%' }}>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Project Start Date</b>
    //       </Form.Label>

    //       <div>
    //         <DatePicker
    //           selected={formData.projectStartDate}
    //           onChange={(date) => setFormData({ ...formData, projectStartDate: date })}
    //           dateFormat="MMMM d, yyyy"
    //           placeholderText="Select End Date"
    //           className="custom-datepicker"

    //           required
    //         />

    //       </div>

    //     </div>
    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>

    //     <div>

    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Project End Date</b>
    //       </Form.Label>

    //       <div>
    //         <DatePicker
    //           selected={formData.projectEndDate}
    //           onChange={(date) => setFormData({ ...formData, projectEndDate: date })}
    //           dateFormat="MMMM d, yyyy"
    //           placeholderText="Select End Date"
    //           className="custom-datepicker"
    //           required
    //         />
    //       </div>

    //     </div>

    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Labor budget</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="laborBudget"
    //         value={formData.laborBudget}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Labor budget"
    //         required
    //       />
    //     </div>

    //     <div style={{ flex: 1 }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Material budget</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="materialBudget"
    //         value={formData.materialBudget}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Material budget"
    //         required
    //       />
    //     </div>
    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Labor spent</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="laborSpent"
    //         value={formData.laborSpent}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Labor spent"
    //         required
    //       />
    //     </div>

    //     <div style={{ flex: 1 }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Material spent</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="materialSpent"
    //         value={formData.materialSpent}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Material spent"
    //         required
    //       />
    //     </div>
    //   </Form.Group>

    //   <h2>Planned progress</h2>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Engg</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="plannedEngg"
    //         value={formData.plannedEngg}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Engg"
    //         required
    //       />
    //     </div>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Proc</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="plannedProc"
    //         value={formData.plannedProc}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Engg"
    //         required
    //       />
    //     </div>

    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Const</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="plannedConst"
    //         value={formData.plannedConst}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Const"
    //         required
    //       />
    //     </div>

    //     <div style={{ flex: 1 }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Adhoc</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="plannedAdhoc"
    //         value={formData.plannedAdhoc}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Adhoc"
    //         required
    //       />
    //     </div>
    //   </Form.Group>

    //   <h2>Actual</h2>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Engg</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="actualEngg"
    //         value={formData.actualEngg}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Engg"
    //         required
    //       />
    //     </div>

    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Proc</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="actualProc"
    //         value={formData.actualProc}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Engg"
    //         required
    //       />
    //     </div>
    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Const</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="actualConst"
    //         value={formData.actualConst}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Const"
    //         required
    //       />
    //     </div>

    //     <div style={{ flex: 1 }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Adhoc</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="actualAdhoc"
    //         value={formData.actualAdhoc}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Adhoc"
    //         required
    //       />
    //     </div>
    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Total tasks</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="totalTask"
    //         value={formData.totalTask}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Total tasks"
    //         required
    //       />
    //     </div>

    //     <div style={{ flex: 1 }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Milestones Start</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="milestoneStart"
    //         value={formData.milestoneStart}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Milestones Start"
    //         required
    //       />
    //     </div>
    //   </Form.Group>

    //   <Form.Group className="input-wrapper mb-4" style={{ display: 'flex', marginTop: '15px' }}>
    //     <div style={{ flex: 1, marginRight: '10px' }}>
    //       <Form.Label style={{ fontSize: '18px' }}>
    //         <b>Milestones Finish</b>
    //       </Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="milestoneFinish"
    //         value={formData.milestoneFinish}
    //         onChange={aiModeDataUpload}
    //         style={{ border: '2px solid #929292', width: '90%', borderRadius: '7px', height: '40px', padding: '10px', marginTop: '10px' }}
    //         placeholder="Milestones Finish"
    //         required
    //       />
    //     </div>
    //   </Form.Group>
    //   <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
    //     <Button variant="primary" type="submit" style={{ height: 60, color: 'white', width: '25%', borderRadius: 5, fontSize: 20, fontWeight: 500, backgroundColor: 'black', borderColor: 'transparent', marginTop: '20px' }}>
    //       Next
    //     </Button>
    //   </div>


    // </Form>

    <div>
      AI MODE
    </div>
  )
}
