import React from 'react';
import './home.scss';
import SDPQ from '../../Resources/SDPQ.png';
import PPP from '../../Resources/PPP.png';
import EarthBFF from '../../Resources/EarthBFF.png';
import Profile from '../../Resources/profile.jpeg';
import Resume from '../../Resources/Resume - Current.pdf'

const Home = () => {
	return (
		<div>
			<section class='intro'>
				<div class='intro-content'>
					<div className='hi'>Hi I'm Liz Roper.</div>
					<div className='tagline'>
						Full Stack Web Developer && Problem Solver
					</div>
				</div>
			</section>

			<section>
				<div class='content'>
					<h1>About</h1>
					<div class='image-cropper'>
						<img src={Profile} alt='avatar' class='profile-pic' />
					</div>
					<p>
						I am a software engineer with strong attention to detail and a
						passion for looking at old problems in new ways. I am eager to use
						my software engineering skills coupled with an accounting background
						to provide innovative solutions, increase efficiency, and streamline
						processes within a backend developer role.
					</p>
					<p>
						I have 7 years of accounting experience both in the public and
						private sectors. As an accountant at a start-up, I became frustrated
						that I couldn't solve accounting system and data issues without the
						help of engineers. At that point I started exploring programming
						with the intent to be able to solve more problems and create
						efficient solutions. I instantly became enamored with programming's
						power to build, create and solve. Since then, I have been working
						toward transitioning my career.
					</p>
					<h4>Education</h4>
					<p>
						<strong>General Assembly</strong> <br />
						Software Engineering Immersive 2020
					</p>

					<p>
						<strong>University of Illinois, Urbana-Champaign</strong>
						<br />
						Master of Accounting Science, Information Technology Minor <br />
						Bachelor of Science in Accountancy, Environmental Fellows Program
						2012
					</p>
					
					<a className='contact-button' href={Resume} target='_blank'>
						Resume
					</a>
				</div>
			</section>

			<section>
				<div class='content'>
					<h1>Projects</h1>
					<div class='wrapper'>
						<div class='card'>
							<input
								type='checkbox'
								id='card1'
								class='more'
								aria-hidden='true'
							/>
							<div class='card-content'>
								<div
									class='front'
									style={{
										backgroundImage: `url(${SDPQ})`,
										// backgroundPosition: 'center',
										backgroundSize: 'contain',
									}}>
									<div class='inner'>
										<label for='card1' class='button' aria-hidden='true'>
											Details
										</label>
									</div>
								</div>
								<div class='back'>
									<div class='inner'>
										<div class='description'>
											<p>
												A dynamic trivia game created using Javascript, HTML,
												and CSS. It uses DOM manipulation and API fetch calls to
												display trivia questions from eight categories at
												varying degrees of difficulty. The game tracks score as
												well as displays correct and incorrect answers.
											</p>
											<a href='https://lizbarnett0.github.io/socially-distant-pub-quiz/'>
												Deployed Application
											</a>
											<a href='https://github.com/lizbarnett0/socially-distant-pub-quiz'>
												Github Repo
											</a>
										</div>
										<div class='languages'>JavaScript | HTML | CSS</div>
										<label for='card1' class='button return' aria-hidden='true'>
											Back
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class='card'>
							<input
								type='checkbox'
								id='card2'
								class='more'
								aria-hidden='true'
							/>
							<div class='card-content'>
								<div
									class='front'
									style={{
										backgroundImage: `url(${PPP})`,
										backgroundPosition: 'top',
										backgroundSize: 'contain',
										backgroundRepeat: 'no-repeat',
									}}>
									<div class='inner'>
										<label for='card2' class='button' aria-hidden='true'>
											Details
										</label>
									</div>
								</div>
								<div class='back'>
									<div class='inner'>
										<div class='description'>
											<p>
												A comprehensive web application built using React,
												Javascript, and CSS. It uses stateful components and API
												fetch calls to display meals and cocktails by category
												and individual recipes with ingredients and
												instructions. The favorite button adds functionality to
												keep track of specific drink and meal recipes.
											</p>
											<a href='https://party-planning-pro.herokuapp.com/'>
												Deployed Application
											</a>
											<a href='https://github.com/lizbarnett0/party-planner-pro'>
												Github Repo
											</a>
										</div>
										<div class='languages'>React | Javascript | CSS</div>
										<label for='card2' class='button return' aria-hidden='true'>
											Back
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class='card'>
							<input
								type='checkbox'
								id='card3'
								class='more'
								aria-hidden='true'
							/>
							<div class='card-content'>
								<div
									class='front'
									style={{
										backgroundImage: `url(${EarthBFF})`,
										backgroundPosition: 'top',
										backgroundSize: 'contain',
										backgroundRepeat: 'no-repeat',
									}}>
									<div class='inner'>
										<label for='card3' class='button' aria-hidden='true'>
											Details
										</label>
									</div>
								</div>
								<div class='back'>
									<div class='inner'>
										<div class='description'>
											<p>
												A full stack web application built using
												React/Javascript for the front-end and Django/Python for
												the backend. The application is a carbon footprint
												calculator and community bulletin board where users can
												post messages. The backend is used to store the
												questions/responses for the carbon footprint calculator
												as well as the users posts on the bulletin board.
												Additionally, login functionality was implemented using
												django rest framework to prohibit non-registered users
												from posting on the community bulletin board.
											</p>
											<a href='https://earth-bff.herokuapp.com/'>
												Deployed Application
											</a>
											<a href='https://github.com/lizbarnett0/fe-earthbff'>
												Github Repo - Front End
											</a>
											<a href='https://github.com/lizbarnett0/drf-earthbff'>
												Github Repo - Back End
											</a>
										</div>
										<div class='languages'>
											React | JavaScript | Django | Python
										</div>
										<label for='card3' class='button return' aria-hidden='true'>
											Back
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class='contact-content'>
					<h1>Contact & Connect</h1>
					<a
						className='contact-button'
						href='https://www.linkedin.com/in/liz-roper/'
						target='_blank'>
						LinkedIn
					</a>
					<a
						className='contact-button'
						href='https://github.com/lizbarnett0/'
						target='_blank'>
						GitHub
					</a>
					<a
						className='contact-button'
						href='mailto:lizcroper@gmail.com'
						target='_blank'>
						Email
					</a>
				</div>
			</section>
		</div>
	);
};

export default Home;
