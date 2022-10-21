import { ContactList } from './components/ContactList'

function App() {

  return (
    <div className="container mx-auto mt-10 px-4 font-sans">
      <div className='mb-5'>
        <h1 className='text-5xl text-slate-700'>Contactos</h1>
      </div>

      <ContactList />

    </div>
  )
}

export default App
