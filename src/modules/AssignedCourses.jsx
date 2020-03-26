import React, { Component } from 'react';
import CardCourses from './CardUIAssignedCourses';
import Sub from './dataAssignedCourses';
class Loop extends Component {
    render() { 
        console.log(Sub)
        let list= Sub.map(course =>
            {
                return(
                    <div className = "col-sm-4">
                        <CardCourses Sub = {course}/>
                    </div>  
                )
            })
        return ( 
            <div className="row">
                {list}
            </div> 
         
        );
    }
}
 
export default Loop;