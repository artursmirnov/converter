import Immutable from 'seamless-immutable';

export default function route({ path, exact, component }) {
  if (!path) throw new Error('Path is required for route');
  if (!component) throw new Error('Component is required for route');
  return Immutable({ path, exact, component });
}
