import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Layout from './components/Layout'
import { ModalProvider } from './context/ModalProvider.jsx'
import { WeatherProvider } from './context/WeatherProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<WeatherProvider>
			<ModalProvider>
				<Layout>
					<App />
				</Layout>
			</ModalProvider>
		</WeatherProvider>
	</StrictMode>
)
