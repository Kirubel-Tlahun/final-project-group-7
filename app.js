<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Registration Form</title>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  >

  <style>
    :root {
      --accent: #4361ee;
      --accent-2: #7209b7;
      --accent-soft: rgba(67, 97, 238, 0.12);
      --page-bg: #eef2ff;
      --card-bg: rgba(255, 255, 255, 0.92);
      --text: #172033;
      --muted: #64708a;
      --border: #d9e0f0;
      --field-bg: #f8faff;
      --danger: #e5384f;
      --radius: 14px;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --accent: #6c83ff;
        --accent-2: #b15cff;
        --accent-soft: rgba(108, 131, 255, 0.18);
        --page-bg: #0d1224;
        --card-bg: rgba(24, 31, 56, 0.92);
        --text: #eaeefc;
        --muted: #9aa6c7;
        --border: #2c3558;
        --field-bg: #1a2142;
        --danger: #ff6b81;
      }
    }

    * { box-sizing: border-box; }

    body {
      min-height: 100vh;
      margin: 0;
      color: var(--text);
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans Ethiopic", sans-serif;
      background:
        radial-gradient(900px 500px at 10% -10%, rgba(67, 97, 238, 0.28), transparent 60%),
        radial-gradient(800px 500px at 100% 0%, rgba(114, 9, 183, 0.22), transparent 55%),
        radial-gradient(700px 500px at 50% 110%, rgba(0, 180, 216, 0.18), transparent 60%),
        var(--page-bg);
      background-attachment: fixed;
    }

    .form-wrapper { max-width: 640px; margin: 0 auto; padding: 48px 16px 40px; }

    /* ---------- Header ---------- */
    .hero { text-align: center; margin-bottom: 26px; animation: rise .6s ease both; }
    .hero-icon {
      width: 68px; height: 68px; margin: 0 auto 16px;
      display: grid; place-items: center;
      border-radius: 20px; color: #fff; font-size: 30px;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      box-shadow: 0 14px 30px rgba(67, 97, 238, 0.35);
    }
    .form-title {
      font-weight: 800; letter-spacing: -0.5px; margin-bottom: 6px;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      -webkit-background-clip: text; background-clip: text; color: transparent;
    }
    .hero p { color: var(--muted); margin: 0; }

    /* ---------- Card ---------- */
    .form-card {
      position: relative; overflow: hidden;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 34px;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 50px rgba(30, 41, 90, 0.14);
      animation: rise .7s .08s ease both;
    }
    .form-card::before {
      content: ""; position: absolute; inset: 0 0 auto 0; height: 5px;
      background: linear-gradient(90deg, var(--accent), var(--accent-2), #00b4d8);
    }

    /* ---------- Labels ---------- */
    .form-label { font-weight: 700; color: var(--text); margin-bottom: 8px; }
    .step {
      display: inline-grid; place-items: center;
      width: 24px; height: 24px; margin-right: 8px;
      border-radius: 50%; font-size: 0.78rem; font-weight: 800;
      color: var(--accent); background: var(--accent-soft);
    }
    .form-text { color: var(--muted); }

    /* ---------- Inputs ---------- */
    .form-control {
      min-height: 52px; border-radius: var(--radius);
      border: 1.5px solid var(--border);
      background-color: var(--field-bg); color: var(--text);
      padding-inline: 16px;
      transition: border-color .2s, box-shadow .2s, background-color .2s, transform .2s;
    }
    .form-control::placeholder { color: var(--muted); opacity: .7; }
    .form-control:hover { border-color: var(--accent); }
    .form-control:focus {
      background-color: var(--card-bg); color: var(--text);
      border-color: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-soft);
    }

    /* File input (PDF) */
    .form-control[type="file"] { padding-top: 12px; padding-bottom: 12px; cursor: pointer; }
    .form-control[type="file"]::file-selector-button {
      margin-right: 14px; padding: 8px 14px; border: 0; border-radius: 10px;
      font-weight: 700; color: #fff; cursor: pointer;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
    }

    /* ---------- Errors ---------- */
    .invalid-field { border-color: var(--danger) !important; background-color: rgba(229, 56, 79, 0.06) !important; }
    .invalid-field:focus { box-shadow: 0 0 0 4px rgba(229, 56, 79, 0.15) !important; }
    .error-message { color: var(--danger); font-size: 0.85rem; margin-top: 6px; min-height: 0; font-weight: 500; }
    .error-message:empty { display: none; }

    /* ---------- Button ---------- */
    .btn-primary {
      min-height: 54px; font-weight: 700; font-size: 1.05rem; letter-spacing: .3px;
      border: 0; border-radius: var(--radius);
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      box-shadow: 0 12px 26px rgba(67, 97, 238, 0.35);
      transition: transform .2s, box-shadow .2s, filter .2s;
    }
    .btn-primary:hover, .btn-primary:focus {
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      filter: brightness(1.08); transform: translateY(-2px);
      box-shadow: 0 16px 32px rgba(67, 97, 238, 0.45);
    }
    .btn-primary:active { transform: translateY(0); }
    .btn-primary:disabled { opacity: .75; transform: none; }

    .alert { border-radius: var(--radius); border: 0; }

    /* ---------- Footer ---------- */
    .foot { text-align: center; margin-top: 22px; font-size: 0.9rem; }
    .foot a {
      display: inline-flex; align-items: center; gap: 6px;
      color: var(--muted); text-decoration: none;
      padding: 8px 16px; border-radius: 999px;
      border: 1px solid var(--border); background: var(--card-bg);
      transition: color .2s, border-color .2s, transform .2s;
    }
    .foot a:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-1px); }

    @keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }

    @media (max-width: 480px) {
      .form-wrapper { padding-top: 28px; }
      .form-card { padding: 22px 18px; border-radius: 20px; }
    }
  </style>
