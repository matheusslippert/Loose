import './Video.scss';

export function Video() {
  return (
    <section className="video-section">
      <div className="overlay-content">
        <img src="/assets/fundos/bg-alto.png" alt="alto." className="img-alto" />
        <img src="/assets/icons/play.png" alt="Play" className="icon-play" />
      </div>
      <div className="text-corner">
        no<br />volume.<br />na<br />cor.<br />na presença
      </div>
    </section>
  );
}