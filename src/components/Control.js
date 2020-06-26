import React from 'react'
import arrow from '../../public/arrow.svg' 

export default (props)=>(
<div>
	<img src={arrow} className='back' onClick={props.events.back}/>
	<img src={arrow} className='foward' onClick={props.events.foward}/>
</div>
)