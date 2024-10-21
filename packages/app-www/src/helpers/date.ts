export const date = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString("fr", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
