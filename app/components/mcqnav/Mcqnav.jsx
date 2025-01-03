import Link from 'next/link'
import './mcqnav.modules.css'

const Mcqnav = () => {
  return (
    <div className='mcqnav'>
       <div className="brand-container">
        <img className=" logo" src="./logo.png" alt="mcq-pratice-logo" />
        <span className="brand-name">MCQHub</span>
      </div>
      <div className='mcqnav-links'>
      <Link href={'/'}>Home</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      </div>
    </div>
  )
}

export default Mcqnav