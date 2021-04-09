import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import $ from 'jquery';

class ContactModel extends Component {
    closeModal() {
        this.props.closeContactModel();
    }
    submitContactForm() {

        let email, message, name, phone;
        name = document.getElementById('fullname');
        email = document.getElementById('email');
        phone = document.getElementById('contact');
        message = document.getElementById('message');
        if (!name.value || !email.value || !phone.value || !message) {
           alert('Please check your entries');
            return false;
        } else {
            /*  URL has to be integrated with their account
           Steps To Follow
           https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server */
            let url = 'https://script.google.com/macros/s/AKfycbx6KkjNugaIXRIfzTlwRLn96XpPA74t1m6FiXeRKA/exec';
            let data = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            };
            $.ajax({
                method: 'POST',
                url: url,
                data: data,
                datatype: 'json'
            });
            this.closeModal();
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.show}>
                    <div className="modal-body">
                        <div className="part1">
                            <div className="side1">
                                <button type="button" onClick={this.closeModal.bind(this)}>&times;</button>
                                <div className="getInTouch">GET IN TOUCH</div>
                                <div className="addedText">We would love to hear from you</div>
                            </div>
                            <hr className="hr"/>
                            <div className="side2">
                                <div className="mb-4">
                                    <span className="icon call" />
                                    <a href="tel:+91-9985556775" style={{color: 'white'}}>
                                        <span>Call/Whatsapp us</span>
                                    </a>
                                </div>
                                 <div>
                                    <span className="icon support"></span>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                            <hr className="hr"/>
                            <div className="side-3">
                                <div className="social mb-3">SOCIAL MEDIA</div>
                                <div className="socialIcons">
                                    <a href="#" target="_blank"><span className="fb"></span></a>
                                    <a href="#" target="_blank"><span className="insta"></span></a>
                                    <a href="#" target="_blank"><span className="youtube"></span></a>
                                </div>
                            </div>
                            <hr className="hr"/>
                            <div className="side-5">
                                © Copyright 2021. All Rights Reserved.
                            </div>

                        </div>
                        <div className="part2">
                            <div className="forXs d-block d-sm-none">
                                <span className="close-mark" onClick={this.closeModal.bind(this)}>&times;</span>
                                <span className="side-mark"></span><span className="getInTouch">GET IN TOUCH</span><br />
                                <span className="line2">We would love to hear from you</span>

                            </div>
                            <div id="contact-form" style={{width: '400px'}}>
                                <div className="form-group">
                                    <label htmlFor="fullname">FULL NAME</label>
                                    <input type="text" className="form-control" id="fullname" placeholder="Enter Name"
                                           name="fullname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">EMAIL ADDRESS:</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="Enter your email here" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact">CONTACT NUMBER</label>
                                    <input type="text" className="form-control" id="contact"
                                           placeholder="Enter your contact number here" name="contact" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">MESSAGE HERE</label>
                                    <textarea type="text" rows="3" className="form-control" id="message"
                                              placeholder="Message here ( Maximum 100 words)" name="message"></textarea>
                                </div>

                                <div className="submit">
                                    <button onClick={this.submitContactForm.bind(this)}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ContactModel;