<template>
  <section class="skills" id="skills">
    <div class="title">
      <h2>Skills</h2>
      <p></p>
    </div>
    <div class="content">
      <div class="skillBx">
        <h2>FrontEnd</h2>
        <p class="d3Ctn"></p>
        <p class="card">          
          <div class="cardBx" v-for="(obj, key) in cards.front" :key="key">
            <h3>{{ obj.title }}:</h3>
            <ul>
              <li v-for="(name) in obj.include" :key="name"> {{ name }} </li>
            </ul>
          </div>
        </p>
      </div>
      <div class="skillBx">
        <h2>BackEnd</h2>
        <p class="d3Ctn"></p>
        <p class="card">
          <div class="cardBx" v-for="(obj, key) in cards.back" :key="key">
            <h3>{{ obj.title }}:</h3>
            <ul>
              <li v-for="(name) in obj.include" :key="name"> {{ name }} </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, onUnmounted } from "vue";
import * as d3 from "d3";

function createD3SVG(data, winWidth) {
  let { width, height } = d3.select(".d3Ctn").node().getBoundingClientRect();
  const fontSize = winWidth <= 991 ? 15 : 23;

  const pie = d3
    .pie()
    .sort(null)
    .value((d) => d.value);

  const radius = (Math.min(width, height) / 2) * 0.8;

  const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);

  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1);

  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.name))
    .range(
      d3
        .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
        .reverse()
    );

  const arcs = pie(data);

  const svg = d3
    .create("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

  svg
    .append("g")
    .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
    .attr("fill", (d) => color(d.data.name))
    .attr("d", arc)
    .append("title")
    .text((d) => `${d.data.name}: ${d.data.value}`);

  svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", fontSize)
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
    .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
    .call((text) =>
      text
        .append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text((d) => d.data.name)
    )
    .call((text) =>
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text((d) => d.data.value.toLocaleString() + "%")
    );

  return svg.node();
}

export default {
  name: "Skills",
  setup() {
    const cards = {
      front: [
        {
          title: "編譯",
          include: ["webpack", "babel"],
        },
        {
          title: "Language",
          include: ["Html", "Javascript", "ReactJs", "VueJS", "Css"],
        },
        {
          title: "Other",
          include: ["WebSocket", "GraphQL"],
        },
      ],
      back: [
        {
          title: "Language",
          include: ["NodeJS", "Rust", "Java"],
        },
        {
          title: "Database",
          include: ["Postgresql"],
        },
      ],
    };

    const d3Data = {
      front: [
        { name: "Html", value: 10 },
        { name: "Css", value: 15 },
        { name: "Javascript", value: 20 },
        { name: "ReactJs", value: 25 },
        { name: "VueJs", value: 10 },
        { name: "Webpack", value: 5 },
        { name: "Babel", value: 5 },
        { name: "WebSocket", value: 5 },
        { name: "GraphQL", value: 5 },
      ],
      back: [
        { name: "Java", value: 15 },
        { name: "Rust", value: 30 },
        { name: "NodeJs", value: 40 },
        { name: "Postgresql", value: 15 },
      ],
    };

    function renderD3(winWidth) {
      d3.selectAll(".d3Ctn svg").remove();
      const front = createD3SVG(d3Data.front, winWidth);
      const back = createD3SVG(d3Data.back, winWidth);
      d3.selectAll(".d3Ctn").nodes()[0].append(front);
      d3.selectAll(".d3Ctn").nodes()[1].append(back);
    }

    onMounted(() => {
      window.addEventListener("resize", (e) => {
        renderD3(e.target.innerWidth);
      });

      renderD3(window.innerWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", () => {});
    });
    return {
      cards,
    };
  },
};
</script>
<style lang="scss">
.skills {
  .content {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    width: 89%;

    .skillBx {
      position: relative;
      padding: 40px 20px;
      height: 100%;
      width: 50%;
      text-align: center;

      .d3Ctn {
        padding: 20px;
        position: absolute;
        height: 80%;
        width: 100%;
      }

      p {
        margin: 0;
      }

      .card {
        position: absolute;
        padding: 20px;
        height: 80%;
        width: 100%;
        background: white;
        
        &:hover {
          opacity: 0;
          transition: 0.5s;

        }

        h3 {
          padding: 10px;
          text-align: center;
          width: 176px;
          border-right: 2px solid white;
        }

        .cardBx {
          display: flex;
          flex-direction: row;
          background: #eee;
          margin: 5px;
          position: relative;
          min-height: 25%;
          border-radius: 20px;
          ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            li {
              display: flex;
              justify-content: center;
              align-items: center;
              list-style-type: none;
              padding: 20px 10px;
              border: solid 2px #111;
              border-radius: 20px;
              margin: 7px 10px;
              width: 150px;
              height: 50px;
              font-size: 1.1em;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .skills {
    min-height: 110vh;

    .content {
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .skillBx {
        height: 49%;
        width: 100%;

        .d3Ctn {
          padding: 20px;
          height: 90%;
          width: 100%;
        }

        .card {
          height: 95%;
          width: 100%;
          padding: 0;          
          .cardBx {
            ul {              
              li {
                margin: 3px;
                padding: 0px;
                font-size: 0.9em;
                height: 30px;
                width: 100px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

