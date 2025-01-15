import Link from 'next/link'
import './main.modules.css'

const Main = () => {
  return (
    <div class="container">
        <div class="heading">Pratice Exam MCQ </div>
        <div class="subheading"> for all compitative exams </div>
        <div class="subheading">Learning ecosystem for focused & disciplined preparation</div>
        
      
        <Link href={'/dashboard'}>
      <p className='start-btn'>Start Now  <span className='note'>it's  FREE</span></p>
        </Link>
       
        
        
    </div>
  )
}

export default Main