import { useState } from "react";
import "./App.css";
function App() {
	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);
	async function getAdvice() {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		setAdvice(data.slip.advice);
		setCount((c) => c + 1);
	}
	return (
		<>
			<h1>Get Advice</h1>
			<button onClick={getAdvice}>Get Advice</button>
			<h2>{advice}</h2>
			<p>
				You took <strong>{count}</strong> advice today
			</p>
		</>
	);
}

export default App;
