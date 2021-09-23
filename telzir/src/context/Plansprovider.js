import React, { useState }  from "react";
import PlansContext from "./PlansContext";
import PropTypes from 'prop-types';



function PlansProvider({ children }) {
  const [data, setdata ]= useState(require('./Informations.json'));
  const [withPlan, setwithPlan] = useState(0.0);
  const [noPlan, setnoPlan] = useState(0.0);
  const [posibleDestin, setPosibleDestin] = useState({});
  const [chPlan, setchPlan] = useState('');
  const [minuts, setMinuts] = useState(0);
  const [tax, setTax] = useState(0);
  return(
    <PlansContext.Provider
      value= { 
        {
          data,
          setdata, 
          withPlan,
          setwithPlan,
          noPlan,
          setnoPlan,
          posibleDestin,
          setPosibleDestin,
          chPlan,
          setchPlan,
          minuts,
          setMinuts,
          tax,
          setTax,
        } 
      }
    >
      { children }
    </ PlansContext.Provider>
  );

}

PlansProvider.propTypes = {
  children: PropTypes.arrayOf([
    PropTypes.arrayOf(PropTypes.node),
    ]).isRequired
};
   

export default PlansProvider;