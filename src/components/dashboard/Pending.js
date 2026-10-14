function Pending ({fname}) {
    return(
        <div>
            <h3>Hello {fname}</h3>
            <p className="text1">Thanks for applying to Grazac Academy!</p>
            <p>Your application has been received and pending approval. We will be in touch with you soon.</p>
            <a id="contact-support" href="https://api.whatsapp.com/send?phone=2348068365951&text=Hello%2C%20my%20application%20is%20showing%20pending%20on%20my%20Grazac%20Academy%20dashboard." target="_blank" rel="noreferrer"><button>Contact Support</button></a>
        </div>
    )
}

export default Pending;