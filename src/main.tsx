import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KnowledgeBaseProvider } from './context/KnowledgeBaseContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KnowledgeBaseProvider>
      <App />
    </KnowledgeBaseProvider>
  </StrictMode>,
)
