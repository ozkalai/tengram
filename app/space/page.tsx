'use client';

import React, { useEffect } from 'react';
import Spaces, { SpaceMember } from '@ably/spaces';
import { Realtime } from 'ably';
import Space from '@ably/spaces/dist/mjs/Space';
import LiveCursors from '../../components/LiveCursor';
import { AblyProvider } from 'ably/react';
import { nanoid } from 'nanoid';
import useSpaceMembers from '../../hooks/useMember';
import { Member } from '../../utils/types';

const Test = () => {
  const [space, setSpace] = React.useState<Space>();
  const [name, setName] = React.useState<string>('');

  const client = new Realtime.Promise({
    key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
    clientId: nanoid(),
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const name = event.target[0].value;
    setName(name);

    const spaces = new Spaces(client);

    const space = await spaces.get('space');

    setSpace(space);
  };

  const { allMembers } = useSpaceMembers(space);

  return space ? (
    <>
      <AblyProvider client={client}>
        <div className="w-full h-full flex">
          <div className="flex flex-col w-1/4 p-10">
            <h2>Space Tengram</h2>
            <ul className="flex flex-col">
              {(allMembers as Member[]).map((member) => (
                <li key={member.connectionId}>{member.profileData?.name}</li>
              ))}
            </ul>
          </div>
          <LiveCursors space={space} name={name} />
        </div>
      </AblyProvider>
    </>
  ) : (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h1 className="mb-2 self-start">Enter Your Name</h1>
        <input
          type="text"
          className="border h-8 border-purple-900 rounded-lg px-2"
        />
        <button
          type="submit"
          className="mt-4 px-3 py-1 bg-purple-500 rounded-lg text-white"
        >
          <span>Enter The Space</span>
        </button>
      </form>
    </div>
  );
};

export default Test;
