import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export const ExcelTab = ({ excelfileSubmit, excelFileUpload, formData, loading }) => {
    return (
        <Form onSubmit={excelfileSubmit}>
            <Container fluid>
                {/* Template Download */}
                <Row className="justify-content-center mb-4">
                    <Col xs={11} md={8}>
                        <Form.Label style={{ fontSize: '18px' }}>
                            <b>Download Template</b>
                        </Form.Label>
                        <div className="custom-file-box" style={{
                            border: '2px solid #929292',
                            marginTop: '10px',
                            borderRadius: '10px',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <label htmlFor="template" style={{ color: 'black', fontSize: '16px', cursor: 'pointer' }}>
                                template_download.csv
                            </label>
                            <a href="/template_download.csv" download style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="./download-icon.svg" alt="Download Icon" style={{ width: '30px', height: '30px' }} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr style={{ width: '90%', margin: '0 auto' }} />

                {/* File Upload */}
                <Row className="justify-content-center mt-4 mb-4">
                    <Col xs={11} md={8}>
                        <Form.Label style={{ fontSize: '18px' }}>
                            <b>Upload File</b>
                        </Form.Label>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px dashed #929292',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'center',
                            height: '200px',
                            marginTop: '10px'
                        }}>
                            <div>
                                {formData.document1 && (
                                    <div style={{ marginBottom: '10px', fontSize: '14px', color: '#333' }}>
                                        {formData.document1.name}
                                    </div>
                                )}
                                <Form.Control type="file" name="document1" onChange={excelFileUpload} style={{ display: 'none' }} id="document1" />
                                <label htmlFor="document1" style={{ color: 'gray', fontSize: '16px', cursor: 'pointer' }}>
                                    Upload a file (CSV, XLS, or XLSX)
                                </label>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Submit Button */}
                <Row className="justify-content-center">
                    <Col xs={10} sm={8} md={4}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={loading}
                                style={{
                                    height: 60,
                                    width: '100%',
                                    borderRadius: 5,
                                    fontSize: 18,
                                    fontWeight: 500,
                                    backgroundColor: loading ? 'gray' : 'black',
                                    borderColor: 'transparent',
                                    marginTop: '20px'
                                }}
                            >
                                {loading ? 'Submitting...' : 'Next'}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

