import SideBar from './components/layout/sideBar'
import AppRouters from './routers/appRouters'

import './App.css'

function App() {

  return (
    <div style={{ overflow: 'hidden' }} className='flex justify-start items-baseline w-full border border-black border-2'>
      <div className='flex-shrink-0'>
        <SideBar />
      </div>
      <AppRouters />
    </div>
  )
}

export default App
