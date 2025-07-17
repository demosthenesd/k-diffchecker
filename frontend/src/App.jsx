import React, { useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

function App() {
  const [oldCode, setOldCode] = useState(``);
  const [newCode, setNewCode] = useState(``);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>K-Diff Checker</h2>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <textarea
          style={{ width: '50%', height: '30vh' }}
          value={oldCode}
          onChange={(e) => setOldCode(e.target.value)}
          placeholder="Left block"
        />
        <textarea
          style={{ width: '50%', height: '30vh' }}
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          placeholder="Right block"
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <ReactDiffViewer
          oldValue={oldCode}
          newValue={newCode}
          splitView={true}
          showDiffOnly={false}
        />
      </div>
    </div>
  );
}

export default App;
