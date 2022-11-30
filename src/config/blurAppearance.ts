const onEntry = (entry: any) => {
  entry.forEach((change: any) => {
    if (change.isIntersecting) {
      change.target.classList.add("blur-show");
    } else {
      change.target.classList.remove("blur-show");
    }
  });
};

export const blurAppearance = () => {
  const options = { threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll(".blur-animation");

  for (let elm of elements as any) {
    observer.observe(elm);
  }
};
