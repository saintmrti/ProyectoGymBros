import { Link } from 'react-router-dom'

const SaveWidget = () => {
  return (
    <button className='lg:flex hidden'>
        <Link to={"/welcome"}><i className='bi bi-bookmark' style={{fontSize: 30}}></i></Link>
    </button>
  )
}

export default SaveWidget