import { useEffect, useState } from 'react'
import CreateHeros from '../data/hero'
import { isEmpty } from 'lodash';

const Hero = () => {
  const [heros, setHeros] = useState([] as any)
  const [name, setName] = useState<string>()

  useEffect(() => {
    setHeros(CreateHeros(20))
  }, [])

  return (
    <main>
      <div className="relative pt-16 pb-8 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://cdn.lorem.space/images/hotel/.cache/500x180/man-pan-KTSYy-3XVSo-unsplash.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative max-w-screen-md mx-auto  min-h-80">
          <h1 className="text-white font-semibold text-5xl uppercase">My Heros</h1>
          <div className="mb-8 text-white">
            <ul style={{ listStyle: 'disc' }}>
              {
                !isEmpty(heros) && heros.map((hero: { id: number, name: string }) => {
                  return (
                    <li key={hero.id} onClick={() => setName(hero.name)}>{hero.id} {hero.name}</li>
                  )
                })
              }
            </ul>
            <div className="pt-4">
              {
                !isEmpty(name) && (
                  <h3>My hero is <u>{name}</u></h3>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
