import React, { Component } from "react";
import { randomWord } from "./words";

import step0 from "./images/apple100.png";
import step1 from "./images/apple120.png";
import step2 from "./images/apple140.png";
import step3 from "./images/apple160.png";

let gameStat;
class Hangman extends Component {
	static defaultProps = {
		maxWrong: 4,
		images: [step0, step1, step2, step3]
	};

	constructor(props) {
		super(props);
		this.state = {
			mistake: 0,
			guessed: new Set(),
			answer: randomWord(),
			order: ['ascending','descending']
		};
		this.handleGuess = this.handleGuess.bind(this);
		this.keyPress = this.keyPress.bind(this);
		window.addEventListener('keydown', this.keyPress);
	}

	guessedWord() {
		return this.state.answer.split("").map(bingo => (this.state.guessed.has(bingo) ? bingo : "_"));
	}

	handleGuess(value) {
		let letter = value;
		this.setState(st => ({
			guessed: st.guessed.add(letter),
			mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
		}));
	}

	keyPress(event) {
		if(gameStat === 'YOU WON' || gameStat === "YOU LOST") {
			if(event.keyCode === 8 || event.keyCode === 13 || event.keyCode === 32) {
				this.resetButton();
			}
		}
		else if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
			this.handleGuess(event.key);
		}
		else if(event.keyCode === 8 || event.keyCode === 13 || event.keyCode === 32) {
			this.resetButton();
		}
		else {}
	}

	generateButtons() {
		return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
			<button
				key={letter}
				value={letter}
				onClick={(e) => this.handleGuess(e.target.value)}
				disabled={this.state.guessed.has(letter)}
			>
				{letter}
			</button>
		));
	}

	resetButton = () => {
		this.setState({
			mistake: 0,
			guessed: new Set(),
			answer: randomWord()
		});
	};

	render() {
		const gameOver = this.state.mistake >= this.props.maxWrong;
		const altText = `${this.state.mistake}/${this.props.maxWrong} wrong guesses`;
		const isWinner = this.guessedWord().join("") === this.state.answer;
		gameStat = this.generateButtons();
		if (isWinner) {
			gameStat = "YOU WON";
		}
		if (gameOver) {
			gameStat = "YOU LOST";
		}

		return (
			<div className='Hangman'>
				<nav className='navbar navbar-expand-lg'>
					<a className='navbar-brand text-dark fontSpace' href='/'>
						Sorting Game
					</a>
					<span className='d-xl-none d-lg-none text-dark fontSpace'>
						Errors: {this.state.mistake}
					</span>
					<button
						className='navbar-toggler sr-only'
						type='button'
						data-toggle='collapse'
						data-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarText'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item '></li>
							<li className='nav-item'></li>
							<li className='nav-item'></li>
						</ul>
						<span className='navbar-text text-dark fontSpace'>Errors: {this.state.mistake}</span>
					</div>
				</nav>
				<div className='imgArray text-center container'>
					<ul>
						<li><img src={this.props.images[3]} className='responsive apple4' alt={altText} /></li>
						<li><img src={this.props.images[2]} className='responsive apple3' alt={altText} /></li>
						<li><img src={this.props.images[1]} className='responsive apple2' alt={altText} /></li>
						<li><img src={this.props.images[0]} className='responsive apple1' alt={altText} /></li>
					</ul>
				</div>
				<div classname='container'>
					<p className='text-center text-dark fontSpace'>Arrange in {this.state.order[0]} order</p>
					<p className='Hangman-word text-center'>
						{!gameOver ? this.guessedWord() : this.state.answer}{" "}
					</p>
					<p className='text-center text-warning mt-4'>{gameStat}</p>
				</div>
				<div>
					<p className='text-center'>
						<button className='Hangman-reset' onClick={this.resetButton}>
							Reset
						</button>
					</p>
				</div>
			</div>
		);
	}
}

export default Hangman;
