--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sem1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem1 (
    id character varying(255) NOT NULL,
    applied_mathematics smallint,
    applied_physics smallint,
    manufacturing_processes smallint,
    electrical_technology smallint,
    human_values_and_professional_ethics smallint,
    fundamentals_of_computing smallint,
    applied_chemistry smallint
);


ALTER TABLE public.sem1 OWNER TO postgres;

--
-- Name: sem2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem2 (
    id character varying(255) NOT NULL,
    applied_mathematics smallint,
    applied_physics smallint,
    electronic_devices smallint,
    introduction_to_programming smallint,
    engineering_mechanics smallint,
    communication_skills smallint,
    environmental_studies smallint
);


ALTER TABLE public.sem2 OWNER TO postgres;

--
-- Name: sem3; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem3 (
    id character varying(255) NOT NULL,
    applied_mathematics smallint,
    foundation_of_computer_science smallint,
    switching_theory_and_logic_design smallint,
    circuits_and_system smallint,
    data_structure smallint,
    computer_graphics_and_multimedia smallint
);


ALTER TABLE public.sem3 OWNER TO postgres;

--
-- Name: sem4; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem4 (
    id character varying(255) NOT NULL,
    applied_mathematics smallint,
    computer_organization_and_architecture smallint,
    theory_of_computation smallint,
    database_management_systems smallint,
    object_oriented_programming smallint,
    communication_systems smallint
);


ALTER TABLE public.sem4 OWNER TO postgres;

--
-- Name: sem5; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem5 (
    id character varying(255) NOT NULL,
    algorithms_design_and_analysis smallint,
    software_engineering smallint,
    java_programming smallint,
    industrial_management smallint,
    digital_communication smallint,
    communication_skills_for_professionals smallint
);


ALTER TABLE public.sem5 OWNER TO postgres;

--
-- Name: sem6; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem6 (
    id character varying(255) NOT NULL,
    compiler_design smallint,
    operating_systems smallint,
    computer_networks smallint,
    web_technology smallint,
    artificial_intelligence smallint,
    microprocessor_and_microcontroller smallint
);


ALTER TABLE public.sem6 OWNER TO postgres;

--
-- Name: sem7; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem7 (
    id character varying(255) NOT NULL,
    information_security smallint,
    software_testing_and_quality_assurance smallint,
    wireless_communication smallint
);


ALTER TABLE public.sem7 OWNER TO postgres;

--
-- Name: sem8; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sem8 (
    id character varying(255) NOT NULL,
    mobile_computing smallint,
    machine_learning smallint,
    human_values_and_professional_ethics smallint
);


ALTER TABLE public.sem8 OWNER TO postgres;

--
-- Name: semester_lists; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.semester_lists (
    id character varying(255),
    semester character varying(5)
);


ALTER TABLE public.semester_lists OWNER TO postgres;

--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id character varying(255) NOT NULL,
    name character varying(255),
    branch character varying(30) NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id character varying(255) NOT NULL,
    name character varying(255),
    subject character varying(255)
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: gnituser
--

CREATE TABLE public.users (
    id character varying(255) NOT NULL,
    role character varying(20) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO gnituser;

--
-- Data for Name: sem1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem1 (id, applied_mathematics, applied_physics, manufacturing_processes, electrical_technology, human_values_and_professional_ethics, fundamentals_of_computing, applied_chemistry) FROM stdin;
IPUTEST778	80	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: sem2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem2 (id, applied_mathematics, applied_physics, electronic_devices, introduction_to_programming, engineering_mechanics, communication_skills, environmental_studies) FROM stdin;
\.


--
-- Data for Name: sem3; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem3 (id, applied_mathematics, foundation_of_computer_science, switching_theory_and_logic_design, circuits_and_system, data_structure, computer_graphics_and_multimedia) FROM stdin;
\.


--
-- Data for Name: sem4; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem4 (id, applied_mathematics, computer_organization_and_architecture, theory_of_computation, database_management_systems, object_oriented_programming, communication_systems) FROM stdin;
IPUTEST999	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: sem5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem5 (id, algorithms_design_and_analysis, software_engineering, java_programming, industrial_management, digital_communication, communication_skills_for_professionals) FROM stdin;
\.


--
-- Data for Name: sem6; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem6 (id, compiler_design, operating_systems, computer_networks, web_technology, artificial_intelligence, microprocessor_and_microcontroller) FROM stdin;
IPUTEST608	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: sem7; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem7 (id, information_security, software_testing_and_quality_assurance, wireless_communication) FROM stdin;
\.


--
-- Data for Name: sem8; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sem8 (id, mobile_computing, machine_learning, human_values_and_professional_ethics) FROM stdin;
IPUTEST500	\N	\N	\N
\.


--
-- Data for Name: semester_lists; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.semester_lists (id, semester) FROM stdin;
IPUTEST778	sem1
IPUTEST608	sem6
IPUTEST500	sem8
IPUTEST999	sem4
IPUTEST779	sem1
IPUTEST100	sem7
IPUTEST120	sem5
IPUTEST550	sem3
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (id, name, branch) FROM stdin;
IPUTEST778	xyz	CSE
IPUTEST608	Prem Chand	ME
IPUTEST500	Kum Lal	IT
IPUTEST999	Aksh Bhatia	CSE
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teachers (id, name, subject) FROM stdin;
IPUTEST779	xyz	applied_mathematics
IPUTEST100	A	information_security
IPUTEST120	ABC	industrial_management
IPUTEST550	Gaurav	circuits_and_system
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gnituser
--

COPY public.users (id, role, password) FROM stdin;
GNIT1111	ADMIN	8472a8dccac97c4c3cd772714a1ba364d870e8c29ac9943527cd77df8064f320
IPUTEST778	student	79c687dc2ff07ddd69146f1765f147ca7399f3688ec522b5da3a723c18bf08fe
IPUTEST608	student	9bef3d8e2e41b07725b199b5f9f427e46cdc6f44e8e9e14fdc373ecffdb98fa2
IPUTEST500	student	4557c79b3c282f9412fb89c57cb13b974c04826abd12af38c033508c15b4d0db
IPUTEST999	student	5905f00fa8a64a550c72ee482d26d1b8ebba54e19db977c7f721edba4836ae18
IPUTEST779	teacher	048fb802f5161fdc8a8edbe01307c65bf55dd0bc33fab1dcc87669f2f400af7e
IPUTEST100	teacher	97073d52632d8d521982f6ff0dd2203ed6b904fbe75b3ae428bf092d5f47a4ff
IPUTEST120	teacher	8fa7b6e2a7abe89fbe8ab7879a0ce30de725718088a1761b90dd01b04eba9630
IPUTEST550	teacher	41a83e7d82f627b2611123ef2241641251422f8c9d78247ddd711b362649347e
\.


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gnituser
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: TABLE sem1; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem1 TO gnituser;


--
-- Name: TABLE sem2; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem2 TO gnituser;


--
-- Name: TABLE sem3; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem3 TO gnituser;


--
-- Name: TABLE sem4; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem4 TO gnituser;


--
-- Name: TABLE sem5; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem5 TO gnituser;


--
-- Name: TABLE sem6; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem6 TO gnituser;


--
-- Name: TABLE sem7; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem7 TO gnituser;


--
-- Name: TABLE sem8; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.sem8 TO gnituser;


--
-- Name: TABLE semester_lists; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.semester_lists TO gnituser;


--
-- Name: TABLE students; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.students TO gnituser;


--
-- Name: TABLE teachers; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.teachers TO gnituser;


--
-- PostgreSQL database dump complete
--

