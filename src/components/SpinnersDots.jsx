import React from 'react';
// https://icon-sets.iconify.design/svg-spinners/


export function SpinnersDots(props) {
	return (<svg className='mx-auto my-4' xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" {...props}><circle cx={4} cy={12} r={1.5} fill="#D32D2D"><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></animate></circle><circle cx={12} cy={12} r={3} fill="#D32D2D"><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"></animate></circle><circle cx={20} cy={12} r={1.5} fill="#D32D2D"><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></animate></circle></svg>);
}