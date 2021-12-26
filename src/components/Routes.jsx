import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import Results from './Results'

const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/search' element={<Results />}></Route>
        <Route path='/images' element={<Results />}></Route>
        <Route path='/news' element={<Results />}></Route>
        <Route path='/videos' element={<Results />}></Route>
      </Switch>
    </div>
  )
}

export default Routes
