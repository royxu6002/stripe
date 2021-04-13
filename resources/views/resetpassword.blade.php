<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Reset your password</title>
</head>
<body>
  <h1>Thanks for register！</h1>

  <p>
    Please click below link to reset your password
    <a> -->
     {{  $user->name }}
      {{ url('api/password/reset/{token}', $user->email) }}
    </a>
  </p>

  <p>
    Please ignore this email if it is not oriented from you.
  </p>
</body>
</html>