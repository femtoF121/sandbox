import { useEffect, useState } from "react";

export const useControlledList = <T>(storageKey: string) => {
  type ItemType = T & { id: string };
  const [items, setItems] = useState<ItemType[]>(() => {
    const itemsFromStorage = localStorage.getItem(storageKey);
    return itemsFromStorage ? JSON.parse(itemsFromStorage) : [];
  });

  const addItem = (item: T) => {
    const newItem: ItemType = {
      id: crypto.randomUUID(),
      ...item,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const deleteItem = (id: string) => {
    setItems((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, storageKey]);

  return { items, setItems, addItem, deleteItem };
};
