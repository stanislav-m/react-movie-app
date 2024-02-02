import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const OverviewList = () => {
  const { overviewList } = useContext(GlobalContext);

  const { liveTvs, sections } = overviewList;

  const [style, set] = useSpring(() => ({
    from: {
        transform: "perspective(500px) rotateY(0deg)"
      },
      transform: "perspective(500px) rotateY(25deg)"
    }));
    
  const clamp = (value: number, clampAt: number = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });
  return (
    <div className="overviewList">
      <div className="sectionBox">
        <h2>{"Телевизионни канали"}</h2>
        {liveTvs
          ? liveTvs.map((item) => (
              <div>
                <animated.div
                  className="contBox"
                  key={item.id}
                  style={{
                    ...style,
                    backgroundImage: `url(${item.logo})`,
                  }}
                />
                <h3>{item.name}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="sections">
        {sections
          ? sections.map((it) => (
              <div className="sectionBox" key={it.id}>
                <h2>{it.name}</h2>
                {it.content.map((el) => (
                  <div>
                    <animated.div
                      className="contBox"
                      key={el.id}
                      style={{
                        ...style,
                        backgroundImage: `url(${el.image.replace(
                          "{WIDTH}x{HEIGHT}",
                          "284x410"
                        )})`,
                      }}
                    ></animated.div>
                    <h3>{el.title}</h3>
                  </div>
                ))}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default OverviewList;
