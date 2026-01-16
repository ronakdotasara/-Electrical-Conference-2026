import React from 'react'
import "../components/css/DateSection.css";
const DateSection = () => {
  return (
    <div className='datemain'>
      <div className="banner-container">
      <div className="marquee">
        <span>
          Important Update: The last date for paper submission to PICS-2026 has been extended to 12 May 2026 (Hard Deadline). 
          Authors are encouraged to submit their papers before the new deadline. &nbsp; 🔔 
        </span>
        <span>
          Important Update: The last date for paper submission to PICS-2026 has been extended to 12 May 2026 (Hard Deadline). 
          Authors are encouraged to submit their papers before the new deadline. &nbsp; 🔔 
        </span>
      </div>
    </div>
      <p className='pone'>Mark Your Calendar</p>
      <p className='ptwo'>Important Dates</p>
      <div className='dateboxes'>
        <div className='datebox'>
            <p className='dateptwo'>Last Date of Paper Submission :</p>
            <p className='datepone-updated'>31 March, 2026</p>
            <p className='datepone-updated'>21 April, 2026</p>
            {/* <p className='datepone-updated-date'>05 May, 2026 (Extended)</p> */}
            <p className='datepone-updated-date'>12 May, 2026 (Hard Deadline)</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Acceptance Notification : </p>
            <p className='datepone'>15 May, 2026</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Camera Ready Paper Submission : </p>
            <p className='datepone'>05 June, 2026</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Last Date of Registration : </p>
            <p className='datepone'>05 June, 2026</p>
        </div>
        <div className='datebox'>
            <p className='dateptwo'>Date of Conference :</p>
            <p className='datepone'>04-05 July, 2026</p>
        </div>
      </div>
    </div>
  )
}

export default DateSection
