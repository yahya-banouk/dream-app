'use client';

import { useState } from 'react';
import StepBlock from './components/StepBlock';
import './globals.css';

const steps = [
  { icon: 'Page-1.svg', title: "Le rêve libère l’expression" },
  { icon: 'Page-2.svg', title: 'Le sens éclaire le parcours' },
  { icon: 'Page-3.svg', title: 'La différence rend unique' },
  { icon: 'Page-4.svg', title: 'La valeur humaine met en mouvement' },
  { icon: 'Page-5.svg', title: 'La clé exprime le style' },
  { icon: 'Page-6.svg', title: 'Le parcours associe rêve et réalité' },
  { icon: 'Page-7.svg', title: 'Le ciel bleu révèle l’alignement' },
];

export default function Home() {
  const [name, setName] = useState('');
  const [intent, setIntent] = useState('');

  const handleClick = async () => {
    const res = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await res.json();
    const ip = data.ipAddress;
    const sum = ip.split('.').reduce((acc, cur) => acc + parseInt(cur), 0);
    alert(sum > 100 ? 'OK' : 'KO');
  };

  const isValid = name.trim() !== '' && intent.trim() !== '';

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <section className="md:w-1/2 bg-[#7AA8AC] text-white p-10 z-10 relative flex flex-col justify-center space-y-6">
        <img src="/icons/logo.png" alt="logo" className="w-44 mb-15" />

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Pour commencer…</h1>
          <p>
            Faire votre Shynleï, jouer avec, c’est l’occasion d’écouter vos rêves,
            de les partager et de prendre confiance dans votre richesse.
          </p>
        </div>

        <div className="space-y-6 mt-8">
            <div>
                <label className="block mb-1">Nom et prénom :</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-white focus:outline-none"
                  placeholder="Votre nom"
                />
            </div>

            <div>
              <label className="block mb-1">Mon intention :</label>
              <input
                type="text"
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="w-full bg-transparent border-b border-white focus:outline-none"
                placeholder="L’intention, l’objectif de ce Shynleï"
              />
            </div>
        </div>
      </section>


      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0 w-[100px]">
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100,0 C40,250 40,750 100,1000 L0,1000 L0,0 Z" fill="#7AA8AC" />
        </svg>
      </div>



      <section className="md:w-1/2 bg-white p-10">
        <h2 className="text-xl font-bold mb-4">Votre Shynleï c’est..</h2>
        <p className="mb-6">
          7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens,
          3 interprétations pour vous aider..
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {steps.map((step, i) => (
            <StepBlock key={i} icon={step.icon} title={step.title} index={i + 1} />
          ))}
        </div>
        <button
          onClick={handleClick}
          disabled={!isValid}
          className={`px-6 py-2 text-white rounded-md transition ${
            isValid ? 'bg-[#7AA8AC] hover:bg-[#619197]' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          EXPRIMER MES RÊVES &gt;
        </button>
      </section>
    </main>
  );
}
