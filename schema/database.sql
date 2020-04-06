--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Debian 12.2-2.pgdg100+1)
-- Dumped by pg_dump version 12.2 (Debian 12.2-2.pgdg100+1)

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
-- Name: submission; Type: TABLE; Schema: public; Owner: dbhs2020
--

CREATE TABLE public.submission (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at timestamp without time zone,
    lat real,
    lng real,
    entered_at timestamp without time zone,
    exited_at timestamp without time zone,
    people_contacted smallint,
    touched_objects text,
    transacted_objects text
);


ALTER TABLE public.submission OWNER TO dbhs2020;

--
-- Name: submission_id_seq; Type: SEQUENCE; Schema: public; Owner: dbhs2020
--

CREATE SEQUENCE public.submission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.submission_id_seq OWNER TO dbhs2020;

--
-- Name: submission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbhs2020
--

ALTER SEQUENCE public.submission_id_seq OWNED BY public.submission.id;


--
-- Name: submission id; Type: DEFAULT; Schema: public; Owner: dbhs2020
--

ALTER TABLE ONLY public.submission ALTER COLUMN id SET DEFAULT nextval('public.submission_id_seq'::regclass);


--
-- Name: submission submission_pkey; Type: CONSTRAINT; Schema: public; Owner: dbhs2020
--

ALTER TABLE ONLY public.submission
    ADD CONSTRAINT submission_pkey PRIMARY KEY (id);


--
-- Name: submission_entered_at_exited_at_lat_lng_idx; Type: INDEX; Schema: public; Owner: dbhs2020
--

CREATE INDEX submission_entered_at_exited_at_lat_lng_idx ON public.submission USING btree (entered_at, exited_at, lat, lng);


--
-- PostgreSQL database dump complete
--
