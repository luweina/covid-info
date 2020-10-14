import React from "react";
import "./Myth.scss";
import ReactPlayer from "react-player";

const Myth = () => {
  return (
    <div className="Myth-parent">
      <aside class="callout">
        <b>FACT: Vitamin and mineral supplements cannot cure COVID-19 👀</b>
        <p>
          Micronutrients, such as vitamins D and C and zinc, are critical for a
          well-functioning immune system and play a vital role in promoting
          health and nutritional well-being. There is currently no guidance on
          the use of micronutrient supplements as a treatment of COVID-19. WHO
          is coordinating efforts to develop and evaluate medicines to treat
          COVID-19.
        </p>
        <img
          src="https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/eng-mythbusters-covid19-(5)-supplements.png"
          alt=""
        />
      </aside>

      <aside class="callout warning">
        <b> FACT: People should NOT wear masks while exercising ☝🏾</b>
        <p>
          People should NOT wear masks when exercising, as masks may reduce the
          ability to breathe comfortably. Sweat can make the mask become wet
          more quickly which makes it difficult to breathe and promotes the
          growth of microorganisms. The important preventive measure during
          exercise is to maintain physical distance of at least one meter from
          others.
        </p>
        <img
          src="https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster---masks-and-exercise.png"
          alt=""
        />
        <ReactPlayer
          className="youtube-videos"
          url="https://www.youtube.com/watch?v=1_AxGswGnno&feature=emb_title"
          width="100%"
        ></ReactPlayer>
      </aside>

      <aside class="callout success">
        <b> FACT: 5G mobile networks DO NOT spread COVID-19 👏🏾 </b>
        <p>
          Viruses cannot travel on radio waves/mobile networks. COVID-19 is
          spreading in many countries that do not have 5G mobile networks.
          COVID-19 is spread through respiratory droplets when an infected
          person coughs, sneezes or speaks. People can also be infected by
          touching a contaminated surface and then their eyes, mouth or nose.
        </p>
        <img
          src="https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/eng-mythbusting-ncov-(15).png?sfvrsn=a8b9e94_4"
          alt=""
        />
        <ReactPlayer
          className="youtube-videos"
          url="https://www.youtube.com/watch?v=oDE8_4UTuRM&feature=emb_title"
          width="100%"
        ></ReactPlayer>

      </aside>
    </div>
  );
};

export default Myth;
