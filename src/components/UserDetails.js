import { useParams } from 'react-router-dom';

function UserDetails() {
	const params = useParams();
	const userId = params.userId;
	// you could destructure the two lines above to be
	// const {userId} = useParams()
	return <div>Details about user {userId}</div>;
}

export default UserDetails;
