import React from 'react'
function fun1(){
if (typeof response.data !== "undefined") {
    const num = Math.floor(Math.random() * 30) + 1;
    const url = response.data.results[num].urls.regular;
    updateBackground(url);
  }
}

function Image() {
    return (<>
      {fun1} </>   )
}

export default Image
