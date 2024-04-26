import {initJuno} from '@junobuild/core';
import {useEffect} from 'react';
import {Article} from './components/Article';
import {Background} from './components/Background';
import {Footer} from './components/Footer';
import {Hero} from './components/Hero';

function App() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: import.meta.env.VITE_SATELLITE_ID,
        container: import.meta.env.VITE_CONTAINER,
        workers: {
          auth: true
        }
      }))();
  }, []);

  return (
    <div className="relative isolate min-h-[100dvh]">
      <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
        <h1 className="dark:text-white text-5xl md:text-6xl font-extrabold md:pt-16">
          Welcome to Juno
        </h1>

        <div className="w-full max-w-2xl mt-8 grid grid-cols-2 gap-8">
          <Hero
            href="https://juno.build/docs/add-juno-to-an-app/create-a-satellite"
            ariaLabel="Discover how to create a Satellite and deploy your project to production">
            Not yet live? Launch your Satellite and make some changes
          </Hero>

          <Article
            href="https://juno.build/docs/category/build"
            ariaLabel="Open the list of features for building apps on Juno's website"
            title="Documentation">
            Learn how Juno works and explore the official docs.
          </Article>

          <Article
            href="https://juno.build/docs/miscellaneous/local-development"
            ariaLabel="Open Juno's documentation for guidance on setting up local development"
            title="Local Development">
            Set up your environment and start building locally.
          </Article>

          <Article
            href="https://juno.build/docs/miscellaneous/github_actions"
            ariaLabel="Open the guide to setting up GitHub Actions for Juno"
            title="Continuous Integration">
            Automate your deployment with GitHub Actions.
          </Article>

          <Article
            href="https://discord.gg/wHZ57Z2RAG"
            ariaLabel="Join Juno's Discord channel for questions or to share the fun"
            title="Community">
            Come say hi to our amazing Discord community. ❤️
          </Article>
        </div>
      </main>

      <Footer />

      <Background />
    </div>
  );
}

export default App;
