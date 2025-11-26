import React, { useState } from 'react'

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return {...currData, [event.target.name]: event.target.value}
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
    username: "",
    remarks: "",
    rating: 5,
  });
  }

  return (
    <div>
      <h4>Give a Comment!</h4>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:  </label>
        <input type="text" placeholder='username' name="username" id="username" value={formData.username} onChange={handleInputChange}/>
        <br /><br /><br /><br />

        <label htmlFor="remarks">Remarks:  </label>
        <textarea name="remarks" id="remarks" placeholder='add few Remarks' value={formData.remarks} onChange={handleInputChange}></textarea >
        <br /><br /><br /><br />

        <label htmlFor="rating">Rating:   </label>
        <input type="number" name="rating" id="rating" placeholder='rating' min={1} max={5} value={formData.rating} onChange={handleInputChange}/>
        <br /><br /><br /><br />

        <button>Add Comment</button>

        
      </form>
    </div>
  )
}
