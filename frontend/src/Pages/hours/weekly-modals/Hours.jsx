import React from 'react'
import ParticularDay from './ParticularDay'

const Hours = () => {
  let curr = new Date 
let week = []
for (let i = 0; i <=6; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }
 let day=["SU","MO","TU","WE","TH","FR","SA"]

  return (
    <div className='flex items-start justify-evenly w-100%  m-auto gap-2'>
      <ParticularDay week={week[0].split("-")[2]} day={day[0]} date={week[0]} />
      <ParticularDay week={week[1].split("-")[2]} day={day[1]} date={week[1]}/>
      <ParticularDay week={week[2].split("-")[2]} day={day[2]} date={week[2]}/>
      <ParticularDay week={week[3].split("-")[2]} day={day[3]} date={week[3]}/>
      <ParticularDay week={week[4].split("-")[2]} day={day[4]} date={week[4]}/>
      <ParticularDay week={week[5].split("-")[2]} day={day[5]} date={week[5]}/>
      <ParticularDay week={week[6].split("-")[2]} day={day[6]} date={week[6]}/>
    </div>
  )
}

export default Hours