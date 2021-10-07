import React from "react";
import Iframe from "react-iframe";

import Fade from "react-reveal/Fade";

function SalaMx() {
  return (
    <>
      <Fade>
        <section className="sala">
          <div className="contenedor">
            <h1>Sala PR</h1>
            <div className="contenedor-video">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  title="Sala Mexico"
                  src="https://player.vimeo.com/video/617945710?h=23eec85a39&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maxWidth: "600px",
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="video"
                />
              </div>
              <p className="disapear">
                <a href="https://vimeo.com/617945710">
                  Test Distribuidores 2021
                </a>
                from
                <a href="https://vimeo.com/user126120699">GoPharma Streaming</a>
                on <a href="https://vimeo.com">Vimeo</a>.
              </p>
            </div>

            <Iframe
              className="chat"
              src="https://minnit.chat/MX?embed&&nickname="
              allowTransparency="true"
            />
          </div>
        </section>
      </Fade>
    </>
  );
}

export default SalaMx;
