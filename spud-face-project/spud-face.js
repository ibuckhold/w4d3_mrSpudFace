window.addEventListener("DOMContentLoaded", (event) => {
  // const idInput= document.getElementById('title');
  // const idOutput= document.getElementById('card-title');
  // idInput.addEventListener( "input", (event) => {
  //   idOutput.innerText= event.target.value;
  // })

  // ** Phase 1B: Update license with event delegation and event.target **
  const inputs= document.getElementById("drivers-license-form");
  const outputs= document.querySelectorAll('drivers-license-card');
  console.log(outputs)
  console.log(inputs)
  inputs.addEventListener('input', (event) => {
    outputs.forEach(output => {
      if (output.id.includes(event.target.id)) {
        output.innerText= event.target.value;
      }
      console.log(output)
      console.log(input)
    })
  })

  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
