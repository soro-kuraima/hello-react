import React, { useState } from 'react';

export default function Images(prop) {
  console.log(prop);

  return (
    <div>
      <img src={prop.src1} alt="" />
      <img src={prop.src2} alt="" />
    </div>
  );
}
