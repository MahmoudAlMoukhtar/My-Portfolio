import database from "../firebase/firebase";
import {useEffect, useState} from "react";

const useFetch = url => {
  const [data, setData] = useState([]);
  useEffect(() => {
    database
      .ref(url)
      .once("value")
      .then(snapshot => {
        const data = [];
        snapshot.forEach(childSnapshot => {
          data.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        setData(data);
      });
  }, []);
  return {data};
};

export default useFetch;
