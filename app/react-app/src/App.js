import React, { Component } from 'react';
import './App.css';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="header">
            <div className="headerText">Dashboard</div>
          </div>
          <div className="main">
            <div className="middlecontainer">
              <div className="panelheader">
                Mobile Recharge
              </div>
              {/*}<div class="formcontainer">
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
              </div>*/}
              <div className="form-grid-container">
                <div className="form-grid-item formlabel">Phone No.</div>
                <div className="form-grid-item forminput"><InputText /></div>
                <div className="form-grid-item formlabel">Operator</div>
                <div className="form-grid-item forminput"><InputText /></div>
                <div className="form-grid-item formlabel">Amount</div>
                <div className="form-grid-item forminput"><InputText /></div>
              </div>
              <div><Button label="Submit" icon="pi pi-check" iconPos="right"/></div>
            </div>
          </div>
          <div className="right">
            <div className="middlecontainer">
              <div className="panelheader">
                My Account
              </div>
              <TabView activeIndex={0}>
                <TabPanel header="Offers">
                    Content I
                </TabPanel>
                <TabPanel header="History">
                    Content II
                </TabPanel>
              </TabView>
            </div>
          </div>
          <div className="footer">
            <div className="footercontainer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
