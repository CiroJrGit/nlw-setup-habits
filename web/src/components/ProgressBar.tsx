// import { useState } from 'react'
import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  progress: number
}

// export function ProgressBar(props: ProgressBarProps) {
//   const [progress, setProgress] = useState(props.progress);
// 
//   return (
//     <Progress.Root className="relative overflow-hidden w-full h-3 rounded-xl bg-zinc-700 mt-4">
//       <Progress.Indicator
//         className="w-full h-3 rounded-xl bg-violet-600"
//         style={{ transform: `translateX(-${100 - progress}%)`}}
//       />
//     </Progress.Root>
//   );
// };
export function ProgressBar(props: ProgressBarProps) {
  return (
    <Progress.Root className="relative overflow-hidden w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600 transition-all duration-300  ease-out"
        style={{ width: `${props.progress}%` }}
      />
    </Progress.Root>
  );
};