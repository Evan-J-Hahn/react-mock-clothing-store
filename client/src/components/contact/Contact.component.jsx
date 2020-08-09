import React from 'react'
import './Contact.styles.scss'

const Contact = () => {
	return (
		<div className='contact-form'>
			<h1>Leave us a message!</h1>
			<form>
				<div className='contact-row'>
					<label for='contact-name'>Name</label>
					<input id='contact-name' type='text' name='Name' />
				</div>

				<div className='contact-row'>
					<label for='contact-name'>Email</label>
					<input id='contact-name' type='email' name='Email' />
				</div>

				<div className='contact-row'>
					<label for='contact-message'>Message</label>
					<textarea id='contact-message' name='Message'></textarea>
				</div>

				<input class='form-button' type='submit' value='Submit' />
			</form>
		</div>
	)
}

export default Contact
