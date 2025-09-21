// src/pages/Report.js
import React, { useRef } from "react";
import { Container, Card, Table, Button, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { questions } from "../data/questions";

export default function Report() {
  const location = useLocation();
  const navigate = useNavigate();

  const stored = sessionStorage.getItem("gmhatReport");
  const fallback = stored ? JSON.parse(stored) : {};
  const { patient, answers } = location.state || fallback;

  const reportRef = useRef();
  const today = new Date().toLocaleDateString();

  // compute category scores
  const categoryScores = {};
  questions.forEach((q) => {
    const val = answers?.[q.id];
    if (typeof val === "number" && val !== 8 && val !== 9) {
      categoryScores[q.category] = (categoryScores[q.category] || 0) + val;
    }
  });

  const allCategories = [
    "Anxiety",
    "Depressed mood",
    "Manic Symptoms",
    "Memory Impairment",
    "Alcohol misuse",
    "Drug misuse",
    "Personality problems",
    "Level Of Stress",
    "Risk Assessment",
  ];

  const getSeverity = (score) => {
    if (score <= 0) return "No Symptom";
    if (score <= 4) return "Mild";
    if (score <= 8) return "Moderate";
    return "Severe";
  };

  allCategories.forEach((cat) => {
    if (!(cat in categoryScores)) categoryScores[cat] = 0;
  });

  const sortedCats = Object.entries(categoryScores).sort((a, b) => b[1] - a[1]);
  const mainDiagnosis = sortedCats[0]?.[0] || "None";
  const otherDiagnoses = sortedCats.slice(1, 4).map((c) => c[0]);

  // PDF download
  const downloadPDF = () => {
    html2canvas(reportRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`GMHAT_Report_${patient?.name || "Patient"}.pdf`);
    });
  };

  const goHome = () => navigate("/");

  if (!patient || !answers) {
    return (
      <Container className="py-4">
        <h4>No report found. Please complete the questionnaire first.</h4>
        <Button onClick={goHome}>Go to Home</Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="text-center mb-4 no-print">
        <Button variant="primary" className="me-3" onClick={downloadPDF}>
          Download PDF
        </Button>
        <Button variant="secondary" onClick={goHome}>
          Go to Home
        </Button>
      </div>

      <div ref={reportRef} className="report-print">
        <div className="text-center mb-3">
          <h1 className="mb-1">GMHAT Interview Report</h1>
          <small className="small-muted">GMHAT is presented as an aid to healthcare professionals only and is not a substitute for a satisfactory clinical assessment.</small>
        </div>

        <Card className="mb-4">
          <Card.Body>
            <Row className="mb-2 patient-row">
              <Col md={4} className="pair"><strong>Name:</strong> {patient?.name}</Col>
              <Col md={4} className="pair"><strong>Age:</strong> {patient?.age}</Col>
              <Col md={4} className="pair"><strong>Gender:</strong> {patient?.gender}</Col>
            </Row>
            <Row>
              <Col md={6}><strong>Date of Assessment:</strong> {today}</Col>
              <Col md={6}><strong>Interviewed by:</strong> Dr. Manish Thakre</Col>
            </Row>
          </Card.Body>
        </Card>

        <h4 className="mb-3">Symptoms Based on GMHAT Interview</h4>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Category</th>
              <th>Score</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {allCategories.map((cat) => (
              <tr key={cat}>
                <td>{cat}</td>
                <td>{categoryScores[cat]}</td>
                <td>{getSeverity(categoryScores[cat])}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Card className="mt-4">
          <Card.Body>
            <h4>GMHAT Main Diagnosis:</h4>
            <p className="fs-5 fw-bold">{mainDiagnosis}</p>

            <h5 className="mt-3">Other Possible Diagnoses:</h5>
            <ul>
              {otherDiagnoses.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
