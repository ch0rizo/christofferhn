import { useScramble } from 'use-scramble';

const TextScrambler = ({ text }: { text: string}) => {
  // hook returns a ref
  const { ref } = useScramble({
    text,
    range: [65, 125],
    speed: 0.5,
    tick: 8,
    step: 5,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: true,
    overflow: false,
  });

  // apply the ref to a node
  return <h1 ref={ref} />;
};

export default TextScrambler;
