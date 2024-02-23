import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2" id="">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are ?? </h1>
          <p>
            Vestibulum porta, lectus eget molestie volutpat, ante mauris lacinia
            mauris, at ornare ligula tortor a risus. Suspendisse semper semper
            tortor, non tempor urna dapibus sed. Cras euismod euismod ante
            faucibus iaculis. Nunc laoreet aliquam tortor, quis dignissim nibh
            pharetra tristique. Nam condimentum nibh sit amet enim lacinia
            efficitur. Maecenas commodo odio a justo elementum placerat. Proin
            nec urna nec tellus finibus dignissim. Pellentesque sed elit
            malesuada, rhoncus risus vel, ornare tellus. Curabitur viverra dolor
            ut ornare rhoncus. Morbi scelerisque vel urna at egestas. Fusce
            egestas ac eros non semper. Nam faucibus condimentum felis feugiat
            feugiat. Sed euismod vestibulum ornare. Morbi scelerisque mauris et
            purus commodo, a iaculis lorem lobortis. Nulla sit amet dui
            volutpat, ullamcorper sapien sed, aliquet ante. Maecenas et mattis
            elit, vitae euismod tortor
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
