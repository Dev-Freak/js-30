const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (e) => {
  const { name, value } = e.target;
  const { sizing: suffix } = e.target.dataset;

  document.documentElement.style.setProperty(
    `--${name}`,
    `${value}${suffix ?? ""}`
  );
};

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
