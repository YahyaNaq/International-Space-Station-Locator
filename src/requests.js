import axios from 'axios';

const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hrs24 = date.getHours();
  const hrs = hrs24%12 || 12;
  const mins = date.getMinutes();
  const unit = hrs24>12 ? 'PM' : 'AM';
  return `${hrs}:${mins}${unit}`;
}

export const getInfo = async () => {
	try {
		let data;
		await axios
		.get('http://api.open-notify.org/iss-now.json')
		.then((apiData) => ({ data } = apiData));
		const coords = data.iss_position;
		return ({
			coords: [coords.latitude, coords.longitude],
			time: getTime(data.timestamp)
		});
	}
	catch (err) {
		console.log(err);
	}
}

export const getPosition = async (coords) => {
	try {
		let data;
		await axios
		.get(`http://api.positionstack.com/v1/reverse?access_key=${process.env.REACT_APP_API_KEY}&query=${coords[0]},${coords[1]}`)
		.then((apiData) => ({ data } = apiData));
		const info = data.data[0];
		return {country: info.country,continent:info.continent,name:info.name};
	}
	catch (err) {
		console.log('Error in the Position Stack Api:',err);
	}
}