</head>

<body>
  <main class="container form-wrapper">
    <header class="hero">
      <div class="hero-icon" aria-hidden="true">&#9998;</div>
      <h1 class="form-title">Registration Form</h1>
      <p>Enter your name and upload your PDF file.</p>
    </header>

    <section class="form-card">
      <!-- enctype="multipart/form-data" is REQUIRED for file upload -->
      <form id="registrationForm" action="register.php" method="POST"
            enctype="multipart/form-data" novalidate>

        <!-- Full name -->
        <div class="mb-4">
          <label for="fullName" class="form-label"><span class="step">1</span>Full name</label>
          <input type="text" class="form-control" id="fullName" name="fullName"
                 autocomplete="name" maxlength="80" required
                 placeholder=""
                 aria-describedby="nameError">
          <div id="nameError" class="error-message" aria-live="polite"></div>
        </div>

        <!-- PDF file -->
        <div class="mb-4">
          <label for="pdfFile" class="form-label"><span class="step">2</span>PDF file</label>
          <input type="file" class="form-control" id="pdfFile" name="pdfFile"
                 accept="application/pdf,.pdf" required
                 aria-describedby="pdfHint pdfError">
          <div id="pdfHint" class="form-text">PDF only, maximum 100 MB.</div>
          <div id="pdfError" class="error-message" aria-live="polite"></div>
        </div>

        <div id="formResult" class="alert d-none" role="status" aria-live="polite"></div>

        <!-- NOTE: id must NOT be "submit", or it shadows form.submit() -->
        <button type="submit" id="submitBtn" class="btn btn-primary w-100">Submit</button>
      </form>
    </section>

    <div class="foot"><a href="admin.php">&#128274; Admin login</a></div>
  </main>

  <script>
    const form      = document.getElementById("registrationForm");
    const nameInput = document.getElementById("fullName");
    const pdfInput  = document.getElementById("pdfFile");
    const result    = document.getElementById("formResult");
    const submitBtn = document.getElementById("submitBtn");

    const MAX_PDF_MB    = 100;                     // must match register.php
    const MAX_PDF_BYTES = MAX_PDF_MB * 1024 * 1024;

    function setError(elementId, message, input) {
      document.getElementById(elementId).textContent = message;
      if (input) {
        input.classList.toggle("invalid-field", Boolean(message));
        input.setAttribute("aria-invalid", message ? "true" : "false");
      }
    }

    function validateName() {
      const value = nameInput.value.trim();
      const lettersOnly = /^[\p{L}]+(?: +[\p{L}]+)*$/u.test(value);
      const letterCount = [...value.replace(/ /g, "")].length;
      const valid = lettersOnly && letterCount >= 4 && value.length <= 80;

      let message = "";
      if (!value) message = "Please enter your full name.";
      else if (!valid) message = "Use letters and spaces only, and enter at least 4 letters.";

      setError("nameError", message, nameInput);
      return valid;
    }

    function validatePdf() {
      const file = pdfInput.files[0];
      let message = "";

      if (!file) {
        message = "Please choose a PDF file.";
      } else if (!/\.pdf$/i.test(file.name) || (file.type && file.type !== "application/pdf")) {
        message = "Only PDF files are allowed.";
      } else if (file.size === 0) {
        message = "This file is empty. Please choose another PDF.";
      } else if (file.size > MAX_PDF_BYTES) {
        message = `The file is too large. Maximum size is ${MAX_PDF_MB} MB.`;
      }

      setError("pdfError", message, pdfInput);
      return message === "";
    }

    // Live validation
    nameInput.addEventListener("blur", validateName);
    nameInput.addEventListener("input", () => {
      if (nameInput.classList.contains("invalid-field")) validateName();
    });
    pdfInput.addEventListener("change", validatePdf);

    // Single submit handler
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      result.className = "alert d-none";

      // Run every check (no short-circuit) so all errors show at once
      const checks = [validateName(), validatePdf()];

      if (checks.every(Boolean)) {
        submitBtn.disabled = true;           // prevent double submit
        submitBtn.textContent = "Uploading... please wait, do not close this page";
        form.submit();                       // send to register.php
      } else {
        result.className = "alert alert-danger";
        result.textContent = "Please correct the highlighted fields and try again.";

        const firstInvalid = form.querySelector(".invalid-field");
        if (firstInvalid) firstInvalid.focus();
      }
    });
  </script>
</body>
</html>
