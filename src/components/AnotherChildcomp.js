import { useState } from 'react';

const AnotherChildcomp = ({  handleClickInc, handleClickDec }) => {
  // let str = "Data from Another Child"
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const incCount = count + 1;
    setCount(incCount);
    handleClickInc(incCount);
  };

  const handleDecrement = () => {
   const decCount = count - 1;
    setCount(decCount);
    handleClickDec(decCount);
  };
  return (
    <div>
      {/*
      <h2>This is a another child component</h2>
      {parentToChild}

      <h3>Passing data from child to parent</h3>
  <button onClick={()=>childToParent(str)}>Click child</button> */}
      
      <h2>Welcome to Counter Application</h2>
      <button onClick={handleIncrement}>Inc</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
};

export default AnotherChildcomp;
