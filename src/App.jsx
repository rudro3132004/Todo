import TopBar from './Components/TopBar'
import MainBox from './Pages/MainBox'
import CreateBy from './Components/CreatedBy'

export default function App() {
  return (
    <div className='relative'>
      <CreateBy/>
      <TopBar/>
      <MainBox/>
    </div>
  )
}
