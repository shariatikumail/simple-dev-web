import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './login/login.tsx'
import AiAssistant from './ai-assistant/ai_assistant.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
