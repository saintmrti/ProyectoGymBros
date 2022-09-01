import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Cart/CartContext'

const SaveWidget = () => {
  
  const {count} = useContext(myContext)

  return (
    <>
      <button className='lg:flex hidden'>
        <Link to={"/cart"}><i className={count > 0 ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'} style={{fontSize: 30}}>{count > 0 ? count : ''}</i></Link>
      </button>
    </>
  )
}

export default SaveWidget