import Immutable from 'seamless-immutable';

export default function route({ path, exact, component }) {
  return Immutable({ path, exact, component });
}
