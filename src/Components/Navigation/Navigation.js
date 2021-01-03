import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Resume from '../../Resources/Resume - Current.pdf';

const Navigation = () => {
	return (
		<div>
			<Navbar fixed='top' bg='light' expand='lg'>
				<Navbar.Brand href='#intro'>Liz Roper</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href={Resume} target='_blank'>
							Resume
						</Nav.Link>
						<Nav.Link href='#projects'>Projects</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
