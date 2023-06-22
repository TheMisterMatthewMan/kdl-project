export default function Bio(props:{title:string, paragraph: string}){

    const container = {
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1rem'
    }

    const heading = {
        fontSize: '3rem',
        fontWeight: '600',
    }

    return(
        <div style ={container}>
            <h1 style={heading}>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    )
}