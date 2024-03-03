import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UIContext } from './ContextAPI/UIContext.jsx'
import { ProjectContext } from './ContextAPI/ProjectContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <UIContext>
              <ProjectContext>
                  <App />
              </ProjectContext>
          </UIContext>
      </BrowserRouter>
  </React.StrictMode>
)
