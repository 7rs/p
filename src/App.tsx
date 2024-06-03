// import { useState } from 'react'
import "./styles/App.scss";

import { Ring } from "./components/Ring";
import { Link } from "./components/Link";
import { Counter } from "./components/Counter";

function App() {
  // const [count, setCount] = useState(0)

  const reactLink = <Link text="React" href="https://react.dev/" openInNewTab />;
  const viteLink = <Link text="Vite" href="https://vitejs.dev/" openInNewTab />;

  return (
    <>
      <hgroup>
        <h1>
          Powered by {viteLink} + {reactLink}
        </h1>
        <p>
          create-react-app is dead, but {reactLink} is alive. Use {viteLink}:
          <br />
          <code>npm create vite@latest [ProjectName] -- --template react-ts</code>
        </p>
      </hgroup>

      <Ring
        mainIcon={"logos:react"}
        subIcons={[
          "logos:stackblitz-icon",
          "logos:vitejs",
          "logos:sass",
          "logos:typescript-icon-round",
          "logos:eslint",
          "logos:prettier",
          "logos:tailwindcss-icon",
          "logos:postcss",
          "logos:editorconfig"
        ]}
        duration={7500}
      />

      <section>
        <p>
          There are many ways to use {reactLink}.
          <br />
          But why is {viteLink} recommended? Because {viteLink} is too stable.
          <br />
          Next.js isn't stable and informations about Remix is few. Astro is great but it isn't good at SSR.
        </p>
      </section>

      <section>
        <Counter />
        <p className="text-center m-4">
          with TailwindCSS
        </p>
      </section>
    </>
  );
}

export default App;
