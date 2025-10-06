    function toggleStaffs() {
      const list = document.getElementById("staffList");
      const btn = document.querySelector(".toggle-staffs");
      const icon = btn.querySelector("i");

      list.classList.toggle("show");
      const expanded = list.classList.contains("show");

      btn.innerHTML = expanded
        ? `<i class="fa-solid fa-angle-up"></i> Ocultar STAFFs`
        : `<i class="fa-solid fa-angle-down"></i> Mostrar STAFFs`;
    }