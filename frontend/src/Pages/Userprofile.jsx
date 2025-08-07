import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiUrls, baseUrl } from '../lib/constants'

export default function UserProfile() {
  const [data, setData] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobile: ''
  })

  const userId = sessionStorage.getItem('id')

  // Fetch user data on load
  useEffect(() => {
    axios.get(baseUrl + apiUrls.USERS_LIST + userId)
      .then((resp) => {
        setData(resp.data)
        setFormData({
          userName: resp.data.userName,
          email: resp.data.email,
          mobile: resp.data.mobile
        })
      })
  }, [])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleUpdate = () => {
    axios.put(`${baseUrl + apiUrls.USERS_LIST}${userId}`, formData)
      .then((resp) => {
        alert("Profile updated successfully")
        setData(resp.data)
        setIsEditing(false)
      })
      .catch((err) => {
        alert("Error updating profile")
        console.error(err)
      })
  }

  return (
    <div className='container mt-5'>
      <h4>User Profile</h4>

      {data && (
        <>
          {!isEditing ? (
            <table className='table table-bordered mt-4'>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <td>{data.userName}</td>
                </tr>
                <tr>
                  <th>Email Id</th>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <th>Phone No</th>
                  <td>{data.mobile}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className='mt-4'>
              <div className='mb-3'>
                <label className='form-label'>Full Name</label>
                <input
                  type='text'
                  name='userName'
                  value={formData.userName}
                  onChange={handleChange}
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Phone No</label>
                <input
                  type='text'
                  name='mobile'
                  value={formData.mobile}
                  onChange={handleChange}
                  className='form-control'
                />
              </div>
            </div>
          )}

          <div className='mt-3'>
            {!isEditing ? (
              <button className='btn btn-primary' onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            ) : (
              <>
                <button className='btn btn-success me-2' onClick={handleUpdate}>
                  Save Changes
                </button>
                <button className='btn btn-secondary' onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
