import React, { FC } from "react";
import { Container } from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import SelectAndDisplay from "../../components/SelectAndDisplay";
import { OptionsAndContents } from "../../components/SelectAndDisplay/SelectAndDisplay";
import { ContentTitle, MainDiv, SubTitle } from "./styled";

const BasicContent: FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <>
      <ContentTitle>{title}</ContentTitle>
      <p>{text}</p>
    </>
  );
};

const optionsAndContentsPart1: OptionsAndContents = {
  options: [
    {
      name: "ENGSCI111",
      content: (
        <BasicContent
          title="ENGSCI111 - Mathematical Modelling 1"
          text="Introduction to mathematical modelling. Differentiation and integration (polynomials, trigonometric, exponential, logarithmic, and rational functions). Integration by parts, substitution and partial fractions. Differential equations and their solutions (including Euler's method). Vector and matrix algebra, transformations, solving systems of linear equations. Modelling using probability."
        />
      ),
    },
    {
      name: "ENGGEN199",
      content: (
        <BasicContent
          title="ENGGEN199 - English Language Competency"
          text="This course helps the Faculty of Engineering to establish your English language ability, both written and spoken. Completion of ENGGEN 199 is compulsory, including for those admitted directly into Part II, with no exceptions – this includes native speakers, or someone for whom English is a second language. This is a zero-credit course, but must be completed to complete the degree requirements and be eligible to graduate."
        />
      ),
    },
    {
      name: "ENGGEN140",
      content: (
        <BasicContent
          title="ENGGEN140 - Fundamentals of Engineering in Society"
          text="An introduction to chemistry and biology as applied to solving fundamental engineering problems from first principles using conservation laws and with appropriate consideration for uncertainty. Problems will also be addressed from a social perspective, considering the environment, the Treaty of Waitangi, social license to operate, and the role of professional engineering skills in the community and society."
        />
      ),
    },
    {
      name: "ENGGEN121",
      content: (
        <BasicContent
          title="ENGGEN121 - Engineering Mechanics"
          text="An introduction to planar mechanics including: free body diagrams, planar equilibrium of rigid bodies, friction, distributed forces, internal forces, shear force and bending moment diagrams, kinematics and kinetics of particles, work and energy, relative motion, kinematics and kinetics of rigid bodies."
        />
      ),
    },
    {
      name: "ENGGEN115",
      content: (
        <BasicContent
          title="ENGGEN115 - Principles of Engineering Design"
          text="An introduction to the principles of design as a fundamental part of engineering practice and a foundation for subsequent design courses. Students are also introduced to essential drawing skills and CAD, and complete group-based design projects. Topics include systems life cycle, design, and introductions to professional issues such as health and safety, ethics, sustainability, cultural diversity, communication, leadership, and teamwork."
        />
      ),
    },
    {
      name: "ENGGEN131",
      content: (
        <BasicContent
          title="ENGGEN131 - Introduction to Software Development"
          text="Introduction to problem solving in engineering through the use of the software package MATLAB, and the programming language C."
        />
      ),
    },
    {
      name: "ELECTENG101",
      content: (
        <BasicContent
          title="ELECTENG101 - Electrical and Digital Systems"
          text="An introduction to electrical, computer and electronic systems and technology. Digital circuits and analysis techniques, computer organisation. Analog circuits and analysis techniques. Inductive power transfer, power systems and electric machines. Communication systems."
        />
      ),
    },
    {
      name: "ECON151G",
      content: (
        <BasicContent
          title="ECON151G - Understanding the Global Economy"
          text="Economics affects our daily lives and the global environment in many ways. Through the media we are constantly made aware of price increases, interest rate changes, exchange rate movements and balance of payments problems, growth and recessions, standard of living comparisons, regional trading agreements. What does it all mean and how does it all work?"
        />
      ),
    },
    {
      name: "CHEMMAT121",
      content: (
        <BasicContent
          title="CHEMMAT121 - Materials Science"
          text="Introduction to materials science starting with the fundamentals of atomic structure and bonding and how this builds up a microstructure to create a solid. Metals, polymers, ceramics, electronic materials, composite and biomaterials will be covered and the properties, advantages and disadvantages of each discussed. Considerations such as corrosion, degradation and failure will be studied with a focus on improving design and creating new materials for our future world."
        />
      ),
    },
  ],
};

