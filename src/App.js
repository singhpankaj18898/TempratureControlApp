import React, {  useState  } from 'react';

const App = () => {

			const [temperatureValue, setTemperatureValue] = useState(10);
			const [temperatureColor, setTemperatureColor] = useState('cold');

			const increaseTemperature = () => {
			if(temperatureValue===20)
			{
			console.log(alert("this temprature is very full "));
			}
				const newTemperature = temperatureValue + 1;
				setTemperatureValue(newTemperature);
				if (newTemperature >= 15) {
					setTemperatureColor('hot');
				}
			};
			const decreaseTemperature = () => {
			if(temperatureValue === 0)
			{
			console.log(alert("this temprature is very cold "));
			}
				const newTemperature = temperatureValue - 1;
				setTemperatureValue(newTemperature);
				if (newTemperature < 15) {
				setTemperatureColor('cold');
				}
			    };
						return (  
										<div className='container'>
										<div className='row'>
										<h2 data-text="Temprature.."> Temprature.. </h2>
										</div>
										<div className='app-container'>
										<div className='temperature-display-container'>
										<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
										</div>
										<div className='button-container'>
										<button onClick={increaseTemperature}>+</button>
										<button onClick={decreaseTemperature}>-</button>
										</div>
										</div>
										</div>  
		);
	};

export default App;