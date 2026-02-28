import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Apis from './api/api.tsx'
import Tools from './tools/tools.tsx'
import Login from './login/login.tsx'
import AiAssistant from './ai-assistant/ai_assistant.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/apis" element={<Apis />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
