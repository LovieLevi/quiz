import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./style.scss";

export const Quiz = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const path = queryParams.get("path");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/quizzes/" + path)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setData(data);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const checkAnswers = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.getAll("0"));
  }

  return (
    <>
      <h1>The {name} quiz</h1>
      <Form onSubmit={checkAnswers}>
        {data.map((question: any, index: any) => {
          return (
            <Form.Group key={index} controlId={`question${index}`} style={{marginBottom: "25px"}}>
              <Form.Label>{question.question}</Form.Label>
              {question.options.map((option: any, id: any) => {
                return (
                  <Form.Check
                    key={id}
                    type="radio"
                    name={`${index}`}
                    id={`${index}-${id}`}
                    label={`${option}`}
                    value={id}
                  />
                );
              })}
            </Form.Group>
          );
        })}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
