import { useEffect, useState } from "react";
import { ContextMenu } from "./components/ContextMenu";
import './app.css'
import { useContextMenu } from "./hooks/useContextMenu";

function App() {

  const { contextMenuHandler, contextMenuPosition, isShowContextMenu } = useContextMenu();

  return (
    <div onContextMenu={contextMenuHandler} className="App">
      <div className="explain">
        <h2>Open context menu</h2>
        <p>right mouse click on computer or hold touch in mobile</p>
      </div>

      <ContextMenu
        position={contextMenuPosition}
        isShowContextMenu={isShowContextMenu}
      >
        <div className="menu-item">first</div>
        <div className="menu-item">second</div>
        <div className="menu-item">third</div>
        <div className="menu-item">fourth</div>
      </ContextMenu>
    </div >
  );
}

export default App;
