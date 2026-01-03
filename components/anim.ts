export const text = {
    initial: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.6, ease: "easeIn" } },
  };
  
  export const translate = {
    initial: { y: 0 },
    enter: { y: 0, transition: { duration: 0.6 } },
    exit: { y: 0, transition: { duration: 0.6 } },
  };
  
  export const curve = (initialPath: string, targetPath: string) => ({
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
    },
  });
  