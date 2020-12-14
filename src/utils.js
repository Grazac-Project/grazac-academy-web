export const cn = (...arr) => {
  let list = arr.map(item => {
    if (typeof item === "object") {
     const value = Object.values(item);
      if (value[0])
        return Object.keys(item).join("");
      else 
        return "";
    } else {
      return item;
    }
  })
  .filter(item => item !== "")
  .join(" ");

  return list;
}

