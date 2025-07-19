const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const currentlyOpen = document.querySelector('.faq-answer.open');
    const isSame = currentlyOpen && currentlyOpen.previousElementSibling === question;

    if (currentlyOpen && !isSame) {
      currentlyOpen.classList.remove('open');
      currentlyOpen.style.maxHeight = null;
      const icon = currentlyOpen.previousElementSibling.querySelector('i');
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      currentlyOpen.previousElementSibling.classList.remove('active');
    }

    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    const icon = question.querySelector('i');

    if (isOpen) {
      answer.classList.remove('open');
      answer.style.maxHeight = null;
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      question.classList.remove('active');
    } else {
      answer.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      question.classList.add('active');
    }
  });
});
