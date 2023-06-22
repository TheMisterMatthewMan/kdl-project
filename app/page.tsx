import Image from 'next/image'

export default function Home() {

  const container = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1rem'
  }

  const wrapper = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const subContainer = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    padding: '1rem'
  }

  const heading = {
    fontSize: '3rem',
    fontWeight: '600'
  }

  return (
    <div style= {container}>
      <div style= {wrapper}>
        <div className="image">
          <img height='200px' width='200px' src="/profile.webp"></img>
        </div>
        <div style= {subContainer}>
          <h1 style= {heading}>Hi, my name is Matthew</h1>
          <p>I am a student at EIS.</p>
          <p>I am taking web design classes at Kiddee Lab.</p>
        </div>
      </div>
    </div>
  )
}
