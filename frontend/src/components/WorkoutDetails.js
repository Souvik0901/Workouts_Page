import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutsContext()

  const handleClick = async()=>{
    const response = await fetch('/api/workouts/'+ workout._id,{
      method : 'DELETE'
    })

    const json = await response.json()
    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }



  return (
    <div className="workout-details">
      <h4>{workout.username}</h4>
      <p><strong>EmailID : </strong>{workout.email}</p>
      <p><strong>About : </strong>{workout.about}</p>
      <p><strong>Designation : </strong>{workout.designation}</p>
      <p><strong>Skills : </strong>{workout.skills}</p>
      <p><strong>Education : </strong>{workout.education}</p>
      <p><strong>Contact No. : </strong>{workout.contact}</p>
      <p><strong>Address : </strong>{workout.address}</p>
      <p><strong>SocialMedia : </strong>{workout.socialmedia}</p>
      <p>{workout.createdAt}</p>
      <span className="material-symbols-outlined" onClick = {handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails