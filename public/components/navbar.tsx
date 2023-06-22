import Link from 'next/link'

export default function Navbar() {
const container = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    aligntItems: 'center',
    padding: '1rem',
    backgroundColor: '#242424',
    color: 'white'
}

const links = {
    display: "flex",
    flexDireciton: 'row',
    columnGap: '1rem'
}
    return (

        <div style={container}>        
            <div>
                <h1 className='text-5xl'>Matthew</h1>
            </div>
            <div style={links}>
                <Link href='/'>Home</Link>
                <Link href='/bio'>Bio</Link>
                <Link href='/contact'>Contact</Link>
            </div>

        </div >
    )
}