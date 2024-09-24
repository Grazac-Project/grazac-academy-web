function Pending ({fname}) {
    return(
        <div>
            <h3>Hello {fname}</h3>
            <p className="text1">Thanks for applying to Grazac Academy!</p>
            <p>Your application has been submitted successfully and currently pending approval. Kindly contact our support team to move to the next stage</p>
            <a id="contact-support" href="https://api.whatsapp.com/send?phone=2348068365951&text=Hello%2C%20my%20application%20is%20showing%20pending%20on%20my%20Grazac%20Academy%20dashboard." target="_blank"><button>Contact Support</button></a>
        </div>
    )
}

export default Pending;