let currentRadio = null;

  function toggleRadio(radio) {
    if (currentRadio === radio) {
      // If the user clicks the ALREADY selected button, uncheck it
      radio.checked = false;
      currentRadio = null;
    } else {
      // Otherwise, remember this new button as the active one
      currentRadio = radio;
    }
  }