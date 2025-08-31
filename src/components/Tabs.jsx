import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import axios from 'axios';
import "./style.css"

import { resetData, uploadFile } from '../redux/dataSlice';
import { premativeUploadFile, resetPremativeData } from "../redux/premativeDataSlice"
import { resetPromptData, submitPromptData } from '../redux/promptDataSlice';
import { ExcelTab } from './ExcelTab';
import { PremativeTab } from './PremativeTab';
import { PromptTab } from './PromptTab';
import { AiMode } from './AiMode';
import { AiManualMode } from './AiManualMode';

const DashboardTab = ({ activeTab }) => {
  const initialState = {
    companyLogo: null,
    prompt: '',
    document1: null,
    companyName: '',
    location: '',
    projectSummary: ""
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const { loading } = useSelector((state) => state.data)
  const { loading1 } = useSelector((state) => state.promptData)


  const handleChange = (e) => {
    const { name, value, files } = e.target


    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form has been submitted')
    setFormData(initialState)
    // console.log('formData>>>>', formData)
  };


  const aiModeDataUpload = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    // console.log("formData>>>>", formData)

  }


  const aiModeDataUSubmit = async (e) => {


    e.preventDefault();

    if (!Object.values(formData)) {
      alert('Please fill all the input fields');
    }

    try {
      const response = await axios.post(
        ' https://5xciypiy2l.execute-api.ap-southeast-2.amazonaws.com/dev/openai',
        {
          user_input: `${formData.prompt}`
        },
        {
          headers: {
            'Content-Type': 'text/plain',
          },
        }
      )

      // console.log('Data successfully received:', response?.data?.data);
    }

    catch (error) {
      // console.error('Error:', error);

    }

  };


  const excelFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("file", file)
    if (file && file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      alert('Please upload a valid CSV file.')
      return
    }

    setFormData({
      ...formData,
      document1: e.target.files[0]
    })

  }

  const excelfileSubmit = async (e) => {
    e.preventDefault()

    if (!formData.document1) {
      alert('Please choose a file first.')
      return;
    }

    const file = formData.document1;

    dispatch(resetPromptData())
    dispatch(resetData());
    dispatch(resetPremativeData());

    dispatch(uploadFile(file))
      .then(() => {
        navigate('/analytics')
      })
      .catch((error) => {
        navigate('/analytics')
        alert('Failed to upload the file. Please try again later.')
      });
  };


  const premativeUpload = (e) => {

    setFormData({
      ...formData,
      document1: e.target.files[0]
    })

  }

  const premativeSubmit = async (e) => {
    e.preventDefault();


    if (!formData.document1) {
      alert('Please choose a file first.');
      return;
    }

    const file = formData.document1;

    dispatch(resetData());
    dispatch(resetPromptData())
    dispatch(resetPremativeData());

    dispatch(premativeUploadFile(file))
      .then(() => {
        navigate('/analytics');
      })
      .catch((error) => {
        alert('Failed to upload the file. Please try again later.')
      });
  };


  const promptDataUpload = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    // console.log("formData>>>>", formData)

  }


  const promptDataUSubmit = async (e) => {

    e.preventDefault();

    if (!formData.prompt) {
      alert('Prompt is empty');
      return;
    }

    const prompt = formData.prompt;

    dispatch(resetData());
    dispatch(resetPremativeData());
    dispatch(resetPromptData())

    dispatch(submitPromptData(prompt))
      .then(() => {
        navigate('/analytics');
      })
      .catch((error) => {
        alert('Failed to upload the file. Please try again later.');
      });

  };


  return (

    <div style={{ marginTop: '20px' }}>

      {activeTab === 'aiMode' && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <AiMode aiModeDataUpload={aiModeDataUpload} aiModeDataUSubmit={aiModeDataUSubmit} formData={formData} setFormData={setFormData} />

        </div>
      )}

      {activeTab === 'aiManualMode' &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <AiManualMode />

        </div>
      }


      {activeTab === 'excel' && (

        <ExcelTab excelfileSubmit={excelfileSubmit} excelFileUpload={excelFileUpload} formData={formData} loading={loading} />

      )}


      {activeTab === 'premative' && (

        <PremativeTab premativeSubmit={premativeSubmit} premativeUpload={premativeUpload} loading={loading} formData={formData} />

      )}


      {activeTab === 'prompt' && (

        <PromptTab promptDataUSubmit={promptDataUSubmit} promptDataUpload={promptDataUpload} formData={formData} loading1={loading1} />

      )}

    </div>
  )
}

export default DashboardTab;
