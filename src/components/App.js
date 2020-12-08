// import React from 'react'
import React, { PureComponent } from 'react'

import { ContractSCFX, ContractRouter, ContractFactory, ContractWATER, ContractICE } from '../lib/conflux'

import ConfluxNetwork from './ConfluxNetwork'
import ConfluxPortal from './ConfluxPortal'
import ConfluxContract from './ConfluxContract'
import TimeContent from './CountDown'

export default class App extends PureComponent {

  state = {
    activeType: 0,
    boxs: ["router","factory"],
    boxsTow: ["WATER", "ICE","SCFX"],
    contracts: [ContractRouter, ContractFactory, ContractWATER, ContractICE, ContractSCFX]
  }

  changeBox = (e) => {
    var activeType = e.target.getAttribute('data-index');
    this.setState({activeType})
  }

  render() {

    const {boxs, contracts, activeType, boxsTow} = this.state

    return (
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-md-1 mb-5 select-btn-box">
              {
                boxs.map((box, index) =>
                    <button className="blue-btn button-pill button button-glow button-border button-rounded button-primary"
                            key={index} data-index={index} onClick={this.changeBox}>{box}</button>)
              }
              {
                boxsTow.map((box, index) =>
                    <button className="white-btn button-pill button button-glow button-border button-rounded button-royal"
                            key={index} data-index={index + 2} onClick={this.changeBox}>{box}</button>)
              }
            </div>
            <div className="col-md-6 mb-3" style={{display: "none"}}>
              <ConfluxNetwork />
            </div>

            <div className="mb-2" style={{position:"absolute", top:"30px", right:"30px", width: "370px"}}>
              <ConfluxPortal />
            </div>
          </div>

          <div className="row justify-content-center">
            {
              contracts.map((contract, index) =>
                  <div className={activeType == index ? 'active col-md-5 mb-5 box jumbotron' : 'hidden'}
                  key={index}><ConfluxContract {...contract} /></div>)
            }
          </div>
          <div className="col-md-2 mb-5 countdown">
            <h3>The next tide</h3>
            <TimeContent/>

          </div>
        </div>
    )

  }

}
