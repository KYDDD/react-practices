export function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Failed to roll dice"));
      } else {
        resolve(Math.floor(Math.random() * 6) + 1);
      }
    }, 500);
  });
}

export function updateName(newName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ ${newName}`);
    }, 500);
  });
}
