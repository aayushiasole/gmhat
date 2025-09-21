import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../custom.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function HomePage() {
  const navigate = useNavigate();
  const [showBenefits, setShowBenefits] = useState(false);

  // ✅ Initialise AOS once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation speed (ms)
      once: true,     // animate only once per element
      offset: 120,    // trigger point from top of viewport
      easing: "ease-in-out"
    });
  }, []);

  const domains = [
    { title: "Worries", info: "Excessive, bothersome worrying that impacts daily life." },
    { title: "Anxiety & Panic", info: "Nervousness, fear, sudden panic attacks." },
    { title: "Concentration", info: "Difficulty focusing on tasks or conversations." },
    { title: "Depressed Mood & Hopelessness", info: "Sadness, loss of interest, hopelessness." },
    { title: "Suicidal Tendencies", info: "Thoughts, plans or attempts of self-harm." },
    { title: "Sleep", info: "Trouble falling or staying asleep." },
    { title: "Hypochondriasis", info: "Excessive worry about health or illness." },
    { title: "Obsessions/Compulsions", info: "Repetitive checking or intrusive thoughts." },
    { title: "Phobias", info: "Irrational fears such as agoraphobia or crowds." },
    { title: "Thought Disorder & Delusions", info: "Unusual beliefs, paranoia, ideas of reference." },
    { title: "Psychotic Symptoms", info: "Hallucinations such as hearing voices." },
    { title: "Alcohol & Drug Misuse", info: "Strong desire or dependence on substances." },
    { title: "Personality Problems", info: "Long-term emotional or behavioural difficulties." },
    { title: "Stressors & PTSD", info: "Trauma, nightmares, post-event distress." },
    { title: "Clinical Judgment", info: "Overall clinician assessment integrating all findings." }
  ];

  return (
    <div>
      {/* HERO */}
      <Container fluid className="py-5 d-flex justify-content-center" data-aos="fade-up">
        <div className="section-box text-center" style={{maxWidth: 1000}}>
          <h1>Welcome to the GMHAT App: Your Guide to Mental Health Assessment</h1>
          <h4 className="mb-3">Empowering Your Mental Wellbeing Journey</h4>
         
        </div>
      </Container>

      {/* ===== Info Section: GMHAT Intro + Scoring + History ===== */}
      <section className="container my-5">
        <div className="row g-4 align-items-stretch">

          {/* LEFT COLUMN: What is GMHAT + Scoring Threshold in one card */}
          <div className="col-lg-6">
            <div className="section-box h-100 d-flex flex-column">
              <h2 className="mb-3">What is GMHAT?</h2>
              <p className="lead">
                The Global Mental Health Assessment Tool (GMHAT) is a standardized, computer-assisted clinical interview designed to help healthcare professionals, including those without specialized psychiatric training, perform rapid and comprehensive mental health assessments. In a time-efficient, semi-structured format, GMHAT guides the interviewer through a broad range of mental health symptoms, including anxiety, depression, psychosis, eating disorders, substance misuse, and dementia. By using a "tree-branch" structure, the tool conserves time by only asking follow-up questions for symptom categories where preliminary screening indicates a potential problem. Upon completion, GMHAT generates a detailed report that includes a list of symptoms, severity ratings, a risk assessment, and a computer-assisted diagnosis based on ICD-10 criteria. This process ultimately helps to improve the detection and management of mental health issues, especially in settings with limited resources or specialists.
              </p>
             <p className="lead">
            The Global Mental Health Assessment Tool (GMHAT) is a trusted, computerised tool
            designed to quickly and sensitively identify mental health needs. Whether you're a patient preparing for an
            assessment or a healthcare professional, this app provides easy access to information,
            self-reflection prompts and resources—no login required to explore; assessments are private and secure.
          </p>
              <hr className="my-4"/>

              <h3 className="mb-3">Scoring Threshold</h3>
              <p className="lead">
                GMHAT calculates severity scores across multiple mental health
                domains. The following table shows the interpretation of each
                severity level:
              </p>

              {/* === Scoring Table === */}
              <div className="table-responsive">
                <table className="score-table mx-auto mt-3 mb-0">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Score</th>
                      <th>Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Anxiety</td>
                      <td>0–1</td>
                      <td>No / Mild</td>
                    </tr>
                    <tr>
                      <td>Depression</td>
                      <td>2–3</td>
                      <td>Moderate</td>
                    </tr>
                    <tr>
                      <td>Other Domains</td>
                      <td>≥4</td>
                      <td>Severe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: History of GMHAT with Vertical Timeline */}
          <div className="col-lg-6">
            <div className="section-box h-100">
              <h2 className="mb-4 text-center">History of GMHAT</h2>

              <div className="roadmap-vertical">
                {[
                  {
                    year: "1990s Origins",
                    text: "In the mid-1990s, Professor Vimal Sharma, a prominent psychiatrist with extensive experience in primary care in the UK and India, alongside Professor John Copeland, a pioneer in geriatric psychiatry, initiated the development of GMHAT. Recognizing the significant inconsistencies and variability in mental health assessments conducted by general practitioners (GPs) and other non-specialist healthcare professionals, they sought to create a standardized, computer-assisted interview tool. This effort was driven by the need to address the lack of a reliable, structured method to identify mental health issues across diverse populations, particularly in busy primary care settings where time and expertise were often limited."
                  },
                  {
                    year: "Early 2000s Launch",
                    text: "The Primary Care version (GMHAT/PC) was officially released around 2004, marking a significant milestone in its deployment. This version was specifically designed for use by GPs, nurses, and health workers in primary care settings, offering a concise 15–20 minute assessment that could be integrated into routine consultations. Its development focused on enhancing feasibility, ensuring high inter-rater reliability (validated at 0.85–0.90), and confirming its clinical validity through comparative studies with expert psychiatric evaluations."
                  },
                  {
                    year: "2000s–2010s Expansion",
                    text: "During this period, GMHAT evolved to meet the needs of diverse and specialized populations. The Intellectual Disability version (GMHAT-ID) was developed to address the unique mental health challenges faced by individuals with intellectual disabilities, incorporating simplified language and additional prompts to assess cognitive and behavioral symptoms effectively. Simultaneously, the tool was translated into over 10 languages, including Arabic, Spanish, Hindi, Marathi, Tamil, Dutch, German, Welsh, Cantonese, and Mandarin."
                  },
                  {
                    year: "2016 Refugee Pilot",
                    text: "A landmark application occurred in December 2016 when GMHAT was piloted with 200 Syrian refugees aged 18 and above in Beirut, Lebanon, in collaboration with the International Organization for Migration (IOM) and supported by the UK Home Office and Public Health England. Conducted until July 2017 as part of the Vulnerable Persons Resettlement Scheme (VPRS), the pilot aimed to assess mental health needs pre-departure to facilitate resettlement support in the UK."
                  },
                  {
                    year: "2020s Global Use",
                    text: "n the 2020s, GMHAT continued to expand with the addition of specialized modules for Attention Deficit Hyperactivity Disorder (ADHD) and autistic spectrum disorders, reflecting advances in neurodevelopmental psychiatry. By 2023, it had been adopted in community health settings worldwide, contributing to public health integration efforts by providing data for mental health service planning."
                  }
                ].map((step, idx) => (
                  <div className="roadmap-item" key={idx} data-aos="fade-up" data-aos-delay={idx*100}>
                    <div className="roadmap-node"></div>
                    <div className="roadmap-content">
                      <h5>{step.year}</h5>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DOMAINS */}
      <Container className="py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">What Does GMHAT Help Detect? Key Domains</h2>
        <Row className="g-4">
          {domains.map((d,i) => (
            <Col md={4} key={i} data-aos="fade-up" data-aos-delay={i*80}>
              <Card className="domain-card p-3">
                <Card.Body>
                  <Card.Title style={{color:"var(--lavender-500)"}}>{d.title}</Card.Title>
                  <Card.Text style={{color:"var(--muted)"}}>{d.info}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Key Features & Impact */}
      <Container className="py-5" data-aos="fade-up">
        <Row className="g-4">
          <Col md={6}>
            <div className="section-box h-100">
              <h2 className="text-center mb-4">Clinical Impact</h2>

              <h5>Improved detection and diagnosis</h5>
              <ul className="small-muted">
                <li>Wider range of conditions: assesses psychosis, phobias, OCD, dementia, substance misuse, personality problems—beyond anxiety & depression.</li>
                <li>Increased accuracy: trained health professionals achieve excellent agreement with psychiatrist diagnoses.</li>
                <li>Holistic assessment: captures full symptom profile, identifying multiple diagnoses when necessary.</li>
              </ul>

              <h5>Enhanced patient care and management</h5>
              <ul className="small-muted">
                <li>Comprehensive output: detailed symptom profile, severity ratings, risk assessment, and ICD-10 based diagnoses.</li>
                <li>Improved referral processes: generates a referral letter for specialist teams, ensuring clear hand-offs.</li>
                <li>Guides treatment: provides management guidelines for evidence-based planning.</li>
                <li>Outcomes measurement: tracks symptoms over time to monitor progress and treatment effectiveness.</li>
              </ul>
            </div>
          </Col>

          <Col md={6}>
            <div className="section-box h-100">
              <h2 className="text-center mb-4">Feasibility & Research Value</h2>

              <h5>Feasibility and accessibility</h5>
              <ul className="small-muted">
                <li>Time-efficient: 10–20 minute interview suits busy primary care and hospital settings.</li>
                <li>Ease of use: designed for trained health workers who are not psychiatrists; well accepted by patients and interviewers.</li>
                <li>Reduces health disparities: expands access in low- and middle-income countries and rural areas with few specialists.</li>
              </ul>

              <h5>Training and research applications</h5>
              <ul className="small-muted">
                <li>Training tool: teaches medical students and health professionals mental health assessment skills.</li>
                <li>Standardized data: provides data for research and epidemiological studies.</li>
                <li>Cultural validation: translated and validated in multiple languages for cross-cultural and international use.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <Container className="py-5" data-aos="zoom-in">
        <div className="section-box text-center">
          <h3 style={{color:"var(--lavender-500)"}}>Ready to Begin Your Assessment?</h3>
          <p className="small-muted">
            The assessment typically takes about 15–20 minutes (primary care version). Your responses remain private in this session.
          </p>
          <Button style={{ background: "var(--lavender-500)", border: "none" }} size="lg"
            onClick={() => navigate("/patient")}>Start Your Assessment</Button>
        </div>
      </Container>

      <footer style={{ background: "var(--lavender-300)", padding: 18, marginTop: 24, color: "#fff", textAlign: "center" }}>
        © {new Date().getFullYear()} GMHAT — A clinician aid for mental health screening.
      </footer>
    </div>
  );
}
