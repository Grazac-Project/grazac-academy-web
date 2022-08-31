import PurpleSvg from './purple-badge.svg'
import Transparent from './gray-badge.svg'


import './styles.css'


const LearningProgress = () => {
  return (
    <div className="progress__card">
      <h2 className='progress__card-heading'>
        Learning Process
      </h2>

      <div className="progress__card-badges">
        <img src={PurpleSvg} alt="badge" />
        <img src={PurpleSvg} alt="badge" />
        <img src={Transparent} alt="badge" />
        <img src={Transparent} alt="badge" />
      </div>

      <span className="progress__card-badges-earned">2 Badges Earned</span>
    </div>
  )
}

export default LearningProgress