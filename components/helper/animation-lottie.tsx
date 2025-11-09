"use client"

import Lottie, { LottieComponentProps } from "lottie-react";

interface AnimationLottieProps {
  animationPath: object; // Lottie animation JSON object
  width?: string | number;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath, width = '95%' }) => {
  const defaultOptions: LottieComponentProps = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Lottie {...defaultOptions} />
    </div>
  );
};

export default AnimationLottie;