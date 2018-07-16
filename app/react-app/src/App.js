import React, { Component } from 'react';
import './App.css';

import { InputText } from 'primereact/inputtext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="grid-container">
          <div class="header">
            <div class="headerText">Dashboard</div>
          </div>
          <div class="main">
            <div class="middlecontainer">
              <div class="panelheader">
                Mobile Recharge
              </div>
              <div class="formcontainer">
                <div class="inputgroup">
                  <div class='formlabel'>Phone No.</div>
                  <div class='forminput'><InputText /></div>
                </div>
                <div class="inputgroup">
                  <div class='formlabel'>Operator</div>
                  <div class='forminput'><InputText /></div>
                </div>
                <div class="inputgroup">
                  <div class='formlabel'>Amount</div>
                  <div class='forminput'><InputText /></div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="middlecontainer">
            <div class="panelheader">
              Mobile Recharge
            </div>
            <div class="formcontainer">
              <div class="inputgroup">
                <div class='formlabel'>Phone No.</div>
                <div class='forminput'><InputText /></div>
              </div>
            </div>
            </div>
          </div>
          <div class="footer">
            <div class="footercontainer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
