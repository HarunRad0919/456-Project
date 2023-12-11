import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("videoElement");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const normalSpeedButton = document.getElementById("normalSpeedButton");
  const doubleSpeedButton = document.getElementById("doubleSpeedButton");

  // Play the video
  playButton.addEventListener("click", function () {
      video.play();
  });

  // Pause the video
  pauseButton.addEventListener("click", function () {
      video.pause();
  });

  // Set the playback rate to normal speed (1x)
  normalSpeedButton.addEventListener("click", function () {
      video.playbackRate = 1.0;
  });

  // Set the playback rate to double speed (2x)
  doubleSpeedButton.addEventListener("click", function () {
      video.playbackRate = 2.0;
  });
});