const optionsAndContentsPart2: OptionsAndContents = {
  options: [
    {
      name: "ENGSCI211",
      content: (
        <BasicContent
          title="ENGSCI211 - Mathematical Modelling 2"
          text="First and second order ordinary differential equations and solutions. Laplace transforms. Taylor series and series in general. Multivariable and vector calculus including divergence, gradient and curl. Further linear algebra. Eigenvalues and eigenvectors. Fourier series. Application of the techniques through appropriate modelling examples. Introductory data analysis and statistics."
        />
      ),
    },
    {
      name: "ELECTENG210",
      content: (
        <BasicContent
          title="ELECTENG210 - Electronics 1"
          text="	
      Semiconductor devices and applications, diodes, bipolar junction transistors and operational amplifiers. Elementary device physics. Linear and non-linear devices, terminal characteristics, small-signal modelling and analysis. Frequency-dependent behaviour of circuits and analysis methods. Linear and non-linear circuits such as amplifiers and switching circuits. Biasing, coupling and bypass techniques. Operational amplifiers, frequency-dependence and characteristic limitations, frequency selective and non-linear switching circuits."
        />
      ),
    },
    {
      name: "ELECTENG202",
      content: (
        <BasicContent
          title="ELECTENG202 - Circuits and Systems"
          text="Aims to provide a good understanding of the way electrical circuits work. It covers DC and AC circuit theorems and analysis; transient analysis, including the Laplace transform; transfer functions; AC power calculations; and time and frequency representation of signals."
        />
      ),
    },
    {
      name: "COMPSYS201",
      content: (
        <BasicContent
          title="COMPSYS201 - Fundamentals of Computer Engineering"
          text="Digital systems and binary coding; binary numbers; Boolean algebra and computer logic; combinational logic circuits; sequential logic circuits; hardware description language; digital design flow; register transfer level descriptions and design; data paths and control units; from circuits to microprocessors; basic computer organisation; introduction to modern microprocessors; timers and interfacing; C and assembly language for microprocessors; designing digital systems using microprocessors."
        />
      ),
    },
    {
      name: "ENGGEN204",
      content: (
        <BasicContent
          title="ENGGEN204 - Managing Design and Communication"
          text="The management of engineering design based on systems engineering, plus the practical application of advocacy, and individual and group-based communication skills. Scenarios representative of real-world issues are addressed through team-based projects and problem solving. The professional issues introduced in ENGGEN 115 (health and safety, ethics, sustainability, cultural diversity, communication, leadership, and teamwork) are continued and developed."
        />
      ),
    },
    {
      name: "COMPSYS202",
      content: (
        <BasicContent
          title="COMPSYS202 - Object Oridented Design and Programming"
          text="A project-based course with extensive hands-on programming experience. Includes: an introduction to object oriented design including UML, sequence diagrams, use-case analysis; an introduction to object oriented programming in a modern high level language, algorithms, data abstraction and elementary data structures."
        />
      ),
    },
    {
      name: "ENGGEN299",
      content: (
        <BasicContent
          title="ENGGEN299 - Workship Practice"
          text="An introduction to workshop safety and various  fabrication tools used in the faculty and in industry. Students are introduced to several tools and how to use them safely, then practice their skills through one or more projects. Students sign up for and attend a block of workshop sessions at MIT to learn health and safety in a mechanical workshop and be introduced to workshop tools through small projects. Workbench class: drill gauge. Lathe class: plumb bob. Milling class: spirit level. Welding: practice plates"
        />
      ),
    },
    {
      name: "ELECTENG209",
      content: (
        <BasicContent
          title="ELECTENG209 - Analogue and Digital Design"
          text="Project-based course introducing the process of electrical engineering design. Students will research a diverse range of practical problems and develop solutions and prototypes, test and evaluate hardware and software solutions, and communicate the design and results."
        />
      ),
    },
    {
      name: "ELECTENG204",
      content: (
        <BasicContent
          title="ELECTENG204 - Engineering Electromagnetics"
          text="Electrostatics (Coulomb’s and Gauss’s Laws, scalar potential, energy, capacitance, dielectrics), magnetostatics (Biot-Savart and Ampere’s Laws, moving conductors, magnetic forces/torques, ferromagnetic hysteresis, inductance, magnetic materials), electromagnetic induction (Faraday’s and Lenz’s Laws). Transmission lines subjected to pulse excitation, magnetic circuits and single-phase transformers. Introduction to computational electromagnetics."
        />
      ),
    },
  ],
};

