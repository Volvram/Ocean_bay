const onEntry = (entry: any) => {
  entry.forEach((change: any) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
};

export const smoothAppearance = (element: Element | null = null) => {
  const options = { threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll(".element-animation");

  for (let elm of elements as any) {
    observer.observe(elm);
  }
};
