
import './App.css'

import { ContextProvider} from './contexts/ContextForm'

import CardContainer from './components/CardContainer'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Form />
        <CardContainer>
        </CardContainer>
      </div>
    </ContextProvider>
  )
}

export default App
