import Card from './components/Card';
import Js from './assets/img/js.ico';
import React from './assets/img/react.ico';
import Node from './assets/img/node.ico';
import Ts from './assets/img/ts.ico';
import Html from './assets/img/html.ico';
import Figma from './assets/img/figma.ico';
import WordPress from './assets/img/wordpress.ico';
import Css from './assets/img/css.ico';
import TimeConverter from './components/TimeConverter';

function App() {
  return (
    <>
      <h1 className="text-4xl mb-10 rounded-3xl italic font-semibold bg-gradient-to-r from-customBlue to-customGreen via-customDarkBlue via-customOrange via-customPink text-white p-4">
        % CURSOS
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
        <Card
          img={Js}
          total={165}
          totalPorciento={100}
          color="bg-[#D89B15]"
          localStorageKey="js"
        />
        <Card
          img={React}
          color="bg-[#50AAC1]"
          totalPorciento={100}
          total={45}
          localStorageKey="react"
        />
        <Card
          img={Node}
          color="bg-[#7EB245]"
          totalPorciento={100}
          total={34}
          localStorageKey="node"
        />
        <Card
          img={Ts}
          color="bg-[#1C7EC1]"
          totalPorciento={100}
          total={6151}
          localStorageKey="ts"
        />
        <Card
          img={Html}
          color="bg-[#EF7642]"
          totalPorciento={100}
          total={34}
          localStorageKey="html"
        />
        <Card
          img={Figma}
          color="bg-[#D87E73]"
          totalPorciento={100}
          total={15}
          localStorageKey="figma"
        />
        <Card
          img={WordPress}
          color="bg-[#B3B3D8]"
          totalPorciento={100}
          total={9706}
          localStorageKey="wordpress"
        />
        <Card
          img={Css}
          color="bg-[#A2D8FF]"
          totalPorciento={100}
          total={42}
          localStorageKey="css"
        />
      </section>

      <TimeConverter />
    </>
  );
}

export default App;
