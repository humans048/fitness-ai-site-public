const buttons = document.querySelectorAll(".detail-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const panel = document.getElementById(targetId);
    const isOpen = panel.classList.contains("open");

    panel.classList.toggle("open");
    button.textContent = isOpen ? "看詳細優點" : "收起詳細優點";
  });
});
