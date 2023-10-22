export const memberColors = [
  'bg-purple-400',
  'bg-purple-500',
  'bg-purple-600',
  'bg-purple-700',
  'bg-pink-500',
  'bg-pink-600',
  'bg-pink-700',
  'bg-blue-500',
  'bg-blue-600',
  'bg-blue-700',
  'bg-green-500',
  'bg-green-600',
  'bg-green-700',
  'bg-yellow-600',
  'bg-yellow-700',
];

export const locationColors = [
  '#9951F5',
  '#7A1BF2',
  '#5F0BC9',
  '#460894',
  '#00E80B',
  '#00C008',
  '#008E06',
  '#FF17D2',
  '#D400AB',
  '#9C007E',
  '#2CC0FF',
  '#00A5EC',
  '#0284CD',
  '#E4B200',
  '#AC8600',
];

export const colours = [
  { nameColor: 'bg-orange-700', cursorColor: '#FE372B' },
  { nameColor: 'bg-pink-700', cursorColor: '#9C007E' },
  { nameColor: 'bg-green-700', cursorColor: '#008E06' },
  { nameColor: 'bg-purple-700', cursorColor: '#460894' },
  { nameColor: 'bg-blue-700', cursorColor: '#0284CD' },
  { nameColor: 'bg-yellow-700', cursorColor: '#AC8600' },
  { nameColor: 'bg-orange-500', cursorColor: '#FF723F' },
  { nameColor: 'bg-pink-500', cursorColor: '#FF17D2' },
  { nameColor: 'bg-green-500', cursorColor: '#00E80B' },
  { nameColor: 'bg-purple-500', cursorColor: '#7A1BF2' },
  { nameColor: 'bg-blue-500', cursorColor: '#2CC0FF' },
  { nameColor: 'bg-yellow-500', cursorColor: '#FFC700' },
];

export const getMemberColor = () =>
  memberColors[Math.floor(Math.random() * memberColors.length)];

export const getLocationColors = () =>
  locationColors[Math.floor(Math.random() * locationColors.length)];
