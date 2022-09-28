import { useEffect, useState } from "react";

interface Props {
  valueStart:number;
  valueEnd:number;
  children: (value:number) => JSX.Element;
}

const CustomProgress = ({ valueStart, valueEnd, children }:Props) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default CustomProgress;
