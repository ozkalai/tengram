import { useMemo, useRef, useEffect, FC } from 'react';
import { colours } from '../utils/helpers';
import useSpaceMembers from '../hooks/useMember';
import { MemberCursors, YourCursor } from './Cursor';

import type { Member } from '../utils/types';
import type { Space, SpaceMember } from '@ably/spaces';

type Props = {
  space: Space;
  name: string;
};

/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */

const LiveCursors: FC<Props> = ({ space, name }) => {
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    []
  );

  /** 💡 Get a handle on a space instance 💡 */

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [name, space, userColors]);

  const { self, otherMembers } = useSpaceMembers(space);

  const liveCursors = useRef(null);

  return (
    <div
      id="live-cursors"
      ref={liveCursors}
      className="live-cursors-container example-container"
    >
      <YourCursor
        self={self as Member | null}
        space={space}
        parentRef={liveCursors}
      />
      <MemberCursors
        otherUsers={
          otherMembers.filter((m: SpaceMember) => m.isConnected) as Member[]
        }
        space={space}
        selfConnectionId={self?.connectionId}
      />
    </div>
  );
};

export default LiveCursors;
