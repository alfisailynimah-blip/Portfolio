document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btnData");
  const data = document.getElementById("dataPribadi");

  button.addEventListener("click", function () {
    if (data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btnPendidikan");
  const data = document.getElementById("pendidikan");

  button.addEventListener("click", function () {
    if (data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btnPengalaman");
  const data = document.getElementById("pengalaman");

  button.addEventListener("click", function () {
    if (data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.addEventListener("click", function () {
    window.print();
  });
});
