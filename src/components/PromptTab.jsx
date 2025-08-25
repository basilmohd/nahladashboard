import React from 'react'
import { Button, Form, Tooltip, OverlayTrigger, Container, Row, Col } from 'react-bootstrap';

export const PromptTab = ({ promptDataUpload, promptDataUSubmit, formData, loading1 }) => {

    const examplePromptInput = `Project starts 1st March 2011 at 7 AM and ends 27th Aug 2011 at 5 PM. Labor budget is 7500, material budget 7543. Labor spent 3000, material spent 3500. Planned progress: Engg 20%, Proc 35%, Const 5%, Adhoc 0. Actual: Engg 15%, Proc 20%, Const 10%, Adhoc 0. Total tasks are 10927 with 3 start and 3 finish milestones, no resource tasks, no WBS or LOE.`;

    return (
        <Form onSubmit={promptDataUSubmit}>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={11} md={8}>
                        <Form.Label style={{ fontSize: '18px' }}>
                            <b>Prompt</b>
                        </Form.Label>

                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="tooltip" className="custom-tooltip">{examplePromptInput}</Tooltip>}
                        >
                            <Form.Control
                                type="text"
                                name="prompt"
                                value={formData.prompt}
                                onChange={promptDataUpload}
                                placeholder="Write a Prompt to Generate a Description"
                                style={{
                                    width: '100%',
                                    padding: '18px',
                                    marginTop: '10px',
                                    borderRadius: '7px',
                                    border: '2px solid #929292'
                                }}
                                required
                            />
                        </OverlayTrigger>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-4">
                    <Col xs={10} sm={8} md={4}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={loading1}
                                style={{
                                    height: 60,
                                    width: '100%',
                                    borderRadius: 5,
                                    fontSize: 18,
                                    fontWeight: 500,
                                    backgroundColor: loading1 ? 'gray' : 'black',
                                    borderColor: 'transparent'
                                }}
                            >
                                {loading1 ? 'Submitting...' : 'Next'}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}
