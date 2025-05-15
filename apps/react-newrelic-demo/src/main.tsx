import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BrowserAgent } from '@newrelic/browser-agent';

import App from './app/app';

const options = {
  init: { distributed_tracing: { enabled: true }, privacy: { cookies_enabled: true }, ajax: { deny_list: ["bam.nr-data.net"] } },
  info: { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net", licenseKey: "NRJS-817193fec37bece95b8", applicationID: "1103412326", sa: 1 },
  loader_config: { accountID: "6739418", trustKey: "6739418", agentID: "1103412326", licenseKey: "NRJS-817193fec37bece95b8", applicationID: "1103412326" }
}

new BrowserAgent(options);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </StrictMode >
);
