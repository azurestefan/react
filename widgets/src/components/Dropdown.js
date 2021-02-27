import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(); //allows direct reference to a DOM element

  useEffect(() => {
    // useref targets dropdown
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        //checks if the target DOM element is contained inside ref current component.
        return; //will return early if it is.
      }

      setOpen(false); //clicking outside the dropdown will close the dropdown.
    };

    document.body.addEventListener('click', onBodyClick); //callback to the body event listener

    //cleanup function that removes the eventlistener when the dropdown component is removed
    return () => {
      document.body.removeEventListener('click', onBodyClick); //remove the callback function onBodyClick
    };
  }, []); // only runs one time.

  //Makes current option not shown on the choice list.
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value} className='item' onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
