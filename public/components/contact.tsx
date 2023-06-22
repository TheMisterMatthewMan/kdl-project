export default function Contact(props:{email: string, mobile: string}){
    
    const container = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: '1rem'
    }
    const heading = {
        fontSize: '3rem',
        fontWeight: '600',
    }

    const paragraph = {
        fontSize: '2rem'
    }

    const map = {
        height: "450px",
        width: "100%",
        borderRadius: '10px'
    }

    return(
        <div style= {container}>
            <h1 style= {heading}>Hit me up if you're interested!</h1>
            <p style= {paragraph}>Email: {props.email}</p>
            <p style= {paragraph}>Mobile: {props.mobile}</p>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0160571553!2d100.62146267428206!3d13.656787099487822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f591c6f0a67%3A0xdf5b1c85d6bd5b7c!2sKiddee%20Lab!5e0!3m2!1sen!2sth!4v1687414725004!5m2!1sen!2sth" style={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}