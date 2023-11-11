import React, { Component } from 'react';

export default function (props) {
  // const {
  //   fullname,
  //   full_description
  // } = this.props.item;


  return (
    <div>
      {/* <h2 className='profile-detail-name'>{fullname}</h2>
      <p className='detailed-description'>{full_description}</p> */}
      <h2>Perfil de {props.match.params.slug}</h2>
    </div >
  );
}

