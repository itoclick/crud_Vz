import React, { useContext } from 'react';
import PlansContext from '../context/PlansContext';

export default function Filds() {
  const {
    data,
    noPlan,
    setnoPlan,
    withPlan,
    setwithPlan,
    posibleDestin,
    setPosibleDestin,
    chPlan,
    setchPlan,
    minuts,
    setMinuts,
    tax,
    setTax,
  } = useContext(PlansContext);
  const clickCalc = () => {
    const numchPlan = Number(chPlan);
    const numminuts = Number(minuts);
    const numtax = Number(tax);

    if (numminuts <= numchPlan) {
      setwithPlan(0);
      setnoPlan((numminuts * numtax));
    }
    else if (numminuts > numchPlan) {
      setwithPlan((numminuts - numchPlan) * numtax + (numtax * 0.1));
      setnoPlan(numminuts * numtax)
    }
  };


  return (
    <main className="main">
      <h1 id="topo">Calcule o Valor do Seu Plano</h1>
      <form className="calcarea">
        <div className="internal_form" >

          <div>
            <label>Escolha um plano:</label>
            <select name="plans" id="plans" onChange={(e) => setchPlan(e.target.value)}>
              <option value=""> --Selecione um Plano-- </option>
              {
                Object.entries(data.plans).map(
                  (e) => <option value={e[1]} key={e[1]}>{`Fale mais ${e[1]}`}</option>
                )
              }
            </select>
          </div>
          <div>

            <label>Origem:</label>
            <select name="origin" id="origin" onChange={(e) => setPosibleDestin(data.ddds[e.target.value])}>
              <option value=""> --De Onde-- </option>
              {Object.keys(data.ddds).map(
                (code, i) => <option value={code} key={i}> {`DDD: ${code} `}</option>
              )
              }
            </select>
          </div>
          <div>
            <label>Destino:</label>
            <select name="destin" id="destin" onChange={(e) => setTax(e.target.value)} >
              <option value=""> --Para Onde-- </option>
              {Object.entries(posibleDestin).map(
                (destin, i) => <option value={destin[1]} key={i}>{destin[0]}</option>
              )
              }
            </select>
          </div>
          <div>
            <label>Minutos:</label>
            <input name="minuts" value={minuts} placeholder="--Minutos de Ligação--" type="number" onChange={
              (e) => e.target.value < 0 ? setMinuts(0) : setMinuts(e.target.value)
            }
            />
          </div>
        </ div>
        <button type="button" onClick={clickCalc} id="btncalc">Calcular</button>
        <div className="valores">
          <div className="plan">
            <h1>{`Com o Fale mais  R$ ${parseFloat(withPlan).toFixed(2)}`}</h1>
          </div>
          <div className="noplan"><h1>{`Sem o Fale Mais  R$ ${parseFloat(noPlan).toFixed(2)}`}</h1></div>
        </div>

      </form>
    </main>

  )
}
