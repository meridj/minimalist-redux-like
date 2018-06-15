import { ADD_NO_VOTE, ADD_YES_VOTE, RESET_VOTE } from './types';

const addNoVote = newNoVoteValue => {
  return { type: ADD_NO_VOTE, payload: newNoVoteValue };
};

const addYesVote = newYesVoteValue => {
  return { type: ADD_YES_VOTE, payload: newYesVoteValue };
};

const resetVote = () => {
  return { type: RESET_VOTE };
};

export { addNoVote, addYesVote, resetVote };
