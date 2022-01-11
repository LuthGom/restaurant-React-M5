import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Work with us</Footer.Link>
                    <Footer.Link href="#">Contact us</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Our Stores</Footer.Title>
                    <Footer.Link href="https://www.alinearestaurant.com/">United States</Footer.Link>
                    <Footer.Link href="https://www.themantl.com/">United Kingdom</Footer.Link>
                    <Footer.Link href="https://cafesydney.com/home">Australia</Footer.Link>
                    <Footer.Link href="https://www.lesouffle.fr/">France</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
           <Footer.Copyright>
               &copy; Lorem Ipsum: Usage Lorem Ipsum--when and when not to use.
           </Footer.Copyright>
        </Footer>
    )
}