const optionsAndContentsPart3: OptionsAndContents = {
  options: [
    {
      name: "ENGSCI313",
      content: (
        <BasicContent
          title="ENGSCI313 - Mathematical Modelling 3ECE"
          text="Complex Analysis, including complex numbers, analytic functions, complex integration, Cauchy's theorem, Laurent series, residue theory; Laplace transforms; Modelling with partial differential equations, including electronic and electrical applications; Fourier Analysis, Fourier transform, Fast Fourier transform; Optimisation, including unconstrained and constrained models, linear programming and nonlinear optimisation."
        />
      ),
    },
    {
      name: "ENGGEN303",
      content: (
        <BasicContent
          title="ENGGEN303 - Managing Projects and Innovation"
          text="Introduction to theory and practice of managing projects, innovation, product development and service delivery. Students work in interdisciplinary teams to complete a project based on a complex real-world systems scenario. Project management and innovation topics are integrated with design studies covered in previous courses, and extended to wider business issues of risk and opportunities, entrepreneurship, financial management, and regulatory issues."
        />
      ),
    },
    {
      name: "COMPSYS305",
      content: (
        <BasicContent
          title="COMPSYS305 - Digital Systems Design"
          text="Digital Systems implementation technologies with emphasis on hardware description languages and design abstraction levels; structural, architectural and behavioral modelling; register-transfer level design; datapath and control units; functional and timing simulations; FPGA-based implementation design flow and case studies."
        />
      ),
    },
    {
      name: "COMPSYS302",
      content: (
        <BasicContent
          title="COMPSYS302 - Software Practice"
          text="A project-based course to gain experience in software design emphasising problem solving techniques and applications in computer systems engineering. The course includes practical, real-world project(s) involving a representative subset of the following topics: algorithm and data structure selection and implementation, parsing and translation, object-oriented and multi-threaded programming, scripting languages, peer-to-peer communication over internet."
        />
      ),
    },
    {
      name: "SOFTENG325",
      content: (
        <BasicContent
          title="SOFTENG325 - Software Architecture"
          text="Taxonomy of software architecture patterns, including client/server and multi-tier. Understanding quality attributes. Methodologies for design of software architectures. Technologies for architecture level development, including middleware.
      "
        />
      ),
    },
    {
      name: "ELECTENG303",
      content: (
        <BasicContent
          title="ELECTENG303 Systems and Control"
          text="Introduction to linear, time-invariant, continuous-time system theory from both a time-domain and frequency domain standpoint. This leads on to the fundamental body of knowledge underlying the control and enhancement of system behaviour, with application to the analysis and control of electrical systems."
        />
      ),
    },
    {
      name: "COMPSYS303",
      content: (
        <BasicContent
          title="COMPSYS303 - Microcomputers and Embedded Systems"
          text="Embedded applications. Microprocessors, microcontrollers, architecture, organisation, programming memories, I/O interfacing. Sensors, actuators, analog interfaces. Hardware/Software partitioning and interfacing. Concurrency. Implementing data transformations and reactivity. Case studies."
        />
      ),
    },
    {
      name: "COMPSYS301",
      content: (
        <BasicContent
          title="COMPSYS301 - Hardware Software Systems"
          text="An appreciation of the engineering design process as applied to computer systems. Design skills are enhanced through engineering projects which typically include elements of: computer hardware design, computer software design, system design and control, sensing, actuation and interfacing."
        />
      ),
    },
  ],
};

