import React, { useRef } from 'react';
import testVideo from './videos/testVideo.mp4';
import testVideo1 from './videos/testVideo.ogg';
import Hearloss from './pictures/Hearloss.jpg';
import Exersices from './pictures/Exersice.jpg';
import Food from './pictures/Food.jpg';
import Loudnoise from './pictures/Loudnoise.jpg';
import Medicine from './pictures/Medicine.jpg';
import Worldmap from './pictures/Worldmap.png';
import './App.css';

function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.playbackRate = 1.0;
    videoRef.current.volume = .5;
    videoRef.current.play();
  };

  const resetVideo = () => {
    videoRef.current.playbackRate = 1.0;
    videoRef.current.volume = .5;
  };

  const increaseFreq = () => {
    videoRef.current.playbackRate += .25;
  };

  const decreaseFreq = () => {
    videoRef.current.playbackRate -= .25;
  };

  const increaseDecb = () => {
    videoRef.current.volume += .1;
  };

  const decreaseDecb = () => {
    videoRef.current.volume -= .1;
  }

  return (
    <div>
      <section className="Title">
        <h1>Hearing Impairment Testing</h1>
        <h2>Welcome to our hearing Impairment test!</h2>
        <h2>
          On this website, we will go through a specific hearing test to find out if you suffer from any hearing loss.
        </h2>
        <img src={Hearloss}></img>
      </section>
      
      <section className="Why">
        <h1>Why test for hearing loss?</h1>
        <h2>
          With the rapid increase in technology and society, we are more and more inclined to grab a pair of earbuds or headphones to tune the world out and listen to some music or a podcast. This can cause troubles later in the future, making your hearing important to look at now. Out of the 7 billion people world wide more than 1.5 billion people are effected by hear loss and around 450 million people are currently looking to get treated for it. Considering that this is more then 20 percent of the population we need to look at steps into preventing future hearing loss.
        </h2>
      </section>

      <section className="What">
        <h1>What causes hearing loss?</h1>
        <h2>
          In some cases hearing loss can be completely out of your control, but there is value into taking a look at what you can control. Some things that can cause hearing loss that are in our control are:
        </h2>
        <ul>
          <li>Loud noises and sounds</li>
          <li>Ear infections</li>
          <li>Certain Medicines</li>
          <li>Nutritional Deficiencies</li>
        </ul>
        <br></br>
        <ul>
          <img src={Loudnoise}></img>  
          <img src={Exersices}></img>
          <img src={Food}></img>
          <img src={Medicine}></img>
        </ul>
        <h2>
          Now knowing a few factors that can contribute to hearing loss we can look at preventing being around loud noises especially when having headphones or earbuds on. We can also take a greater care of our health outside of our ears. It is important for us to make sure we take good care of our general health and make sure that we are eating healthy whole foods and exersicing regularly.
        </h2>
      </section>

      <section className = "Challenges">
        <h1>What challenges do people with hearing loss have with technology?</h1>
        <h2>People with hearing loss don't necessarily have a hard time using technology due to having control of the volume output that comes with the computer's settings. It is a problem however that the volume bar isn't very customizable to help with the different frequencies one might need depending on their hearing. This can lead to someone with really bad hearing loss cranking the volume up really loud which might later make their hearing worse if they are using headphones or earbuds.  </h2>
      </section>

      <section className="Test">
        <h1>Our Test</h1>
        <h2>
          The test we are going to use to gauge for any sort of hearing loss is a pure-tone audiometry. This is the most common type of hearing test that checks for the faintest tones a person can hear at a given pitch or frequency.
        </h2>
        <h3>
          Below is a video that we will play, and you can click the buttons to change the speed of the video to gauge for yourself what frequency you are at and what to look out for:
        </h3>
        <video ref={videoRef} width={500} height={500} controls>
          <source src={testVideo} type="video/mp4" />
          <source src={testVideo1} type="video/ogg" />
        </video>
        <div className="controls">
          <button onClick={playVideo}>Play Video</button>
          <button onClick={resetVideo}>Reset Video</button>
          <button onClick={increaseFreq}>Increase Frequency</button>
          <button onClick={decreaseFreq}>Decrease Frequency</button>
          <button onClick={increaseDecb}>Increase Decibels</button>
          <button onClick={decreaseDecb}>Decrease Decibels</button>
        </div>
      </section>
    </div>
  );
}

export default App;
