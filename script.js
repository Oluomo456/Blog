script.js
// Index page
if (document.querySelector('.loader')) {
  setTimeout(() => {
    window.location.href = 'thankyou.html';
  }, 3000);
}

// Thank you page
if (document.querySelector('.thank-you-message')) {
  setTimeout(() => {
    window.location.href = 'pics.html';
  }, 3000);
}

// Pics page
if (document.querySelector('.pics')) {
  const pics = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg'
  ];

  const picsContainer = document.querySelector('.pics');
  let i = 0;

  function addPic() {
    if (i < pics.length) {
      const pic = document.createElement('div');
      pic.classList.add('pic');
      pic.style.backgroundImage = `url(${pics[i]})`;
      picsContainer.appendChild(pic);
      i++;
      setTimeout(addPic, 500);
    } else {
      setTimeout(() => {
        window.location.href = 'message.html';
      }, 1000);
    }
  }

  addPic();
}

// Message page
if (document.querySelector('.message-page')) {
  setTimeout(() => {
    window.location.href = 'appreciation.html';
  }, 3000);
}

// Appreciation page
if (document.querySelector('.appreciation-page')) {
  const messages = [
    'You\'re an inspiration to us all.',
    'Your leadership has made a significant impact on our team.',
    'Thank you for believing in me and pushing me to be my best.',
    'You\'re the reason our team is successful.'
  ];

  let i = 0;
  setInterval(() => {
    document.querySelector('.message').innerText = messages[i];
    i++;
    if (i >= messages.length) {
      i = 0;
    }
  }, 3000);
}


And here's the updated HTML:

index.html
<!DOCTYPE html>
<html>
<head>
  <title>Loading...</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="loader">Loading...</div>
  <script src="script.js"></script>
</body>
</html>


thankyou.html
<!DOCTYPE html>
<html>
<head>
  <title>Thank You</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="thank-you-message">Thank you for being an exceptional leader and inspiration</div>
  <script src="script.js"></script>
</body>
</html>


pics.html
<!DOCTYPE html>
<html>
<head>
  <title>Pics</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="pics"></div>
  <script src="script.js"></script>
</body>
</html>


message.html
<!DOCTYPE html>
<html>
<head>
  <title>Message</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="message-page">From [Your Name]</div>
  <script src="script.js"></script>
</body>
</html>


appreciation.html
<!DOCTYPE html>
<html>
<head>
  <title>Appreciation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="appreciation-page">
    <div class="message">I appreciate your guidance, support, and leadership. Thank you for being an amazing boss!</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
