import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import "./exercise.css";
import { useLocation } from "react-router";
import { useEffect } from "react";

function Exercise() {
  const location = useLocation();
  const { info } = location.state;
  const [usercode, setUsercode] = useState("");
  const [show, setShow] = useState(false);
  const executeCode = () => {
    setShow(true);
    setTimeout(function () {
      setShow(false);
    }, 5000);
  };
  console.log(info);

  return (
    <div className="bodyofexercise">
      <div className="exerciseflex">
        <div className="editor">
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={info.startfunc}
            onChange={(e) => setUsercode(e)}
          />
        </div>
        <div className="questionexercise">
          <h1>{info.exercisename}</h1>
          <br />
          <p>{info.question}</p>
          <br />
          <div>
            <table className="tableexercise">
              <tr>
                <th>input:</th>
                <th>output:</th>
              </tr>
              <tr>
                <td>{info.examples[0]?.input}</td>
                <td>{info.examples[0]?.output}</td>
              </tr>
              <tr>
                <td>{info.examples[1]?.input}</td>
                <td>{info.examples[1]?.output}</td>
              </tr>
              <tr>
                <td>{info.examples[2]?.input}</td>
                <td>{info.examples[2]?.output}</td>
              </tr>
            </table>
          </div>
          <br />
          <p>
            notice output is a string sometimes you will need to return array
            like this $&#123;"array"&#125;
          </p>
        </div>
      </div>
      <div className="exerciseflex">
        <button onClick={executeCode} className="buttonexercise">
          check
        </button>
      </div>
      {show && (
        <div>
          <iframe
            title="output"
            sandbox="allow-scripts"
            frameBorder={0}
            width={500}
            height={100}
            srcDoc={`
            <html><body><h1 id="myFrame">"keep trying"</h1></body>
          <script>
          ${usercode}
          if(${info.examples[0]?.input}==${info.examples[0]?.output}){
            if(${info.examples[1]?.input}==${info.examples[1]?.output}){
              if(${info.examples[2]?.input}==${info.examples[2]?.output}){
            document.querySelector("h1").innerText="nice work go on"
              }
            }
          }
          </script></html>`}
          />
        </div>
      )}

      <div className="textcardexercise">
        {info.hints.map((item) => (
          <div className="bookexercise">
            <p className="pofcard">{item}</p>
            <div className="coverexercise">
              <p className="pofcard">Hover Me for hint</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
