export const randomInt = function(a, b) {
  const delta = b - a;
  return a + Math.round(Math.random() * Math.floor(delta));
};

export const randomPlusMinus = function() {
  return Math.round(Math.random()) ? "+" : "-";
};

export const hashcode = function(a, b) {
  return a.toString() + b.toString();
}
