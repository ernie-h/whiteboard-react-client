import React from 'react';

class CourseCard extends React.Component {
  render() {
    return (<div className="card" styles={{
        width: '18rem'
      }}>
      <div className="card-body">
        <h5 className="card-title">
          Course
        </h5>
        <p className="card-text">
          Learn about front-end development and upcoming technologies!
        </p>
        <a href="/api/user" className="btn btn-primary">
          Click here for more!
        </a>
      </div>
    </div>);
  }
}

export default CourseCard;
