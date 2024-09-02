import React from 'react';

function UserProfile() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'John Doe'),
    React.createElement('p', null, 'Email: john@example.com')
  );
}

export default UserProfile;
