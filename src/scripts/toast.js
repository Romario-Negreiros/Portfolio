const severities = {
  warning: 'assets/circle-exclamation-solid.svg',
  success: 'assets/circle-check-solid.svg'
}

const toggleToast = (severity, content) => {
  const toast = document.querySelector('.toast')
  const toastTitle = document.querySelector('.toast__title h3')
  const toastTitleIcons = Array.from(
    document.querySelectorAll('.toast__title img')
  )
  const toastContent = document.querySelector('.toast__content p')
  toastContent.innerHTML = content

  toastTitle.textContent = severity
  toastTitleIcons.forEach(icon => (icon.src = severities[severity]))
  toastContent.innerHTML = content

  toast.classList.add('toast--active')
  setTimeout(() => toast.classList.remove('toast--active'), 5000)
}

export default toggleToast
