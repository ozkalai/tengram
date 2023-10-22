import React from 'react';
import './global.css';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';

const Home = () => {
  const pageId = 'Start';

  return (
    <>
      <div className="flex flex-col grow gap-6 pt-12 pr-12 pb-12 pl-12 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border h-[864px] bg-slate-50">
        <div className="flex flex-row justify-center text-red-500 text-3xl">
          Welcome to Tengram Space 🚀
        </div>
        <Link href={'/space'} className="flex flex-row justify-center text-xl">
          Click to start
        </Link>
      </div>
    </>
  );
};
export default Home;
