const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const synth = new Tone.Synth().toDestination();
  const obj = { 0: 'C3', 5: 'G3', 10: 'D4', 15: 'A4', 20: 'E3', 25: 'B3', 30: 'F#4', 35: 'C#4', 40: 'Ab3', 45: 'Eb3', 50: 'Bb4', 55: 'F4'}

  function checkSeconds(seconds){
    if(seconds in obj) {
      synth.triggerAttackRelease(obj[seconds], '1n');
    }
  }

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    checkSeconds(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
