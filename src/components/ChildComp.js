import { useState } from 'react';

const ChildComp = ({ handleClickInc, handleClickDec }) => {
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
      {/* Parent to child code */}
      {/*<div>
        <h2>This is a ChildComp, passing data from parent to child</h2>
        {parentToChild}
  </div> */}
      
      {/* child to parent code */}
      {/*<div>
        <h3>Passing data from child to parent</h3>
        <button onClick={()=>childToParent(str)}>Click child</button>
        </div>*/}
      <h2>Welcome to Counter Application</h2>
      <button onClick={handleIncrement}>Inc</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
};

export default ChildComp;
