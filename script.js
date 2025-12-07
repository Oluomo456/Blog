// Index page
‎if (document.querySelector('.loader')) {
‎  setTimeout(() => {
‎    window.location.href = 'thankyou.html';
‎  }, 3000);
‎}
‎
‎// Thank you page
‎if (document.querySelector('.message')) {
‎  setTimeout(() => {
‎    window.location.href = 'pics.html';
‎  }, 3000);
‎}
‎
‎// Pics page
‎if (document.querySelector('.pics')) {
‎  const pics = [
‎    'pic1.jpg',
‎    'pic2.jpg',
‎    'pic3.jpg',
‎    'pic4.jpg',
‎    'pic5.jpg',
‎    'pic6.jpg'
‎  ];
‎
‎  const picsContainer = document.querySelector('.pics');
‎  let i = 0;
‎
‎  function addPic() {
‎    if (i < pics.length) {
‎      const pic = document.createElement('div');
‎      pic.classList.add('pic');
‎      pic.style.backgroundImage = `url(${pics[i]})`;
‎      picsContainer.appendChild(pic);
‎      i++;
‎      setTimeout(addPic, 500);
‎    } else {
‎      setTimeout(() => {
‎        window.location.href = 'message.html';
‎      }, 1000);
‎    }
‎  }
‎
‎  addPic();
‎}
‎
‎// Message page
‎if (document.querySelector('.message')) {
‎  setTimeout(() => {
‎    window.location.href = 'appreciation.html';
‎  }, 3000);
‎}
‎
‎// Appreciation page
‎if (document.querySelector('.message')) {
‎  const messages = [
‎    'You\'re an inspiration to us all.',
‎    'Your leadership has made a significant impact on our team.',
‎    'Thank you for believing in me and pushing me to be my best.',
‎    'You\'re the reason our team is successful.'
‎  ];
‎
‎  let i = 0;
‎  setInterval(() => {
‎    document.querySelector('.message').innerText = messages[i];
‎    i++;
‎    if (i >= messages.length) {
‎      i = 0;
‎    }
‎  }, 3000);
‎}