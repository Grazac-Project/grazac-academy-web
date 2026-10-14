import { judgesData } from './constants'

const LandingJudges = () => {
  return (
    <section className="landingmentors">
      <div className="landingmentors-container">
        <h3 className="landingmentors-container-head">Our Judges help us maintain global standard</h3>
        <p className="landingmentors-container-text">
            We work with high profile talents globally to help you define what “excellence” means
        </p>
        <div className="landingmentors-container-main">
          {judgesData.map((judge, i) => (
            <div className="mentor" key={i}>
              <img src={judge.image} alt={judge.name} />
              <h4 className="mentor-name">{judge.name}</h4>
              <p className="stack">{judge.role}</p>
              <p className="company">{judge.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingJudges