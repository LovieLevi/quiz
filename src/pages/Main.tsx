import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

const QuizzesList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/quizzes/index.json")
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

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="quizzesList">
          <ul>
            {data.map((quiz: any) => (
              <center>
                <li
                  key={quiz.id}
                  onClick={() => {
                    window.location.href =
                      "/quiz?name=" + quiz.name + "&path=" + quiz.path;
                  }}
                >
                  {quiz.name}
                </li>
              </center>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export const Main = () => {
  return (
    <>
      <h1>Quizzes</h1>
      <center>
        <h2>Available quizzes:</h2>
      </center>
      <QuizzesList />
    </>
  );
};
