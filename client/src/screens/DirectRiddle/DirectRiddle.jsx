import "./DirectRiddle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneRiddle } from "../../services/riddles";

function DirectRiddle(props) {
  const [riddleQuestion, setRiddleQuestion] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleRiddle = async () => {
      const riddleData = await getOneRiddle(id);
      // console.log(riddleData);
      setRiddleQuestion(riddleData);
    };
    fetchSingleRiddle();
  }, [id]);

  console.log(riddleQuestion);

  return (
    <>
      <div>
        <div>
          <h1 className="DirectRiddleQuestion">{riddleQuestion?.question}</h1>
        </div>
      </div>
    </>
  );
}

export default DirectRiddle;
