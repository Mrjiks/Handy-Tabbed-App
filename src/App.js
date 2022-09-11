import React, {useEffect, useState} from 'react';
import {FaAngleDoubleRight} from 'react-icons/all';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJob] = useState([]);
	const [value, setValue] = useState(0);
	
	const fetchJob = async () => {
		const response = await fetch(url);
		const newJob = await response.json();
		setJob(newJob);
		setLoading(false);
	};
	useEffect(() => {
		fetchJob();
	}, []);
	if (loading) {
		return <h3>Loading...</h3>;
	}
	
	//Only possible because we have data from the api after loading...
	const {company, dates, title, duties} = jobs[value];
	return (
		<section className='section'>
			
			<div className='title'>
				<h2>Experience</h2>
				
				<div className='underline'></div>
			</div>
			<div className='jobs-center'>
				<div className='button-container'>
					<h2>Job-info</h2>
					{
						jobs.map((item, index) => {
							return <button key={item.id} onClick={() => setValue(index)}
														 className={`job-btn ${index === value && 'active-btn'}`}>
								{item.company}
							</button>;
						})
					}
				</div>
				<article className='job-info'>
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className='job-date'>{dates}</p>
					{
						duties.map((duty, index) => {
							return <div key={index} className='job-desc'>
								<FaAngleDoubleRight className='job-icon'/>
								<p>{duty}</p>
							</div>;
						})
					}
				</article>
			</div>
		</section>
	
	);
	
}

export default App;
