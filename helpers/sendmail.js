const nodemailer = require('nodemailer');

const sendMail = async (email) => {
  console.log('sendmail');

  const htmlMessage = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    p,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Roboto', sans-serif !important;
    }

    h1 {
      font-size: 30px !important;
    }

    h2 {
      font-size: 25px !important;
    }

    h3 {
      font-size: 18px !important;
    }

    h4 {
      font-size: 16px !important;
    }

    p,
    a {
      font-size: 15px !important;
      color: white;
    }

    .claseBoton {
      width: 30%;
      background-color: #e9ae4a;
      border: 2px solid #eb9808;
      color: #212529 !important;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
    }

    .claseBoton:hover {
      background-color: #eb9808;
      color: #ffffff;
    }

    .imag {
      width: 20px;
      height: 20px;
    }

    .contA {
      margin: 0px 5px 0 5px;
    }

    .afooter {
      color: #ffffff !important;
      text-decoration: none;
      font-size: 13px !important;
    }
  </style>
</head>

<body>
  <div style="width: 100%; background-color: #6d6969;">
    <div style="padding: 20px 10px 20px 10px;">
      <!-- Imagen inicial -->
      <div style="background-color: #212529; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
        <img src="cid:LogoConstruye" alt="" style="width: 120px; height: 120px;">
      </div>
      <!-- Imagen inicial -->

      <!-- Contenido principal -->
      <div style="background-color: #918d8d; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
        <h1>Recuperar contraseña</h1>
        <p>Si necesitas cambiar tu contraseña haz "click" en el botón "Reset Password", te redirigirá a la página
          correspondiente.</p>

        <!-- Gracias -->
        <p>Gracias por tu tiempo.</p>
        <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>ConstruyeAlmeria</p>

        <!-- Botón -->
        <a class="claseBoton" href="http://localhost:4200/forget">Reset Password</a>
      </div>
      <!-- Contenido principal -->

      <!-- Footer -->
      <div
        style="background-color: #212529; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
        <!-- Redes sociales -->
        <a href="https://www.facebook.com/construyealmeria" class="contA"><img src="cid:facebook"
            class="imag" /></a>
        <a href="https://www.linkedin.com/company/construyealmeria/?originalSubdomain=es" class="contA"><img
            src="cid:linkedin" class="imag" /></a>
        <a href="https://www.instagram.com/construyealmeria/" class="contA"><img src="cid:instagram"
            class="imag" /></a>
       
        <!-- Redes sociales -->

        <h4>Soporte</h4>
        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
          Comunícate con nosotros por los siguientes medios:<br>
          Correo: <a class="afooter" href="mailto:info@construyealmeria.com">info@construyealmeria.com</a><br>
        </p>
        <p style="background-color: #eb9808; color:#020726; padding: 10px 0px 10px 0px; font-size: 12px !important;">
          © 2023 ConstruyeAlmería, todos los derechos reservados.
        </p>
      </div>
      <!-- Footer -->



    </div>
  </div>
</body>

</html>`


  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_APP_PASS
    }
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Reset de Contraseña',
    html: htmlMessage,
    attachments: [
      {
        filename: 'facebook.png',
        path: './public/images/facebook.png',
        cid: 'facebook' //same cid value as in the html img src
      },
      {
        filename: 'instagram.png',
        path: './public/images/instagram.png',
        cid: 'instagram' //same cid value as in the html img src
      },
      {
        filename: 'linkedin.png',
        path: './public/images/linkedin.png',
        cid: 'linkedin' //same cid value as in the html img src
      },
      // {
      //   filename: 'twitter.png',
      //   path: './public/images/twitter.png',
      //   cid: 'twitter' //same cid value as in the html img src
      // },
      {
        filename: 'LogoConstruye.png',
        path: './public/images/LogoConstruye.png',
        cid: 'LogoConstruye' //same cid value as in the html img src
      }
    ],
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json({
        success: false,
        msg: error
      })
    } else {
      console.log("Correo enviado");
      return res.json({
        success: true,
        msg: info
      })
    }
  });
}

module.exports = {
  sendMail
}