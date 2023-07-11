import { useState } from 'react';
import ChildComp from './ChildComp';
import AnotherChildcomp from './AnotherChildcomp';
// import AnotherChildcomp from './AnotherChildcomp';

const ParentComp = () => {
  // const [data, setData] = useState('');
  // const [data1, setData1] = useState('');

  const [countVal, setCountVal] = useState(' ');

  /*const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
    console.log("parent func called");
  }; */
/*
  const childToParent = (childData) => {
    console.log("child func called");
    setData1(childData);
    alert("Child data called")
  } */

  const handleClickInc = (incVal) => {
    console.log("Inc");
    setCountVal(incVal)
  };
  const handleClickDec = (decVal) => {
    console.log("Dec");
      
      setCountVal(decVal)
    
  }
  const stopInc = 4;
  return (
    <div>
      <h2>This is a ParentComp</h2> 
      {/* Parent to Child code */}
      {/* {data}   
       <ChildComp parentToChild={data} 
       <AnotherChildcomp parentToChild={data}/> 
       <div>
        <button onClick={parentToChild}>Click parent</button>
      </div> */}

      {/* child to parent code */}
      {/*{data1}
      <ChildComp childToParent={childToParent} /> */}

      {/* child to anotherChild code */}
      {/*<AnotherChildcomp childToParent={childToParent}/> 
      {data1} */}
      {countVal === ' ' ? 'Not yet clicked' :
        // (countVal <= stopInc ? `Clicked ${countVal} times` : `not allowed to increment above ${stopInc}`)}<br />
        (countVal <= stopInc ? (countVal < 0 ? "not allowed to negative numbers" :`Clicked ${countVal} times` ): `not allowed to increment above ${stopInc}`)}<br />
      
      <ChildComp handleClickInc={handleClickInc} handleClickDec={handleClickDec} />

      <hr />
      {countVal}
      <AnotherChildcomp handleClickInc={handleClickInc} handleClickDec={handleClickDec}/>
      
    </div> 
  )
}

export default ParentComp;