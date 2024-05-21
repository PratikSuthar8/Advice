import React, { useState } from "react";
import "./Advice.css";
const Advice = () => {
	const [advice, setAdvice] = useState("");

	const [count, setCount] = useState(0);
	async function getAdvice() {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		setAdvice(data.slip.advice);
		setCount((c) => c + 1);
	}

	return (
		<div className="container">
			<div className="inner-container">
				<div className="advice-generator">
					<h1>Today'sAdvice</h1>
					<button onClick={getAdvice}>Get Advice</button>
					<p className="count">
						You took <strong>{count}</strong> advice.
					</p>
				</div>
				<div className="advice">
					<h2>{advice}</h2>
				</div>
			</div>
		</div>
	);
};

export default Advice;
