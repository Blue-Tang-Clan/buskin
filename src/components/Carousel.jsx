import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="https://cdn.mos.cms.futurecdn.net/rtKz3ipbmux3aR2gnNqKCC.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);


