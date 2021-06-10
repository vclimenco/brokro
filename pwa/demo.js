let otVersion = false;
const butSet = document.getElementById('butSet');
const butClear = document.getElementById('butClear');
const inputBadgeVal = document.getElementById('badgeVal');

const butMakeXHR = document.getElementById('butMakeXHR');

// Check if the API is supported.
if ('setExperimentalAppBadge' in navigator) {
  isSupported('v2')
}

// Check if the previous API surface is supported.
if ('ExperimentalBadge' in window) {
  isSupported('v1');
}

// Check if the previous API surface is supported.
if ('setAppBadge' in navigator) {
  isSupported('v3');
}

// Update the UI to indicate whether the API is supported.
function isSupported(kind) {
  console.log('supported', kind);
  const divNotSupported = document.getElementById('notSupported');
  divNotSupported.classList.toggle('hidden', true);
  butSet.removeAttribute('disabled');
  butClear.removeAttribute('disabled');
  inputBadgeVal.removeAttribute('disabled');  
  
  butMakeXHR.removeAttribute('disabled');
}

// Click event handler for Set button.
butSet.addEventListener('click', () => {
  const val = parseInt(inputBadgeVal.value, 10);
  if (isNaN(val)) {
    setBadge();
    return;
  }
  setBadge(val);
});

// Click event handler for Clear button.
butClear.addEventListener('click', () => {
  clearBadge();
});

butMakeXHR.addEventListener('click', () => {
  fetch('manifest.json');
});

// Wrapper to support first and second origin trial
// See https://web.dev/badging-api/ for details.
function setBadge(...args) {
  if (navigator.setAppBadge) {
    navigator.setAppBadge(...args);
  } else if (navigator.setExperimentalAppBadge) {
    navigator.setExperimentalAppBadge(...args);
  } else if (window.ExperimentalBadge) {
    window.ExperimentalBadge.set(...args);
  }
}

// Wrapper to support first and second origin trial
// See https://web.dev/badging-api/ for details.
function clearBadge() {
  if (navigator.clearAppBadge) {
    navigator.clearAppBadge();
  } else if (navigator.clearExperimentalAppBadge) {
    navigator.clearExperimentalAppBadge();
  } else if (window.ExperimentalBadge) {
    window.ExperimentalBadge.clear();
  }
}