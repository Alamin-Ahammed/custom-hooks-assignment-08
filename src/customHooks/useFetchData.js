import { useEffect, useState } from "react";

export const useFetchData = (url, maxItemToRetun, startIndex = 0) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  if (typeof maxItemToRetun === "number" && maxItemToRetun <= data.length - 1) {
    if (startIndex === 0) {
      const slicedData = data.slice(0, maxItemToRetun);
      setData(slicedData);
    }else{
        const slicedData = data.slice(startIndex,maxItemToRetun);
        setData(slicedData)
    }
  }

  return { data };
};
