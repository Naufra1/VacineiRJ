import axios from "axios";
import { useEffect, useState } from "react";

function AboutTxt() {
  const [aboutText, setAboutText] = useState();
  const url = "http://localhost:3000/about";

  axios.get(url).then((resp) => {
    setAboutText(`${resp.data.about.text}`);
  });

  return <p>{aboutText}</p>;
}

export default AboutTxt;
