import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_USER = gql`
     { 
        user  {
            name
            age
        },
        course {
            subject
        }
      }
`
export default function User() {
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return <div>loading ...</div>
    if (error) return <div>error</div>
    return (
        <div>
            hello from apollo client
            <div>
                Name: {data.user.name}<br />
                Age: {data.user.age}
            </div>
            {/* <div>
                Course: {data.course.subject}
            </div> */}

            how to query double thing as user and course mentioned earlier
        </div>
    )
}