const optionsAndContentsPart4: OptionsAndContents = {
  options: [
    {
      name: "SOFTENG751",
      content: (
        <BasicContent
          title="SOFTENG751 - High Performance Computing"
          text="Advanced parallel and high performance computing concepts and techniques such as parallel system architecture; parallelisation concepts, algorithms and methodology; parallel programming paradigms and technologies. Core concepts and skills are deepened by a hands-on research project in which a challenging parallel computing problem is analysed and solved."
        />
      ),
    },
    {
      name: "SOFTENG701",
      content: (
        <BasicContent
          title="SOFTENG701 - Advanced Software Engineering Development Methods"
          text="Advanced studies in methods and techniques for developing complex software systems including topics in software engineering environments, advanced software design, tool construction and software architectures. The core taught skills are extended by individual projects in which independent research is undertaken to address challenging software system problems.
      "
        />
      ),
    },
    {
      name: "ENGGEN499",
      content: (
        <BasicContent
          title="ENGGEN499 - Practical Work"
          text="Practical Work is a core component of your BE(Hons). You're required to complete 800 hours of Practical Work and complete a formal written report. You’ll generally undertake your Practical Work throughout the summer breaks at the end of Parts II and III."
        />
      ),
    },
    {
      name: "ELECTENG722",
      content: (
        <BasicContent
          title="ELECTENG722 - Modern Control Systems"
          text="State space analysis, relationship to transfer function methods, controllability and observability, multivariable plant. Computer simulation. Stability considerations. State variable feedback. Digital control system, design and realisation of digital controllers, adaptive controllers. Nonlinear systems, phase-plane and describing function techniques, Lyapunov's method of stability analysis, design of controllers for non-linear systems. Variable structure systems."
        />
      ),
    },
    {
      name: "COMPSYS700",
      content: (
        <BasicContent
          title="COMPSYS700 - Part IV Project - Project 101: Data visualisation framework for streaming time series sensor data"
          text="The advanced Internet of Things (IoT) technologies enable large-scale, geographically distributed sensor deployments and data collection. Tremendous amount of sensor data is collected every second, if not faster. Such data is typically not structured or semi-structured and the required back end storage, query, and processing vary depending on the applications that make use of those data, which may have different requirements. This project aims to investigate and develop a data visualisation framework that can potentially support both web-based or mobile-based applications, to view and analyse long-term, streaming time series data. A reasonable knowledge of mobile/web-based programming and cloud platforms is helpful."
        />
      ),
    },
    {
      name: "ENGGEN403",
      content: (
        <BasicContent
          title="ENGGEN403 - Managing a Business"
          text="An introduction to the commercial drivers and business practices which prepare students for successful roles in the commercial, government, and non-profit sectors after graduation. Students are presented with a systems thinking approach to managing large, complex, multidisciplinary challenges. Professional issues (such as health and safety, sustainability, resilience, ethics, leadership, and cultural diversity) from previous courses are expanded."
        />
      ),
    },
    {
      name: "COMPSYS725",
      content: (
        <BasicContent
          title="COMPSYS725 - Distributed Cyber-Physical Systems Design"
          text="Network layers and protocols. Packet switching. Broadband network principles. Low versus high bandwidth services. Network interfaces and instrumentation. Wireless networks in embedded applications. Industrial networking."
        />
      ),
    },
    {
      name: "COMPSYS704",
      content: (
        <BasicContent
          title="COMPSYS704 - Advanced Embedded Systems"
          text="Selected advanced topics from current research in embedded systems such as: embedded systems based on formal models of computation; centralised and distributed architectures for embedded systems; static and dynamic embedded systems; languages and frameworks for distributed embedded systems; actor and agent systems; verification. Includes a significant individual research project.
        "
        />
      ),
    },
  ],
};

const optionsAndContentsMain: OptionsAndContents = {
  options: [
    {
      name: "PART IV",
      content: (
        <SelectAndDisplay
          optionsMinWidth="150px"
          optionsAndContents={optionsAndContentsPart4}
          key={4}
        />
      ),
    },
    {
      name: "PART III",
      content: (
        <SelectAndDisplay
          optionsMinWidth="150px"
          optionsAndContents={optionsAndContentsPart3}
          key={3}
        />
      ),
    },
    {
      name: "PART II",
      content: (
        <SelectAndDisplay
          optionsMinWidth="150px"
          optionsAndContents={optionsAndContentsPart2}
          key={2}
        />
      ),
    },
    {
      name: "PART I",
      content: (
        <SelectAndDisplay
          optionsMinWidth="150px"
          optionsAndContents={optionsAndContentsPart1}
          key={1}
        />
      ),
    },
  ],
};

const Education: FC = () => {
  return (
    <MainDiv id="education">
      <Container>
        <SectionTitle number={3} title="Education" />
        <SubTitle>
          The University of Auckland - Computer Systems Engineering (Honors)
        </SubTitle>
        <p>
          The phenomenal pace of change in this field makes it impossible to
          provide a lasting professional education based on technology alone; a
          Bachelor of Engineering (Honours) in Computer Systems Engineering is
          therefore geared to provide core skills and theoretical knowledge
          needed for a future-proofed approach
        </p>
        <SelectAndDisplay
          optionsAndContents={optionsAndContentsMain}
          optionsMinWidth="150px"
        />
      </Container>
    </MainDiv>
  );
};

export default Education;
