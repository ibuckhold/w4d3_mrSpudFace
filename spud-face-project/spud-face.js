window.addEventListener("DOMContentLoaded", (event) => {
  // const idInput= document.getElementById('title');
  // const idOutput= document.getElementById('card-title');
  // idInput.addEventListener( "input", (event) => {
  //   idOutput.innerText= event.target.value;
  // })

  // ** Phase 1B: Update license with event delegation and event.target **
  const inputs= document.getElementById("drivers-license-form");
  const outputs= document.querySelectorAll('.license__info');

  inputs.addEventListener('input', (event) => {
    outputs.forEach(output => {
      if (output.id.includes(event.target.id)) {
        output.innerText= event.target.value;
      }
    })
  })

  // ** Phase 2: Add focus and blur events to form inputs **
  inputs.addEventListener('focus', (event) => {
    event.target.style.background = 'lightgreen';
  }, true);

  inputs.addEventListener('blur', (event) => {
    event.target.style.background = 'unset';
  }, true);

  // ** Phase 3: Check that license numbers match **
  const license= document.getElementById('license-num');
  const licenseConfirm= document.getElementById('license-num-confirm');
  inputs.addEventListener("input", (event) => {
    if (license.value!==licenseConfirm.value) {
      license.style.background= "lightcoral";
      licenseConfirm.style.background= "lightcoral";
      // console.log(event.target);
    }else {
      license.style.background= "unset";
      licenseConfirm.style.background= "unset";
    }
    // console.log(event.target);
  })

  // ** Phase 4: Update submit button click count **

  const button = document.querySelector('button');
  //const button = document.getElementsByClassName('form__submit')[0];
  let count = 0;
  console.log(button.innerText);
  button.addEventListener('click', (event) => {
    event.preventDefault();
    count++;
    button.innerText = `Submit ${count}`;
  })
});
