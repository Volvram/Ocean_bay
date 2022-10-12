import React from "react";

export interface ILocalStore {
  destroy(): void;
}

export const useLocalStore = <Store extends ILocalStore>(
  creator: () => Store
): Store => {
  const container = React.useRef<Store | null>(null);

  if (container.current === null) {
    container.current = creator();
  }

  React.useEffect(() => {
    return () => {
      container.current?.destroy();
    };
  }, []);

  return container.current;
};
