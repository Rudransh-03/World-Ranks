import HeaderImg from '../assets/hero-image-wr.jpg'
import HeaderText from '../assets/Logo.svg'
const Header = () => {
  return (
    <div className='w-full h-64 flex justify-center'>
        <img className='h-64 w-full absolute z-10' src={HeaderImg} alt='Header Image'/>
        <img className='w-64 h-full z-20' src={HeaderText}/>
    </div>
  )
}

export default Header