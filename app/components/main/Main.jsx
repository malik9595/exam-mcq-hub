import Link from 'next/link'
import './main.modules.css'

const Main = () => {
  return (
    <div className='main-container'>
        <p className='text-1'>Pratice MCQs</p>
        <p className='text-2'>With Previous Years Questions</p>
        <p className=''>For different competative exams such as Ssc, Upsc, Banking etc. Its 100% free platform</p>
        <Link href={'/dashboard'}>
        <p className='start-btn'>Start Now  <span>it's  FREE</span></p>
        </Link>
        
        
    </div>
  )
}

export default Main