import './Background.css'
import video1 from '../Assets/video1.mp4'


const Background = ({ playStatus}) => {
    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
}

export default Background